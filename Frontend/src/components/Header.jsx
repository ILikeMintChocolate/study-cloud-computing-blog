import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const HeaderWrapper1 = styled.div`
    position: sticky;
    width: 100vw;
    top: 0;
    background-color: #ffffff;
    z-index: 1000;
`

const HeaderWrapper2 = styled.div`
    width: 720rem;
    height: 70rem;
    border-bottom: 1rem solid #4435f2;
    box-sizing: border-box;
`

const Logo = styled.div`
    font-family: 'Poppins' !important;
    font-style: normal;
    font-weight: 700;
    font-size: 24rem;
    line-height: 70rem;
    color: #4435f2;
    cursor: pointer;
`

const EditPostButton = styled.button`
    font-family: 'Poppins' !important;
    width: 150rem;
    height: 30rem;
    font-weight: 600;
    font-size: 14rem;
    line-height: 30rem;
    border: 0;
    border-radius: 6rem;
    color: #ffffff;
    background-color: #4435f2;
    cursor: pointer;
`

function Header({ isLogin }) {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [btnText, setBtnText] = useState('로그인')
    useEffect(() => {
        if (isLogin) setBtnText('게시물 추가')
        else setBtnText('로그인')
    }, [])

    return (
        <HeaderWrapper1>
            <HeaderWrapper2 className='fr hcenter fsbetween'>
                <Logo
                    onClick={() => {
                        navigate('/')
                    }}>
                    Cloud Computing
                </Logo>
                {pathname != '/login' ? (
                    <EditPostButton
                        className='vcenter'
                        onClick={() => {
                            if (isLogin) navigate('/edit')
                            else navigate('/login')
                        }}>
                        {btnText}
                    </EditPostButton>
                ) : null}
            </HeaderWrapper2>
        </HeaderWrapper1>
    )
}

export default Header
