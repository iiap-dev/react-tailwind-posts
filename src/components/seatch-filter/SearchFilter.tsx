import {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { UsersContext } from '../../@types/users';
import { IUserData } from '../post-content/types';

export const SearchFilter = () => {
  const { state: { users }, dispatch } = useContext(UsersContext);
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchMatch, setSearchMatch] = useState<IUserData[]>(users);

  useEffect(() => {
    const test = searchMatch.map(item => item.id);
    dispatch({
      type: 'SET_USER_IDS',
      payload: test,
    });
  }, [searchMatch]);

  useEffect(() => {
    return () => {
      dispatch({
        type: 'SET_USER_IDS',
        payload: users.map(item => item.id),
      });
    };
  }, [searchInput, searchMatch]);

  const onChange = useCallback((event: any) => {
    setSearchInput(event.target.value);

    // eslint-disable-next-line array-callback-return,consistent-return
    const test = users.filter(user => {
      if (searchInput === '') {
        return user;
      } if (user.username.toLowerCase()
        .includes(searchInput.toLowerCase())) {
        return user;
      }
    });

    setSearchMatch(test);
  }, [searchInput, searchMatch]);

  useEffect(() => {
    return () => {
      if (searchMatch.length === 0) {
        dispatch({
          type: 'SET_USER_IDS',
          payload: [],
        });
      }
    };
  }, [searchMatch]);

  return (
    <>
      <input
        placeholder="Enter username to filter posts"
        type="text"
        onChange={onChange}
        value={searchInput}
      />
      { searchInput && searchMatch.length === 0 && <div className="bg-white border border-red-500">no match found</div> }
    </>
  );
};
