"use client";
import { useState, useEffect } from "react";
import NavbarComponent from "../app/components/NavbarComponent"
import Footer from "./components/Footer";

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
} from "@nextui-org/react"

function Home() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="bg-white">
            <NavbarComponent />
            <div className="bg-white">
                <Image className="w-[100vw]" src="/CodeSwagCentral Banner.png" />
            </div>
            <div className="items-center text-center mt-20">
                <h1 data-aos="fade-up" className="text-4xl text-black font-bold">Featured Products</h1>
            </div>
            <div className="items-center text-center mt-20">
                <h1 data-aos="fade-up" className="text-4xl text-black font-bold">Clothing Made For Developers</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Home