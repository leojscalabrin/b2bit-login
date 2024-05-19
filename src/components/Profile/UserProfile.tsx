import React from 'react';

interface UserProfileProps {
  name: string;
  email: string;
  avatar?: {
    image_high_url: string;
  };
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, avatar, onLogout }) => {
  return (
    <div className="bg-alt-white-bg h-screen">
      <div className="bg-white h-12 px-4 py-1 flex justify-end ">
        <button
          onClick={onLogout}
          className="bg-main-blue text-white font-bold px-8 py-2 rounded-md"
          style={{ width: "265px" }}
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center items-center h-2/3">
        <div
          className="flex flex-col items-center justify-center rounded-md bg-white"
          style={{ width: "356px", height: "315px" }}
        >
          <div className="mb-4">
            <label
              htmlFor="profilePicture"
              className="block mb-1 text-nunito text-xs font-bold"
            >
              Profile picture
            </label>
            <img
              src={avatar?.image_high_url || "https://via.placeholder.com/150"}
              alt="Profile Picture"
              className="rounded-md w-20 h-20 mb-2"
            />
          </div>
          <div className="mb-4 flex flex-col justify-start w-full px-8">
            <label
              htmlFor="name"
              className="mb-1 flex justify-start items-center text-nunito"
            >
              <span className="font-bold mr-1">Your</span>
              <span className="font-normal">Name</span>
            </label>
            <p
              id="name"
              className="flex items-center mb-2 text-nunito font-normal text-sm text-main-black px-4 bg-third-white-bg h-10 round-md"
            >
              {name}
            </p>
            <label htmlFor="email" className="block mb-1">
              <span className="font-bold mr-1">Your</span>
              <span className="font-normal">E-Mail</span>
            </label>
            <p
              id="email"
              className="flex items-center mb-2 text-nunito font-normal text-sm text-main-black px-4 bg-third-white-bg h-10 round-md"
            >
              {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
