"use client";
import React, { useEffect, useState } from 'react';
import NavbarComponent from "../components/NavbarComponent"
import Footer from "../components/Footer";

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

//making the products list
//making the featured products
type product = {
    id: number,
    title: String,
    item: String,
    price: number,
    image: String,
    link: String,
}

const products: product[] = [
    {
        id: 1,
        title: "first product",
        item: "Tee shirt",
        price: 20,
        image: "image src",
        link: "link to etsy"
    },
    {
        id: 2,
        title: "second product",
        item: "coffee mug",
        price: 20,
        image: "image src",
        link: "link to etsy"
    }
]


const Page = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className='bg-white text-black'>
            <NavbarComponent />
            <h1 className='my-[20px] text-3xl font-bold'>Products</h1>
            <div className="grid sm:grid-cols-4 grid-cols-1 mx-[20px] gap-[2vw] my-[20px]">
                {products.map((product) => (
                    <Card key={product.id}>
                        <CardBody className='text-center items-center'>
                            <CardHeader className="text-2xl font-bold">{product.title}</CardHeader>
                            <Image src="/LogoSmall.png" className="w-[250px] h-[250px] border-solid border-blue-500 border-1" />
                            <CardFooter>{product.price}</CardFooter>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Page;
