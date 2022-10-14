import React from 'react';
import { render } from '@testing-library/react-native';
import { Profile } from '../../screens/Profile';

test('Checks if the user input with place holder is on the screen', () => {
  const { getByPlaceholderText } = render(<Profile />);
  const imputName = getByPlaceholderText('Nome');
  expect(imputName.props.placeholder).toBeTruthy();
});
