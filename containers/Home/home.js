import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import MyContext from "../../Context/context";
import Main from "../../Icons/accessories.jpg";
import {
  MainBody,
  StyledEvents,
  StyledCardComponents,
  StyledCard,
  TextStyle
} from "./home.style";
import { Card, Button } from "antd";
import "antd/dist/antd.css";

const Home = () => {
  const { data } = useContext(MyContext);
  const { Meta } = Card;

  const [countOfElements, setcountOfElements] = useState(4);

  return (
    <MainBody>
       <TextStyle>
            <h1>New design</h1>
            <img src={Main} />
          </TextStyle>
      <StyledEvents>
        {Object.values(data).slice(0, countOfElements).map(({ imgSrc, header, price, id }) => (
          <StyledCard
            hoverable
            cover={<img alt="example" src={imgSrc} />}
            key={id}
          >
            <StyledCardComponents>
              <Meta header={header} /><br />
              Price: ${price}
              <NavLink
                to={"/item/" + id}
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <Button type="primary">More</Button>
              </NavLink>
            </StyledCardComponents>
          </StyledCard>
        ))}
      </StyledEvents>
      <Button size="large" style={{ borderRadius: 5 , margin:20 }} onClick={() => setcountOfElements(countOfElements + 20)}>
        View more
      </Button>
    </MainBody>
  );
};

export default Home;
