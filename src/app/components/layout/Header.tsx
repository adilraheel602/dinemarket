import Link from 'next/link'
import logo from '/public/logo.webp'
import Image from 'next/image'
import {ShoppingCart} from 'lucide-react'
import { Input } from "../../../../components/ui/input"


const Header = () => {
    return (
        <div className='flex justify-between items-center py-6 px-8' >
            <Image
                src={logo} alt='logo' className='ml-12 w-40'
            />
            <ul className='flex gap-x-10' >
                <li className='text-lg'>
                    <Link href={'/'} >
                        Female
                    </Link>
                </li>
                <li className='text-lg'>
                <Link href={'/'} >
                        Male
                    </Link>
                </li>
                <li className='text-lg'>
                <Link href={'/'} >
                        Kids
                    </Link>
                </li>
                <li className='text-lg'>
                <Link href={'/'} >
                        All Products
                    </Link>
                </li>
            </ul>
            <Input className='h-5 w-40' type="search" placeholder="Search" />
            <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center" >
                <ShoppingCart />
            </div>
        </div>
    )
}

export default Header