import React from "react";
import { Link } from "react-router-dom";
const ContributorsCard = (props) => {
  const { img_url, github_url } = props;
  return (
    <a href={github_url} target='_blank'>
      <div>
        <div className='w-16 h-16 rounded-full bg-indigo-500 inline-flex'>
          <img className='rounded-full' src={img_url} alt='' />
        </div>
      </div>
    </a>
  );
};

export default ContributorsCard;
