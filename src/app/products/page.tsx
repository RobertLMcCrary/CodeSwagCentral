"use client";
import React, { useEffect, useState } from 'react';
import NavbarComponent from "../components/NavbarComponent"
import Footer from "../components/Footer";

//axios
import axios from 'axios';

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


const products = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className='bg-white text-black'>
            <NavbarComponent />

            <Footer />
        </div>
    );
};

export default products;
