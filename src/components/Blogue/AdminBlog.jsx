import React from 'react'
import classes from "./Blog.module.css";
import fClasses from "../Contact/ContactForm.module.css"
import { ClockLoader } from "react-spinners";
import InnerWrapper from "../wrapper/InnerWrapper";
import Wrapper from "../wrapper/Wrapper";


function AdminBlog() {
    const adminLogin = {
        username: "Earl Pappi",
        password: "Snapdragon1."
    }
    return (
        <div className={classes.blogMainCon}>
            <Wrapper>
                <InnerWrapper>
                    <InnerWrapper>
                        <h1>ADMIN BLOGUE</h1>

                        <div className={fClasses.formCon}>
                            <form action="">
                                <div>
                                    <input placeholder='Enter Admin Username' type="text" name="" id="" />
                                    <input placeholder='Enter Admin Password' type="text" name="" id="" />
                                </div>
                                <button>LOGIN</button>
                            </form>


                        </div>




                    </InnerWrapper>
                </InnerWrapper>
            </Wrapper>
        </div>
    )
}

export default AdminBlog