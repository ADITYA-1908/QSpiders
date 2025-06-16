import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import App from "./App.jsx";
import { Counterstore } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={Counterstore}>
    <App />
  </Provider>
);
