
import React from "react"
import { SlEnvolope } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { SlArrowDown } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import Container from "./Container";
const Homepage = () => {

    return (
        <div className="bg-[#7E33E0]  ">
            <Container>
            <div className="flex justify-between py-4">
            <div className="w-[20%] flex ">
                <div className="font-dm text-[#F1F1F1] text-[11px] lg:px-3 flex  items-center gap-x-1">

                    <SlEnvolope color="white" />
                    <p className="px-2">mhhasanul@gmail.com</p>
                </div>
                <div className="font-dm text-[#F1F1F1] text-[11px] lg:px-12 flex items-center gap-x-1">
                    <LuPhoneCall color="white" />
                    <p className="px-2 ">(12345)67890</p>
                </div>
            </div>

            <div className="flex">

                <div className="font-dm text-[#F1F1F1] text-[11px] lg:px-6 flex items-center gap-x-1 ">
                    <p>English</p>
                    <SlArrowDown color="white" size={8} />
                </div>


                <div className="font-dm text-[#F1F1F1] text-[11px] lg:px-6 flex items-center gap-x-1 ">
                    <p>USD</p>
                    <SlArrowDown color="white" size={8} />
                </div>

                <div className="font-dm text-[#F1F1F1] text-[11px] lg:px-6 flex items-center gap-x-1">
                    <p>Login</p>
                    <IoPersonOutline color="white" size={9} />
                </div>

                <div className="font-dm text-[#F1F1F1] text-[11px] lg:px-6 flex items-center gap-x-1">
                    <p>Wishlist</p>
                    <CiHeart color="white" size={9} />
                    <LuShoppingCart color="white" size={10} />
                </div>

            </div>
            </div>

            </Container>


        </div>
    )


}

export default Homepage

