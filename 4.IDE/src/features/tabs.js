import css from "../assets/css.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    lang: "html",
    imgURL: html,
    buttonContent: "HTML",
    code: `<div> 
        <h1> Editeur de code avec React </h1> 
</div>`,
  },
  {
    id: 2,
    lang: "css",
    imgURL: css,
    buttonContent: "CSS",
    code: `body {
            font-family: Roboto, sans-serif;
            padding: 25px;
            color: #111;
            background-color: #f1f1f1;
        }`,
  },
  {
    id: 3,
    lang: "javascript",
    imgURL: js,
    buttonContent: "JavaScript",
    code: `console.log("Hello World");`,
  },
];

export const codeUpdater = createSlice({
  name: "Code-updater",
  initialState,
  reducers: {
    updateCode: (state, action) => {
      state.find((obj) => obj.id === action.payload.id).code =
        action.payload.value;
    },
  },
});

export const { updateCode } = codeUpdater.actions;
export default codeUpdater.reducer;
