import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Index from '../pages/index/Index'
export default function RootRouter() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' component={Index}></Route>
            </Switch>
        </HashRouter>
    )
}
