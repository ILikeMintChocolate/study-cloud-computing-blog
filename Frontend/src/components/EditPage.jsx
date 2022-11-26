import styled from 'styled-components'
import Header from './Header.jsx'
import { useEffect, useRef, useState } from 'react'
import SectionTitle from './SectionTitle.jsx'
import MDEditor from '@uiw/react-md-editor'
import { useNavigate } from 'react-router-dom'
import removeMarkdown from 'markdown-to-text'

const EditorWrapper = styled.div`
    width: 720rem;
`

const SavePostButton = styled.button`
    position: fixed;
    bottom: 50rem;
    width: 300rem;
    height: 60rem;
    border-radius: 6rem;
    background-color: #4435f2;
    z-index: 1000;
    border: 0;
    cursor: pointer;
`
const SavePostButtonText = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20rem;
    line-height: 30rem;
    color: #ffffff;
`

const InputTitle = styled.input`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20rem;
    color: #252525;
    height: 30rem;
    margin-top: 20rem;
    margin-left: 2rem;
    border: 0;
    width: 650rem;
    &:focus {
        outline: 0;
    }
`

const InputImgSrc = styled.input`
    font-style: normal;
    font-weight: 400;
    font-size: 14rem;
    color: #252525;
    height: 30rem;
    margin-top: 20rem;
    border: 1px solid #d0d7de;
    border-radius: 3rem;
    width: 700rem;
    padding-left: 20px;
    &:focus {
        outline: 0;
    }
`

function EditPage({ isLogin }) {
    const [title, setTitle] = useState('')
    const [imgSrc, setImgSrc] = useState('')
    const [value, setValue] = useState('**Hello world!**')
    const [height, setHeight] = useState(window.innerHeight - 350)
    const [id, setId] = useState(window.location.pathname.replaceAll('/edit', ''))
    const [buttonText, setButtonText] = useState('')
    const navigation = useNavigate()

    useEffect(() => {
        if (id == '') {
            setButtonText('게시물 등록하기')
        } else {
            async function getPost() {
                await fetch(`/api/post/${id.substr(1)}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setTitle(data[0].Title)
                        setValue(data[0].MDValue)
                        setImgSrc(data[0].ImgSrc)
                    })
            }
            getPost()
            setButtonText('게시물 수정하기')
        }
    }, [])

    async function sendPost() {
        let overview = await removeMarkdown(value)
        console.log(title)
        let data = {
            Title: title == '' ? '제목 없는 포스트' : title,
            MDValue: value,
            ImgSrc: imgSrc == '' ? '' : imgSrc,
            Overview: overview,
        }
        if (id == '') {
            console.log('if')
            await fetch('/api/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
        } else {
            console.log('else')
            await fetch(`/api/post/${id.substr(1)}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
        }
        navigation('/')
    }

    const titleChange = (event) => setTitle(event.target.value)
    const imgSrcChange = (event) => setImgSrc(event.target.value)

    return (
        <>
            <Header isLogin={isLogin} />
            <EditorWrapper data-color-mode='light' className='hcenter'>
                <div className='fr'>
                    <SectionTitle title={'📝'} />
                    <InputTitle type='text' placeholder='타이틀을 입력하세요' onChange={titleChange} value={title} />
                </div>
                <MDEditor value={value} onChange={setValue} height={height} />
            </EditorWrapper>
            <InputImgSrc type='text' placeholder='썸네일 주소를 입력하세요' onChange={imgSrcChange} value={imgSrc} className='hcenter' />
            <SavePostButton className='hcenter' onClick={() => sendPost()}>
                <SavePostButtonText>{buttonText}</SavePostButtonText>
            </SavePostButton>
        </>
    )
}

export default EditPage
