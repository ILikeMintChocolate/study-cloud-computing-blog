import Header from './Header.jsx'
import SectionTitle from './SectionTitle.jsx'
import PostCard from './PostCard.jsx'
import { useEffect, useState } from 'react'

function MainPage({ isLogin }) {
    const [data, setData] = useState([])

    async function getPost() {
        await fetch('/api/post')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }

    useEffect(() => {
        getPost()
    }, [])

    useEffect(() => {}, [data])

    async function refresh() {
        getPost()
    }

    return (
        <>
            <Header isLogin={isLogin} />
            <div style={{ width: '100vw' }}>
                <div style={{ width: '720rem' }} className='fc fleft hcenter'>
                    <SectionTitle title={'📒 모든 포스트'} />
                    {data.length != 0 &&
                        data.map((element, index) => (
                            <PostCard
                                index={data.length - index}
                                id={element.ID}
                                title={element.Title}
                                imgSrc={element.ImgSrc}
                                overview={element.Overview}
                                key={`post-${element.ID}`}
                                refresh={refresh}
                                isLogin={isLogin}
                            />
                        ))}
                </div>
            </div>
        </>
    )
}

export default MainPage
