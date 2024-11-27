import AmmentiesComp from '../../components/Ammenties';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import WorkSpaces from '../../components/WorkSpaces';

const Dashboard = () => {
    return (
        <div>
        <div className='bg-backgroungGray'>
            <Header />
            {/* <Banner /> */}
            <HeroSection />
            <div className=" px-8 md:mx-20  lg:mx-20  xl:mx-20">
                <AmmentiesComp />
                <WorkSpaces />
                <Footer/>
            </div>

        <div className='text-secondaryText text-body2 text-center text-body bg-[#222E34] text-[#DDDDDD] p-[10px]'><p>© 2014 – 2024 <span className='text-primaryYellow'>Tusker Workspace Pvt. Ltd.</span> | All Rights Reserved</p><p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-and-conditions">Terms and Conditions</a> | <a href="/refund-policy">Refund Policy</a></p></div>
        </div>
        {/* <p className=""> &copy; Copyright 2024. Bhive Private Limited</p> */}
        </div>
        
    );
};

export default Dashboard;