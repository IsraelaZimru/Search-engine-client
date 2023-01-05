import {
  Button,
  Modal
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { numberFormatter } from "../data/utils";
import { peopleActions, RootState } from "../store";
import PopoverBtn from "./PopoverBtn";

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
          gender: {result?.gender.gender} ({numberFormatter(result?.gender.probability)}%)
          <br></br>
          nationality:{" "}
          <span className="mr-3">
            <PopoverBtn item={result?.nationality} />
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
