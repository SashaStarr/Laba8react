import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { InputNumber, DatePicker, Button } from "antd";
import { NavLink } from "react-router-dom";

import MyContext from "../../Context/context";
import {
  StyledItem,
  StyledMainInfo,
  StyledBuyInfo,
  EventImg,
  InfoContainer,
  InfoText,
  StyledButton
} from "./item.style";

export const Item = (props) => {
  const { id } = useParams();
  const { data } = useContext(MyContext);
  const item_element = data[id];
  return (
    <StyledItem>
      <StyledMainInfo>
        <EventImg src={item_element.imgSrc} />
        <InfoContainer>
          <h1>{item_element.header}</h1>
          Point:male<br/>
          Manufacturer: Vietnam <br />
          Size: 8.5<br/>
          Price: {item_element.price}$
          <StyledButton type="primary">Buy</StyledButton>
        </InfoContainer>
      </StyledMainInfo>
    </StyledItem>
  );
};

export default Item;
