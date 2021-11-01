import React from 'react';
import { AuthResponse, AuthCredentials } from 'models/Auth';

interface AuthState {
  credentials?: AuthCredentials | null;
  user?: AuthResponse | null;
}

const initialState: AuthState = {
  credentials: null,
  user: null,
};

export const AuthContext = React.createContext<{
  state: AuthState;
  setState: React.Dispatch<React.SetStateAction<AuthState>>;
}>({
  state: initialState,
  setState: () => null,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState(initialState);

  const providerValue = {
    state,
    setState,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
