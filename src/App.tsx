import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./App.css";
import NameForm from "./components/NameForm";
import NamesTable from "./components/NamesTable";
import { deleteOne, getNameInfo, getPeople } from "./store/people-actions";
let isInitial = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      dispatch(getPeople());
      isInitial = false;
    }
  }, [dispatch]);

  const submitHandler = (name: string) => {
    dispatch(getNameInfo(name));
  };

  const deletePersonHandler = (id?: string) => {
    dispatch(deleteOne(id));
  };

  return (
    <Container>
      <NameForm submitHandler={submitHandler} />
      <NamesTable deletePersonHandler={deletePersonHandler} />
    </Container>
  );
}

export default App;
