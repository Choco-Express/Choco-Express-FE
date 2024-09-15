import { instance } from "./instance";

export const getOtherBoxContents = async (box_id) => {
  try {
    const res = await instance.get(`/api/box/${box_id}`, {
      headers: {
        // Authorization 헤더를 포함하지 않음
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
