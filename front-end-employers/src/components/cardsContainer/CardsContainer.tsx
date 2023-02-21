import React from "react";
import { useQuery } from "react-query";
import EmployerCard from "../employerCards/EmployerCard";
import style from "./CardsContainer.module.scss";
import { EmployersResponse, getEmployers } from "../../services/employers";

const CardsContainer = () => {
    const { data, isLoading, error } = useQuery<EmployersResponse>("data", getEmployers);
    if (isLoading) return <h1>"Loading..."</h1>;

    // if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <div className={style.List}>
                {((data as EmployersResponse).data || []).map((employer: any) => {
                    return <EmployerCard key={employer.id} employer={employer} />;
                })}
            </div>
        </div>
    );
};

export default CardsContainer;
