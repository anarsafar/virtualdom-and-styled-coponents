import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// diff algo

// const update = () => {
//   const ui = (
//     <>
//       <h1>JS DOM</h1>
//       <input type="text" />
//       <p>Time {new Date().toLocaleTimeString()}</p>
//     </>
//   );
// document.querySelector("body").innerHTML = ui;
//   root.render(ui);
// };

// setInterval(update, 1000);

root.render(<App />);
