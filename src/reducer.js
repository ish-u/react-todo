import { v4 as uuidv4 } from "uuid";
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [
          ...state.data,
          {
            todo: action.payload,
            id: uuidv4(),
            status: false,
          },
        ],
      };
    case "COMPLETE_TODO":
      const newData = state.data.map((todo) => {
        if (todo.id === action.payload.id) {
          todo["status"] = !action.payload.status;
        }
        return todo;
      });
      return { ...state, data: newData };
    case "REMOVE_TODO":
      const afterRemoveData = [];
      state.data.forEach((todo) => {
        if (todo.id !== action.payload) {
          afterRemoveData.push(todo);
        }
      });
      return { ...state, data: afterRemoveData };
    case "SHOW_MODAL":
      return { ...state, showModal: true, todo: action.payload };
    case "CLOSE_MODAL":
      return { ...state, showModal: false, todo: "" };

    default:
      Error("YOU DID SOMETHING YOU WERE NOT SUPPOSE TO DO");
      break;
  }
};
