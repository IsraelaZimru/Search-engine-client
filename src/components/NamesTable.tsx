import React from "react";
import { Table, ListGroup } from "react-bootstrap";
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
          {names.length &&
            names.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>
                  {item.gender.gender} ({item.gender.probability}%)
                </td>
                <td>
                  <ListGroup variant="flush">
                    {item.nationality.length &&
                      item.nationality.map((cntry, j) => (
                        <ListGroup.Item key={j}>
                          {cntry.country_id} ({cntry.probability}%)
                        </ListGroup.Item>
                      ))}
                  </ListGroup>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
