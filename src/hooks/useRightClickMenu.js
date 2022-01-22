import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector } from "reducers/data";
import { changeContentValue } from "actions/form";

const useRightMenu = () => {
  const dataState = useSelector(dataSelector);
  const dispatch = useDispatch();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const handleClick = useCallback(() => {
    setIsShow(false);
  }, []);

  const handleContextMenu = useCallback(
    (e) => {
      try {
        const cardElement = e.target.closest(".card-name");
        if (cardElement) {
          e.preventDefault();
          setX(e.pageX + 100 > window.innerWidth ? e.pageX - 100 : e.pageX);
          setY(e.pageY + 85 > window.innerHeight ? e.pageY - 75 : e.pageY);
          setIsShow(true);

          const itemName = cardElement.innerText;
          const itemData = dataState.filter(
            (item) => item.name === itemName
          )[0];
          dispatch(changeContentValue(itemData));
        }
      } catch (err) {
        console.error(err);
      }
    },
    [dataState, dispatch]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [handleClick, handleContextMenu]);

  return [x, y, isShow];
};

export default useRightMenu;
