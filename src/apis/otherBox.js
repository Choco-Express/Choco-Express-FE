import { instance } from "./instance";

export const getOtherBoxContents = async (box_id) => {
  try {
    const res = await instance.get(`/api/box/${box_id}`, {
      headers: {
        // 토큰이 없을 때 Authorization 헤더를 제거
        Authorization: Cookies.get("access_token")
          ? `Bearer ${Cookies.get("access_token")}`
          : undefined,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
