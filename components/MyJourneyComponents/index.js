'use client'
import React from 'react';
import MyJourneyPage from './MyJourneyPage';
import Header from '../shared/HeaderComponents/HeaderPage';
import Footer from '../shared/FooterComponents/FooterPage';
const index = () => {
    return (
        <>
        <Header/>
          <MyJourneyPage/>  
          <Footer/>
        </>
    );
};

export default index;