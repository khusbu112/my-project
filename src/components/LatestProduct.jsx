import React from 'react'
import Container from './Container'
import chair from "../assets/lpi.png"
import chair2 from "../assets/lpi.png"
import chair3 from "../assets/lpi.png"
import chair4 from "../assets/lpi.png"
import chair5 from "../assets/lpi.png"
import chair6 from "../assets/lpi.png"
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomIn } from "react-icons/md";

const LatestProduct = () => {
  return (
    <Container className={`py-[129px]`}>
    <div className=" text-center">
        <h2 className='text-[42px] text-[#151875] font-josefin font-bold'>Leatest Products</h2>
    </div>

    <div className="pt-5">
        <div className="">
            <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="me-2" role="presentation">
                    <button className="inline-block  text-[18px] text-[#151875] font-lato font-normal" id="arrival-tab" data-tabs-target="#arrival" type="button" role="tab" aria-controls="arrival" aria-selected="false">New Arrival</button>
                </li>
                <li className="me-2 px-[60px]" role="presentation">
                    <button className="inline-block  text-[18px] text-[#151875] font-lato font-normal" id="seller-tab" data-tabs-target="#seller" type="button" role="tab" aria-controls="seller" aria-selected="false">Best Seller</button>
                </li>
                <li className="me-2 pr-[60px]" role="presentation">
                    <button className="inline-block  text-[18px] text-[#151875] font-lato font-normal" id="featured-tab" data-tabs-target="#featured" type="button" role="tab" aria-controls="featured" aria-selected="false">Featured</button>
                </li>
                <li className="me-2" role="presentation">
                    <button className="inline-block  text-[18px] text-[#151875] font-lato font-normal" id="offer-tab" data-tabs-target="#offer" type="button" role="tab" aria-controls="offer" aria-selected="false">Special Offer</button>
                </li>
                
            </ul>
        </div>

        <div >
            <div className="pt-[62px]">
                <div className="">
                <div className="flex justify-between">
                    <div className="w-[33%]">
                        <div className="relative group overflow-hidden">
                        <div className=" w-[360px] h-[306px] bg-[#F7F7F7] group-hover:bg-transparent duration-500">
                            <div className=" pt-[33px] pb-[8px] pl-[73px] pr-[64px]">
                                <img src={chair} alt="" />
                            </div>
                            <div className="">
                                <div className="flex justify-between bg-[#fff] pb-[20px] pt-[5px]">
                                    <h4 className='text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]'>Comfort Handy Craft</h4>
                                    <h6 className='text-[16px] text-[#151875] font-josefin font-normal'>$42.00</h6>
                                </div>
                            </div>

                            <div className="absolute bottom-[65px] left-[-20px] group-hover:left-[20px]  duration-500"> 
                                    <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><BsCart/></div>


                                    <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><CiHeart/></div>


                                    <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><MdOutlineZoomIn/></div>
                            </div>
                        </div>
                        </div>
                        
                    </div>

                    <div className="w-[33%]">
                        <div className="relative group overflow-hidden">
                        <div className=" w-[360px] h-[306px] bg-[#F7F7F7] group-hover:bg-transparent duration-500">
                            <div className=" pt-[33px] pb-[8px] pl-[73px] pr-[64px]">
                                <img src={chair3} alt="" />
                            </div>
                            <div className="">
                                <div className="flex justify-between bg-[#fff] pb-[20px] pt-[5px]">
                                    <h4 className='text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]'>Comfort Handy Craft</h4>
                                    <h6 className='text-[16px] text-[#151875] font-josefin font-normal'>$42.00</h6>
                                </div>
                            </div>

                            <div className="absolute bottom-[65px] left-[-20px] group-hover:left-[20px]  duration-500"> 
                                    <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><BsCart/></div>


                                    <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><CiHeart/></div>


                                    <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><MdOutlineZoomIn/></div>
                            </div>
                        </div>
                        </div>
                        
                    </div>

                    <div className="w-[33%]">
                        <div className="relative group overflow-hidden">
                        <div className=" w-[360px] h-[306px] bg-[#F7F7F7] group-hover:bg-transparent duration-500">
                            <div className=" pt-[33px] pb-[8px] pl-[73px] pr-[64px]">
                                <img src={chair3} alt="" />
                            </div>
                            <div className="">
                                <div className="flex justify-between bg-[#fff] pb-[20px] pt-[5px]">
                                    <h4 className='text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]'>Comfort Handy Craft</h4>
                                    <h6 className='text-[16px] text-[#151875] font-josefin font-normal'>$42.00</h6>
                                </div>
                            </div>

                            <div className="absolute bottom-[65px] left-[-20px] group-hover:left-[20px]  duration-500"> 
                                    <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><BsCart/></div>


                                    <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><CiHeart/></div>


                                    <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><MdOutlineZoomIn/></div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>

                <div className="flex justify-between pt-[120px]">
                    <div className="w-[33%]">
                        <div className="relative group overflow-hidden">
                        <div className=" w-[360px] h-[306px] bg-[#F7F7F7] group-hover:bg-transparent duration-500">
                            <div className=" pt-[33px] pb-[8px] pl-[73px] pr-[64px]">
                                <img src={chair4} alt="" />
                            </div>
                            <div className="">
                                <div className="flex justify-between bg-[#fff] pb-[20px] pt-[5px]">
                                    <h4 className='text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]'>Comfort Handy Craft</h4>
                                    <h6 className='text-[16px] text-[#151875] font-josefin font-normal'>$42.00</h6>
                                </div>
                            </div>

                            <div className="absolute bottom-[65px] left-[-20px] group-hover:left-[20px]  duration-500"> 
                                    <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><BsCart/></div>


                                    <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><CiHeart/></div>


                                    <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><MdOutlineZoomIn/></div>
                            </div>
                        </div>
                        </div>
                        
                    </div>

                    <div className="w-[33%]">
                        <div className="relative group overflow-hidden">
                        <div className=" w-[360px] h-[306px] bg-[#F7F7F7] group-hover:bg-transparent duration-500">
                            <div className=" pt-[33px] pb-[8px] pl-[73px] pr-[64px]">
                                <img src={chair} alt="" />
                            </div>
                            <div className="">
                                <div className="flex justify-between bg-[#fff] pb-[20px] pt-[5px]">
                                    <h4 className='text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]'>Comfort Handy Craft</h4>
                                    <h6 className='text-[16px] text-[#151875] font-josefin font-normal'>$42.00</h6>
                                </div>
                            </div>

                            <div className="absolute bottom-[65px] left-[-20px] group-hover:left-[20px]  duration-500"> 
                                    <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><BsCart/></div>


                                    <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><CiHeart/></div>


                                    <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><MdOutlineZoomIn/></div>
                            </div>
                        </div>
                        </div>
                        
                    </div>

                    <div className="w-[33%]">
                        <div className="relative group overflow-hidden">
                        <div className=" w-[360px] h-[306px] bg-[#F7F7F7] group-hover:bg-transparent duration-500">
                            <div className=" pt-[33px] pb-[8px] pl-[73px] pr-[64px]">
                                <img src={chair} alt="" />
                            </div>
                            <div className="">
                                <div className="flex justify-between bg-[#fff] pb-[20px] pt-[5px]">
                                    <h4 className='text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]'>Comfort Handy Craft</h4>
                                    <h6 className='text-[16px] text-[#151875] font-josefin font-normal'>$42.00</h6>
                                </div>
                            </div>

                            <div className="absolute bottom-[65px] left-[-20px] group-hover:left-[20px]  duration-500"> 
                                    <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><BsCart/></div>


                                    <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><CiHeart/></div>


                                    <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500"><MdOutlineZoomIn/></div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
</Container>
  )
}

export default LatestProduct