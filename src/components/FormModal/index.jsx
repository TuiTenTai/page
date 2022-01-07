import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  formContentSelector,
  formTypeSelector,
  isFormShowSelector,
} from "reducers/form";
import { resetContentValue, reverseIsShowValue } from "actions/form";
import { statusList, typeList } from "constant";
import Modal from "@mui/material/Modal";
import {
  ModalBox,
  ModalTitle,
  ModalContentGroup,
  ModalButtonGroup,
} from "styles/FormModal";
import ModalSelect from "./ModalSelect";
import ModalTextField from "./ModalTextField";
import ModalButton from "./ModalButton";

const textFieldContent = ["Name", "Link", "Image"];

const FormModal = () => {
  const formContentState = useSelector(formContentSelector);
  const isShowState = useSelector(isFormShowSelector);
  const formTypeState = useSelector(formTypeSelector);
  const dispatch = useDispatch();

  const [defaultTypeValue, setDefaultTypeValue] = useState("");
  const [defaultStatusValue, setDefaultStatusValue] = useState("");

  useEffect(() => {
    if (isShowState) {
      setDefaultTypeValue(formContentState.type);
      setDefaultStatusValue(formContentState.status);
    }
  }, [isShowState]); // eslint-disable-line

  const onHandleClose = () => {
    dispatch(reverseIsShowValue());
    dispatch(resetContentValue());
  };

  return (
    <Modal open={isShowState} onClose={onHandleClose}>
      <ModalBox>
        <ModalTitle variant="h5">
          {formTypeState === "add" ? "Add New" : "Edit"}
        </ModalTitle>
        <ModalContentGroup>
          {textFieldContent.map((text) => (
            <ModalTextField key={text} text={text} />
          ))}
        </ModalContentGroup>
        <ModalContentGroup>
          <ModalSelect
            type="Type"
            values={typeList}
            defaultValue={defaultTypeValue}
          />
          <ModalSelect
            type="Status"
            values={statusList}
            defaultValue={defaultStatusValue}
          />
        </ModalContentGroup>
        <ModalButtonGroup>
          <ModalButton bgcolor="#1bc421" handleClose={onHandleClose}>
            {formTypeState}
          </ModalButton>
          <ModalButton bgcolor="#c41b1b" handleClose={onHandleClose}>
            cancel
          </ModalButton>
        </ModalButtonGroup>
      </ModalBox>
    </Modal>
  );
};

export default FormModal;
