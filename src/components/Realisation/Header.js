import React from "react";
import Wrapper from "../wrapper/Wrapper";
import InnerWrapper from "../wrapper/InnerWrapper";

import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.mainCon}>
      <Wrapper>
        <InnerWrapper>
          <InnerWrapper>
            <h1>Realisation</h1>
          </InnerWrapper>
        </InnerWrapper>
      </Wrapper>
    </div>
  );
}

export default Header;
