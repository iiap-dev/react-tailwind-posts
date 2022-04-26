import {
  useCallback, useContext, useState,
} from 'react';
import { UsersContext } from '../../@types/users';
import { IUserData } from '../post-content/types';

export const SearchFilter = () => {
  const { state: { users }, dispatch } = useContext(UsersContext);
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchMatch, setSearchMatch] = useState<IUserData[]>(users);

  const onChange = useCallback((event: any) => {
    setSearchInput(event.target.value);

    if (searchInput !== '') {
      const filteredUsers = users.filter(item => item.username.toLowerCase()
        .includes(event.target.value.toLowerCase())); // => [{0: IUserData}]

      setSearchMatch(filteredUsers);
      dispatch({
        type: 'SET_USER_IDS',
        payload: filteredUsers.map(item => item.id),
      });
    } else {
      setSearchMatch(users);
      dispatch({
        type: 'SET_USER_IDS',
        payload: users.map(item => item.id),
      });
    }
  }, [searchInput]);

  return (
    <>
      <div className="relative text-white mt-2.5 text-left">Filter posts:</div>
      <input
        className="px-3 py-3 placeholder-black/50
        text-slate-600 relative bg-white bg-white
        rounded text-sm border-0 shadow outline-none min-w-[375px]"
        placeholder="Enter username to filter posts"
        type="text"
        onChange={onChange}
        value={searchInput}
      />
      { searchInput && searchMatch.length === 0 && (
      <div
        className="px-3 py-3 placeholder-black/50
        text-slate-600 relative bg-white bg-white
        rounded text-sm border-0 shadow outline-none border border-red-500 mb-[50]
        text-crane-red"
      >
        no match found
      </div>
      ) }
    </>
  );
};
