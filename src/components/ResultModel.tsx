import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { peopleActions, RootState } from "../store";
import {
  ListGroup,
  OverlayTrigger,
  Popover,
  Button,
  Modal,
} from "react-bootstrap";

export default function ResultModel() {
  const showModel = useSelector((state: RootState) => state.showResult);
  const result = useSelector((state: RootState) => state.lastPerson);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(peopleActions.CloseModel(false));

  return (
    <Modal show={showModel} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          name: {result?.name}
          <br></br>
          gender: {result?.gender.gender} ({result?.gender.probability}%)
          <br></br>
          nationality:{" "}
          <span>
            {" "}
            <OverlayTrigger
              trigger="click"
              placement="right"
              rootClose={true}
              overlay={
                <Popover id="popover-basic">
                  <Popover.Header as="h3">Countries :</Popover.Header>
                  <Popover.Body>
                    <ListGroup variant="flush">
                      {result?.nationality.map((cntry, j) => (
                        <ListGroup.Item key={j}>
                          {cntry.country_id} ({cntry.probability}%)
                        </ListGroup.Item>
                      ))}
                    </ListGroup>{" "}
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="warning">Click me to see</Button>
            </OverlayTrigger>
          </span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
