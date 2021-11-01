import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';

const HomeLayout = () => {
  const {
    state: { user, credentials },
  } = useContext(AuthContext);

  return (
    <section>
      {JSON.stringify(user)}
      {JSON.stringify(credentials)}
    </section>
  );
};

export default HomeLayout;
