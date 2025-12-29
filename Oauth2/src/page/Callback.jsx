import { useEffect, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Callback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");

  const handleAuth = useCallback(async (authCode) => {
    console.log("=== BẮT ĐẦU XỬ LÝ LOGIN ===");
    console.log("Auth Code nhận được:", authCode);
    
    try {
      // Gọi về Backend của bạn
      console.log("Đang gọi API backend...");
      const res = await axios.post("http://localhost:8080/api/v1/auth/facebook-login", {
        code: authCode,
      });

      console.log("=== LOGIN THÀNH CÔNG ===");
      console.log("Response data:", res.data);
      console.log("Access Token:", res.data.accessToken);
      
      // Lưu JWT vào localStorage
      localStorage.setItem("token", res.data.accessToken);
      navigate("/dashboard");
    } catch (error) {
      console.error("=== LOGIN THẤT BẠI ===");
      console.error("Error object:", error);
      console.error("Error message:", error.message);
      console.error("Error response:", error.response);
      console.error("Error response data:", error.response?.data);
      console.error("Error response status:", error.response?.status);
      alert("Đăng nhập thất bại! Xem console để biết chi tiết.");
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    if (code) {
      handleAuth(code);
    }
  }, [code, handleAuth]);

  return <div>Đang xử lý đăng nhập... vui lòng đợi.</div>;
};

export default Callback;