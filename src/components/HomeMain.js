import React from "react";

const HomeMain = () => {
  return (
    <section className="">
      <div className="justify-center align-center py-12">
        <div className="home-main lg:flex items-center sm:justify-center">
          <div className="left lg:w-1/2">
            <h2 className="text-4xl text-center">
              Our team will teach you the art of music and melody.
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none rounded-xl text-lg">
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
