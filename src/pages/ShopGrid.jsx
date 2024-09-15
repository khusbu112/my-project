import Container from '../components/Container'
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { FaStar, FaList,FaSearchPlus } from "react-icons/fa";
import { IoGridSharp,IoCartOutline } from "react-icons/io5";
import img from "../assets/shopimg1.png"
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';
const ShopGrid = () => {



    return (
        <div className="">
            <div className="bg-[#F6F5FF] lg:pt-[96px] lg:py-0 py-[40px] lg:pb-[126px]">
                <Container>
                    <div className="lg:mx-0 mx-[15px]">
                        <h2 className='lg:text-[36px] text-[30px] text-[#101750] font-josefin font-bold'>Shop Grid Default</h2>
                    </div>
                    <div className="lg:mx-0 mx-[15px]">
                        <p className='lg:text-[16px] text-[14px] text-[#000000] font-lato font-medium '>Home . Pages . <span className='text-[#FB2E86]'>Shop Grid Default</span></p>
                    </div>
                </Container>
            </div>
            <Container>

                <div className=" pt-[124px] pb-[144px] lg:mx-0 mx-[15px]">
                    <div className="lg:flex justify-between items-center">
                        <div className="lg:w-[30%]">
                            <h4 className="font-jose font-bold text-[22px] text-[#151875]">Ecommerce Acceories & Fashion item </h4>
                            <p className="font-lato font-normal text-[12px] text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
                        </div>
                        <div className="lg:w-[40%] flex justify-around items-center lg:pt-0 pt-[20px]">
                            <div className="flex items-center">
                                <p className="font-lato font-normal text-[16px] text-[#3F509E] pr-2">Per Page:</p>
                                <div className="border-[1px] border-[#E7E6EF] h-[25px] w-[55px]"></div>
                            </div>
                            <div className="flex items-center">
                                <p className="font-lato font-normal text-[16px] text-[#3F509E]">Sort By:</p>
                                <form className=" w-[96px] pl-2 items-center">
                                    <select id="" className="border-[1px] border-[#E7E6EF] font-lato font-normal text-[#8A8FB9] text-[12px] pt-1 pb-1 ">
                                        <option selected value="6">6</option>
                                        <option value="12">12</option>
                                        <option value="18">18</option>
                                    </select>
                                </form>
                            </div>
                            <div className="flex items-center">
                                <p className="font-lato font-normal text-[16px] text-[#3F509E] pr-2">View:</p>
                                <Link to="/shoplist"><FaList className="text-[#151875] mr-2" /></Link>
                                <Link to="/shopgrid"><IoGridSharp className="text-[#151875]" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between lg:mx-0 mx-[15px] relative">
                    <div className="w-[20%] lg:block hidden">
                        <div className="">
                            <h4 className="font-josefin font-bold lg:text-[20px] text-[17px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Product Brand</h4>
                            <ul>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px]  border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]" />Coaster Furniture</li>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]" />Fusion Dot High Fashion</li>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]" />Unique Furnitture Restor</li>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]" />Dream Furnitture Flipping</li>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]" />Young Repurposed</li>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]" />Green DIY furniture</li>
                            </ul>
                        </div>
                        <div className="my-8">
                            <h4 className="font-jose font-bold lg:text-[20px] text-[17px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Discount Offer</h4>
                            <ul>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />20% Cashback</li>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />5% Cashback Offer</li>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />25% Discount Offer</li>

                            </ul>
                        </div>
                        <div className="">
                            <h4 className="font-jose font-bold lg:text-[20px] text-[17px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Rating Item</h4>
                            <ul>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2 flex"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFF6DA] bg-[#FFF6DA] checked:bg-[#FFCC2E]" />
                                    <span className="flex items-center">
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                    </span>
                                </li>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2 flex"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFF6DA] bg-[#FFF6DA] checked:bg-[#FFCC2E]" />
                                    <span className="flex items-center">
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                    </span>
                                </li>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2 flex"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFF6DA] bg-[#FFF6DA] checked:bg-[#FFCC2E]" />
                                    <span className="flex items-center">
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                    </span>
                                </li>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2 flex"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFF6DA] bg-[#FFF6DA] checked:bg-[#FFCC2E]" />
                                    <span className="flex items-center">
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:mt-0 mt-[20px]">
                            <h4 className="font-josefin font-bold text-[20px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Categories</h4>

                            <ul>

                                <li className='ml-[10px] flex items-center uppercase justify-between lg:text-[14px] text-[12px] text-[#767676] lg:py-[8px] py-[4px] cursor-pointer'>Item</li>
                                <li className='ml-[10px] flex items-center uppercase justify-between lg:text-[14px] text-[12px] text-[#767676] lg:py-[8px] py-[4px] cursor-pointer'>Item</li>
                                <li className='ml-[10px] flex items-center uppercase justify-between lg:text-[14px] text-[12px] text-[#767676] lg:py-[8px] py-[4px] cursor-pointer'>Item</li>
                                <li className='ml-[10px] flex items-center uppercase justify-between lg:text-[14px] text-[12px] text-[#767676] lg:py-[8px] py-[4px] cursor-pointer'>Item</li>

                            </ul>

                        </div>

                        <div className="lg:mt-0 mt-[20px]">
                            <h4 className="font-jose font-bold lg:text-[20px] text-[17px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Price Filter</h4>
                            <ul>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2] cursor-pointer" />$0.00 - $9.99</li>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2] cursor-pointer" />$10.00 - $19.99</li>
                                <li className="font-lato font-normal lg:text-[16px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2] cursor-pointer" />$20.00 - $29.99</li>
                            </ul>
                        </div>
                        <div className="lg:w-[70%] lg:mt-8 mt-[20px]"  >
                            <h4 className="font-jose font-bold lg:text-[20px] text-[17px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Filter By Color</h4>
                            <div className="flex flex-wrap">
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#5E37FF]" />
                                    <h6 className="font-lato font-normal text-[15px] text-[#7E81A2] mx-1">Blue</h6>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#FF9437]" />
                                    <h6 className="font-lato font-normal text-[15px] text-[#7E81A2] mx-1">Orange</h6>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#FFBF95]" />
                                    <h6 className="font-lato font-normal text-[15px] text-[#7E81A2] mx-1">Brown</h6>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#33D221]" />
                                    <h6 className="font-lato font-normal text-[15px] text-[#7E81A2] mx-1">Green</h6>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#E248FF]" />
                                    <h6 className="font-lato font-normal text-[15px] text-[#7E81A2] mx-1">Purple</h6>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#26CBFF]" />
                                    <h6 className="font-lato font-normal text-[15px] text-[#7E81A2] mx-1">Sky</h6>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="lg:w-[75%] w-full">

                        <div className="flex justify-between">
                        <div className="group my-[15px] w-[32%]">
                            <div className="relative lg:p-[35px] p-0 bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                   <Link to="/productdetails"> <img src={img} alt="" className="  lg:h-[200px] lg:w-[200px] h-full w-full " /></Link>
                                <div className="">
                                    <div className="absolute bottom-[-10px] lg:left-[20px] left-[15px] opacity-0 group-hover:overflow-hidden lg:group-hover:bottom-[30px] group-hover:bottom-[10px]  group-hover:opacity-100 ease-in-out duration-700">
                                        <div  className="">
                                            <div  className="text-[#1389FF]">
                                                <IoCartOutline />
                                            </div>
                                        </div>
                                        <div  className="text-[#1389FF]">
                                            <IoMdHeartEmpty />
                                        </div>
                                        <div className="text-[#1389FF]">
                                            <FaSearchPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold lg:text-[18px] text-[14px] text-[#151875]">Chair</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#151875] pr-3">$9.99</p>
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#FB2448] line-through">$9.99</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group my-[15px] w-[32%]">
                            <div className="relative lg:p-[35px] p-0 bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                   <Link to="/productdetails"> <img src={img} alt="" className="  lg:h-[200px] lg:w-[200px] h-full w-full " /></Link>
                                <div className="">
                                    <div className="absolute bottom-[-10px] lg:left-[20px] left-[15px] opacity-0 group-hover:overflow-hidden lg:group-hover:bottom-[30px] group-hover:bottom-[10px]  group-hover:opacity-100 ease-in-out duration-700">
                                        <div  className="">
                                            <div  className="text-[#1389FF]">
                                                <IoCartOutline />
                                            </div>
                                        </div>
                                        <div  className="text-[#1389FF]">
                                            <IoMdHeartEmpty />
                                        </div>
                                        <div className="text-[#1389FF]">
                                            <FaSearchPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold lg:text-[18px] text-[14px] text-[#151875]">Chair</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#151875] pr-3">$9.99</p>
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#FB2448] line-through">$9.99</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group my-[15px] w-[32%]">
                            <div className="relative lg:p-[35px] p-0 bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                   <Link to="/productdetails"> <img src={img} alt="" className="  lg:h-[200px] lg:w-[200px] h-full w-full " /></Link>
                                <div className="">
                                    <div className="absolute bottom-[-10px] lg:left-[20px] left-[15px] opacity-0 group-hover:overflow-hidden lg:group-hover:bottom-[30px] group-hover:bottom-[10px]  group-hover:opacity-100 ease-in-out duration-700">
                                        <div  className="">
                                            <div  className="text-[#1389FF]">
                                                <IoCartOutline />
                                            </div>
                                        </div>
                                        <div  className="text-[#1389FF]">
                                            <IoMdHeartEmpty />
                                        </div>
                                        <div className="text-[#1389FF]">
                                            <FaSearchPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold lg:text-[18px] text-[14px] text-[#151875]">Chair</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#151875] pr-3">$9.99</p>
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#FB2448] line-through">$9.99</p>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                        <div className="flex justify-between">
                        <div className="group my-[15px] w-[32%]">
                            <div className="relative lg:p-[35px] p-0 bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                   <Link to="/productdetails"> <img src={img} alt="" className="  lg:h-[200px] lg:w-[200px] h-full w-full " /></Link>
                                <div className="">
                                    <div className="absolute bottom-[-10px] lg:left-[20px] left-[15px] opacity-0 group-hover:overflow-hidden lg:group-hover:bottom-[30px] group-hover:bottom-[10px]  group-hover:opacity-100 ease-in-out duration-700">
                                        <div  className="">
                                            <div  className="text-[#1389FF]">
                                                <IoCartOutline />
                                            </div>
                                        </div>
                                        <div  className="text-[#1389FF]">
                                            <IoMdHeartEmpty />
                                        </div>
                                        <div className="text-[#1389FF]">
                                            <FaSearchPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold lg:text-[18px] text-[14px] text-[#151875]">Chair</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#151875] pr-3">$9.99</p>
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#FB2448] line-through">$9.99</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group my-[15px] w-[32%]">
                            <div className="relative lg:p-[35px] p-0 bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                   <Link to="/productdetails"> <img src={img} alt="" className="  lg:h-[200px] lg:w-[200px] h-full w-full " /></Link>
                                <div className="">
                                    <div className="absolute bottom-[-10px] lg:left-[20px] left-[15px] opacity-0 group-hover:overflow-hidden lg:group-hover:bottom-[30px] group-hover:bottom-[10px]  group-hover:opacity-100 ease-in-out duration-700">
                                        <div  className="">
                                            <div  className="text-[#1389FF]">
                                                <IoCartOutline />
                                            </div>
                                        </div>
                                        <div  className="text-[#1389FF]">
                                            <IoMdHeartEmpty />
                                        </div>
                                        <div className="text-[#1389FF]">
                                            <FaSearchPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold lg:text-[18px] text-[14px] text-[#151875]">Chair</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#151875] pr-3">$9.99</p>
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#FB2448] line-through">$9.99</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group my-[15px] w-[32%]">
                            <div className="relative lg:p-[35px] p-0 bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                   <Link to="/productdetails"> <img src={img} alt="" className="  lg:h-[200px] lg:w-[200px] h-full w-full " /></Link>
                                <div className="">
                                    <div className="absolute bottom-[-10px] lg:left-[20px] left-[15px] opacity-0 group-hover:overflow-hidden lg:group-hover:bottom-[30px] group-hover:bottom-[10px]  group-hover:opacity-100 ease-in-out duration-700">
                                        <div  className="">
                                            <div  className="text-[#1389FF]">
                                                <IoCartOutline />
                                            </div>
                                        </div>
                                        <div  className="text-[#1389FF]">
                                            <IoMdHeartEmpty />
                                        </div>
                                        <div className="text-[#1389FF]">
                                            <FaSearchPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold lg:text-[18px] text-[14px] text-[#151875]">Chair</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#151875] pr-3">$9.99</p>
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#FB2448] line-through">$9.99</p>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                        <div className="flex justify-between">
                        <div className="group my-[15px] w-[32%]">
                            <div className="relative lg:p-[35px] p-0 bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                   <Link to="/productdetails"> <img src={img} alt="" className="  lg:h-[200px] lg:w-[200px] h-full w-full " /></Link>
                                <div className="">
                                    <div className="absolute bottom-[-10px] lg:left-[20px] left-[15px] opacity-0 group-hover:overflow-hidden lg:group-hover:bottom-[30px] group-hover:bottom-[10px]  group-hover:opacity-100 ease-in-out duration-700">
                                        <div  className="">
                                            <div  className="text-[#1389FF]">
                                                <IoCartOutline />
                                            </div>
                                        </div>
                                        <div  className="text-[#1389FF]">
                                            <IoMdHeartEmpty />
                                        </div>
                                        <div className="text-[#1389FF]">
                                            <FaSearchPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold lg:text-[18px] text-[14px] text-[#151875]">Chair</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#151875] pr-3">$9.99</p>
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#FB2448] line-through">$9.99</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group my-[15px] w-[32%]">
                            <div className="relative lg:p-[35px] p-0 bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                   <Link to="/productdetails"> <img src={img} alt="" className="  lg:h-[200px] lg:w-[200px] h-full w-full " /></Link>
                                <div className="">
                                    <div className="absolute bottom-[-10px] lg:left-[20px] left-[15px] opacity-0 group-hover:overflow-hidden lg:group-hover:bottom-[30px] group-hover:bottom-[10px]  group-hover:opacity-100 ease-in-out duration-700">
                                        <div  className="">
                                            <div  className="text-[#1389FF]">
                                                <IoCartOutline />
                                            </div>
                                        </div>
                                        <div  className="text-[#1389FF]">
                                            <IoMdHeartEmpty />
                                        </div>
                                        <div className="text-[#1389FF]">
                                            <FaSearchPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold lg:text-[18px] text-[14px] text-[#151875]">Chair</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#151875] pr-3">$9.99</p>
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#FB2448] line-through">$9.99</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group my-[15px] w-[32%]">
                            <div className="relative lg:p-[35px] p-0 bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                   <Link to="/productdetails"> <img src={img} alt="" className="  lg:h-[200px] lg:w-[200px] h-full w-full " /></Link>
                                <div className="">
                                    <div className="absolute bottom-[-10px] lg:left-[20px] left-[15px] opacity-0 group-hover:overflow-hidden lg:group-hover:bottom-[30px] group-hover:bottom-[10px]  group-hover:opacity-100 ease-in-out duration-700">
                                        <div  className="">
                                            <div  className="text-[#1389FF]">
                                                <IoCartOutline />
                                            </div>
                                        </div>
                                        <div  className="text-[#1389FF]">
                                            <IoMdHeartEmpty />
                                        </div>
                                        <div className="text-[#1389FF]">
                                            <FaSearchPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold lg:text-[18px] text-[14px] text-[#151875]">Chair</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#151875] pr-3">$9.99</p>
                                    <p className="font-jose font-normal lg:text-[14px] text-[12px] text-[#FB2448] line-through">$9.99</p>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                        
                    </div>


                </div>
            </Container>
        </div>
    )
}

export default ShopGrid