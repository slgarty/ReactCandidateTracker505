import React, { useState, useEffect } from "react";
import axios from "axios";
import PendingRow from "./../Components/PendingRow";
import CandidateRow from "../Components/CandidateRow";



const Confirmed = () => {
    const [confirmed, setConfirmed] = useState([]);

    useEffect(() => {
        const getConfirmed = async () => {
            const { data } = await axios.get(`api/candidates/getConfirmed`);
            setConfirmed(data);
        };
        getConfirmed();
    }, [])

    return (
        <div>
            <div className="container" style={{ marginTop: 20 }}>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!confirmed.length &&
                            confirmed.map((candidate) => (
                                <CandidateRow candidate={candidate} key={candidate.id} />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}


export default Confirmed;