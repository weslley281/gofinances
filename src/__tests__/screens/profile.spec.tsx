import React from 'react';
import { render } from '@testing-library/react-native';
import { Profile } from '../../screens/Profile';

describe('Profile', () => {
  it('Checks if the user input with place holder is on the screen', () => {
    const { getByPlaceholderText } = render(<Profile />);
    const imputName = getByPlaceholderText('Nome');
    expect(imputName.props.placeholder).toBeTruthy();
  });

  it('Checks if the user data has been loaded', () => {
    const { getByTestId } = render(<Profile />);

    const imputName = getByTestId('input-name');
    const imputSurName = getByTestId('input-surname');

    expect(imputName.props.value).toEqual('Weslley');
    expect(imputSurName.props.value).toEqual('Ferraz');
  });

  it('Checks if title render correct', () => {
    const { getByTestId } = render(<Profile />);

    const title = getByTestId('title');

    expect(title.props.children).toContain('Perfil');
  });
});
