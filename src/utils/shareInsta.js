import { isIOS, isAndroid } from "react-device-detect";
import html2canvas from "html2canvas";

export const shareInsta = () => {
  const element = document.getElementById("capture"); // 캡처할 부분을 감싼 div의 ID
  if (element) {
    // 캡처 전에 버튼을 숨기기
    const buttons = element.querySelectorAll("button");
    buttons.forEach((button) => (button.style.visibility = "hidden"));

    html2canvas(element).then((canvas) => {
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
        redirectToInsta(imageUri);
      }, 1000); // 1초 대기
    });
  }
};

// 캡처 완료 후 인스타그램으로 이동하는 콜백 함수
const redirectToInsta = (imageUri) => {
  const backgroundColor = "#ffffff"; // 예시로 흰색 배경
  const link = "https://choco-express.site"; // 공유할 링크

  if (isIOS || isAndroid) {
    const storyUri = `instagram-stories://share?source_application=your.app.package&background_image=${imageUri}&background_top_color=${backgroundColor}&background_bottom_color=${backgroundColor}&content_url=${link}`;

    window.location.href = storyUri;
  } else {
    // 인스타그램 웹으로 리디렉션
    window.location.href = "https://www.instagram.com/";
  }
};
