import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - AgriShop"}>
      <div className="row contactus overflow-x-hidden"  id="style-1">
        <div className="col-md-6 ">
          <img
            src="/images/aboutUs.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Our Team - <br></br>Aman Singh(72153828K)<br></br>Bhavnesh Pawade(72153828K)<br></br>Shubham Dhenkar(72153828K)<br></br>Rohan Jadahvar(72153828K)
            
                          

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
