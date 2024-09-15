import Container from '../components/Container'
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { FaStar, FaList } from "react-icons/fa";
import { IoGridSharp} from "react-icons/io5";
import img from "../assets/shopimg1.png"
import { Link } from 'react-router-dom';
const ShopList = () => {
  return (
    <div className="">
            <div className="bg-[#F6F5FF] lg:pt-[96px] lg:py-0 py-[40px] lg:pb-[126px]">
                <Container>
                    <div className="lg:mx-0 mx-[15px]">
                        <h2 className='lg:text-[36px] text-[30px] text-[#101750] font-josefin font-bold'>Shop List Default</h2>
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
                                <FaList className="text-[#151875] mr-2" />
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

                    <div className=" border-[1px]  lg:px-4 lg:py-4 my-[25px] shadow-sm ">
                        <div className=" lg:flex gap-x-[40px] items-centerlg:mb-0 lg:ml-0  mb-[5px] text-center lg:text-start">
                            <div className="">
                                 <Link to="/productdetails">< img src={img} alt="" className="lg:h-[200px] lg:w-[200px] h-[150px] w-[150px] lg:mx-0 mx-auto " /></Link>
                            </div>
                            <div className=" lg:w-[50%] w-full">
                                <div className=" lg:flex  items-center lg:gap-x-[20px] lg:py-[8px]">
                                    <h3 className=' font-josefin font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                    <div className=" flex gap-x-[10px] lg:justify-start justify-center ">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                    </div>
                                </div>
                                <div className=" flex lg:justify-start justify-center lg:gap-x-[20px] gap-x-[10px] items-center py-4">
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                    <div className=" flex lg:gap-x-[10px] gap-x-[4px] text-[#FFC416]">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                </div>
                                <p className=' font-josefin font-light lg:text-[17px] text-[12px] text-[#9295AA]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, modi?</p>

                            </div>
                        </div>
                    </div>
                    <div className=" border-[1px]  lg:px-4 lg:py-4 my-[25px] shadow-sm ">
                        <div className=" lg:flex gap-x-[40px] items-centerlg:mb-0 lg:ml-0  mb-[5px] text-center lg:text-start">
                            <div className="">
                                 <Link to="/productdetails">< img src={img} alt="" className="lg:h-[200px] lg:w-[200px] h-[150px] w-[150px] lg:mx-0 mx-auto " /></Link>
                            </div>
                            <div className=" lg:w-[50%] w-full">
                                <div className=" lg:flex  items-center lg:gap-x-[20px] lg:py-[8px]">
                                    <h3 className=' font-josefin font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                    <div className=" flex gap-x-[10px] lg:justify-start justify-center ">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                    </div>
                                </div>
                                <div className=" flex lg:justify-start justify-center lg:gap-x-[20px] gap-x-[10px] items-center py-4">
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                    <div className=" flex lg:gap-x-[10px] gap-x-[4px] text-[#FFC416]">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                </div>
                                <p className=' font-josefin font-light lg:text-[17px] text-[12px] text-[#9295AA]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, modi?</p>

                            </div>
                        </div>
                    </div>
                    <div className=" border-[1px]  lg:px-4 lg:py-4 my-[25px] shadow-sm ">
                        <div className=" lg:flex gap-x-[40px] items-centerlg:mb-0 lg:ml-0  mb-[5px] text-center lg:text-start">
                            <div className="">
                                 <Link to="/productdetails">< img src={img} alt="" className="lg:h-[200px] lg:w-[200px] h-[150px] w-[150px] lg:mx-0 mx-auto " /></Link>
                            </div>
                            <div className=" lg:w-[50%] w-full">
                                <div className=" lg:flex  items-center lg:gap-x-[20px] lg:py-[8px]">
                                    <h3 className=' font-josefin font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                    <div className=" flex gap-x-[10px] lg:justify-start justify-center ">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                    </div>
                                </div>
                                <div className=" flex lg:justify-start justify-center lg:gap-x-[20px] gap-x-[10px] items-center py-4">
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                    <div className=" flex lg:gap-x-[10px] gap-x-[4px] text-[#FFC416]">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                </div>
                                <p className=' font-josefin font-light lg:text-[17px] text-[12px] text-[#9295AA]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, modi?</p>

                            </div>
                        </div>
                    </div>
                    <div className=" border-[1px]  lg:px-4 lg:py-4 my-[25px] shadow-sm ">
                        <div className=" lg:flex gap-x-[40px] items-centerlg:mb-0 lg:ml-0  mb-[5px] text-center lg:text-start">
                            <div className="">
                                 <Link to="/productdetails">< img src={img} alt="" className="lg:h-[200px] lg:w-[200px] h-[150px] w-[150px] lg:mx-0 mx-auto " /></Link>
                            </div>
                            <div className=" lg:w-[50%] w-full">
                                <div className=" lg:flex  items-center lg:gap-x-[20px] lg:py-[8px]">
                                    <h3 className=' font-josefin font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                    <div className=" flex gap-x-[10px] lg:justify-start justify-center ">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                    </div>
                                </div>
                                <div className=" flex lg:justify-start justify-center lg:gap-x-[20px] gap-x-[10px] items-center py-4">
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                    <div className=" flex lg:gap-x-[10px] gap-x-[4px] text-[#FFC416]">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                </div>
                                <p className=' font-josefin font-light lg:text-[17px] text-[12px] text-[#9295AA]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, modi?</p>

                            </div>
                        </div>
                    </div>
                    <div className=" border-[1px]  lg:px-4 lg:py-4 my-[25px] shadow-sm ">
                        <div className=" lg:flex gap-x-[40px] items-centerlg:mb-0 lg:ml-0  mb-[5px] text-center lg:text-start">
                            <div className="">
                                 <Link to="/productdetails">< img src={img} alt="" className="lg:h-[200px] lg:w-[200px] h-[150px] w-[150px] lg:mx-0 mx-auto " /></Link>
                            </div>
                            <div className=" lg:w-[50%] w-full">
                                <div className=" lg:flex  items-center lg:gap-x-[20px] lg:py-[8px]">
                                    <h3 className=' font-josefin font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                    <div className=" flex gap-x-[10px] lg:justify-start justify-center ">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                    </div>
                                </div>
                                <div className=" flex lg:justify-start justify-center lg:gap-x-[20px] gap-x-[10px] items-center py-4">
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                    <div className=" flex lg:gap-x-[10px] gap-x-[4px] text-[#FFC416]">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                </div>
                                <p className=' font-josefin font-light lg:text-[17px] text-[12px] text-[#9295AA]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, modi?</p>

                            </div>
                        </div>
                    </div>
                    

                    </div>


                </div>
            </Container>
        </div>
  )
}

export default ShopList