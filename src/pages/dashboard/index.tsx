import React from 'react';
import Header from '../../components/Header';
import AmmentiesComp from '../../components/Ammenties';
import Banner from '../../components/banner';
import Footer from '../../components/Footer';
import WorkSpaces from '../../components/WorkSpaces';
import HeroSection from '../../components/HeroSection';

const Dashboard = () => {
    return (
        <div className='bg-backgroungGray'>
            <Header />
            {/* <Banner /> */}
            <HeroSection />
            <div className=" px-[2rem] md:mx-20  lg:mx-20  xl:mx-20">
                <AmmentiesComp />
                <WorkSpaces />
                <Footer/>
            </div>
        </div>
    );
};

export default Dashboard;