import type { Goal } from "../App";
import GoalItem from "./GoalItem";

type Props = {
  goals: Goal[];
  onDelete: (id: number) => void;
};

export default function GoalList({ goals, onDelete }: Props) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <GoalItem id={goal.id} title={goal.title} onDelete={onDelete}>
            <p>{goal.description}</p>
          </GoalItem>
        </li>
      ))}
    </ul>
  );
}
