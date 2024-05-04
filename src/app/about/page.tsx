"use client";
import { useState, useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent"

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

function about() {


    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="bg-white text-black">
            <NavbarComponent />
            <div className="flex justify-around gap-[50px] items-center content-center mt-[50px]">
                <div className="text-left text-[10vw] w-[70vw]">
                    <h1 data-aos="fade-down" className="font-bold text-black text-[3vw] mb-">About Me</h1>
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

            <section className="items-center text-center justify-center">
                <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-4">
                    <Card className="text-left">
                        <CardHeader>Card Header</CardHeader>
                        <CardBody>
                            card body
                        </CardBody>
                    </Card>
                </div>
            </section>
        </div>
    )
}

export default about