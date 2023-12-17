import { store } from "./state/store";
import App from "./App";
import "./index.css";
import SWRProvider from "./config/swr.config";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import React from "react";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <SWRProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </SWRProvider>
    </React.StrictMode>,
);
