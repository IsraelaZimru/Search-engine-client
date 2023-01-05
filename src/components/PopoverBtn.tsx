import React from "react";
import { ListGroup, OverlayTrigger, Popover, Button } from "react-bootstrap";
import { TPerson } from "../data/types";
import { numberFormatter } from "../data/utils";

export default function PopoverBtn({
  item = [],
}: {
  item: TPerson["nationality"] | undefined;
}) {
  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      rootClose={true}
      overlay={
        <Popover id="popover-basic">
          <Popover.Header as="h3">Countries :</Popover.Header>
          <Popover.Body>
            <ListGroup variant="flush">
              {!!item.length &&
                item.map((cntry, j) => (
                  <ListGroup.Item key={j}>
                    {cntry.country_id} ({numberFormatter(cntry.probability)}%)
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="warning">Click me to see</Button>
    </OverlayTrigger>
  );
}
