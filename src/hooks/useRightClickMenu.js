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
        if (e.target.parentNode.classList.contains("MuiLink-root")) {
          e.preventDefault();
          setX(e.pageX + 100 > window.innerWidth ? e.pageX - 100 : e.pageX);
          setY(e.pageY + 85 > window.innerHeight ? e.pageY - 75 : e.pageY);
          setIsShow(true);

          const itemName = e.target.childNodes[0].innerText;
          const itemData = dataState.filter(
            (item) => item.name === itemName
          )[0];
          dispatch(
            changeContentValue({
              _id: itemData._id,
              name: itemData.name,
              link: itemData.link,
              img: itemData.img,
              type: itemData.type,
              status: itemData.status,
            })
          );
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
