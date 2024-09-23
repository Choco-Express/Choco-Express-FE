import React, { useState, useEffect } from "react";

export const useFormattedDate = (isoDate) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date(isoDate);
    const formatted = date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setFormattedDate(formatted);
  }, [isoDate]);

  return formattedDate;
};
