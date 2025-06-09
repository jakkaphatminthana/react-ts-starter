import { useRef, type FormEvent } from "react";

type Props = {
  onAddGoal: (title: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: Props) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const goalValue = goal.current?.value;
    const summaryValue = summary.current?.value;

    if (goalValue && summaryValue) {
      onAddGoal(goalValue, summaryValue);
    }
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
