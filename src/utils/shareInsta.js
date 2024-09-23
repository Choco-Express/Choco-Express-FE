import { isIOS, isAndroid } from "react-device-detect";
import html2canvas from "html2canvas";

export const shareInsta = () => {
  const element = document.getElementById("capture"); // 캡처할 부분을 감싼 div의 ID
  if (element) {
    // 캡처 전에 버튼을 숨기기
    const buttons = element.querySelectorAll("button");
    buttons.forEach((button) => (button.style.visibility = "hidden"));

    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = "choco-express.png"; // 저장될 파일명
      link.href = canvas.toDataURL("image/png");
      link.click();

      // 캡처 후 버튼 다시 보이게
      buttons.forEach((button) => (button.style.visibility = "visible"));

      // 1초 대기 후 인스타그램으로 이동
      setTimeout(() => {
        redirectToInsta();
      }, 1000); // 1초 대기
    });
  }
};

// 캡처 완료 후 인스타그램으로 이동하는 콜백 함수
const redirectToInsta = () => {
  if (isIOS) {
    window.location.replace("https://www.instagram.com/create/story");
  } else if (isAndroid) {
    window.location.replace(
      "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end"
    );
  } else {
    window.location.replace("https://www.instagram.com/");
  }
};
