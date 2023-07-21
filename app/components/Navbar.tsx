import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <div className='sticky top-0 w-full h-20 shadow-md z-[100] bg-white'>
            <div className='flex justufy-between items-center w-full h-full px-4 2xl:px-16 py-10'>
     <Link href={"/"}>
        <Image src={"/logo.png"} alt="" width={100} height={100} className="w-25 h-30 p-90 rounded-full"></Image>
        </Link>
            </div>
        </div>
    )
}

export default Navbar;


