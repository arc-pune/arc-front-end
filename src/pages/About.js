import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import AboutMain from "../components/AboutMain";
import { Footer } from "../components/Footer";
import ContributorsCard from "../components/ContributorsCard";
import { getContributers } from "../components/helper/githubApi";
const About = () => {
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    getContributers()
      .then((contributors) => {
        console.log(contributors);
        setContributors(contributors);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <AboutMain />

      {/* rendering all contributors */}
      <h1 className='text-4xl font-bold text-center'>Our Contributors</h1>
      <div className='grid grid-cols-6 px-64 py-12 justify-items-center'>
        {contributors.length != 0 &&
          contributors.map((item, index) => (
            <ContributorsCard
              img_url={item.avatar_url}
              key={item.id}
              github_url={item.html_url}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
