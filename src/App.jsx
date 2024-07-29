import "./App.css";
import TodoContainer from "./components/5-TodoApp/TodoContainer";
import UserTable from "./components/6-UserTable/UserTable";

function App() {
  return (
    <div className="App">
      <UserTable />
      <TodoContainer/>
    </div>
  );
}

export default App;
