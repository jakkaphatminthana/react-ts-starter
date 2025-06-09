import type { ReactNode } from "react";
import type { Goal } from "../App";
import GoalItem from "./GoalItem";
import InfoBox from "./InfoBox";

type Props = {
  goals: Goal[];
  onDelete: (id: number) => void;
};

export default function GoalList({ goals, onDelete }: Props) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no goals yet. Start adding some!</InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalItem id={goal.id} title={goal.title} onDelete={onDelete}>
              <p>{goal.description}</p>
            </GoalItem>
          </li>
        ))}
      </ul>
    </>
  );
}
