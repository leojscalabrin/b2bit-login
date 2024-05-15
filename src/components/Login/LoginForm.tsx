import React from 'react';

const LoginForm: React.FC<{ onLoginSuccess: (email: string, password: string) => void }> = ({ onLoginSuccess }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    onLoginSuccess(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">E-mail:</label>
        <input type="email" id="email" name="email" className="border rounded-md px-2 py-1" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1">Senha:</label>
        <input type="password" id="password" name="password" className="border rounded-md px-2 py-1" />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Login</button>
    </form>
  );
};

export default LoginForm;