import styled from 'styled-components';
import * as C from '../container';
import * as T from "../text";
import Link from 'next/link';

const Container1 = styled(C.Fc_center_center)`
  width: 100%;
  height: 70vh;
`

const Spacer = styled(C.Fc_center_center)`
  width: 100%;
  height: 7.5vh;
`

const Container1_1 = styled(C.Fc_center_center)`

`

const Title1 = styled(T.Title_Big)`
  line-height: 1;
`

const UnderTitle1 = styled(T.UnderTitle)`
  color: #666666;
  font-size: 50px;
  font-weight: 700;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(90deg, #0B6E4F 0%, #59A96A 100%);
  -webkit-background-clip: text;
  background-clip: text;
`

const UnderTitle2 = styled(T.UnderTitle)`

`

const Container1_2 = styled(C.Fr_center_center)`
  
`

const Button1 = styled.div`
  text-align: center;
  background: #85C7F2;
  color: #F5F7FA;
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px;
  margin: 0px 10px;
  border-radius: 5px;
  border: 2px solid #85C7F2;
`

const Button2 = styled.div`
  text-align: center;
  background: #11544D;
  color: #FEFCAD;
  font-size: 20px;
  font-weight: 700;
  margin: 0px 10px;
  padding: 15px 25px;
  border-radius: 5px;
  border: 2px solid #11544D;
`

const Accueil = () => {
    return ( 
        <>
        <Spacer/>
        <Container1>
        <Container1_1>
            <Title1>
            Sensivision
            </Title1>
            <UnderTitle1>
            Le festival pour la cause animal
            </UnderTitle1>
        </Container1_1>
        <UnderTitle2>
            Adresse du festival ...
        </UnderTitle2>
        <Container1_2>
            <Button1>
              <Link href="#date">
              En savoir plus
              </Link>
            </Button1>
            <Button2>
            Réserver
            </Button2>
        </Container1_2>
        </Container1>
        <Spacer/>
        </>
     );
}
 
export default Accueil;