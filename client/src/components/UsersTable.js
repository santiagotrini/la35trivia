import { useState, useEffect } from 'react';
import axios from 'axios';

import UsersTableRow from './UsersTableRow';

const UsersTable = props => {
  // state
  const [users, setUsers] = useState([]);
  // fetch users
  useEffect(() => {
    axios.get('/api/users', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  // helpers
  const deleteUser = id => {
    console.log('borrando ', id);
    axios.delete('/api/users/' + id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => {
        console.log(res.data);
        setUsers(users.filter(user => user._id !== id))
      })
      .catch(err => console.log(err));
  };
  const updateUser = (id, data) => {
    console.log(id, data);
    axios.put('/api/users/' + id, data, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => {
        console.log(res.data);
        const newUsers = users.map(user =>
          user._id === id ? res.data : user
        );
        setUsers(newUsers);
      })
      .catch(err => console.log(err));
  };
  // render
  return (
    <div className="UsersTable">
      <h2>UsersTable</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UsersTableRow
              key={user._id}
              user={user}
              updateUser={updateUser}
              deleteUser={deleteUser}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
