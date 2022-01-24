import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeContentValue } from 'state/action-creators/form';
import { dataSelector } from 'state/reducers/data';

const useRightClick = (): [number, number, boolean] => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();

  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);

  const handleClick = useCallback((): void => {
    setShow(false);
  }, []);

  const handleContextMenu = useCallback(
    (e: MouseEvent): void => {
      try {
        const cardElement = (e.target as HTMLElement).closest('.card-name');
        if (cardElement) {
          e.preventDefault();
          setX(e.pageX + 100 > window.innerWidth ? e.pageX - 100 : e.pageX);
          setY(e.pageY + 90 > window.innerHeight ? e.pageY - 90 : e.pageY);
          setShow(true);

          const itemName = (cardElement.firstChild as HTMLParagraphElement).innerText;
          const itemData = data.filter((item) => item.name === itemName)[0];
          dispatch(changeContentValue(itemData));
        }
      } catch (err) {
        console.error(err);
      }
    },
    [data, dispatch]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [handleClick, handleContextMenu]);

  return [x, y, show];
};

export default useRightClick;
