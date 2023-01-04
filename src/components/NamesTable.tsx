import React from "react";
import {
  Table,
  ListGroup,
  OverlayTrigger,
  Popover,
  Button,
} from "react-bootstrap";
import { TPerson } from "../data/types";

export default function NamesTable({ names }: { names: TPerson[] }) {
  return (
    <div style={{ marginTop: "50px" }}>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>gender</th>
            <th>nationality</th>
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
                    <Button variant="success">Click me to see</Button>
                  </OverlayTrigger>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
