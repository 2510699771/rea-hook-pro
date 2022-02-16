import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Counter from '../pages/counter/Counter'
import TodoList from '../pages/todolist/TodoList'
export default function HomeRouter() {
    return (
        <Switch>
            <Route path='/counter' component={Counter}></Route>
            <Route path='/todolist' component={TodoList}></Route>
        </Switch>
    )
}
