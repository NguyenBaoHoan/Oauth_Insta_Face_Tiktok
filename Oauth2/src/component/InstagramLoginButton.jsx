import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramLoginButton = () => {
    const handleLogin = () => {
        const appID = import.meta.env.VITE_FACEBOOK_APP_ID;
        const redirectURI = import.meta.env.VITE_REDIRECT_URI;
        const state = "instagram_login_" + Math.random().toString(36).substring(7);

        // Dùng Facebook OAuth (vì Instagram Business dùng Facebook API)
        const scope = "public_profile";

        const authUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${appID}&redirect_uri=${redirectURI}&state=${state}&scope=${scope}&response_type=code`;

        window.location.href = authUrl;
    };

    return (
        <button
            onClick={handleLogin}
            className="flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                boxShadow: '0 4px 15px rgba(225, 48, 108, 0.4)'
            }}
        >
            <FaInstagram size={24} />
            <span>Đăng nhập với Instagram</span>
        </button>
    );
};

export default InstagramLoginButton;