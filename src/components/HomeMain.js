import React from "react";

const HomeMain = () => {
  return (
    <section className="">
      <div className="justify-center align-center py-24 ">
        <div className="home-main lg:flex items-center sm:justify-center">
          <div className="left lg:w-1/2 p-5 max-w-lg text-gray-800 dark:text-gray-200">
            <h2 className="text-4xl font-bold mb-8 text-black dark:text-white">
              Raising Hands For Injured Paws
            </h2>
            <p>
              Animal Rescue Community (ARC) Pune is a group of college students
              raising hands for injured paws since 2020. We are a non-profit
              community organization of around 60 active volunteers, and many
              passive volunteers all over pune. <br />
              <br /> Feeding, Rescue and Adoptions are our main domain of work.
              Our volunteers daily feed 500+ dogs and cats in their respective
              areas. Adoption is our prominent feature. We have been a part of
              225+ successful adoptions till date. We also take rescue cases
              enthusiastically. We believe in coexistence and work for reducing
              human-animal conflicts. <br />
              <br />
              ARC has recently started working in nanded, being the first ever
              animal welfare organization in the city.
            </p>
            <div class="p-2 w-full pt-8">
              <button class="flex mx-auto text-white bg-black dark:text-gray-900 dark:bg-white border-0 py-2 px-8 focus:outline-none rounded-xl text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="right">
            <img src="/Assets/images/banner.png" alt="Dog" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
