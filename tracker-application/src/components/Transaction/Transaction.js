import React from "react";
import { ListGroupItem, Row, Col, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const Transaction = (props) => {
  return (
    <ListGroupItem>
      <Row className="align-items-center">
        <Col>
          <h6>{props.name}</h6>
        </Col>
        {props.type === "deposit" ? (
          <>
            <Col>
              <span>
                <Badge variant="success">
                 Ballance:<AttachMoneyIcon />+{props.price}
                </Badge>
              </span>
            </Col>
            <Col>
              <Button variant="dark">Delete</Button>
            </Col>
            <Col>
              <Link>Edit</Link>
            </Col>
          </>
        ) : (
          <>
            <Col>
              <span>
                <Badge variant="danger">
                  Ballance:<AttachMoneyIcon />-{props.price}
                  {props.moment}
                </Badge>
              </span>
            </Col>
            <Col>
              <Button variant="dark">Delete</Button>
            </Col>
            <Col>
              <Link>Edit</Link>
            </Col>
          </>
        )}
      </Row>
    </ListGroupItem>
  );
};

export default Transaction;
