import Header from './Header.jsx'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const InfoText = styled.span`
    font-weight: 600;
    font-size: 20rem;
    color: #141414;
    margin-top: 40rem;
`
const InputPassword = styled.input`
    width: 120rem;
    height: 30rem;
    font-weight: 600;
    font-size: 20rem;
    color: #141414;
    border: 1px solid #141414;
    border-radius: 6rem;
    margin-top: 40rem;
`

const InputButton = styled.button`
    width: 120rem;
    height: 30rem;
    font-weight: 600;
    font-size: 14rem;
    color: #ffffff;
    border: 0;
    border-radius: 6rem;
    margin-top: 40rem;
    background-color: #4435f2;
    cursor: pointer;
`

function Login({ setLoginFunction }) {
    const [data, setData] = useState([])
    const inputPws = useRef(null)
    const navigation = useNavigate()

    async function tryLogin() {
        await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Password: inputPws.current.value }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.result == 'success') {
                    setLoginFunction()
                    navigation('/')
                }
            })
    }

    return (
        <>
            <Header />
            <div style={{ width: '100vw' }}>
                <div style={{ width: '720rem' }} className='fc fleft hcenter'>
                    <InfoText style={{ textAlign: 'center' }}>비밀번호를 입력하세요</InfoText>
                    <InputPassword type={'password'} className='hcenter' ref={inputPws} />
                    <InputButton className='hcenter' onClick={() => tryLogin()}>
                        로그인
                    </InputButton>
                </div>
            </div>
        </>
    )
}

export default Login
