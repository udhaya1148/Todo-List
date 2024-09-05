import Todo from "./Todo";


function TodoContainer({ todos ,delTodo }) {  
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return (
          <Todo key={index} index={index} todo={todo} delTodo={delTodo}/> 
        );
      })}
    </div>
  );
}


export default TodoContainer;
