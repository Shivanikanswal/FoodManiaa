import { useEffect, useState } from "react";
import { MENU_DATA, CORS } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_DATA + resId);
    const jsonData = await data.json();
    setResMenu(jsonData.data);
  };
  return resMenu;
};

export default useRestaurantMenu;
