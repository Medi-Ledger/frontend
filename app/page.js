"use client"
import Footer from '@/components/commons/Footer';
import Header from '@/components/commons/Header';
import FAQs from '@/components/landing_page/FAQs';
import Features from '@/components/landing_page/Features';
import GetStarted from '@/components/landing_page/GetStarted';
import Hero from '@/components/landing_page/Hero';
import React from 'react';

const Home = () => {
  return (
    <div className="bg-[#F0F0F2]">  
      <Header/>
      <Hero/>
      <GetStarted/>
      <Features/>
      <FAQs/>
      <Footer/>
    </div>
  );

};

export default Home;