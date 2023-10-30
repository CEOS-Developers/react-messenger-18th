import { useState, useEffect } from "react";
import { getCurrentTime } from "../utils/time/getCurrentTime";

export default function useGetCurrentTime() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
}
