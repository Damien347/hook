import React, {useState} from 'react';


import AddOneTodo from './AddOneTodo';

const TodoList = ()=> {

    const [todos, setTodos] = useState([
        {id: 1, todo: 'Acheter des cadeaux de noel'},
        {id: 2, todo: 'Emballez les cadeaux de noel'},
        {id: 3, todo: 'Offrir les cadeaux de noel'}
    ])


    const [warning, setWarning] = useState(false)

    console.log(todos);

    const myTodos = todos.map((todo) => {
        return (
            <li key={todo.id}> {todo.todo} </li>
        )
    })

    const addNewTodo = (newTodo) => {

        if(newTodo !== '') {
            setTodos([...todos, {
                id: '',
                todo: newTodo
            }])
        } else {
            setWarning(true);
        }
        
    }


    return (
        <div>
            <h2> {todos.length} To - do</h2>
            <ul>
                {myTodos} 
            </ul>

            <AddOneTodo addNewTodo={addNewTodo} />
        </div>
    )
}

export default TodoList;