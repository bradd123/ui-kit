# @commercetools-uikit/grid

## 10.44.4

### Patch Changes

- [`d3c9002f`](https://github.com/commercetools/ui-kit/commit/d3c9002fcabeed3c4d2b73835e352490d3532208) [#1637](https://github.com/commercetools/ui-kit/pull/1637) Thanks [@renovate](https://github.com/apps/renovate)! - Support `react` and `react-dom` peer dependencies for version `>= 17`

## 10.44.1

### Patch Changes

- [`5f8a7da`](https://github.com/commercetools/ui-kit/commit/5f8a7da2518b401c4f8fe06046dc33b4e8f4414d) [#1742](https://github.com/commercetools/ui-kit/pull/1742) Thanks [@emmenko](https://github.com/emmenko)! - Fix types. Avoid using `React.FC` as it does not properly work with `defaultProps`.

## 10.44.0

### Minor Changes

- [`22164a3`](https://github.com/commercetools/ui-kit/commit/22164a34ec0607b778df534378f5cf3f8403f80f) [#1740](https://github.com/commercetools/ui-kit/pull/1740) Thanks [@emmenko](https://github.com/emmenko)! - Migrate the component source code to TypeScript.

## 10.42.2

### Patch Changes

- [`c7d495b`](https://github.com/commercetools/ui-kit/commit/c7d495b9160392ffd7aa7af24d15518da7948c97) [#1693](https://github.com/commercetools/ui-kit/pull/1693) Thanks [@renovate](https://github.com/apps/renovate)! - Upgrade preconstruct CLI to v2 for bundling.

* [`85fe702`](https://github.com/commercetools/ui-kit/commit/85fe702d28c23de58a376cbcf38d39b838357fbc) [#1697](https://github.com/commercetools/ui-kit/pull/1697) Thanks [@emmenko](https://github.com/emmenko)! - Remove dependency `@emotion/styled-base` as it's not necessary anymore in emotion v11.

## 10.42.0

### Minor Changes

- [`04ea8ab`](https://github.com/commercetools/ui-kit/commit/04ea8abdfbada5fedd9a932743323762fb790fd0) [#1671](https://github.com/commercetools/ui-kit/pull/1671) Thanks [@emmenko](https://github.com/emmenko)! - Compile and bundle packages using [preconstruct](https://preconstruct.tools)

## 10.41.0

### Minor Changes

- [`26c6562`](https://github.com/commercetools/ui-kit/commit/26c65622f7f1911f51fc0056ade2d0c8ec8af0a1) [#1670](https://github.com/commercetools/ui-kit/pull/1670) Thanks [@emmenko](https://github.com/emmenko)! - Migrate to emotion v11. https://emotion.sh/docs/emotion-11

## 10.39.8

### Patch Changes

- [`3bebfed`](https://github.com/commercetools/ui-kit/commit/3bebfed8f7468f247be2cef30e274088138166e5) [#1662](https://github.com/commercetools/ui-kit/pull/1662) Thanks [@emmenko](https://github.com/emmenko)! - Explicitly get Emotion theme from context instead of relying on the implicit behavior

## 10.39.6

### Patch Changes

- [`bcb2d29`](https://github.com/commercetools/ui-kit/commit/bcb2d29956c959b09c32a1cedaee5ae2fadf034e) [#1657](https://github.com/commercetools/ui-kit/pull/1657) Thanks [@emmenko](https://github.com/emmenko)! - Fix Rollup: keep `process.env.NODE_ENV` in production bundles.

## 10.39.4

### Patch Changes

- [`a635fcc`](https://github.com/commercetools/ui-kit/commit/a635fcc8105b81545baaa684751432769cc0d94a) [#1652](https://github.com/commercetools/ui-kit/pull/1652) Thanks [@emmenko](https://github.com/emmenko)! - Fix spacings package name (regression).

## 10.39.3

### Patch Changes

- [`1d12f65`](https://github.com/commercetools/ui-kit/commit/1d12f65d06e237b500b27749e9ee93b4fababacb) [#1650](https://github.com/commercetools/ui-kit/pull/1650) Thanks [@emmenko](https://github.com/emmenko)! - Rebundle all packages due to a fix in Rollup.

## 10.39.2

### Patch Changes

- [`efde835`](https://github.com/commercetools/ui-kit/commit/efde83584d00f1e3147d179f3ee8233a325b515b) [#1646](https://github.com/commercetools/ui-kit/pull/1646) Thanks [@emmenko](https://github.com/emmenko)! - Improve Rollup configuration, use babel runtime helpers

* [`d65d494`](https://github.com/commercetools/ui-kit/commit/d65d4946feeac082ad8f0a5d44010e3afacb4c79) [#1649](https://github.com/commercetools/ui-kit/pull/1649) Thanks [@emmenko](https://github.com/emmenko)! - Explicitly declare `@emotion/styled-base` dependency so that Yarn workspaces can properly hoist it and node can resolve the module.

## 10.39.1

### Patch Changes

- [`7897ced`](https://github.com/commercetools/ui-kit/commit/7897cede31440e29ce8afdb2b17fa23462f6f211) [#1642](https://github.com/commercetools/ui-kit/pull/1642) Thanks [@emmenko](https://github.com/emmenko)! - Ensure each package.json of each package has all the necessary fields.

## 10.30.1

### Patch Changes

- [`db6b77c`](https://github.com/commercetools/ui-kit/commit/db6b77c3baf110136440dfc7c6d42cace74eb85e) [#1492](https://github.com/commercetools/ui-kit/pull/1492) Thanks [@emmenko](https://github.com/emmenko)! - Use ranged versions for emotion dependencies
