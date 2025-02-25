import type { Options as PrettierOptions } from 'prettier';
import type { Package } from '@manypkg/get-packages';
import type { CommandFlags, GeneratorPackageJsonOptions } from './types';

import fs from 'fs';
import path from 'path';
import { findRootSync } from '@manypkg/find-root';
import { getPackagesSync } from '@manypkg/get-packages';
import rcfile from 'rcfile';
import prettier from 'prettier';
import omitEmpty from 'omit-empty-es';

const prettierConfig = rcfile<PrettierOptions>('prettier');

const writeFile = (
  filePath: string,
  content: Package['packageJson'],
  options: GeneratorPackageJsonOptions
) => {
  const formatted = prettier.format(JSON.stringify(content, null, 2), {
    ...prettierConfig,
    parser: 'json',
  });

  if (options.dryRun) {
    console.log(formatted);
  } else {
    // Write the file to disk.
    fs.writeFileSync(filePath, formatted, { encoding: 'utf8' });
  }
};

const getRelativePathToWorkspace = (relativePackageFolderPath: string) =>
  relativePackageFolderPath
    .split('/')
    .map(() => '..')
    .join('/');

export const transformDocument = (
  packageFolderPath: string,
  options: GeneratorPackageJsonOptions
): Package['packageJson'] | undefined => {
  const packageFolderName = path.basename(packageFolderPath);
  const packageJsonPath = path.join(packageFolderPath, 'package.json');
  const relativePackageFolderPath = path.relative(
    options.workspaceRoot,
    packageFolderPath
  );
  const originalPackageJson = JSON.parse(
    fs.readFileSync(packageJsonPath, { encoding: 'utf8' })
  );

  if (originalPackageJson.private === true) return;

  const npmScope =
    relativePackageFolderPath === 'presets/ui-kit'
      ? '@commercetools-frontend'
      : '@commercetools-uikit';

  if (!originalPackageJson.description) {
    throw new Error(
      `Package ${relativePackageFolderPath} is missing the description field`
    );
  }

  const relativePathToWorkspace = getRelativePathToWorkspace(
    relativePackageFolderPath
  );

  return omitEmpty<Package['packageJson']>({
    name: `${npmScope}/${packageFolderName}`,
    description: originalPackageJson.description,
    version: originalPackageJson.version,
    bugs: 'https://github.com/commercetools/ui-kit/issues',
    repository: {
      type: 'git',
      url: 'https://github.com/commercetools/ui-kit.git',
      directory: relativePackageFolderPath,
    },
    homepage: 'https://uikit.commercetools.com',
    keywords: ['javascript', 'design system', 'react', 'uikit'],
    license: 'MIT',
    private: false,
    publishConfig: {
      access: 'public',
    },
    sideEffects: false,
    // Managed by `preconstruct`
    main: originalPackageJson.main,
    // Managed by `preconstruct`
    module: originalPackageJson.module,
    files: originalPackageJson.files,
    scripts: {
      ...originalPackageJson.scripts,
      prepare: `${relativePathToWorkspace}/scripts/version.js replace`,
    },
    dependencies: originalPackageJson.dependencies,
    devDependencies: originalPackageJson.devDependencies,
    peerDependencies: originalPackageJson.peerDependencies,
    readme: originalPackageJson.readme,
  });
};

export async function generate(
  relativePackagePath: string,
  flags: CommandFlags
) {
  const options: GeneratorPackageJsonOptions = {
    workspaceRoot: findRootSync(process.cwd()),
    dryRun: flags.dryRun,
  };

  if (flags.allWorkspacePackages) {
    const workspacePackages = getPackagesSync(process.cwd());
    const aggregatedErrors: string[] = [];
    workspacePackages.packages.forEach((packageInfo) => {
      const packageJsonPath = path.join(packageInfo.dir, 'package.json');
      try {
        const doc = transformDocument(packageInfo.dir, options);
        if (doc) {
          writeFile(packageJsonPath, doc, options);
        }
      } catch (error) {
        aggregatedErrors.push(error.message);
      }
    });
    if (aggregatedErrors.length > 0) {
      throw new Error(
        `Found errors in ${
          aggregatedErrors.length
        } packages:\n\n${aggregatedErrors.join('\n')}\n`
      );
    }
  } else {
    const packageFolderPath = path.resolve(process.cwd(), relativePackagePath);
    const doc = transformDocument(packageFolderPath, options);
    if (doc) {
      writeFile(path.join(packageFolderPath, 'package.json'), doc, options);
    }
  }
}
