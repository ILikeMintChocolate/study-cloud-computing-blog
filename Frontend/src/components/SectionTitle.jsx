import styled from 'styled-components'

const SectionTitleSpan = styled.div`
    font-weight: 600;
    font-size: 20rem;
    color: #141414;
    margin-top: 20rem;
    margin-bottom: 20rem;
`

function SectionTitle({ title = '' }) {
    return <SectionTitleSpan>{title}</SectionTitleSpan>
}

export default SectionTitle
