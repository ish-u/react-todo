import { React, useState } from "react";
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";

const AddTodo = ({ dispatch }) => {
  const [todo, setTodo] = useState("");
  return (
    <Container style={{ textAlign: "center", padding: "25px" }}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Write Todo"
          aria-label="Username"
          type="text"
          name="todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
      </InputGroup>
      <Button
        onClick={() => {
          if (todo) {
            dispatch({ type: "ADD_TODO", payload: todo });
            setTodo("");
          }
        }}
        variant="outline-dark"
      >
        Add TODO
      </Button>
    </Container>
  );
};

export default AddTodo;
