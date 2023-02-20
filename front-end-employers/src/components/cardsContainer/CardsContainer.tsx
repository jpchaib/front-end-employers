import React from "react";
import { useQuery } from "react-query";
import EmployerCard from "../employerCards/EmployerCard";
import style from "./CardsContainer.module.scss";

const CardsContainer = () => {
    const { data, isLoading, error } = useQuery("data", () => fetch("http://localhost:8080/employers").then((response) => response.json()), { staleTime: 10000 });
    if (isLoading) return <h1>"Loading..."</h1>;
    console.log(data[0].firstname);

    // if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <div className={style.List}>
                {data.map((employer: any) => {
                    return <EmployerCard key={employer.id} employer={employer} />;
                })}
            </div>
        </div>
    );
};

export default CardsContainer;
