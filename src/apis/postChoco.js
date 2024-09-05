import { instance } from "./instance";

export const postChocolate = async (boxId, nickname, contents, chocoType) => {
  try {
    const res = await instance.post(`/api/box/${boxId}/choco`, {
      nickname,
      contents,
      chocoType,
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
