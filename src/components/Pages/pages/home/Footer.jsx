import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

function Footer() {
  return (
    <FooterStyled>
      <div className="container">
        <div className="contact">
          <div className="title-container">
            <h4>Contact us</h4>
          </div>
          <div className="link">
            <p>Legal Notice</p>
          </div>
          <div className="link">
            <p>Conditions of our offers</p>
          </div>
          <div className="link">
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="service">
          <div className="title-container">
            <h4>Services</h4>
          </div>
          <div className="link">
            <p>Our promo codes</p>
          </div>
          <div className="link">
            <p>Shipping & delivery</p>
          </div>
          <div className="link">
            <p>Exchanges & Refunds</p>
          </div>
        </div>
        <div className="info">
          <div className="title-container">
            <h4>Info</h4>
          </div>
          <div className="link">
            <p>Authenticity & FAQs</p>
          </div>
          <div className="link">
            <p>Subscribe Newsletter Blueprint</p>
          </div>
          <div className="link">
            <p>Gift card</p>
          </div>
        </div>
        <div className="find">
          <div className="title-container">
            <h4>About me</h4>
          </div>
          <div className="brand">
            <div className="logo-container">
              <h2>Logo.</h2>
              {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#FF0066"
                    d="M44.3,-21C57.6,-2.5,68.8,21.8,61,38.1C53.3,54.5,26.6,62.9,-1.1,63.5C-28.8,64.1,-57.5,57,-69,38.5C-80.4,20,-74.6,-9.8,-60.2,-29C-45.8,-48.1,-22.9,-56.5,-3.7,-54.4C15.5,-52.2,31,-39.5,44.3,-21Z"
                    transform="translate(100 100)"
                  />
                </svg> */}
            </div>
          </div>
          <div className="network">
            <div className="network-link">
              <BsLinkedin className="icon" />
            </div>
            <div className="network-link">
              <BsGithub className="icon" />
            </div>
            <div className="network-link">
              <BiWorld className="icon" />
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  background-color: black;

  .container {
    display: flex;
    flex-direction: row;
    height: 80%;
    width: 95%;
    background-color: black;
    /* border: 1px solid white; */

    .contact,
    .service,
    .info,
    .find {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 25%;
      /* border: 1px solid white; */
      padding-left: 0px;

      .title-container {
        display: flex;
        height: 20%;
        width: 100%;
        /* border: 1px solid white; */
      }

      h4 {
        font-family: "Playfair Display", serif;
        color: white;
        font-size: 20px;
      }

      .link {
        display: flex;
        height: 15%;
        width: 100%;
        /* border: 1px solid white; */

        p {
          /* font-family: "Playfair Display", serif; */
          font-weight: bold;
          color: white;
        }
      }

      .brand {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46%;
        width: 100%;
        /* border: 1px solid white; */

        .logo-container {
          height: 90%;
          width: 90%;
          /* border: 1px solid white; */

          .h2 {
            color: white;
          }
        }
      }

      .network {
        display: flex;
        flex-direction: row;
        height: 30%;
        width: 100%;
        /* border: 2px solid red; */

        .network-link {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 25%;
          /* border: 1px solid white; */

          .icon {
            color: white;
            font-size: 30px;
          }
        }
      }
    }
  }
`;

export default Footer;
