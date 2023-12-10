import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import "./index.css";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {ClientImpl, ClientProvider, ErrorHandlerContext, LocalStorageTokenStorage} from "@apibrew/react";
import App from "./App";
import {List} from "./pages/news-item-crud/List";
import {Add} from "./pages/news-item-crud/Add";
import {Update} from "./pages/news-item-crud/Update";
import {Watch} from "./pages/news-item-crud/Watch";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/news-item-crud",
                element: <List/>,
            },
            {
                path: "/news-item-crud/watch",
                element: <Watch/>,
            },
            {
                path: "/news-item-crud/add",
                element: <Add/>,
            },
            {
                path: "/news-item-crud/:id/update",
                element: <Update/>,
            },
        ]
    },
]);

// project-f5fa4e.apibrew.io can be replaced with your project's hostname. You can get it from https://manager.apibrew.io/dashboard/projects => ApbrConfig => Hostname
const client = new ClientImpl('https://project-250b6b.apibrew.io:8443')

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