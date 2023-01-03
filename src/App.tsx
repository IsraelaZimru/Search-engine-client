import { useState } from "react";
import "./App.css";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import NameForm from "./components/NameForm";
import NamesTable from "./components/NamesTable";

function App() {
  return (
    <Container>
      <NameForm />
      <NamesTable names={fake}/>
    </Container>
  );
}

export default App;

var fake = [
  {
    name: "s",
    gender: {
      gender: "male",
      probability: 99.9,
      count: 500,
    },
    nationality: [
      {
        country_id: "TH",
        probability: 0.809,
      },
      {
        country_id: "LI",
        probability: 0.249,
      },
      {
        country_id: "US",
        probability: 0.155,
      },
    ],
  },
  {
    name: "M",
    gender: {
      gender: "female",
      probability: 99.9,
      count: 660,
    },
    nationality: [
      {
        country_id: "TH",
        probability: 0.809,
      },
      {
        country_id: "LI",
        probability: 0.249,
      },
      {
        country_id: "US",
        probability: 0.155,
      },
    ],
  },
];
