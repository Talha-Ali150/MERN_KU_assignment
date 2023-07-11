import React, { useEffect, useState } from "react";

export default function Users() {
  const [usersData, setUsersData] = useState([]);
  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsersData(data);
    } catch (err) {
      alert("Error fetching users");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
        </tr>
        {usersData.map((users) => {
          return (
            <tr key={users.id}>
              <td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.username}</td>
              <td>{users.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
