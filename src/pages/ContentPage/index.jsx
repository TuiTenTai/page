import React, { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { dataSelector, errSelector, pendingSelector } from "reducers/data";
import { searchSelector } from "reducers/search";
import { isResponsiveSelector } from "reducers/responsive";
import { itemPerPage } from "constant";
import useRightMenu from "hooks/useRightClickMenu";
import { Loading } from "styles";
import Container from "@mui/material/Container";
import Breadcrumbs from "components/Breadcrumbs";
import SearchField from "components/SearchField";
import AddNewAction from "components/AddNewAction";
import FormModal from "components/FormModal";
import { CardContainer } from "styles/Card";
import Card from "components/Card";
import RightClickMenu from "components/RightClickMenu";
import Pagination from "components/Pagination";
import Error400 from "pages/ErrorPage/400Error";

const ContentPage = ({ type, status }) => {
  const isPending = useSelector(pendingSelector);
  const errMess = useSelector(errSelector);
  const data = useSelector(dataSelector);
  const search = useSelector(searchSelector);
  const isResponsive = useSelector(isResponsiveSelector);
  const [x, y, isShowMenu] = useRightMenu();
  const [currentPage, setCurrentPage] = useState(1);
  const { pathname } = useLocation();

  useEffect(() => {
    setCurrentPage(1);
  }, [pathname]);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;

  if (isPending) return <Loading size={50} />;
  if (errMess !== null) return <Error400 />;

  const filterData = data
    .filter((item) => item.type === type)
    .filter((item) => status === "all" || item.status === status)
    .filter((item) => item.name.toLowerCase().includes(search));

  const pageData = filterData.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumber = Math.floor(filterData.length / itemPerPage) + 1;

  return (
    <Container maxWidth="lg">
      <Breadcrumbs type={type} status={status} />
      {isResponsive && (
        <SearchField fullWidth style={{ marginBottom: "10px" }} />
      )}

      {pageData.length !== 0 ? (
        <>
          <CardContainer>
            {pageData.map((item) => (
              <Card key={item._id} content={item} />
            ))}
          </CardContainer>
          <Pagination count={pageNumber} setCurrentPage={setCurrentPage} />
          <RightClickMenu x={x} y={y} isShow={isShowMenu} />
        </>
      ) : (
        <center>No match found</center>
      )}

      <AddNewAction />
      <FormModal />
      <Outlet />
    </Container>
  );
};

export default ContentPage;
