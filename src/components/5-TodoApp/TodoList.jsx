

export default function TodoList({ todoData }) {
  return (
    <div>
      <ul>
        {todoData.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
