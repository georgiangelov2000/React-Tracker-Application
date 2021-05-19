import React from "react";
import { ListGroupItem, Row, Col,Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import fire from "../../firebase";

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
            <p className="text-success">+ ${props.price}</p>
          </Col>
          <Col>
          <Button variant="dark" onClick={deleteTransaction}>Delete</Button>
          </Col>
          <Col>
          <Link>Edit</Link>
          </Col>
          </>
        ) : (
            <>
          <Col>
            <p className="text-danger" >- ${props.price}</p>
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
