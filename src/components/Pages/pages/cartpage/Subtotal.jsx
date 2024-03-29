import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import { createSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Subtotal({ totalPrice }) {
  // state -----------

  const navigate = useNavigate();

  // comportement ----------
  const getOrder = (e) => {
    e.preventDefault();
    if (totalPrice === 0) {
      toast.error("sorry no item in basket ... ");
    } else {
      navigate({
        pathname: "/payment/:price",
        search: createSearchParams({
          price: totalPrice,
        }).toString(),
      });
    }
  };
  return (
    <SubtotalStyled>
      <div className="subtotal-p">
        <h3>Subtotal</h3>
      </div>
      <div className="subtotal-price">
        <h3>{totalPrice} €</h3>
      </div>

      <div className="button">
        {/* <Link to={{ pathname: `/payment/${totalPrice}` }}> */}
        <PrimaryButton
          className="button-style"
          label="BUY"
          onClick={getOrder}
        />
        {/* </Link> */}
      </div>
    </SubtotalStyled>
  );
}

const SubtotalStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
  /* border: 3px solid black; */
  margin-left: 30px;

  .subtotal-p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 9%;
    width: 100%;
    background-color: black;

    h3 {
      color: white;
      font-size: 30px;
      font-family: "Playfair Display", serif;
    }
  }

  .subtotal-price {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    width: 100%;
    background-color: white;
    border: 1px solid black;

    h3 {
      color: black;
      font-size: 40px;
      font-family: "Playfair Display", serif;
    }
  }
  .button {
    height: 20%;
    width: 100%;
    .button-style {
      height: 100%;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      background-color: black;
      border: 4px solid black;
      padding: 12px;

      :hover {
        background-color: white;
        border: 4px solid black;
      }
    }
  }
`;

export default Subtotal;
