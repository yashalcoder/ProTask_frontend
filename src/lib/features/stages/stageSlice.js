import { createSlice, nanoid } from "@reduxjs/toolkit";

//   ya ya array ho skti ya object upto u  and ya
//    initial state ap db sa bhi al skte ya khud bhi define kr skte

const initialState = {
  todos: [],
};
export const asyncAddTodoThunk = async () => {
  const res = await axios.post("/api/addtodo", () => {});
};
export const stageSlice = createSlice({
  name: "stageSlice",
  initialState,
  reducers: {
    //jb bhi ap in reducer ko call kro ga to ap ko do cheeza mile gi sttae,action
    //state mtlb current state and action mtlb id wegara jis pr action
    //action.payload its an object
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      //simple jo id sa match ni krre wo rakh da ga todos state mein
    },
    updateTodo: (state, action) => {
      //map hameesha newa array return krta hai to is lia tunha sara proeprties ...todos same
      // rakhni srf joc hange krni wo specifically bdlo jese title
      const todoChange = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    },
  },
});
export const { addTodo, deleteTodo, updateTodo } = stageSlice.actions;
export default stageSlice.reducer; //for store  reducesers chhaye
