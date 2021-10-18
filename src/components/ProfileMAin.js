import React from "react";
import "../styles/profileMain.css";
const ProfileMAin = () => {
  return (
    <div className="profileMain ">
      {/* top  section of profile */}
      <div className="paws2">
        <img src="/Assets/icons/paws.svg" alt="" />
      </div>
      <div className="profileMain__profle">
        <div className="profileMain__profle_img">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
          <button>Change Profile Picture</button>
        </div>
        <div className="profileMain__profle_Button">
          <h2>Ayush Kejariwal</h2>
          <button className="verify">Verify</button>
          <button className="edit"> Edit Profile</button>
          <button className="add">Add Post for Adoption</button>
        </div>
      </div>
      <div className="paws">
        <img src="/Assets/icons/paws.svg" alt="" />
      </div>
      <div className="profileMain__profile_detail">
        <div className="profileMain__profile_detail__title">
          <p>Email :</p>
          <p>Phone No :</p>
          <p>Alt-Phone No :</p>
          <p>Address :</p>
        </div>
        <div className="profileMain__profile_detail_value">
          <p style={{ textDecoration: "underline" }}> kejayush29@gmail.com</p>
          <p>+91-9232414510</p>
          <p>+91-9232414510</p>
          <p>Meera Road, New Delhi, India - 400000</p>
        </div>
      </div>
      {/* prev post section */}

      {/* adopt pet section */}
    </div>
  );
};

export default ProfileMAin;
