import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const RemoveEditButton = styled.button`
    position: relative;
    width: 20rem;
    height: 20rem;
    border: 0;
    background-color: transparent;
    margin: 0;
    padding: 0;
    top: 12rem;
    visibility: hidden;
    cursor: pointer;
`

const PostCardWrapper = styled.div`
    width: 720rem;
    height: 200rem;
    border: 1rem solid #bdbdbd;
    border-radius: 6rem;
    margin-bottom: 20rem;
    cursor: pointer;
    &:hover {
        border: 1rem solid #4435f2;
    }

    &:hover ${RemoveEditButton} {
        visibility: visible;
    }
`

const PostCardTitle = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 20rem;
    line-height: 29rem;
    color: #141414;
`

const PostCardThumbnail = styled.img`
    width: 110rem;
    height: 110rem;
    object-fit: cover;
    border-radius: 6rem;
    margin-right: 30rem;
`

const PostCardOverview = styled.div`
    width: ${(props) => props.width};
    font-style: normal;
    font-weight: 400;
    font-size: 14rem;
    color: #696969;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    line-height: 24rem;
    margin-top: -4rem;
`

const IndexWrapper = styled.div`
    position: relative;
    left: 12rem;
    top: 12rem;
    width: 20rem;
    height: 20rem;
    background-color: #f1f1f1;
    border-radius: 6rem;
    margin: 0;
    padding: 0;
`
const IndexText = styled.div`
    width: 20rem;
    font-weight: 500;
    font-size: 12rem;
    line-height: 20rem;
    text-align: center;
    color: #696969;
`

const ButtonWrapper = styled.div`
    display: ${(props) => (props.isLogin ? 'flex' : 'none')};
`

function PostCard({ index, id, title, imgSrc = null, overview, refresh, isLogin }) {
    const navigate = useNavigate()

    function removePost(event) {
        let askDelete = confirm('삭제할까요?')
        if (askDelete) {
            async function requestDeletePost() {
                await fetch('/api/post', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: id }),
                })
            }
            requestDeletePost()
            refresh()
        }
        event.stopPropagation()
    }

    function editPost(event) {
        navigate(`/edit/${id}`)
        event.stopPropagation()
    }

    function goPost() {
        navigate(`/post/${id}`)
    }

    return (
        <PostCardWrapper className='fr' onClick={() => goPost()}>
            <div style={{ width: '50rem' }}>
                <IndexWrapper>
                    <IndexText>{index}</IndexText>
                </IndexWrapper>
            </div>
            <div style={{ width: '620rem', height: '180rem' }} className='fc fsevenly vcenter'>
                <PostCardTitle>{title}</PostCardTitle>
                <div className='fr fsbetween' style={{ height: '120rem' }}>
                    {imgSrc != '' ? (
                        <>
                            <PostCardThumbnail src={imgSrc} />
                            <PostCardOverview width='480rem'>{overview}</PostCardOverview>
                        </>
                    ) : (
                        <PostCardOverview width='620rem'>{overview}</PostCardOverview>
                    )}
                </div>
            </div>
            <ButtonWrapper style={{ width: '50rem' }} isLogin={isLogin} className='fc'>
                <RemoveEditButton onClick={(event) => removePost(event)} className='hcenter'>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M4.85714 16.2222C4.85714 17.2 5.62857 18 6.57143 18H13.4286C14.3714 18 15.1429 17.2 15.1429 16.2222V5.55556H4.85714V16.2222ZM16 2.88889H13L12.1429 2H7.85714L7 2.88889H4V4.66667H16V2.88889Z'
                            fill='#BDBDBD'
                        />
                    </svg>
                </RemoveEditButton>
                <RemoveEditButton onClick={(event) => editPost(event)} className='hcenter' style={{ marginTop: '10rem' }}>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M4 13.5003V16H6.49965L13.872 8.62769L11.3723 6.12804L4 13.5003ZM15.805 6.69463C16.065 6.43466 16.065 6.01472 15.805 5.75476L14.2452 4.19497C13.9853 3.93501 13.5653 3.93501 13.3054 4.19497L12.0855 5.4148L14.5852 7.91446L15.805 6.69463V6.69463Z'
                            fill='#BDBDBD'
                        />
                    </svg>
                </RemoveEditButton>
            </ButtonWrapper>
        </PostCardWrapper>
    )
}

export default PostCard
