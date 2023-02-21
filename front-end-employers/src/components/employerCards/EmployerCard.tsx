import React from "react";
import style from "./EmployerCard.module.scss";

interface EmployerCardProps {
    employer: any;
}

const EmployerCard: React.FC<EmployerCardProps> = ({ employer }) => {
    console.log(employer);
    return (
        <div className={style.Item}>
            <div className={style.Card}>
                <h2>{employer.firstname + " " + employer.lastname}</h2>
                <p>{employer.finishdate - employer.startdate}</p>
                <p>{employer.email}</p>
            </div>
            <div className={style.Options}>
                <button>Edit</button>
                <p>|</p>
                <button>Remove</button>
            </div>
        </div>
    );
};

export default EmployerCard;
