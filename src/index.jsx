import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import NavBar from "./components/NavBar/NavBar";
import Container from "./components/Container/Container";
import CreateModal from "./components/CreateModal/CreateModal";
import Modal from "./components/Modal/Modal";
import "./index.css";

function App() {
  const [loding, setLoding] = useState(true);
  const [data, setData] = useState([]);
  const [type, setType] = useState("anime");
  const [status, setStatus] = useState("all");
  const [selectedData, setSelectedData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("create");

  // Get data from API
  useEffect(() => {
    fetch("https://my-amn-list-server.herokuapp.com/")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData.reverse());
        setLoding(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // Rerender data when change
  useEffect(() => {
    const contentItems = document.querySelectorAll(".content-item");
    const useStatus = status === "all" ? "" : status;

    contentItems.forEach((item) => {
      item.classList.remove("show");
      if (item.className.indexOf(useStatus) > -1) {
        item.classList.add("show");
      }
    });
  }, [data, status]);

  return (
    <Fragment>
      {loding ? (
        <LoadingScreen />
      ) : (
        <Fragment>
          <NavBar setType={setType} status={status} setStatus={setStatus} />
          <Container
            data={data}
            type={type}
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
}

ReactDOM.render(<App />, document.getElementById("root"));
