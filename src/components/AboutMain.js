import React from "react";
import MainContributor from "./MainContributorCard";


const AboutMain = () => {
  return (
    <section className="">
      <div className="relative  justify-center align-center my-20 ">
        <img
          src="/Assets/icons/paws.svg"
          className="absolute left-96 -top-24 "
          alt=""
        />
        <h3 className="  text-4xl font-bold  w-96 h-1.5 text-center my-20 mx-auto">
          Main Contributors
        </h3>
        <div className="grid lg:grid-cols-3 mt-2.5 md:grid-cols-2 ">
          <MainContributor
            name=" Minal Rai"
            role="Ui/Ux Designer"
            Github=""
            linkedin=""
            Twitter=""
            image="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
          />
          <MainContributor
            name=" Ayush Kejriwal"
            role="Ui/Ux Designer"
            image="https://images.unsplash.com/photo-1631761320198-4bc79af9029b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
          />
          <MainContributor
            name=" Minal Rai"
            role="Ui/Ux Designer"
            image="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
          />{" "}
          <MainContributor
            name=" Ayush Kejriwal"
            role="Ui/Ux Designer"
            image="https://images.unsplash.com/photo-1631761320198-4bc79af9029b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
          />{" "}
          <MainContributor
            name=" Minal Rai"
            role="Ui/Ux Designer"
            Github=""
            linkedin=""
            Twitter=""
            image="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
          />
          <MainContributor
            name=" Ayush Kejriwal"
            role="Ui/Ux Designer"
            image="https://images.unsplash.com/photo-1631761320198-4bc79af9029b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
