import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 6rem;

  background-color: #fff;
  box-shadow: 0.2rem 0.3rem 0.5rem rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const ContainerUnique = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  padding-right: 3rem;
`
export const Line = styled.div`
  height: 4rem;
  border: 0.5px solid #c4bcbd;
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`

export const P = styled.p`
  color: #ac9c9c;
`

export const PageLink = styled.a`
  font-size: 2rem;
  line-height: 1.9rem;

  cursor: pointer;
`
export const PageLinkHome = styled.a`
  padding-left: 27rem;
  font-size: 2rem;
  line-height: 1.9rem;
  color: #ac9c9c;

  transition: 0.5 ease;

  cursor: pointer;

  &:hover {
    color: black;
  }

  
`

export const Container3 = styled.div`
  padding-left: 3rem;
  font-size: 2rem;
  line-height: 1.9rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  cursor: pointer;
`

export const Img = styled.img`
  width: 2.6rem;
`
export const PageLinkExit = styled.a`
  color: #9758a6;

  font-weight: bold;
  font-style: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
