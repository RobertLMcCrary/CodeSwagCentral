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
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from "@nextui-org/react"

//making the featured products
type featuredProduct = {
    id: number,
    title: String,
    price: number,
    image: String,
    link: String,
}

const featuredProducts: featuredProduct[] = [
    {
        id: 1,
        title: "first product",
        price: 20,
        image: "image src",
        link: "link to etsy"
    },
    {
        id: 2,
        title: "second product",
        price: 20,
        image: "image src",
        link: "link to etsy"
    }
]

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

            <div className="items-center text-center my-[30px]">
                <h1 data-aos="fade-up" className="text-4xl text-black font-bold">Featured Products</h1>
                <div className="grid sm:grid-cols-4 grid-cols-1 mx-10vw gap-[2vw]">
                    {featuredProducts.map((product) => (
                        <Card key={product.id}>
                            <CardHeader>{product.title}</CardHeader>
                            <CardFooter>{product.price}</CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="items-center text-center my-[30px]">
                <h1 data-aos="fade-up" className="text-4xl text-black font-bold">Clothing Made For Developers</h1>
                {/* images of shirts */}
            </div>
            <Footer />
        </div>
    );
}

export default Home