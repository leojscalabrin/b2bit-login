import React from 'react';

const UserProfile: React.FC<{ username: string; email: string; onLogout: () => void }> = ({ username, email, onLogout }) => {
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <div className="mb-4">
          <label htmlFor="profilePicture" className="block mb-1">Profile Picture:</label>
          <img src="profile-picture-url" alt="Profile Picture" className="rounded-full w-24 h-24 mb-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Your Name:</label>
          <p id="username" className="mb-2">{username}</p>
          <label htmlFor="email" className="block mb-1">Your E-Mail:</label>
          <p id="email">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
