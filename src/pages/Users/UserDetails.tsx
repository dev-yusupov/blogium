import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
    const [userData, setUserData] = useState<any[string]>([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            setUserData(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [id])

    return (
        <h1>User Details { userData.name }</h1>
    )
}

export default UserDetails