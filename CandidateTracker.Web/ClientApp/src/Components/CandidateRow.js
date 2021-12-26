import React from 'react'


const CandidateRow = ({ candidate }) => {
    const { firstName, lastName, email, phoneNumber, notes } = candidate;
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
            <td>{notes}</td>
        </tr>
    );

}

export default CandidateRow;