import React from "react";
import Header from "../Header/Header";
import ItsMe from "../ItsMe/ItsMe";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Interests from "../Intrests/Interests";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";

export default function Home() {
    return (
        <>
            <Header></Header>
            <ItsMe></ItsMe>
            <Skills></Skills>
            <Education></Education>
            <Interests></Interests>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </>
    )
}