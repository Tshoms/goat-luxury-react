import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";
import Loading from "./Loading";
import { useSearchParams } from "react-router-dom";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";

function DeliveryOrder() {
  // state -----------
  const [searchParams] = useSearchParams();
  const price = searchParams.get("price");

  // comportement ----------
  const [loader, setLoader] = useState(true);

  const arrayNumber = 12345;

  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return loader ? (
    <Loading />
  ) : (
    <DeliveryOrderStyled>
      <h1>Order Number #{arrayNumber}</h1>
      <div className="order-container">
        <div className="title">
          <h3>Thank you !</h3>
        </div>
        <div className="logo-verify">
          <GoVerified className="icon" />
        </div>
        <div className="price-container">
          <span>{price} €</span>
        </div>
      </div>
      <div className="button-container">
        <PrimaryButton className="icon" label="back to shop" />
      </div>
    </DeliveryOrderStyled>
  );
}

const DeliveryOrderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: rgb(0, 0, 0);
  }

  .order-container {
    height: 500px;
    width: 30%;
    background-color: black;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20%;
      width: 100%;
      border: 1px solid white;

      h3 {
        color: white;
        font-size: 30px;
        font-family: "Playfair Display", serif;
      }
    }

    .logo-verify {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50%;
      width: 100%;
      background-color: white;
      border: 2px solid black;
      .icon {
        font-size: 90px;
        color: black;
      }
    }

    .price-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20%;
      width: 100%;

      span {
        font-size: 60px;
        color: white;
        font-family: "Playfair Display", serif;
      }
    }
  }
  .button-container {
    height: 70px;
    width: 150px;
    margin-top: 20px;

    .icon {
      padding: 25px;
    }
  }
`;

export default DeliveryOrder;
