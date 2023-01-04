import React from "react";
import {
  Table,
  ListGroup,
  OverlayTrigger,
  Popover,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

export default function NamesTable({
  deletePersonHandler,
}: {
  deletePersonHandler: (id?: string) => void;
}) {
  const names = useSelector((state: RootState) => state.names);

  return (
    <div style={{ marginTop: "50px" }}>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>gender</th>
            <th>nationality</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!!names.length &&
            names.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>
                  {item.gender.gender} ({item.gender.probability}%)
                </td>
                <td>
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    rootClose={true}
                    overlay={
                      <Popover id="popover-basic">
                        <Popover.Header as="h3">Countries :</Popover.Header>
                        <Popover.Body>
                          <ListGroup variant="flush">
                            {!!item.nationality.length &&
                              item.nationality.map((cntry, j) => (
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
                </td>
                <td>
                  <span
                    title={"delete button"}
                    onClick={() => deletePersonHandler(item?._id)}
                    style={{ cursor: "pointer" }}
                  >
                    ⛔
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
