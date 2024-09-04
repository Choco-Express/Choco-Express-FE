import { instance } from "./instance";

export const getOtherBoxContents = async (box_id) => {
  try {
    const res = await instance.get(`/api/box/${box_id}`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
