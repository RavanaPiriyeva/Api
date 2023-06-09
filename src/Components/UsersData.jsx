import React from 'react'
import { Link } from 'react-router-dom'


const UsersData = ({data}) => {
  return (
    <tbody>
        {
       data && data.map(
                ({id, name, email, company: { name: companyName } }, i) =>(
                    <tr key={id}>
                    <th scope="row">{i}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{companyName}</td>
                    <td><Link to={`/UsersPost/${id}`} className='btn btn-primary'>See Post</Link></td>
                  </tr>
                )
              )
            }
    </tbody>
  )
}

export default UsersData