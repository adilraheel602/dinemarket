import React from "react";
import Link from "next/link";
import { ShoppingCart } from 'lucide-react'
import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import brownImage from '/public/brown.webp' 
import heroImage from '/public/hero-img.webp'
import logo1Image from '/public/logo1.webp'
import logo2Image from '/public/logo2.webp'
import logo3Image from '/public/logo3.webp'
import logo4Image from '/public/logo4.webp'
import promo1 from '/public/promotion1.webp'
import promo2 from '/public/promotion2.webp'
import promo3 from '/public/promotion3.webp'
import logo from '/public/logo.webp'
import Image from "next/image";
import twitterTag from "/public/twitter-logo.png"
import linkedinTag from "/public/linkedin-transparent.png"
import fbTag from "/public/fb-transparent.png"
import P1 from "/public/p1.webp"
import P2 from '/public/p2.webp'
import P3 from '/public/p3.webp'
import ProductCart from '../components/layout/ProductCart'
import { Input } from "../../../components/ui/input"


const Hero = () => {
    return (
        <section className="">
            <section className="flex flex-col lg:flex-row gap-y-10 ml-12 pt-16" >
                {/* Left Div */}
                <div className="flex-1 " >
                    <Badge className="py-3 px-6 mt-4 w-30 h-10 text-sm font-semibold rounded-lg bg-blue-100 text-blue-900" >Sale 70%</Badge>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-12">
                        An Industrial Take on Streetwear
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-8 font-semibold">
                        Anyone can beat you but no one can beat </p>
                    <p className="leading-7 [&:not(:first-child)]: font-semibold">your outfit as long as you wear Dine outfits.
                    </p>
                    <Button className="bg-black w-40 h-20 p-8 mt-8" > <ShoppingCart /> Start Shopping</Button>
                    <div className="flex py-8 mt-4 ml-2 gap-x-10" >
                        <Image src={logo4Image} className="" alt="logos Image" />
                        <Image src={logo3Image} className="" alt="logos Image" />
                        <Image src={logo2Image} className="" alt="logos Image" />
                        <Image src={logo1Image} className="" alt="logos Image" />
                    </div>
                    <div>

                    </div>
                </div >
                {/* Right Div */}
                <div className="flex-1 bg-pink-100 rounded-full" >
                    <Image alt='hero' className="h-65" src={heroImage} />
                </div>
            </section>
            <section className="flex-1 " >
                <h1 className="flex text-blue-700 mt-16 justify-center font-bold " >PROMOTIONS</h1>
                <h1 className="flex justify-center text-2xl mt-12 font-bold" >Our Promotions Events</h1>
                <div className="flex justify-between gap-x-4 w-full h-screen items-center mt-12 lg:flex-row ml-8 py-6"  >
                    <div className="flex sm:flex-col w-full " >
                        <div className="flex justify-between h-60 bg-gray-300" >
                            <div className="flex flex-col flex-grow ml-8 mb-16 justify-left" >
                                <h1 className="flex font-bold text-xl mt-16" >
                                    GET UP</h1>
                                <p className="text-xl font-bold" > TO 60%</p>
                                <p className="text-xl" >For the</p>
                                <p className="text-xl" >summer</p>
                                <p className="text-xl" >season</p>
                            </div>
                            <div className="flex justify-end items-end" >
                                <Image
                                    src={promo1}
                                    alt="Image"
                                    className=""
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-2 bg-gray-700  text-white" >
                            <p className="text-4xl font-bold p-5" >GET 30% OFF </p>
                            <p className="p-2" >USE PROMO CODE</p>
                            <Button className="flex p-5 mb-6" >DINEWEEKENDSALE</Button>
                        </div>
                    </div>
                    <div className="flex sm:flex-col w-full bg-amber-200 flex-initial" >
                        <p className="flex mt-4 ml-4 justify-start items-start text-xl text-black " >Flex Sweatshirt</p>
                        <p className="flex justify-start ml-4 text-xl text-black " > $75.00 from $100.00</p>
                        <div className="flex justify-center" >
                            <Image
                                src={promo2}
                                alt="Image"
                                className=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mr-16 w-full bg-gray-300" >
                        <p className="flex justify-left mt-4 ml-4 text-xl text-black " >Flex Push Button Bomber</p>
                        <p className="flex justify-left  ml-4 text-xl text-black " > $190.00 from $225.00</p>
                        <div className="flex justify-center">
                        <Image
                            src={promo3}
                            alt="Image"
                            className=""
                        />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-20 " >
                    <h1 className="font-bold text-blue-700" >PRODUCTS</h1>
                    <p className="font-bold mt-10 text-3xl text-black-700" >Check What we Have</p>
                    <div className='flex justify-between mt-16' >
                        <div className="hover:bg-blue-300 " > <ProductCart title='Brushed Raglan Sweatshirt' price={195} img={P3} /></div>
                        <ProductCart title='Cameryn Sash Tie Dress' price={545} img={brownImage} />
                        <ProductCart title='Flex Sweatshirt' price={175} img={P3} />
                    </div>
                </div>
            </section>
            <section className="flex mt-16 justify-around " >
                <div className="" ></div>
                <div></div>
                <div></div>
                <div>
                    <h1 className=" flex-1 text-left ml-16 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6" >
                        Unique and
                    </h1>
                    <h1 className=" flex-1 text-left ml-16 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6" >
                        Authentic Vintage
                    </h1>
                    <h1 className=" flex-1 text-left ml-16 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6" >
                        Designer
                    </h1>
                    <h1 className=" flex-1 text-left ml-16 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6" >
                        Jewellery
                    </h1>
                </div>
            </section>
            <section className="flex-1 lg:flex-row ml-8 bg-gray-100 justify-evenly gap-y-10 py-6 gap-x-4" >
                <div className="w-3/12">
                    <h1 className="flex font-bold pt-20 ml-8" >Using Good Quality </h1>
                    <h1 className="flex font-bold ml-8" >Materials </h1>
                    <p className="flex mt-2 mb-8 ml-8" >Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    <h1 className="flex font-bold ml-8" >Modern Fashion Design</h1>
                    <p className="flex mt-2 mb-8 ml-8" >Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div className="w-3/12">
                    <h1 className="flex font-bold pt-20" >100% Handmade</h1>
                    <h1 className="flex font-bold" >Products</h1>
                    <p className="flex mt-2 mb-8" >Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    <h1 className="font-bold" >Discount for Bulk Orders</h1>
                    <p className="flex mb-8" >Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <Image
                        src={P1}
                        className="flex"
                        alt="Image"
                    />
                </div>
                <div className="flex flex-col justify-center text-justify mr-2 w-2/12" >
                    <p>
                        This piece is ethically
                        licrafted in our small
                        family-owned workshop
                        in Peru with unmatched
                        attention to detail and
                        care. The Natural color
                        is the actual natural
                        color of the fiber,
                        undyed and 100%
                        traceable.
                    </p>
                    <div className=" flex" >
                        <Button type="submit" className="flex pl-4 h-4/12 w-7/12 mt-28" >See All Product</Button>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center pt-40" >
                <div className="flex font-bold text-4xl justify-center" >Subscribe Our Newsletter</div>
                <div className="flex pt-6 justify-center" >Get the latest information and promo offers directly</div>
                <div className="flex pt-10 pb-28 justify-center">
                    <Input type="email" className="h-10 w-80 border-black " placeholder="Email" />
                    <Button type="submit" className="ml-2" >Get Started</Button>
                </div>
            </section>
            <section className="flex flex-col justify-evenly lg:flex-row gap-y-10 py-6 gap-x-40" >
                <div className="flex flex-col text-justify" >
                    <Image
                        src={logo} alt='logo' className='w-40'
                    />
                    <p className="mt-8" >Small, artisan label that offers a</p>
                    <p>thoughtfully curated collection of high</p>
                    <p>quality everyday essentials made.</p>
                    <div className="flex justify-left mt-12 gap-x-8" >
                        <div>
                            <Image
                                src={twitterTag}
                                className="flex ml-4 w-7 h-7"
                                alt="twitter"
                            />
                        </div>
                        <div>
                            <Image
                                src={fbTag}
                                className="flex w-7 h-7"
                                alt=""
                            />
                        </div>
                        <div>
                            <Image
                                src={linkedinTag}
                                className="flex w-7 h-7"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2 " >
                    <h1 className="text-xl font-bold" >Company</h1>
                    <Link
                        href='/'
                        className="mt-7"
                    >About</Link>
                    <Link
                        href='/'
                    >Terms of Use</Link>
                    <Link
                        href='/'
                    >Privacy Policy</Link>
                    <Link
                        href='/'
                    >How It Works</Link>
                    <Link
                        href='/'
                    >Contact Us</Link>
                </div>
                <div className="flex flex-col gap-y-2"  >
                    <h1 className="text-xl font-bold" >Support</h1>
                    <Link
                        href='/'
                        className="mt-6"
                    >Support Carrier</Link>
                    <Link
                        href='/'
                    >24-hour Service</Link>
                    <Link
                        href='/'
                    >Quick Chat</Link>
                </div>
                <div className="flex flex-col gap-y-2 pr-20">
                    <h1 className="text-xl font-bold" >Contact</h1><Link
                        href='/'
                        className="mt-4"
                    >Whatsapp</Link>
                    <Link
                        href='/'
                    >Support 24h</Link>
                </div>
            </section>
        </section>
    )
}

export default Hero