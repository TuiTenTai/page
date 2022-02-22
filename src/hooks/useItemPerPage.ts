import { useCallback, useEffect, useState } from 'react';

const useItemPerPage = (): number => {
  const [pageWidth, setPageWidth] = useState<number>(window.innerWidth);
  const [itemPerPage, setItemPerPage] = useState<number>(7);

  const onHandleResize = useCallback(() => {
    if (pageWidth >= 1178) return setItemPerPage(28);
    if (pageWidth >= 1015) return setItemPerPage(24);
    if (pageWidth >= 853) return setItemPerPage(25);
    if (pageWidth >= 690) return setItemPerPage(24);
    if (pageWidth >= 511) return setItemPerPage(24);
    if (pageWidth >= 348) return setItemPerPage(20);
    return setItemPerPage(1);
  }, [pageWidth]);

  useEffect(() => {
    window.addEventListener('resize', () => setPageWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () => setPageWidth(window.innerWidth));
    };
  }, []);

  useEffect((): void => {
    onHandleResize();
  }, [onHandleResize, pageWidth]);

  return itemPerPage;
};

export default useItemPerPage;
