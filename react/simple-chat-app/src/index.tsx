import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Index} from "./pages/Index";
import {ClientImpl, ClientProvider, LocalStorageTokenStorage} from "@apibrew/react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
]);

const client = new ClientImpl('http://localhost:9009')

client.useTokenStorage(new LocalStorageTokenStorage())

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ClientProvider value={client}>
            <RouterProvider router={router}/>
        </ClientProvider>
    </React.StrictMode>
);