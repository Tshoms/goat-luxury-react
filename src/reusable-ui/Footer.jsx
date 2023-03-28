import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import Blob from "../assets/images/blob.png";

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
              <h2>M.Tshoms</h2>
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
          height: 100%;
          width: 85%;
          /* border: 1px solid white; */
          background: url(${Blob});
          background-position: center;
          background-size: 75%;
          padding-top: 5px;

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
