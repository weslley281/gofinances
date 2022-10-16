import React from 'react';
import { render } from '@testing-library/react-native';
import { Input } from './index';

describe('Input Component', () => {
  it('Must have be specific border color when active', () => {
    const { getByTestId } = render(
      <Input
        testID="input-email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />
    );

    const inputComponent = getByTestId('input-email');
    expect(inputComponent.props.style[0].borderColor);
  });
});
