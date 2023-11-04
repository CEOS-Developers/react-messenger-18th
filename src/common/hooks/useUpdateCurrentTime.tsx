import { useState, useEffect } from "react";
import { getCurrentTime } from "@common/utils/time/getCurrentTime";

export default function useUpdateCurrentTime() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
}
