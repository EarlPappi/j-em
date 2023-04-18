import React from "react";
import classes from "./Blog.module.css";
import fClasses from "../Contact/ContactForm.module.css";
// import { ClockLoader } from "react-spinners";
import InnerWrapper from "../wrapper/InnerWrapper";
import Wrapper from "../wrapper/Wrapper";
import { useState } from "react";
import AddBlog from "./AddBlog";

function AdminBlog() {
  const adminLogin = {
    username: "Earl Pappi",
    password: "Snapdragon1.",
  };

  const [eUsername, setEUsername] = useState("");
  const [ePassword, setEPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    
    if (
        eUsername !== adminLogin.username ||
        ePassword !== adminLogin.password
      ) {
        setError("Invalid Login, go read blogs instead");
        console.log("Invalid Login, go read blogs instead");
        return;
      } else {
    console.log("Submitted")

        setIsLoggedIn(true);
      }
  };

  return (
    <div className={classes.blogMainCon}>
      <Wrapper>
        <InnerWrapper>
          <InnerWrapper>
            <h1>ADMIN BLOGUE</h1>

            <div className={fClasses.formCon}>
              {!isLoggedIn && (
                <>
              
                <form action="">
                  <div>
                    <input
                      onChange={(e) => setEUsername(e.target.value)}
                      placeholder="Enter Admin Username"
                      type="text"
                      name=""
                      id=""
                    />
                    <input
                      onChange={(e) => setEPassword(e.target.value)}
                      placeholder="Enter Admin Password"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  {error && <p style={{
                    background: "red"

                  }}>{error}</p>}
                </form>
            <button onClick={()=> handleLogin()}>Login</button>

                  </>
              )}
            </div>

            <div>
                {isLoggedIn && <>
                You be admin
                <AddBlog/>
                
                
                </>}
            </div>
          </InnerWrapper>
        </InnerWrapper>
      </Wrapper>
    </div>
  );
}

export default AdminBlog;
