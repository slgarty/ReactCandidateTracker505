import React from 'react'
import { Link } from 'react-router-dom'

const PendingRow = ({ candidate }) => {
    const { firstName, lastName, email, phoneNumber, notes, id } = candidate;
    return (
        <tr>
            <td>
                <Link to={`/details/${id}`}>
                    <button className='btn btn-link'>View Details</button>
                </Link>
            </td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td></tr>
    )
}
export default PendingRow