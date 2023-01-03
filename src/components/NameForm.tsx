import { useState } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { TInfo } from "../data/types";

function NameForm() {
  const [info, setInfo] = useState<TInfo>({
    name: {
      pattern: /\w{2,}/,
      msg: [],
      value: "",
      isInVaild: false,
    },
  });

  function updateHandler(event: React.FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setInfo((prev) => ({
      name: {
        ...info.name,
        value,
      },
    }));
  }

  function submitHandler() {
    console.log("enetr sumbit");
    const value = info.name.value;
    //checking validation
    const errorMsg: string[] = [];
    let isMsgShowing = false;
    if (value.length < 1) {
      isMsgShowing = true;
      errorMsg.push(`name is required.`);
    } else if (info.name.pattern.test(value)) {
      isMsgShowing = false;
    } else {
      errorMsg.push(`name is not valid.`);
      isMsgShowing = true;
    }
    setInfo({
      name: {
        ...info.name,
        value,
        isInVaild: isMsgShowing,
        msg: errorMsg,
      },
    });

    if (errorMsg[0]) {
      //if there is error msg ->submit don't happens!

      console.log("err", errorMsg[0]);
      setTimeout(
        () =>
          setInfo((prev) => ({
            name: {
              ...info.name,
              isInVaild: false,
              msg: [],
            },
          })),
        3000
      );
      return;
    }

    console.log("everything is fine!!! 😎");
  }

  return (
    <Container>
      <h1 className="mb-5 display-4">
        <u> search nationality & gender of names</u>
      </h1>
      <Row className="justify-content-md-center">
        <Col className="my-1" xs={4}>
          <input
            placeholder="Jane Doe"
            className="px-5 py-2"
            value={info.name.value}
            onChange={updateHandler}
          />
          <small
            className={`text-danger minHeight:100px visibility:${
              info.name.isInVaild ? "hidden" : "visible"
            }`}
          >
            {info.name.msg}
          </small>
        </Col>
        <Col className="my-1" xs={2}>
          <Button onClick={submitHandler}>Search</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NameForm;
