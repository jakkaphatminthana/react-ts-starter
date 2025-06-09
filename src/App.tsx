import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import GoalList from "./components/GoalList";

export type Goal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: "New Goal",
        description: "This is a new goal",
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
        <h1>Your Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <GoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
