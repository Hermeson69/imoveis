import styled from 'styled-components';

export const Container = styled.div`
padding: 25px 150px;
height: 76px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,0.1);
background-color: var(--white); 
`


export const Logo = styled.div`
display: flex;
align-items: center;
`


export const Menu = styled.div`
display: flex;
align-items: center;
ul{
    display: flex;
    list-style: none;
    li{
    margin: 0 15px;
    }
}
`
