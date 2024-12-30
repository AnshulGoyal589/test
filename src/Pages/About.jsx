import React from 'react';
// import Heading from '../Heading';
import Statue from '../images/statue.png';
// import StatueDesign from '../../images/statueDesign.png';
// import { about } from '../../styles/constant';
import AboutCard from '../Components/AboutCard';
const about = {
    aboutText: "The Training and Placement Section at NSUT is responsible for all placement-related activities at our institution. We play a vital role in bridging the gap between corporate and academia, ensuring that our students gain hands-on experience through internships during winter and summer breaks. These internships span multinational, private, and public sector companies, as well as government departments and foreign universities. The Campus Recruitment Programme at NSUT is a cornerstone for our students, providing them with the opportunity to secure placements in government departments, multinational companies, and public sector undertakings. Thanks to our close collaboration with various company executives and the diligent efforts of our student placement coordinators, we have achieved an outstanding placement record. Our graduates consistently secure positions in prestigious organizations across multiple sectors, often receiving multiple job offers. Many students have also been accepted into renowned Indian B-Schools such as the Indian Institutes of Management (Ahmedabad, Calcutta, Kozhikode, and Lucknow) and the Faculty of Management Studies (FMS), as well as top foreign universities like the University of Pennsylvania and Columbia University for higher studies. NSUT places great emphasis on strengthening industry-institute interaction and collaboration with other educational institutions and R&D laboratories, both nationally and internationally.",
    aboutTexts: "Some top-notch organizations where our students have interned and secured placements include:",
   
    cardDetails: [
        {
            // imgUrl: Campus,
            title: "Technical Profiles",
            description: "Microsoft, Google, Adobe, Goldman Sachs, Rubrik, Tower Research Capital, Uber, Salesforce, D.E. Shaw, Atlassian, PayPal, PhonePe, Walmart, Zomato, Morgan Stanley, Arcesium, Cisco, Fast Retailing (Japan), Expedia Group, Samsung, Intuit, MyKaarma, Urban Company, Visa, and Media.net"
        },
        {
            // imgUrl: Ranking,
            title: "Non-Tech Profiles",
            description: "Bain and Company, JPMorgan, ZS Associates, McKinsey and Company, BlackRock Group, American Express, KPMG, E&Y, Axis Bank, Axxela, RBL Bank, EXL, Mastercard, Future First, LEK, and Thorogood."
        },
        {
            // imgUrl: Established,
            title: "Core Profiles",
            description: "Texas Instruments, Nvidia, Qualcomm, Cadence, Samsung, Bharti Airtel, Reliance, Vedanta, Schlumberger, Maruti, Anand Motors, Hero Moto Corp, Siemens, ARM, Jubilant Foodworks, GAIL, CDOT, and BEL"
        }
    ]
}


const About = () => {
  return (
    <div className='w-full py-14 2xl:py-20 bg-[#F9FBFD]' id='culture'>
        {/* <Heading text=""/> */}
        <div className={`relative flex justify-center mb-14 sm:mb-20`}>
            <h1 className='gradient-text font-bold sm:text-4xl text-3xl'>Who are we?</h1>
        </div>
        <div className='flex flex-col 2xl:flex-row xl:gap-5 xl:w-full xl:justify-between xl:items-center xl:px-10 2xl:px-10 gap-4 sm:gap-8  bg-[#F9FBFD] items-center'>
          <div className='px-6 xl:px-0 xl:pl-12 pb-6 relative z-10 flex justify-center w-fit xl:h-full xl:content-stretch'>
            <img src={Statue} alt="statue" className='max-w-[420px] min-w-[250px] xl:h-full w-full xl:w-fit'/>
            {/* <img src={StatueDesign} alt="ellipse" className='absolute left-2 sm:left-0 xl:left-5 xl:bottom-[-2px] bottom-2 sm:bottom-0 z-[-1]' /> */}
          </div>
          <div className='flex flex-col gap-12 xl:gap-8 bg-[#F9FBFD] xl:w-full'>
            <div className='text-[#0C101A]  px-5 sm:px-10 xl:px-0'>{about.aboutText}</div>
           <div className='text-[#123794] font-extrabold px-5 text-[1.2vw] sm:px-10 xl:px-0'>{about.aboutTexts}</div>
           <div className='flex flex-col md:flex-row xl:justify-evenly items-center gap-4 md:gap-8 xl:gap-4 xl:flex-nowrap xl:px-0 md:justify-center md:px-6 md:flex-wrap'>
              {about.cardDetails.map((card)=>(
                <AboutCard about={card} key={card.title}/>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default About;