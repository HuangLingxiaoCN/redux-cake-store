import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../redux";

export default function UserContainer() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {/* {userData.loading} ? <p>Loading...</p> : ''
      {userData.error} ? <h2>Error</h2> : '' */}
      {userData.loading && <p>Loading...</p>}
      {userData.error ? <h2>Error</h2> : ''}
      {!userData.error && !userData.loanding && (
        <div>
          <h2>User List</h2>
          <div>
            {userData &&
              userData.users &&
              userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
          </div>
        </div>
      )}
    </div>
  );
}
