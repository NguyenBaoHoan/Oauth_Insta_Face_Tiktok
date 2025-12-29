import { Routes, Route } from 'react-router-dom';
import Callback from './page/Callback.jsx';
import FacebookLoginButton from './component/FacebookLoginButton.jsx';
import InstagramLoginButton from './component/InstagramLoginButton.jsx';
import TikTokLoginButton from './component/TikTokLoginButton.jsx';

// Trang Login
const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2"
          style={{
            background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Social Login
        </h1>
        <p className="text-gray-400 text-center">Chọn phương thức đăng nhập</p>
      </div>

      {/* Login Box */}
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 w-96">
        <div className="flex flex-col gap-4">
          {/* Instagram Button */}
          <InstagramLoginButton />

          {/* TikTok Button */}
          <TikTokLoginButton />

          {/* Divider */}
          <div className="flex items-center gap-4 my-2">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="text-gray-400 text-sm">HOẶC</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          {/* Facebook Button */}
          <FacebookLoginButton />
        </div>
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-sm mt-8">
        Bằng việc đăng nhập, bạn đồng ý với Điều khoản dịch vụ của chúng tôi
      </p>
    </div>
  );
};

// Trang Dashboard sau khi login
const Dashboard = () => {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">🎉 Chào mừng!</h1>
        <p className="text-gray-400 mb-2">Đăng nhập thành công</p>
        <p className="text-gray-500 text-sm mb-6 font-mono bg-gray-700 p-2 rounded">
          {token?.substring(0, 30)}...
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-all"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/auth/callback" element={<Callback />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
