import React, { Component } from "react";
import fire from "../../firebase";
import {Form,Container,Button} from "react-bootstrap";
import Transaction from "../Transaction/Transaction"

class Tracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: [],
      money: 0,

      transactionName: "",
      transactionType: "",
      price: "",
      currentUID: fire.auth().currentUser.uid,
    };

    this.handleTransactionName=this.handleTransactionName.bind(this);
    this.handleTransactionType=this.handleTransactionType.bind(this);
    this.handlePrice=this.handlePrice.bind(this);
  }

  handleTransactionName=(e)=>{
    this.setState({transactionName:e.target.value})
  }

  handleTransactionType=(e)=>{
    this.setState({transactionType:e.target.value})
  }

  handlePrice=(e)=>{
    this.setState({price:e.target.value})
  }
  
  
  addNewTransaction = (e) => {
    e.preventDefault();
    const { transactionName, transactionType, price, currentUID, money } = this.state;

    if (transactionName && transactionType && price) {
      const BackUpState = this.state.transactions;
      BackUpState.push({
        id: BackUpState.length + 1,
        name: transactionName,
        type: transactionType,
        price: price,
        user_id: currentUID,
      });

      fire
        .database()
        .ref("Transactions/" + currentUID)
        .push({
          id: BackUpState.length,
          name: transactionName,
          type: transactionType,
          price: price,
          user_id: currentUID,
        })
        .then((data) => {
          console.log("success callback");
          this.setState({
            transactions: BackUpState,
            money:
              transactionType === "deposit"
                ? money + parseFloat(price)
                : money - parseFloat(price),
            transactionName: "",
            transactionType: "",
            price: "",
          });
        })
        .catch((error) => {
          console.log("error" + error);
        });
    }
  };

  componentDidMount() {
    const { currentUID, money } = this.state;
    let totalMoney = money;
    const BackUpState = this.state.transactions;
    fire
      .database()
      .ref("Transactions/" + currentUID)
      .once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          totalMoney =
            childSnapshot.val().type === "deposit"
              ? parseFloat(childSnapshot.val().price) + totalMoney
              : totalMoney - parseFloat(childSnapshot.val().price);

          BackUpState.push({
            id: childSnapshot.val().id,
            name: childSnapshot.val().name,
            type: childSnapshot.val().type,
            price: childSnapshot.val().price,
            user_id: childSnapshot.val().user_id,
          });
        });
        this.setState({
          transactions: BackUpState,
          money: totalMoney,
        });
      });
  }

  render() {
    const currentUser = fire.auth().currentUser;
    const name=currentUser.email;
    const uid=name.uid;
    return (
      <Container>
        <p>Hello: {name}</p>
        <div>${this.state.money}</div>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Transaction</Form.Label>
            <Form.Control
              onChange={this.handleTransactionName}
              value={this.state.transactionName}
              type="text"
              name="transactionName"
              placeholder="Transaction Name"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Type Transaction</Form.Label>
            <Form.Control
              value={this.state.transactionType}
              name="type"
              onChange={this.handleTransactionType}
              as="select"
            >
              <option value="0">Type</option>
              <option value="expense">Expense</option>
              <option value="deposit">Deposit</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Transaction</Form.Label>
            <Form.Control
              onChange={this.handlePrice}
              value={this.state.price}
              type="text"
              name="price"
              placeholder="Price"
            />
          </Form.Group>
          <Button onClick={()=>this.addNewTransaction()} variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <div>
            <p>Latest Transaction</p>

            <ul>
                {
                    Object.keys(this.state.transactions).map((id)=>(
                        <Transaction key={id}
                        type={this.state.transactions[id].type}
                        type={this.state.transactions[id].name}
                        type={this.state.transactions[id].price}
                        />
                    ))
                }
            </ul>
        </div>
      </Container>
    );
  }
}

export default Tracker;
