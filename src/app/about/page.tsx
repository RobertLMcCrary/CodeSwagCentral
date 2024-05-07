"use client";
import { useState, useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent"
import Footer from "../components/Footer"

//AOS
import AOS from 'aos'
import 'aos/dist/aos.css';

//nextui
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Image,
    Link,
    Card,
    CardHeader,
    CardBody,
} from "@nextui-org/react"

//socials
type Social = {
    name: string,
    logo: string,
    id: number,
    userName: string,
    link: string,
}

const Socials: Social[] = [
    {
        name: "YouTube",
        logo: "/YouTubeLogo.jpg",
        id: 1,
        userName: "Robert McCrary",
        link: "https://www.youtube.com/channel/UC5YXlEImyvxjQnEcpSVd3GA"
    },
    {
        name: "LinkedIn",
        logo: "LinkedInLogo.jpg",
        id: 2,
        userName: "Robert McCrary",
        link: "https://www.linkedin.com/in/robert-mccrary-388b73287/"
    },
    {
        name: "GitHub",
        logo: "GitHub-Logo.png",
        id: 3,
        userName: "RobertLMcCrary",
        link: "https://github.com/RobertLMcCrary"
    }
]

function about() {


    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="bg-white text-black">
            <NavbarComponent />
            <div className="flex justify-around gap-[50px] items-center content-center my-[50px]">
                <div className="text-left text-[10vw] w-[70vw]">
                    <h1 data-aos="fade-down" className="font-bold text-black text-[5vw] mb-[30px]">About Me</h1>
                    <p data-aos="fade-right" className="text-[1.5vw]">
                        Hello, my name is Robert McCrary and I am the founder of CodeSwagCentral.
                        I am currently a freshman studying computer science at Kennesaw State University.
                        My YouTube channel was started mainly to inspire people to start coding and live
                        a more fulfilling and productive life. Quickly after I started my channel I had an idea,
                        what if I could wear a shirt to represent my favorite programming language? And then that
                        got me thinking, what if I could wear a shirt that shows my favorite IDE or operating system on it?
                        These products are a way that you can support your favorite programming languages,
                        operating systems, code editors, and programming hot takes.
                    </p>
                </div>
                <div data-aos="fade-left">
                    <Image className="p-0 rounded-full" src="/ProfilePicture.png" alt="my photo" />
                </div>
            </div>

            <section className="items-center text-center justify-center my-[50px]">
                <h1 className="text-[5vw] font-bold">My Socials</h1>
                <div className="w-[80vw] mx-[20vw] items-center text-center">
                    {Socials.map((Social) => (
                        <Card data-aos="flip-down" className="w-[60vw] my-[20px] text-center items-center" key={Social.id}>
                            <CardHeader className="text-5xl font-bold text-center"><h1>{Social.name}</h1></CardHeader>
                            <CardBody className="text-center items-center">
                                <a href={Social.link}><Image className="w-[400px]" src={Social.logo} /></a>
                                <h1 className="font-bold text-4xl m-[30px]">{Social.userName}</h1>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default about