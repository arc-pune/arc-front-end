import React from "react";
import { FounderCard } from "./FonderCard";
import MainContributor from "./MainContributorCard";
import "../styles/aboutMain.css";
const AboutMain = () => {
  return (
    <>
      <div className='aboutmain__background'></div>
      <section className=''>
        {/*our organization section */}
        <div className='aboutmain___ourOrganization'>
          <img src='/Assets/icons/paws.svg' alt='' />
          <h2>Our organization</h2>
          <div className='aboutmain___ourOrganizationMain'>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className='end'>
            <img src='/Assets/icons/paws.svg' alt='' />
          </div>
        </div>
        {/*Our Founder section */}

        <FounderCard />

        {/**Our Main Contributor Section */}

        <div className='ourMainContributor__header my-24'>
          <img src='/Assets/icons/paws.svg' alt='' />
          <h2 className=''>Main Contributors</h2>
        </div>

        <div className='grid grid-cols-none  justify-center align-center my-24  mx-auto  lg:grid-cols-3 mt-0.5   '>
          <MainContributor
            name=' Minal Rai'
            role='Ui/Ux Designer'
            Github=''
            linkedin=''
            Twitter=''
            image='https://images.pexels.com/photos/3270230/pexels-photo-3270230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          />
          <MainContributor
            name=' Ayush Kejriwal'
            role='Ui/Ux Designer'
            image='https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          />
          <MainContributor
            name=' Minal Rai'
            role='Ui/Ux Designer'
            image='https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80'
          />{" "}
          <MainContributor
            name=' Ayush Kejriwal'
            role='Ui/Ux Designer'
            image='https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          />{" "}
          <MainContributor
            name=' Minal Rai'
            role='Ui/Ux Designer'
            Github=''
            linkedin=''
            Twitter=''
            image='https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80'
          />
          <MainContributor
            name=' Ayush Kejriwal'
            role='Ui/Ux Designer'
            image='https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          />
        </div>
      </section>
    </>
  );
};

export default AboutMain;
