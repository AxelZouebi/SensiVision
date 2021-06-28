import Header from "./Header"
import Navbar from "./Navbar"
import styled from 'styled-components'

const Container = styled.section`
    width: calc(100vw - (100vw - 100%));
`;

const Layout = ({children}) => {
    return ( 
        <Container id="accueil">
            <Header/>
            <Navbar/>
            {children}
        </Container>
     );
}
 
export default Layout;