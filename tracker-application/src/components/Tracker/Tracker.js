import React, { Component } from "react";
import fire from "../../firebase";
import {Form,Container,Button,Card,Row,Col} from "react-bootstrap";
import Transaction from "../Transaction/Transaction"

class Tracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    
    return (
      <Container className="mt-5">
        <Card className="p-2">
        <Card.Header>
          <Row>
            <Col>
            Hello: 
            </Col>
            <Col>
            Ballance: 
            </Col>
          </Row>
          
        </Card.Header>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="text-white">Transaction</Form.Label>
            <Form.Control
              type="text"
              name="transactionName"
              placeholder="Transaction Name"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label className="text-white">Type Transaction</Form.Label>
            <Form.Control
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

        <div>
            <p>Latest Transaction</p>
        </div>
        </Card>
      </Container>
    );
  }
}

export default Tracker;


/*   <ul>
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
*/