import "./App.css";
import { Container } from "react-bootstrap";
import NameForm from "./components/NameForm";
import NamesTable from "./components/NamesTable";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPeople } from "./store/people-actions";
import { RootState } from "../src/store/index";
let isInitial = true;

function App() {
  const people = useSelector((state: RootState) => state.names);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      dispatch(getPeople());
      isInitial = false;
      return;
    }
  }, [people, dispatch]);
  return (
    <Container>
      <NameForm />
      <NamesTable names={people} />
    </Container>
  );
}

export default App;
