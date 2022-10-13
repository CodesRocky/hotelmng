import React from 'react'
import About from '../component/foods/About';
import Foods from '../component/foods/Foods';
import Footer from '../component/footer/Footer';
import Topimg from '../component/home_page/Topimg';
import Offers from '../component/offers/Offers';
import Query from '../component/query/Query';
import Rooms from '../component/rooms/Rooms';
import View from '../component/views/View';

const Home = () => {
  return (
    <>
    <Topimg/>
      <About/>
      <Offers/>
      <View/>
      <Foods/>      
      <Rooms/>
      <Query/>
      <Footer/>
    </>
  )
}
export default Home;