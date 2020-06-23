import React, { Component } from "react";
import BuildControls from "../../Components/Burger/BuildControls/BildControls";
import Burger from "../../Components/Burger/Burger";
import Aux from "../../hoc/Auxilary/Auxilary";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const Ingrediant_Price = {
  salad: 30,
  mayo: 50,
  cheese: 30,
  bacon: 50,
};

class BurgerBuilder extends Component {
  state = {
    ingridents: null,
    totalPrice: 40,
    purchasable: false,
    showSpinner: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get(
        "https://burger-builder-applicati-3be98.firebaseio.com/ingrediants.json"
      )
      .then((res) => {
        this.setState({ ingridents: res.data });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  addIngrediantHandler = (type) => {
    let oldcount = this.state.ingridents[type];
    let newcount = oldcount + 1;
    const updateIngrediants = {
      ...this.state.ingridents,
    };
    updateIngrediants[type] = newcount;
    const priceaddition = Ingrediant_Price[type];
    let newprice = this.state.totalPrice + priceaddition;

    this.setState({
      ingridents: updateIngrediants,
      totalPrice: newprice,
    });
  };

  removeIngrediantHandler = (type) => {
    let oldcount = this.state.ingridents[type];
    if (oldcount < 1) {
      return;
    }
    let newcount = oldcount - 1;
    const updateIngrediants = {
      ...this.state.ingridents,
    };
    updateIngrediants[type] = newcount;
    const priceaddition = Ingrediant_Price[type];
    let newprice = this.state.totalPrice - priceaddition;

    this.setState({
      ingridents: updateIngrediants,
      totalPrice: newprice,
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasable: true });
  };

  closeModal = () => {
    this.setState({ purchasable: false });
  };

  purchaseContinue = () => {
    this.setState({ showSpinner: true });

    let data = {
      ingrediants: this.state.ingridents,
      price: this.state.totalPrice,
      customer: {
        name: `yash gandhi`,
        address: `test street`,
        zipcode: 12423,
      },
      email: "test@test.com",
      deiveryMethod: "fastest",
    };

    axios
      .post("/order.json", data)
      .then((res) => {
        console.log(res);
        this.setState({ showSpinner: false, purchasable: false });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({ showSpinner: false, purchasable: false });
      });
  };

  render() {
    let disableInfo = { ...this.state.ingridents };
    for (let i in disableInfo) {
      disableInfo[i] = disableInfo[i] < 1;
    }

    let orderSummary = null;
    let burgers = <Spinner />;

    if (this.state.ingridents) {
      burgers = (
        <Aux>
          <Burger ingridents={this.state.ingridents} />
          <BuildControls
            price={this.state.totalPrice}
            disable={disableInfo}
            ingredientAdded={this.addIngrediantHandler}
            ingredientRemove={this.removeIngrediantHandler}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          close={this.closeModal}
          continue={this.purchaseContinue}
          ingrediants={this.state.ingridents}
          price={this.state.totalPrice}
        />
      );
      if (this.state.showSpinner) {
        orderSummary = <Spinner />;
      }
    }

    return (
      <Aux>
        <Modal modalclicked={this.closeModal} show={this.state.purchasable}>
          {orderSummary}
        </Modal>
        {burgers}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
