import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { capitalize, numberFormatter } from "../data/utils";
import { RootState } from "../store/index";
import PopoverBtn from "./PopoverBtn";

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
                <td>{capitalize(item.name)}</td>
                <td>
                  {item.gender.gender} ({numberFormatter(item.gender.probability)}%)
                </td>
                <td>
                  <PopoverBtn item={item.nationality} />
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
