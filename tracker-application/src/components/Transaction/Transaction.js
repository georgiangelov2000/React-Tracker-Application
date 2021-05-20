import React from "react";
import { ListGroupItem, Row, Col, Button, Badge } from "react-bootstrap";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const Transaction = (props) => {

  return (
    <ListGroupItem action variant="light" className="shadow-sm">
      <Row className="align-items-center">
        <Col >
          <h6 >{props.name}</h6>
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
          </>
        )}
      </Row>
    </ListGroupItem>
  );
};

export default Transaction;
