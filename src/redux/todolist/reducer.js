const initialState = {
    todos: [
        { id: 1, value: '学习HTML', done: false }
    ]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        // case first:
        //     return { ...state, ...payload }

        default:
            return state
    }
}
