import React, { Component } from "react";
import fire from "../../firebase";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import {
  Form,
  Card,
  Row,
  Col,
  ListGroup,
  Badge,
  Button,
} from "react-bootstrap";
import moment from 'moment';
import Transaction from "../Transaction/Transaction";

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
  }

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value !== "0" ? e.target.value : "",
    });
  };

  addNewTransaction = (e) => {
    e.preventDefault();
    const { transactionName, transactionType, price, currentUID, money } =
      this.state;

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
          id: BackUpState.length + 1,
          name: transactionName,
          type: transactionType,
          price: price,
          user_id: currentUID,
        })
        .then((data) => {
          //success callback
          console.log(data);
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
          //error callback
          console.log("Error", error);
        });
    }
  };

  componentWillMount() {
    const { currentUID, money } = this.state;

    console.log(currentUID, money);
    let totalMoney = money;

    const BackUpState = this.state.transactions;

    console.log(BackUpState);

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
        console.log(totalMoney);
      });
  }

  render() {
    const currentUser = fire.auth().currentUser;
    return (
      <Row className="m-0">
        <Col xs={6} className="m-auto">
          <Card className="p-2 mb-5 mt-2">
            <Card.Header>
              <Row>
                <Col>
                <h4 className="text-dark">
                      Hello: {currentUser.email}
                  </h4>
                </Col>
                <Col>
                  <h6>
                    <Badge variant="primary">
                     Wallet Ballance: <AttachMoneyIcon /> {this.state.money}
                    </Badge>
                  </h6>
                </Col>
              </Row>
            </Card.Header>
            <Form onSubmit={this.addNewTransaction}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="text-white">Transaction</Form.Label>
                <Form.Control
                  onChange={this.handleChange("transactionName")}
                  value={this.state.transactionName}
                  type="text"
                  name="transactionName"
                  placeholder="Transaction Name"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="text-white">Type Transaction</Form.Label>
                <Form.Control
                  value={this.state.transactionType}
                  onChange={this.handleChange("transactionType")}
                  name="type"
                  as="select"
                >
                  <option value="0">Type</option>
                  <option value="expense">Expense</option>
                  <option value="deposit">Deposit</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="text-white">Transaction</Form.Label>
                <Form.Control
                  value={this.state.price}
                  onChange={this.handleChange("price")}
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="text-white"
                />
              </Form.Group>
              <Button className="mb-2" variant="warning" type="submit">
                Submit
              </Button>
            </Form>

            <h6 className="mt-3">
              Latest Transaction
            </h6>

            <h6 className="text-secondary">
              {moment().format('MMMM Do YYYY, h:mm:ss a')}
            </h6>

            <ListGroup variant="flush">
              <ListGroup.Item>
                {Object.keys(this.state.transactions).map((trans,id) => (
                  <Transaction
                    key={id}
                    type={this.state.transactions[id].type}
                    name={this.state.transactions[id].name}
                    price={this.state.transactions[id].price}
                  />
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Tracker;
