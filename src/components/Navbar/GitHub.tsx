import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillGithub, AiFillStar } from "react-icons/ai";

const GitHub: React.FC = () => {
    
    const [totalStars, setTotalStars] = useState<number>();

    useEffect(() => {
        axios.get(`https://api.github.com/repos/dev-yusupov/blogium`)
        .then((response) => {
            setTotalStars(response.data.stargazers_count)
        })
    }, []);

    return (
        <div className="GitHub">
            <a href="https://github.com/dev-yusupov/blogium">
                <AiFillGithub />
            </a>
            <div className="GitHub-Stars">
                <AiFillStar />
                <p>{totalStars}</p>
            </div>
        </div>
    )
}

export default GitHub