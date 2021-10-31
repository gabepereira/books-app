import { render, screen } from '@testing-library/react';
import LoginLayout from './LoginLayout';

describe(LoginLayout, () => {
  const initialProps = {};

  const setup = (props = {}) =>
    render(<LoginLayout {...initialProps} {...props} />);

  describe('Rendering', () => {
    it('should render the <LoginLayout> component', () => {
      setup();
      expect(screen.getByTestId('LoginLayout')).toBeInTheDocument();
    });
  });
});
