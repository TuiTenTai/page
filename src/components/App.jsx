import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import api from "api";
import { fetchApiSuccess, fetchApiFail } from "actions/data";
import { statusList, typeList } from "constant";
import GlobalStyle from "styles";
import HomePage from "pages/HomePage";
import TopBar from "components/TopBar";
import ContentPage from "pages/ContentPage";
import Error404 from "pages/ErrorPage/404Error";
import SlideBar from "components/SlideBar";

const App = () => {
  // Get API
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const data = await api.get();
        dispatch(fetchApiSuccess(data.reverse()));
      } catch (err) {
        dispatch(fetchApiFail(err));
      }
    };
    fetchApi();
  }, [dispatch]);

  return (
    <Router>
      <GlobalStyle />
      <TopBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SlideBar />
              <HomePage />
            </>
          }
        />
        {typeList.map((type) => (
          <Route path={`/${type}`} key={type}>
            <Route path="" element={<ContentPage type={type} status="all" />} />
            {statusList.map((status) => (
              <Route
                path={status}
                element={<ContentPage type={type} status={status} />}
                key={status}
              />
            ))}
          </Route>
        ))}
        <Route
          path="*"
          element={
            <>
              <SlideBar />
              <Error404 />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
