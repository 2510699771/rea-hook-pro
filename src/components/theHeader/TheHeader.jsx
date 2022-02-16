import React from 'react'
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom'



export default function TheHeader(props) {
    const hittory = useHistory()
    return (
        <>
            <button onClick={() => {
                console.log(hittory)
            }}>退出</button>
        </>
    )
}

// function TheHeader(props) {
//     return (
//         <><button onClick={() => {
//             console.log(props)
//         }}>退出</button></>
//     )
// }
// export default withRouter(TheHeader)

