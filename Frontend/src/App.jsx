import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage.jsx'
import EditPage from './components/EditPage.jsx'
import PostPage from './components/PostPage.jsx'
import Login from './components/Login.jsx'
import { useEffect, useState } from 'react'

function App() {
    const [isLogin, setLogin] = useState(false)
    async function setLoginFunction() {
        setLogin(true)
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage isLogin={isLogin} />} />
                <Route path='/edit' element={<EditPage isLogin={isLogin} />} />
                <Route path='/edit/:id' element={<EditPage isLogin={isLogin} />} />
                <Route path='/post/:id' element={<PostPage isLogin={isLogin} />} />
                <Route path='/login' element={<Login isLogin={isLogin} setLoginFunction={setLoginFunction} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
