import React from 'react'


export const FounderWord = () => {
    return (
        <div className="relative">
            <div className="text-gray-400 h-1/2 body-font">
                <div className="container px-5 py-2 mb-10 mx-auto justify-center flex flex-wrap">
                    <div className="flex w-full mb-5 justify-center flex-wrap">

                        <h1 className="text-center sm:text-3xl text-2xl md:font-sans font-bold title-font text-black lg:w-1/3 lg:mb-0 mb-2">
                            Word from our Founder
                        </h1>
                        <br /><br /><br />
                    </div>
                    <div className=" flex w-full mb-10 justify-center flex-wrap">


                        <div className="relative lg:pl-6 lg:w-2/3 md:font-sans font-medium leading-relaxed text-dark-grey">
                            <img
                                className="absolute"
                                src="/Assets/icons/quote.svg"
                                style={{

                                    top: "-2rem",
                                    width: "2rem",
                                }}
                                alt="Quote icon"
                            ></img>
                            <p>
                                Aliquid repellat sequi quidem molestiae incidunt neque. Nihil hic amet quidem et consequatur voluptatem magni voluptas. Est esse voluptas nihil. Alias excepturi doloremque nihil minus nesciunt sed possimus. Quis est laboriosam dolorem velit. Vel voluptatum in id a.

                                Exercitationem ut nostrum adipisci harum. Est inventore asperiores et in cumque. Et beatae odit et quae fugiat. Necessitatibus ipsum sit repudiandae voluptas excepturi aspernatur blanditiis.
                            </p>
                            <img
                                className="absolute"
                                src="/Assets/icons/right-quote.svg"
                                style={{
                                    right: "0rem",
                                    bottom: "-2rem",
                                    width: "2rem",
                                }}
                                alt="Quote icon"
                            ></img>
                        </div>

                    </div>


                </div>
            </div>
            <img 
        className="absolute hidden lg:block lg:h-3/5"
        src="/Assets/images/paws.png"
        style={{
            transform: "rotate(180deg)",
            right: "0rem",
            bottom: "20%"
            

        }} 
        alt="Paws" />
        </div>
    )
}
export default FounderWord;