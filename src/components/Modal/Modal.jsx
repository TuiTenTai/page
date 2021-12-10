import React from "react";
import { InputField, ModalButton, SelectField } from "./ModalElements";
import "./index.css";
import { addData, deleteData, updateData } from "../../api";

function Modal({ type, isShow, data, selectedData, setData, setShowModal }) {
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

    addData(data, newData, setData);
    setShowModal(false);
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

    updateData(data, editData, selectedData, setData);
    setShowModal(false);
  };

  const onDeleteSubmit = () => {
    deleteData(data, selectedData, setData);
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
