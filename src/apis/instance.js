import axios from "axios";
import Cookies from "js-cookie";
const accessToken = Cookies.get("access_token");
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${Cookies.get("access_token")}`,
  },
  timeout: 10000, // 10초 타임아웃 설정
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("access_token"); // 요청을 보낼 때마다 쿠키에서 액세스 토큰을 가져옵니다.
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`; // 액세스 토큰이 있으면 헤더에 추가합니다.
      config.withCredentials = true;
    } else {
      delete config.headers["Authorization"]; // 토큰이 없으면 헤더를 삭제
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status !== 200) {
      if (error.response.status === 404) {
        console.log("404 error: Page not found");
        window.location.href = "/error";
      }
      const errorCode = error.response.data?.errorCode;
      if (errorCode === "USER_LOCATION_002") {
        console.log(
          "USER_LOCATION_002: 사용자와 명소 정보가 일치하지 않습니다."
        );
        window.location.href = "/error";
      } else {
        console.log("Unknown error occurred");
        window.location.href = "/error";
      }
    } else if (error.code === "ECONNABORTED") {
      console.log("Request timeout");
      window.location.href = "/error";
    }
    return Promise.reject(error);
  }
);
