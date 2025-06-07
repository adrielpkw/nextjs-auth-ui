import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get('/api/users');
    setUsers(res.data);
  };

  const deleteUser = async (id: number) => {
    await axios.delete(`/api/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id} className="border p-2 mb-2 flex justify-between">
            <span>{user.email}</span>
            <button
              onClick={() => deleteUser(user.id)}
              className="text-red-500 border px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
