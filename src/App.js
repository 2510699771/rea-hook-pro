import React from 'react'
import Counter from './pages/counter/Counter'
import CountFather from './pages/counter/CountFather'
import RootRouter from './router/RootRouter'
export default function App() {
  return (
    // <Counter></Counter>
    // <CountFather></CountFather>
    <>
      <RootRouter></RootRouter>
    </>
  )
}
