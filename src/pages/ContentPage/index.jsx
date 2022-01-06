import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { typeSelector, statusSelector, searchSelector } from "reducers/filter";
import { dataSelector, errSelector, pendingSelector } from "reducers/data";
import { statusChange, typeChange } from "actions/filter";
import { itemPerPage } from "constant";
import useRightMenu from "hooks/useRightClickMenu";
import Container from "@mui/material/Container";
import Breadcrumbs from "components/Breadcrumbs";
import AddNewAction from "components/AddNewAction";
import FormModal from "components/FormModal";
import { Loading } from "styles";
import { CardContainer } from "styles/Card";
import Card from "components/Card";
import RightClickMenu from "components/RightClickMenu";
import Pagination from "components/Pagination";
import ErrorPage from "pages/ErrorPage";

const ContentPage = ({ type, status }) => {
  const isPendingState = useSelector(pendingSelector);
  const errMessState = useSelector(errSelector);
  const dataState = useSelector(dataSelector);
  const typeState = useSelector(typeSelector);
  const statusState = useSelector(statusSelector);
  const searchFilterState = useSelector(searchSelector);
  const [x, y, isShowMenu] = useRightMenu();
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState(1);
  const indexOfLastItem = pageCount * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;

  useEffect(() => {
    dispatch(typeChange(type));
    dispatch(statusChange(status));
  }, [status, dispatch, type]);

  if (isPendingState) return <Loading size={50} />;
  if (errMessState !== null) return <ErrorPage errMess="400: Bad Request" />;

  const filterData = dataState
    .filter((item) => item.type === typeState)
    .filter((item) => statusState === "all" || item.status === statusState)
    .filter((item) => item.name.toLowerCase().includes(searchFilterState));

  return (
    <Container maxWidth="lg">
      <Breadcrumbs />
      <CardContainer>
        {filterData.slice(indexOfFirstItem, indexOfLastItem).map((item) => (
          <Card key={item._id} content={item} />
        ))}
      </CardContainer>
      <Pagination list={filterData} setPageCount={setPageCount} />
      <RightClickMenu x={x} y={y} isShow={isShowMenu} />
      <AddNewAction />
      <FormModal />
      <Outlet />
    </Container>
  );
};

export default ContentPage;
