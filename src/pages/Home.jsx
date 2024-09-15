import React from 'react'
import Banner from '../components/Banner'
import Feature from '../components/Feature'
import LatestProduct from '../components/LatestProduct'
import ShopexOffer from '../components/ShopexOffer'
import Unique from '../components/Unique'
import Trending from '../components/Trending'
import DiscountItem from '../components/DiscountItem'
import TopCategory from '../components/TopCategory'
import NewsLAtter from '../components/NewsLAtter'
import LatestBlog from '../components/LatestBlog'

const Home = () => {
  return (
    <>
    <Banner/>
    <Feature/>
    <LatestProduct/>
    <ShopexOffer/>
    <Unique/>
    <Trending/>
    <DiscountItem/>
    <TopCategory/>
    <NewsLAtter/>
    <LatestBlog/>

    </>
  )
}

export default Home