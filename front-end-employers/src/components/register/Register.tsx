import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Employer } from "../../services/employers";

const Register = () => {
    const [formState, setFormState] = useState<Employer>({
        id: 1,
        name: "test",
    });
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/");
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event);
    };

    return (
        <div>
            <div>
                <h1>Register a new employer</h1>
            </div>
            <form action="submit" onSubmit={handleSubmit}>
                <h2>Personal information</h2>
                <label htmlFor="firstname">First Name</label>
                <input id="firstname" type="text" />
                <label htmlFor="lastname">Last Name</label>
                <input id="lastname" type="text" />
                <h2>Contact details</h2>
                <label htmlFor="email">Email address</label>
                <input id="email" type="text" />
                <label htmlFor="mobile">Mobile Number</label>
                <input id="mobile" type="text" />
                <label htmlFor="address">Residential address</label>
                <input id="address" type="text" />
                <h2>Employer status</h2>
                <p>What is the contract type?</p>
                <label htmlFor="ispermanent">
                    Permanent
                    <input type="radio" id="permanent" name="ispermanent" value="true" />
                </label>
                <label htmlFor="ispermanent">
                    Contract
                    <input type="radio" id="contract" name="ispermanent" value="false" />
                </label>
                <h2>Start date</h2>
                <label htmlFor="startdate">
                    Start
                    <input type="date" id="startdate" />
                </label>
                <label htmlFor="finishdate">
                    Finish
                    <input type="date" id="finishdate" />
                </label>
                <h2>Is this on a full-time or part-time basis?</h2>
                <label htmlFor="fulltime">
                    Full-time
                    <input type="radio" id="fulltime" name="isfulltime" value="true" />
                </label>
                <label htmlFor="partime">
                    Part-time
                    <input type="radio" id="partime" name="isfulltime" value="false" />
                </label>
                <button type="submit">Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default Register;
