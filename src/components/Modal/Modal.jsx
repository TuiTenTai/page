import React from "react";
import { InputField, ModalButton, SelectField } from "./ModalElements";
import "./index.css";

function Modal({ setData, setShowModal, type, isShow, data, selectedData }) {
  const onOutModalClick = (e) => {
    if (e.target.className !== "modal") return;
    setShowModal(false);
  };

  const onAddSubmit = () => {
    const nameValue = document.getElementById("name-input").value;
    const linkValue = document.getElementById("link-input").value;
    const imgValue = document.getElementById("image-input").value;

    if (nameValue === "" || linkValue === "" || imgValue === "") {
      alert("Please enter all informations before countinuing...");
      return;
    }

    const newData = {
      name: nameValue,
      link: linkValue,
      img: imgValue,
      type: document.getElementById("type").value,
      status: document.getElementById("status").value,
    };

    setShowModal(false);
    fetch("https://my-amn-list-server.herokuapp.com/", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((json) => setData([json, ...data]))
      .catch((err) => console.error(err));
  };

  const onEditSubmit = () => {
    const nameValue = document.getElementById("name-input").value;
    const linkValue = document.getElementById("link-input").value;
    const imgValue = document.getElementById("image-input").value;

    if (nameValue === "" || linkValue === "" || imgValue === "") {
      alert("Please enter all informations before countinuing...");
      return;
    }

    const editData = {
      _id: selectedData._id,
      name: nameValue,
      link: linkValue,
      img: imgValue,
      type: document.getElementById("type").value,
      status: document.getElementById("status").value,
      __v: selectedData.__v,
    };
    fetch("https://my-amn-list-server.herokuapp.com/", {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(editData),
    })
      .then((res) => res.json())
      .then((json) => {
        const newData = [...data];
        newData[newData.indexOf(selectedData)] = json;
        setData(newData);
      })
      .catch((err) => console.error(err));

    setShowModal(false);
  };

  const onDeleteSubmit = () => {
    fetch("https://my-amn-list-server.herokuapp.com/", {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ _id: selectedData._id }),
    })
      .then(() => {
        const newData = [...data];
        newData.splice(newData.indexOf(selectedData), 1);
        setData(newData);
      })
      .catch((err) => console.error(err));
    setShowModal(false);
  };

  return (
    <>
      {isShow === true && (
        <div className="modal" onClick={onOutModalClick}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &#10006;
            </span>
            <h2 className="modal-title">
              {type === "create" ? "Create New" : "Edit"}
            </h2>

            <InputField placeHolder="Name" value={selectedData.name} />
            <InputField placeHolder="Link" value={selectedData.link} />
            <InputField placeHolder="Image" value={selectedData.img} />

            <SelectField
              name="Type"
              optionList={["Anime", "Manga", "Novel"]}
              value={selectedData.type}
            />
            <SelectField
              name="Status"
              optionList={["Later", "Viewing", "Viewed"]}
              value={selectedData.status}
            />

            {type === "create" ? (
              <>
                <ModalButton
                  text="Create"
                  color="#31cc5a"
                  onClick={onAddSubmit}
                />
                <ModalButton
                  text="Cancel"
                  color="#cc3131"
                  onClick={() => setShowModal(false)}
                />
              </>
            ) : (
              <>
                <ModalButton
                  text="Edit"
                  color="#31cc5a"
                  onClick={onEditSubmit}
                />
                <ModalButton
                  text="Delete"
                  color="#cc3131"
                  onClick={onDeleteSubmit}
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
