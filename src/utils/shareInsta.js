import { isIOS, isAndroid } from "react-device-detect";
import html2canvas from "html2canvas";

export const shareInsta = () => {
  const element = document.getElementById("capture"); // 캡처할 부분을 감싼 div의 ID

  if (element) {
    // 캡처 전에 버튼을 숨기기
    const buttons = element.querySelectorAll("button");
    buttons.forEach((button) => (button.style.visibility = "hidden"));

    // 이미지가 모두 로드된 후 캡처
    const images = element.querySelectorAll("img");
    let loadedImages = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedImages++;
      } else {
        img.onload = () => {
          loadedImages++;
          if (loadedImages === images.length) {
            captureAndShare(element, buttons); // 캡처 함수 호출
          }
        };
      }
    });

    if (loadedImages === images.length) {
      captureAndShare(element, buttons); // 캡처 함수 호출
    }
  }
};

const captureAndShare = (element, buttons) => {
  html2canvas(element, {
    useCORS: true, // CORS 문제 해결을 위한 옵션
  }).then((canvas) => {
    // 캡처된 이미지를 Data URI로 변환
    const imageUri = canvas.toDataURL("image/png");

    // 다운로드 기능 (선택 사항)
    const link = document.createElement("a");
    link.download = "choco-express.png"; // 저장될 파일명
    link.href = imageUri;
    link.click();

    // 캡처 후 버튼 다시 보이게
    buttons.forEach((button) => (button.style.visibility = "visible"));

    // 1초 대기 후 인스타그램으로 이동
    setTimeout(() => {
      if (isIOS || isAndroid) {
        const storyUri = `instagram-stories://share?background_image=${imageUri}`;
        window.location.href = storyUri;
      } else {
        // 인스타그램 웹으로 리디렉션
        window.location.href = "https://www.instagram.com/";
      }
    }, 1000); // 1초 대기
  });
};
