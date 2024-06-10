import { Record } from "../../types";
import { DeleteButton, Li, Ul } from "./style";

interface Props {
  onDelete: (id: number) => void;
  laps: Record[];
}

const List = ({ onDelete, laps }: Props) => {
  return (
    <Ul>
      {laps.map((lap) => (
        <Li key={lap.id}>
          {lap.lap}
          <DeleteButton onClick={() => onDelete(lap.id)}>Delete</DeleteButton>
        </Li>
      ))}
    </Ul>
  );
};

export default List;
