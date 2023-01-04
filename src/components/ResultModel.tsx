import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { peopleActions, RootState } from "../store";

export default function ResultModel() {
  const showModel = useSelector((state: RootState) => state.showResult);
  const result = useSelector((state: RootState) => state.lastPerson);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(peopleActions.CloseModel(false));

  return (
    <Modal show={showModel} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          name:{result?.name}
          <br></br>
          gender:{result?.gender.gender} ({result?.gender.probability}%)
          <br></br>
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
