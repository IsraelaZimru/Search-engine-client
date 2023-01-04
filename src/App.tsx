import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./App.css";
import NameForm from "./components/NameForm";
import NamesTable from "./components/NamesTable";
import ResultModel from "./components/ResultModel";
import { deleteOne, getNameInfo, getPeople } from "./store/people-actions";
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isInitial) {
      dispatch(getPeople());
      isInitial = false;
    }
  }, [dispatch]);

  const submitHandler = async (name: string) => {
    await dispatch(getNameInfo(name));
  };

  const deletePersonHandler = async (id?: string) => {
    await dispatch(deleteOne(id));
  };

  return (
    <Container>
      <NameForm submitHandler={submitHandler} />
      <ResultModel/>
      <NamesTable deletePersonHandler={deletePersonHandler} />
    </Container>
  );
}

export default App;
