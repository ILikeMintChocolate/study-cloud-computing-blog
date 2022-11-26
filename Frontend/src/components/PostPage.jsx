import styled from 'styled-components'
import Header from './Header.jsx'
import MDEditor from '@uiw/react-md-editor'
import { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle.jsx'

const PostWrapper = styled.div`
    width: 100vw;
    overflow-x: hidden;
`

function PostPage({ isLogin }) {
    const [id, setId] = useState(window.location.pathname.replaceAll('/post/', ''))
    const [data, setData] = useState({ Title: '' })
    const [height, setHeight] = useState(window.innerHeight - 150)

    useEffect(() => {
        async function getPost() {
            await fetch(`/api/post/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setData(data[0])
                })
        }
        getPost()
    }, [])

    return (
        <>
            <Header isLogin={isLogin} />
            <PostWrapper data-color-mode='light'>
                <div style={{ width: '720rem' }} className='hcenter'>
                    <SectionTitle title={`📒 ${data.Title}`} />
                </div>
                {setData != {} && <MDEditor.Markdown source={data.MDValue} style={{ width: '720rem' }} className='hcenter' />}
            </PostWrapper>
        </>
    )
}

export default PostPage
