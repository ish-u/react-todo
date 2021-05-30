import { React } from "react";
import { Modal } from "react-bootstrap";

const EditTodo = ({ dispatch, toShow, todo }) => {
  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <div>
      <Modal show={toShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>{todo}</Modal.Body>
      </Modal>
    </div>
  );
};

export default EditTodo;
