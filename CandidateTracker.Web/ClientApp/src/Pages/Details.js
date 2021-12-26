import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Context } from '../Components/Context';

const Details = () => {
    const ctx = useContext(Context);
    const [candidate, setCandidate] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        notes: "",
        status: "",
    });
    const { id } = useParams();
    const history = useHistory(); useEffect(() => {
        const getCandidateById = async () => {
            const { data } = await axios.get(`api/candidates/details?id=${id}`);
            setCandidate(data);
        };
        getCandidateById();
    }, []);

    const onButtonClick = async e => {
        const copy = { ...candidate };
        copy.status = e.target.name;
        await axios.post("api/candidates/updatecandidate", copy);
        ctx.updateCounts();
        history.push("/");
    };
    const { firstName, lastName, email, phoneNumber, notes } = candidate;

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Name: {firstName} {lastName}</h4>
                        <h4>Email: {email}</h4>
                        <h4>Phone: {phoneNumber}</h4>
                        <h4>Status: Pending</h4>
                        <h4>Notes: {notes}</h4>
                        <p></p>
                        <div><button className="btn btn-primary" onClick={onButtonClick} name='confirmed' > Confirm</button>
                            <button class="btn btn-danger" onClick={onButtonClick} name='refused' >Refuse</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )

}

export default Details;