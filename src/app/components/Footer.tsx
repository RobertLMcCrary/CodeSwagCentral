import React from 'react'

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

function Footer() {
    return (
        <div className='flex justify-around items-center border-solid text-black border-gray-500 border-t-1 py-[20px] mt-[30px] bg-gray-100'>
            <div className='flex flex-col'>
                <h1 className='text-xl font-bold'>CodeSwagCentral</h1>
                <Link href='https://codeswagcentral.etsy.com' className='cursor-pointer text-black hover:underline'>Shop on Etsy</Link>
            </div>

            <div className='flex flex-col'>
                <h1 className="text-xl font-bold">My Socials:</h1>
                <Link href='https://www.youtube.com/channel/UC5YXlEImyvxjQnEcpSVd3GA' className='hover:underline text-black'>YouTube</Link>
                <Link href='https://www.linkedin.com/in/robert-mccrary-388b73287/' className='hover:underline text-black'>LinkedIn</Link>
                <Link href='https://github.com/RobertLMcCrary' className='hover:underline text-black'>GitHub</Link>
            </div>
        </div>
    )
}

export default Footer
