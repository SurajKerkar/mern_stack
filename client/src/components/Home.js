import React, { useState, useEffect } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
        const res = await fetch('http://localhost:5000/getdata', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        if (res.status === 401) {
            // Handle unauthorized access, redirect to login, or perform authentication.
            console.log("Unauthorized access. Redirect to login.");
            return;
        }

        const data = await res.json();
        setUserName(data.name);
        setShow(true);
    } catch (err) {
        console.log(err);
    }
};


  useEffect(() => {
    userHomePage();
  }, []);
  return (
    <>
      <div className="home-page">
        <div className="home-div">
          <p className="pt-5">WELCOME</p>
          <h1>{userName}</h1>
          <h2>
            {" "}
            {show ? "Happy, to see you back" : "We Are The MERN Developer"}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
