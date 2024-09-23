import { isIOS, isAndroid } from "react-device-detect";
import html2canvas from "html2canvas";

export const shareInsta = () => {
  const element = document.getElementById("capture"); // 캡처할 부분을 감싼 div의 ID

  if (element) {
    // 캡처 전에 버튼을 숨기기
    const buttons = element.querySelectorAll("button");
    buttons.forEach((button) => (button.style.visibility = "hidden"));

    // 이미지가 모두 로드된 후 캡처
    html2canvas(element, { useCORS: true }).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");

      // 캡처 후 버튼 다시 보이게
      buttons.forEach((button) => (button.style.visibility = "visible"));

      // 1초 대기 후 인스타그램으로 이동
      setTimeout(() => {
        if (isIOS || isAndroid) {
          const storyUri = `instagram-stories://share?source_application=your.app.package`;
          window.location.href = storyUri;
        } else {
          // 인스타그램 웹으로 리디렉션
          window.location.href = "https://www.instagram.com/";
        }
      }, 2500);
    });
  }
};
