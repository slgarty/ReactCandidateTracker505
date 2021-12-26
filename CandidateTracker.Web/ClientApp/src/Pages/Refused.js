import React, { useState, useEffect } from "react";
import axios from "axios";
import PendingRow from "./../Components/PendingRow";
import CandidateRow from "../Components/CandidateRow";



const Refused = () => {
    const [refused, setRefused] = useState([]);

    useEffect(() => {
        const getRefused = async () => {
            const { data } = await axios.get(`api/candidates/getrefused`);
            setRefused(data);
        };
        getRefused();
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
                        {!!refused.length &&
                            refused.map((candidate) => (
                                <CandidateRow candidate={candidate} key={candidate.id} />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}


export default Refused;