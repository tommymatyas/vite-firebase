import Todo from " -/ components/Todo";
import { collection, addpoc, servertimestamp } from "firebase/firestore";
import { db } from "./services/firebase.config";

function App() {
  const collectionRef = collection(db, "todos");

  const handleAddTodo = async () => {
    try {
      await addpoc(collectionRef, {
        todo: "placeholder todo",
        isDone: false,
        time: servertimestamp(),
      });
      console.log("Data has been added");
    } catch (err) {
      console.error("Error adding document:", err);
    }
  };

  return (
    <div className="app">
      <button>add todo</button>
      <Todo />
    </div>
  );
}

export default App;
