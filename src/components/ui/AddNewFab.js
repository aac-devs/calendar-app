import React from "react";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/uiActions";

export const AddNewFab = () => {
  const dispatch = useDispatch();
  const handleNewEvent = () => {
    dispatch(uiOpenModal());
  };
  return (
    <button className="btn btn-primary fab" onClick={handleNewEvent}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
