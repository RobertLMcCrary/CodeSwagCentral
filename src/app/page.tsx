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
    price: String,
    image: String,
    link: String,
}

const featuredProducts: featuredProduct[] = [
    {
        id: 1,
        title: "first product",
        price: "$20.00",
        image: "image src",
        link: "link to etsy"
    },
    {
        id: 2,
        title: "second product",
        price: "$20.00",
        image: "image src",
        link: "link to etsy"
    },
    {
        id: 3,
        title: "third product",
        price: "$20.00",
        image: "image src",
        link: "link to etsy"
    },
    {
        id: 4,
        title: "fourth product",
        price: "$20.00",
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

            <div className="items-center text-center my-[100px]">
                <h1 data-aos="fade-left" className="text-4xl text-black font-bold">Featured Products</h1>
                <div className="grid sm:grid-cols-4 grid-cols-1 mx-[20px] gap-[2vw] my-[50px]">
                    {featuredProducts.map((product) => (
                        <Card data-aos="flip-up" key={product.id}>
                            <CardBody className="text-center items-center">
                                <CardHeader as={Link} href={product.link} className="text-3xl text-black font-bold">{product.title}</CardHeader>
                                <Image src="/LogoSmall.png" className="w-[250px] h-[250px] border-solid border-blue-500 border-1" />
                                <CardFooter>{product.price}</CardFooter>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="items-center flex flex-col gap-[50px] text-center my-[30px]">
                <h1 data-aos="fade-left" className="text-4xl text-black font-bold">Some of our Designs</h1>
                <Image data-aos-delay="500" data-aos="fade-right" src="/Vim = Chad.png" className="h-[70vh] border-solid border-slate-200 border-1" />
                <Image data-aos-delay="500" data-aos="fade-left" src="/TypeScript  JavaScript.png" className="h-[70vh] border-solid border-slate-200 border-1" />
                <Image data-aos-delay="500" data-aos="fade-right" src="/Windows  Linux.png" className="h-[70vh] border-solid border-slate-200 border-1" />
                <Button as={Link} href="/products" color="danger">Shop All Products</Button>
            </div>
            <Footer />
        </div>
    );
}

export default Home