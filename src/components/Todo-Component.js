import React from "react";
import "../index.css";
import { Col, Button, ButtonGroup } from "react-bootstrap";

const Todo = ({ id, todo, status, dispatch }) => {
  let className = "";
  if (status) {
    className = "done todo";
  } else {
    className = "todo";
  }
  return (
    <Col md={4} lg={4} style={{ padding: "25px", textAlign: "center" }}>
      <span style={{ display: "none" }}>{id}</span>
      <div
        className={className}
        onClick={() =>
          dispatch({
            type: "SHOW_MODAL",
            payload: todo,
          })
        }
      >
        <h4>{todo}</h4>
      </div>
      <ButtonGroup style={{ width: "100%" }}>
        <Button
          onClick={() => {
            dispatch({ type: "REMOVE_TODO", payload: id });
          }}
          variant="danger"
        >
          DELETE
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "COMPLETE_TODO", payload: { id, status } });
          }}
          variant="primary"
        >
          {status ? "UNDO" : "DONE"}
        </Button>
      </ButtonGroup>
    </Col>
  );
};

export default Todo;
