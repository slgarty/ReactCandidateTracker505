import React, { useState, useEffect } from "react";
import axios from "axios";
import PendingRow from "./../Components/PendingRow";



const Pending = () => {
    const [pending, setPending] = useState([]);

    useEffect(() => {
        const getPending = async () => {
            const { data } = await axios.get(`api/candidates/getpending`);
            setPending(data);
        };
        getPending();
    }, [])

    return (
        <div>
            <div className="container" style={{ marginTop: 20 }}>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>View Details</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!pending.length &&
                            pending.map((candidate) => (
                                <PendingRow candidate={candidate} key={candidate.id} />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default Pending;