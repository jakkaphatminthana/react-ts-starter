import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";

export type Goal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal(title: string, description: string) {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title,
        description,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>My Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <GoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
