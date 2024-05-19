import React from "react";

const LoginForm: React.FC<{
  onLogin: (email: string, password: string) => void;
  errorMessage: string | null;
}> = ({ onLogin, errorMessage }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    onLogin(email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 h-96 shadow-xl text-open-sans">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h2 className="flex font-open-sans text-title font-extra-bold tracking-tighter">
            <span className="text-main-blue mr-1">b2b</span>
            <span className="text-main-yellow ml-1">it</span>
          </h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 font-nunito text-lg font-bold"
            >
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-md px-8 py-2 bg-white-bg font-nunito text-sm font-omega-bold text-gray"
              style={{width: "265px"}}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 font-nunito text-lg font-bold"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded-md px-8 py-2 bg-white-bg font-nunito text-sm font-omega-bold text-gray"
              style={{width: "265px"}}
            />
          </div>
          {errorMessage && <p className="text-red-500 nunito text-sm mb-4">{errorMessage}</p>}
          <button
            type="submit"
            className="bg-main-blue text-white px-8 py-2 rounded-md"
            style={{width: "265px"}}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
