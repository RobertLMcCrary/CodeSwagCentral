import { useState, useEffect } from "react";

//nextui
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Image,
    Link
} from "@nextui-org/react"


function navbar() {
    return (
        <Navbar maxWidth="full" className="bg-gray-100 border-solid border-b-1 border-gray-400 flex justify-between items-center h-[100px]">
            <NavbarContent className="justify-start">
                <NavbarBrand>
                    <Image className="w-[30vw]" src="/CodeSwagCentralLogo.png" alt="CodeSwagCentral Logo" />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="justify-end">
                <div className="flex gap-[1vw]">
                    <Link href="/" className="cursor-pointer text-black transition-all duration-300 ease-in-out hover:underline">Home</Link>
                    <Link href="/products" className="cursor-pointer text-black transition-all duration-300 ease-in-out hover:underline">Products</Link>
                    <Button as={Link} href="https://codeswagcentral.etsy.com" color="danger">Shop on Etsy</Button>
                </div>
            </NavbarContent>
        </Navbar>
    )
}

export default navbar;