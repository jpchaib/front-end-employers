import { useContext, useEffect, useState } from "react";
import CardsContainer from "./components/cardsContainer/CardsContainer";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import style from "./App.module.scss";
import Register from "./components/register/Register";
import { RegisteredEmployersContext } from "./contexts/RegisteredEmployersContext";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function App() {
    const queryClient = new QueryClient();
    const { employers, setEmployers } = useContext(RegisteredEmployersContext);

    return (
        <div className={style.Page}>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <RegisteredEmployersContext.Provider value={{ employers, setEmployers }}>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <div>
                                        <h1>Employer's list</h1>
                                        <div className={style.Bar}>
                                            <p>Please click on 'Edit' to find more details of each employer</p>
                                            <NavLink className={style.Link} to="/register">
                                                Register
                                            </NavLink>
                                        </div>
                                        <CardsContainer />
                                    </div>
                                }
                            ></Route>
                            <Route path="/register" element={<Register />}></Route>
                        </Routes>
                    </RegisteredEmployersContext.Provider>
                </QueryClientProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
