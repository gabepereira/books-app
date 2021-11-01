import { render, screen } from '@testing-library/react';
import LoginLayout from './LoginLayout';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      replace: () => null,
    };
  },
}));

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
