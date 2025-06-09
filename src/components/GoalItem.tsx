import type { ReactNode } from "react";

interface Props {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

export default function GoalItem({ id, title, onDelete, children }: Props) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
