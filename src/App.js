import { useReducer } from "react";
import { Container, Row } from "react-bootstrap";
import Todo from "./components/Todo-Component";
import AddTodo from "./components/AddTodo-Component";
import ShowTodo from "./components/ShowTodo-Compenent";
import data from "./todo";
import { reducer } from "./reducer";

function App() {
  // initail state of the Todo List
  const initialState = {
    data: data,
    showModal: false,
    todo: "",
  };
  // using the useReducer Hook to add/remove Todos
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container className="p-5" style={{ textAlign: "center" }}>
      <h1>REACT TODO</h1>
      <AddTodo dispatch={dispatch}></AddTodo>
      <Row>
        {state.data.map((todo) => {
          return <Todo {...todo} dispatch={dispatch} key={todo.id} />;
        })}
      </Row>
      <ShowTodo
        toShow={state.showModal}
        todo={state.todo}
        dispatch={dispatch}
      />
    </Container>
  );
}

export default App;
