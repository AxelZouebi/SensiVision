import styled from 'styled-components'

export const Title_Little = styled.div`
    width: 100%;
    font-size: calc( 56px + (56 - 56) * (100vw - 400px) / (1900 - 400) );
    font-weight: 700;
    text-align: center;
    color: #565656;
`

export const Title = styled.div`
    width: 100%;
    font-size: calc( 56px + (76 - 56) * (100vw - 400px) / (1900 - 400) );
    font-weight: 700;
    text-align: center;
    color: #565656;
`

export const Title_Big = styled.div`
    width: 100%;
    font-size: calc( 56px + (96 - 56) * (100vw - 400px) / (1900 - 400) );
    font-weight: 700;
    text-align: center;
    color: #565656;
`

export const UnderTitle = styled.div`
    color: #565656;
    font-size: calc( 20px + (20 - 16) * (100vw - 400px) / (800 - 400) );
    font-weight: 400;
    text-align: center;
`