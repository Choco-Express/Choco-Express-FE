const { Kakao } = window;

export const shareKakao = () => {
  Kakao.cleanup();
  Kakao.init(import.meta.env.VITE_KAKAO_KEY);
  Kakao.Share.sendCustom({
    templateId: Number(import.meta.env.VITE_KAKAO_ID),
  });
};
