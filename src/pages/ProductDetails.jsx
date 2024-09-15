import React from 'react'
import Container from '../components/Container'
import { FaInstagram, FaFacebookF, FaTwitter, FaStar ,FaRegHeart,FaArrowRight,FaSearchPlus} from "react-icons/fa";
import img1 from "../assets/spimg4.png"
import img2 from "../assets/spimg1.png"
import img3 from "../assets/spimg2.png"
import img4 from "../assets/spimg3.png"
import rimg1 from "../assets/rimg1.png"
import rimg2 from "../assets/rimg2.png"
import rimg3 from "../assets/rimg3.png"
import rimg4 from "../assets/rimg4.png"
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';


const ProductDetails = () => {
  
    
  return (

    <>
    <section className="bg-[#F6F5FF] py-[100px] my-10">
            <Container>
                <div className="lg:mx-0 mx-[15px]">
                    <h2 className="font-josefin font-bold text-[36px] text-[#101750]">Shop Grid Default</h2>
                    <div className="">
                    <p className='text-[16px] text-[#000000] font-lato font-medium '>Home . Pages . <span className='text-[#FB2E86]'>Shop Grid Default</span></p>
                    </div>
                </div>
            </Container>
        </section>
    
    <Container>
                <div className="lg:flex justify-around items-center mb-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-[15px] lg:mx-0 mx-[15px]">

                    
                    <div className="flex items-center justify-between lg:w-[38%] w-full">
                        <div className="pr-[20px]">
                            <img src={img2} alt="details" />
                            <img src={img3} alt="details" className="my-[10px] lg:block hidden" />
                            <img src={img4} alt="details " className="lg:block hidden" />
                        </div>
                        <div className="">
                        <img src={img1} className="lg:block hidden" alt="" />
                        </div>
                    </div>

                  


                    <div className="lg:w-[45%] w-full">
                        <h4 className="font-josefin font-semibold lg:text-[36px] text-[30px] text-[#0D134E]">Playwood arm chair</h4>
                        <span className="flex items-center lg:my-[15px] my-[10px] ">
                            <p className='text-[#FFCC2E] flex gap-x-1'>
                            <FaStar/>                       
                            <FaStar/>                       
                            <FaStar/>                       
                            <FaStar/>                       
                            <FaStar/>                       
                            </p>
                        </span>
                        <div className="flex items-center">
                            <p className="font-josefin font-normal text-[14px] text-[#151875] pr-3">$9.99</p>
                            <p className="font-josefin font-normal text-[14px] text-[#FB2448] line-through">$32.00</p>
                        </div>
                        <h5 className="font-josefin font-semibold text-[16px] text-[#0D134E] my-[15px]">Color</h5>
                        <p className="font-josefin font-semibold text-[16px] text-[#A9ACC6] w-full lg:w-[540px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                        
                        
                        <Link to="/shopingcart">
                        <div className=" flex items-center  relative mt-5 mb-4 group">
                            <button  className="font-josefin py-[15px] pl-[30px] pr-[40px] border-[1px] border-[#FB2448] text-[#0D134E] hover group-hover:bg-[#FB2448] group-hover:text-[#fff] rounded-[5px]  duration-300">Add To cart</button>
                            <FaRegHeart className='absolute top-50% left-[120px] group-hover:text-[#fff]  duration-300' />
                        </div>
                        </Link>



                        <h5 className="font-josefin font-semibold text-[16px] text-[#0D134E]">Categories: </h5>
                        <h5 className="font-josefin font-semibold text-[16px] text-[#0D134E] my-[10px]">Tags: 
                        </h5>
                        <div className="flex items-center">
                            <h5 className="font-josefin font-semibold text-[16px] text-[#0D134E] mr-3">Share:</h5>
                            <div className="flex items-center w-[12%] justify-between">
                                <div className="p-1 bg-[#151875] hover:bg-[#FB2E86] ease-in-out duration-500 rounded-full">
                                    <FaFacebookF className="text-[#fff] w-[15px] h-[15px]" />
                                </div>
                                <div className="p-1 mx-[10px] bg-[#151875] hover:bg-[#FB2E86] ease-in-out duration-500 rounded-full">
                                    <FaInstagram className="text-[#fff] w-[15px] h-[15px]" />
                                </div>
                                <div className="p-1 bg-[#151875] hover:bg-[#FB2E86] ease-in-out duration-500 rounded-full">
                                    <FaTwitter className="text-[#fff] w-[15px] h-[15px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <section className="bg-[#F9F8FE] py-10 mt-[140px]">
            <Container>
                <div className="lg:mx-0 mx-[10px]">
                    <div className="mb-4">
                        <ul className="flex justify-between lg:flex-wrap font-medium text-center lg:w-[50%]" id="default-tab" role="tablist">
                            <li className="me-2" role="presentation">
                                < button className="inline-block p-1 border-b-2 font-josefin font-semibold lg:text-[24px] text-[17px] text-[#151875]">Description</button>
                            </li>
                            <li className="me-2" role="presentation">
                                < button className="inline-block p-1 border-b-2 font-josefin font-semibold lg:text-[24px] text-[17px] text-[#151875]">Additional Info</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-1 border-b-2 font-josefin font-semibold lg:text-[24px] text-[17px] text-[#151875]">Reviews</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-1 border-b-2 font-josefin font-semibold lg:text-[24px] text-[17px] text-[#151875]">Video</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div >
                            <div className="mt-10">
                                <h5 className="font-josefin font-semibold lg:text-[22px] text-[16px] text-[#151875]">Varius tempor.</h5>
                                <p className="font-josefin font-semibold lg:text-[16px] text-[14px] text-[#A9ACC6] mt-4 mb-7">
                                    Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                                </p>
                                <h5 className="font-josefin font-semibold lg:text-[22px] text-[16px] text-[#151875] ">More details</h5>
                                <div className="flex items-center mt-4 mb-3">
                                    <FaArrowRight className="text-[#2F1AC4] mr-2" />
                                    <p className="font-josefin font-semibold lg:text-[16px] text-[14px] text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                </div>
                                <div className="flex items-center mb-3">
                                    <FaArrowRight className="text-[#2F1AC4] mr-2" />
                                    <p className="font-josefin font-semibold lg:text-[16px] text-[14px] text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                </div>
                                <div className="flex items-center mb-3">
                                    <FaArrowRight className="text-[#2F1AC4] mr-2" />
                                    <p className="font-josefin font-semibold lg:text-[16px] text-[14px] text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                </div>
                                <div className="flex items-center mb-3">
                                    <FaArrowRight className="text-[#2F1AC4] mr-2" />
                                    <p className="font-josefin font-semibold lg:text-[16px] text-[14px] text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="mt-10">
                                <p className="font-josefin font-normal lg:text-[16px] text-[14px]  text-[#FB4997]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non unde laboriosam minima cum doloremque inventore debitis quibusdam corrupti perferendis rem quae, odit laborum repudiandae harum deserunt corporis! Tenetur quae ab omnis accusantium sint. A vitae nisi ad nemo necessitatibus eius sit corrupti repudiandae ipsam alias ex reiciendis, illo vero!

                                </p>
                                <p className="font-josefin font-normal lg:text-[16px] text-[14px] text-[#2F1AC4] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non unde laboriosam minima cum doloremque inventore debitis quibusdam corrupti perferendis rem quae, odit laborum repudiandae harum deserunt corporis! Tenetur quae ab omnis accusantium sint. A vitae nisi ad nemo necessitatibus eius sit corrupti repudiandae ipsam alias ex reiciendis, illo vero!
                                </p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </Container>
        </section>
        <Container className='my-10'>
            <div className="lg:mx-0 mx-[15px]">
                <h2 className="font-josefin font-bold lg:text-[36px] text-[30px] text-[#101750]">Related Products</h2>
            </div>
            <div className="mt-10 flex justify-between flex-wrap items-center">


                <div className="lg:mx-0 mx-[15px]">
                    <div className="relative group">
                        <img src={rimg1} alt="related" />
                        <section className="group">
                            <div className="">
                            <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                    <div className="text-[#2F1AC4]">
                                        <IoCartOutline />
                                    </div>
                                    <div className="text-[#2F1AC4]">
                                        <IoMdHeartEmpty />
                                    </div>
                                    <div className="text-[#2F1AC4]">
                                        <FaSearchPlus />
                                    </div>
                                </div >
                            </div>
                        </section>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div className="">
                            <h4 className="font-josefin font-semibold text-[16px] text-[#151875] my-[15px]">Mens Fashion Wear</h4>
                            <p className="font-josefin font-normal text-[13px] text-[#151875]">$43.00</p>
                        </div>
                        <span className="flex items-center">
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                        </span>
                    </div>
                </div>

                <div className="lg:mx-0 mx-[15px]">
                    <div className="relative group">
                        <img src={rimg2} alt="related" />
                        <section className="group">
                            <div className="">
                            <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                    <div className="text-[#2F1AC4]">
                                        <IoCartOutline />
                                    </div>
                                    <div className="text-[#2F1AC4]">
                                        <IoMdHeartEmpty />
                                    </div>
                                    <div className="text-[#2F1AC4]">
                                        <FaSearchPlus />
                                    </div>
                                </div >
                            </div>
                        </section>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div className="">
                            <h4 className="font-josefin font-semibold text-[16px] text-[#151875] my-[15px]">Women’s Fashion</h4>
                            <p className="font-josefin font-normal text-[13px] text-[#151875]">$67.00</p>
                        </div>
                        <span className="flex items-center">
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                        </span>
                    </div>
                </div>

                <div className="lg:mx-0 mx-[15px]">
                    <div className="relative group">
                        <img src={rimg3} alt="related" />
                        <section className="group">
                            <div className="">
                            <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                    <div className="text-[#2F1AC4]">
                                        <IoCartOutline />
                                    </div>
                                    <div className="text-[#2F1AC4]">
                                        <IoMdHeartEmpty />
                                    </div>
                                    <div className="text-[#2F1AC4]">
                                        <FaSearchPlus />
                                    </div>
                                </div >
                            </div>
                        </section>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div className="">
                            <h4 className="font-josefin font-semibold text-[16px] text-[#151875] my-[15px]">Wolx Dummy Fashion</h4>
                            <p className="font-josefin font-normal text-[13px] text-[#151875]">$67.00</p>
                        </div>
                        <span className="flex items-center">
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                        </span>
                    </div>
                </div>

                <div className="lg:mx-0 mx-[15px]">
                    <div className="relative group">
                        <img src={rimg4} alt="related" />
                        <section className="group">
                            <div className="">
                                <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                    <div className="text-[#2F1AC4]">
                                        <IoCartOutline />
                                    </div>
                                    <div className="text-[#2F1AC4]">
                                        <IoMdHeartEmpty />
                                    </div>
                                    <div className="text-[#2F1AC4]">
                                        <FaSearchPlus />
                                    </div>
                                </div >
                            </div>
                        </section>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div className="">
                            <h4 className="font-josefin font-semibold text-[16px] text-[#151875] my-[15px]">Top Wall Digital Clock</h4>
                            <p className="font-josefin font-normal text-[13px] text-[#151875]">$51.00</p>
                        </div>
                        <span className="flex items-center">
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                        </span>
                    </div>
                </div>

            </div>
        </Container>
    </>
  )
}

export default ProductDetails