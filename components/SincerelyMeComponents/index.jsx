import React from 'react';
import SincerelyMePage from './SincerelyMePage';
import Journey from './TheJourney/Journey';
import Header from '../shared/HeaderComponents/';
import Footer from '../shared/FooterComponents/FooterPage';
import WhatDrivesMe from './WhatDrivesMe/WhatDrivesMe';
const index = () => {
    return (
        <>
            <Header/>
            <SincerelyMePage/>
            <Journey/>
            <WhatDrivesMe/>
            <Footer/>
        </>
    );
};

export default index;