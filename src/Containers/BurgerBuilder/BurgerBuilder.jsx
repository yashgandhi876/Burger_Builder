import React, { Component } from "react";
import BuildControls from "../../Components/Burger/BuildControls/BildControls";
import Burger from "../../Components/Burger/Burger";
import Aux from "../../hoc/Auxilary/Auxilary";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";

const Ingrediant_Price = {
  salad: 30,
  mayo: 50,
  cheese: 30,
  bacon: 50,
};

class BurgerBuilder extends Component {
  state = {
    ingridents: {
      salad: 0,
      mayo: 0,
      cheese: 0,
      bacon: 0,
    },
    totalPrice: 60,
    purchasable: false,
  };

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
    alert(`Continue`);
  };

  render() {
    let disableInfo = { ...this.state.ingridents };
    for (let i in disableInfo) {
      disableInfo[i] = disableInfo[i] < 1;
    }
    return (
      <Aux>
        <Modal modalclicked={this.closeModal} show={this.state.purchasable}>
          <OrderSummary
            close={this.closeModal}
            continue={this.purchaseContinue}
            ingrediants={this.state.ingridents}
            price={this.state.totalPrice}
          />
        </Modal>
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
  }
}

export default BurgerBuilder;
