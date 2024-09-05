import { getOtherBoxContents } from "../apis/otherBox";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useOtherBox = () => {
  const { boxId } = useParams();
  console.log("박스 id는 :", boxId);
  const [otherData, setOtherData] = useState(null);

  const fetchOtherBoxData = async () => {
    try {
      const res = await getOtherBoxContents(boxId);
      setOtherData(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOtherBoxData();
  }, []);

  return { otherData };
};
