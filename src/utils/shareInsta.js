import { isIOS, isAndroid } from "react-device-detect";

export const shareInsta = () => {
  if (isIOS) {
    // iOS 기기에서 Instagram 스토리 작성 페이지로 이동
    window.location.replace("https://www.instagram.com/create/story");
  } else if (isAndroid) {
    // Android 기기에서 Instagram 앱을 통해 스토리 작성
    window.location.replace(
      "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end"
    );
  } else {
    // 그 외의 경우 (Windows, Desktop 등)
    window.location.replace("https://www.instagram.com/");
  }
};
