import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await axios.post('/api/users', { email, password });
      alert('User created');
      router.push('/');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <main className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleRegister} className="bg-green-600 text-white px-4 py-2 rounded">
        Register
      </button>
    </main>
  );
}
