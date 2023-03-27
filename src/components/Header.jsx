import React from "react";
import styled from "styled-components";

const Header = () => {
  const Header = styled.header`
    height:70px;
    display:flex;
    align-items:center;
    background-color:#A626D3;
    h5{
      margin-left:auto;
    }

    img{
      height:70px
    }
    
  }
  `;

  return (
    <Header className="header">
      <h2>Meme Generator</h2>
    </Header>
  );
};

export default Header;
