import React, {useState} from 'react';

const AddOneTodo = ({addNewTodo})=> {

    const [ addTodo, setAddTodo] = useState('')

const handleTodo = (e) => {
    e.preventDefault()
    addNewTodo(addTodo)

    setAddTodo('')
}
    

    return (
        <form onSubmit={handleTodo}>
            <label> Ajouter une tache</label>
            <input type="text" value={addTodo} onChange={(e) => setAddTodo(e.target.value) }/>
            <input type="submit" />

        </form>
    )
}

export default AddOneTodo;