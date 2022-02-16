import React from 'react'
import { Link } from 'react-router-dom'
import HomeRouter from '../../router/HomeRouter'
import TheHeader from '../../components/theHeader/TheHeader'
export default function Index(props) {
    return (
        <div>
            <header>
                <TheHeader></TheHeader>
            </header>
            <aside>
                <ul>
                    <li><Link to='/counter'>计数器</Link></li>
                    <li><Link to='/todolist'>待办事项</Link></li>
                </ul>
            </aside>
            <section>
                <HomeRouter></HomeRouter>
            </section>
        </div>
    )
}
