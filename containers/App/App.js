import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { StyledApp } from "./App.styles";
import MyContext from "../../Context/context";
import Home from "../Home/home";
import Catalog from "../Catalog/catalog";
import Item from "../Item/item";
import A from "../../Icons/adidas1.jpg"
import C from "../../Icons/adidas2.jpg"
import D from "../../Icons/adidas3.jpg"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const data = {
  1: {
    header: "Adidas A",
    imgSrc: A,
    price: 130,
    id: 1,
  },
  2: {
    header: "Adidas B",
    imgSrc: A,
    price: 150,
    id: 2,
  },
  3: {
    header: "Adidas C",
    imgSrc: C,
    price: 100,
    id: 3,
  },
  4: {
    header: "Adidas D",
    imgSrc: D,
    price: 55,
    id: 4,
  },
  5: {
    header: "Adidas E",
    imgSrc: D,
    price: 90,
    id: 5,
  },
  6: {
    header: "Adidas F",
    imgSrc: A,
    price: 70,
    id: 6,
  },
  7: {
    header: "Adidas R",
    imgSrc: A,
    price: 30,
    id: 7,
  },
  8: {
    header: "Adidas D",
    imgSrc: C,
    price: 200,
    id: 8,
  },
  9: {
    header: "Adidas F",
    imgSrc: D,
    price: 100,
    id: 9,
  },
  10: {
    header: "Adidas L",
    imgSrc: D,
    price: 50,
    id: 10}
};

let dataArr = Object.values(data);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updataArr = (arr) => {
      this.setState(() => ({
        dataArr: arr,
      }));
    };

    this.sortArr = (arr, compareFunc) => {
      this.setState(() => ({
        dataArr: arr.sort(compareFunc),
      }));
    };
    // Состояние хранит функцию для обновления контекста,
    // которая будет также передана в Provider-компонент.
    this.state = {
      data: data,
      dataArr: dataArr,
      updataArr: this.updataArr,
      sortArr: this.sortArr,
    };
  }

  render() {
    return (
      <Router>
        <MyContext.Provider value={this.state}>
          {" "}
          <StyledApp>
            <Header />
            <Switch>
              <Route path="/Catalog">
                <Catalog />
              </Route>
              <Route path="/NEW">
                <h3>Items</h3>
              </Route>
              <Route path="/item/:id">
                <Item />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </StyledApp>
        </MyContext.Provider>
      </Router>
    );
  }
}
export default App;
