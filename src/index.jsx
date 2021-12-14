import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import NavBar from "./components/NavBar/NavBar";
import Container from "./components/Container/Container";
import CreateModal from "./components/CreateModal/CreateModal";
import Modal from "./components/Modal/Modal";
import "./index.css";
import { getData } from "./api";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [type, setType] = useState("anime");
  const [status, setStatus] = useState("all");
  const [selectedData, setSelectedData] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("create");

  // Get data from API
  useEffect(() => {
    getData(setData, setLoading);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Fragment>
          <NavBar
            setType={setType}
            status={status}
            setStatus={setStatus}
            setSearchInput={setSearchInput}
          />
          <Container
            data={data}
            type={type}
            status={status}
            searchInput={searchInput}
            setModalType={setModalType}
            setShowModal={setShowModal}
            setSelectedData={setSelectedData}
          />
          <CreateModal
            setShowModal={setShowModal}
            setModalType={setModalType}
            setSelectedData={setSelectedData}
          />
          <Modal
            data={data}
            type={modalType}
            isShow={showModal}
            selectedData={selectedData}
            setShowModal={setShowModal}
            setData={setData}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
