import React from "react";
import style from "./EmployerCard.module.scss";

interface EmployerCardProps {
    employer: any;
}

const EmployerCard: React.FC<EmployerCardProps> = ({ employer }) => {
    console.log(employer);
    return (
        <div className={style.Card}>
            <h2>{employer.firstname + " " + employer.lastname}</h2>
            <p>{employer.email}</p>
        </div>
    );
};

export default EmployerCard;
