import Header from "./Header"
import Navbar from "./Navbar"
import styled from 'styled-components'

const Container = styled.section`
    width: 100vw;
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