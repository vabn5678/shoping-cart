import React from "react";

import Cart from "./Cart";

import Home from "./Home";

import Navbar from "./Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

function App() {

    return (

        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>

                        <Route path="/" element={<Home />}> </Route>
                        <Route path="/cart" element={<Cart />}> </Route>

                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>

    );

}

export default App;