import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
// import { connect } from 'react-redux'




export default function TodoList() {
    const state = useSelector((state) => {
        console.log(state.todoList.todos);
        return state.todoList.todos
    })
    const dispatch = useDispatch()
    console.log(state);
    return (
        <div>TodoList</div>
    )
}



// function TodoList(props) {
//     console.log(props);
//     return (
//         <div>TodoList</div>
//     )
// }
// const mapStateToProps = (state) => {
//     return state
// }
// export default connect(mapStateToProps)(TodoList)
