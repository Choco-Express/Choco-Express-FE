import { instance } from "./instance";

export const getOtherBoxContents = async (box_id) => {
  try {
    const res = await instance.get(`/api/box/${box_id}`);
    console.log("Response data:", res.data);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
