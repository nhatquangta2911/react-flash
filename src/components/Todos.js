import React from 'react'

const Todos = ({deleteTodo, todos}) => {

    const todosList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="orange-text">You have no todo's left</p>
    )
    

    return (
         <div className="todos collection">
             {todosList}
         </div>
    )

}

export default Todos