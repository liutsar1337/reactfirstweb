import { Routes, Route } from 'react-router-dom'

function Post() {
    return (
        <div>
            <h1> Hi!</h1>
            <Routes>
                <Route path='/show' element={<h1>Showed only when you type /show</h1>}>
                </Route>
            </Routes>
        </div>
    )
}

export default Post