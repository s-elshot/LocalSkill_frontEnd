import React, {useEffect, useState} from 'react';
import axios from "axios";



function User() {

    const [users, setUsers] = useState(null);

    const fetchUsers = () => {
        axios.get("http://localhost:8080/customer").then(res => { setUsers(res.data)
        });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // useEffect(() => {

    //     async function fetchData() {
    //         try {
    //             const {data} = await axios.get("http://localhost:8080/item");
    //
    //             console.log(data[0].name)
    //             console.log(data[0].description)
    //             console.log(data[0].price)
    //             console.log(data[0].content)
    //             setItems(data);
    //
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    //
    //     fetchData();
    // }, []);


    return (
        users && users.map((user, index) => {
            return <div key={index} >
                {/*<h3>{item.content}</h3>*/}
                <h4>Name: {user.firstName} {user.lastName}</h4>
                <p>Area code: {user.areaCode}</p>
                <p>City: {user.city}</p>
            </div>

        })

    )
}


export default User;