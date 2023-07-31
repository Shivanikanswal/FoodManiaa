import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return status;
};

export default useOnlineStatus;
