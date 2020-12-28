import React, { useContext } from "react";
import { StyledList } from "./itemslist.styled";
import { Item } from "./Item/item";
import MyContext from "../../../Context/context";

export const ItemsList = () => {

  return (
    <MyContext.Consumer>
      {({ dataArr }) => (
        <StyledList>
          {dataArr.map(
            ({
              header,
              imgSrc,
              price,
              id,
            }) => (
              <Item
                header={header}
                imgSrc={imgSrc}
                price={price}
                id={id}
                key={id}
                width="290"
              />
            )
          )}
        </StyledList>
      )}
    </MyContext.Consumer>
  );
};

export default ItemsList;
