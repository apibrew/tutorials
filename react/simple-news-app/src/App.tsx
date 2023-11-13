import React from 'react';
import './App.css';
import {ClientImpl} from "@apibrew/client/impl/client-impl";
import {ClientProvider, LocalStorageTokenStorage} from "@apibrew/react";
import {IndexPage} from "./pages";

const client = new ClientImpl('https://manager.apibrew.io:8443')
client.useTokenStorage(new LocalStorageTokenStorage())

function App() {
    return (
        <div className="App">
            <ClientProvider value={client}>
                <IndexPage/>
            </ClientProvider>
        </div>
    );
}

export default App;
