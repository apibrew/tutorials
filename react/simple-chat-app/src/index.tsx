import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import "./index.css";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Index} from "./pages/Index";
import {ClientImpl, ClientProvider, LocalStorageTokenStorage} from "@apibrew/react";
import {ErrorHandlerContext} from "@apibrew/react";

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

// project-f5fa4e.apibrew.io can be replaced with your project's hostname. You can get it from https://manager.apibrew.io/dashboard/projects => ApbrConfig => Hostname
const client = new ClientImpl('https://project-f5fa4e.apibrew.io:8443')

client.useTokenStorage(new LocalStorageTokenStorage())

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ClientProvider value={client}>
            <ErrorHandlerContext.Provider value={(err) => {
                console.log(err)
            }}>
                <RouterProvider router={router}/>
            </ErrorHandlerContext.Provider>
        </ClientProvider>
    </React.StrictMode>
);