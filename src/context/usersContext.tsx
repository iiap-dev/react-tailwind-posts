import React, {
  ReactNode, useMemo, useReducer,
} from 'react';
import { UsersContext } from '../@types/users';
import { initialState, usersReducer } from '../reducers/usersReducer';

const UsersProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
