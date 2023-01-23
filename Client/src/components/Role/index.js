import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries';

const Role = () => {
    const { data} = useQuery(QUERY_USERS);

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchUsers = async () => {
          setLoading(true);
          const res = await data;
          setUsers(data.users);
          setLoading(false);
        }
    
        fetchUsers();
      }, [data]);
    return (

       
        <div>
            <table className="userTable">
    
         
    <thead className="tHeader">
      <tr>
      <th>Username</th>             
      <th>Email</th>
      </tr>
      </thead>
    {users.map((users) => 
      <tbody key={users.id} className="tBody">
        
        <tr>
          <td>{users.username}</td>
          <td>{users.email}</td>
    
        </tr>
      </tbody>
   )}
    
    

</table>
        

    
    



        </div>
    )
}

export default Role;