import React from 'react';
import { screen, render } from '../../../../test/test-utils';
import Tag from './tag';

it('should render children', () => {
  render(<Tag>Bread</Tag>);
  expect(screen.getByText('Bread')).toBeInTheDocument();
});

it('should call onClick when clicked', () => {
  const onClick = jest.fn();
  render(<Tag onClick={onClick}>Bread</Tag>);
  screen.getByText('Bread').click();
  expect(onClick).toHaveBeenCalledTimes(1);
});

it('should call onRemove when remove icon is clicked', () => {
  const onRemove = jest.fn();
  render(<Tag onRemove={onRemove}>Bread</Tag>);
  screen.getByLabelText('Remove').click();
  expect(onRemove).toHaveBeenCalledTimes(1);
});

it('should call the right handler when onClick and onRemove are provided', () => {
  const onClick = jest.fn();
  const onRemove = jest.fn();
  render(
    <Tag onRemove={onRemove} onClick={onClick}>
      Bread
    </Tag>
  );

  // clicking the Tag
  screen.getByText('Bread').click();
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onRemove).not.toHaveBeenCalled();

  // clicking the remove button
  screen.getByLabelText('Remove').click();
  expect(onRemove).toHaveBeenCalledTimes(1);
  expect(onClick).toHaveBeenCalledTimes(1);
});

describe('when disabled', () => {
  it('should not call onClick when clicked', () => {
    const onClick = jest.fn();
    render(
      <Tag onClick={onClick} isDisabled={true}>
        Bread
      </Tag>
    );
    screen.getByText('Bread').click();
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should not call onRemove when clicked', () => {
    const onRemove = jest.fn();
    render(
      <Tag onRemove={onRemove} isDisabled={true}>
        Bread
      </Tag>
    );
    screen.getByLabelText('Remove').click();
    expect(onRemove).not.toHaveBeenCalled();
  });
});

describe('when linkTo is set', () => {
  it('should redirect when clicked', () => {
    const { history } = render(<Tag linkTo="/foo">Bread</Tag>);
    screen.getByText('Bread').click();

    expect(history.location.pathname).toBe('/foo');
  });

  it('should still call onClick when clicked', () => {
    const onClick = jest.fn();
    const { history } = render(
      <Tag onClick={onClick} linkTo="/foo">
        Bread
      </Tag>
    );
    screen.getByText('Bread').click();
    expect(onClick).toHaveBeenCalled();

    expect(history.location.pathname).toBe('/foo');
  });

  it('should not redirect when removed', () => {
    const onRemove = jest.fn();
    const { history } = render(
      <Tag onRemove={onRemove} linkTo="/foo">
        Bread
      </Tag>
    );

    screen.getByLabelText('Remove').click();

    // ensure "onRemove" is stil called
    expect(onRemove).toHaveBeenCalled();

    // ensure the pathname is not "/foo", otherwise a redirect would have
    // happend
    expect(history.location.pathname).toBe('/');
  });

  it('should not redirect when disabled', () => {
    const { history } = render(
      <Tag linkTo="/foo" isDisabled={true}>
        Bread
      </Tag>
    );

    screen.getByText('Bread').click();

    // ensure the pathname is not "/foo", otherwise a redirect would have
    // happend
    expect(history.location.pathname).toBe('/');
  });
});
