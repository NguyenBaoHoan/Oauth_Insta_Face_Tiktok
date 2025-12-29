import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const FacebookLoginButton = () => {
  const handleLogin = () => {
    const appID = import.meta.env.VITE_FACEBOOK_APP_ID;
    const redirectURI = import.meta.env.VITE_REDIRECT_URI;
    const state = "random_string_security"; // random để chống CSRF

    // CHỈ dùng scope cơ bản khi app ở chế độ Development
    const scope = "public_profile";

    const authUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${appID}&redirect_uri=${redirectURI}&state=${state}&scope=${scope}&response_type=code`;

    window.location.href = authUrl;
  };

  return (
    <button onClick={handleLogin} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
      <FaFacebook /> Login with Facebook
    </button>
  );
};

export default FacebookLoginButton;