import React from "react";
import { Navbar } from "../../components";
import MainSection from "./sections/MainSection";

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <MainSection />
        </>
    )
}

export default Home