import styled from 'styled-components'
import * as C from '../../styles/container.js';
import * as T from "../../styles/text.js"
import Image from 'next/image'

const Container4 = styled(C.Fc_center_center)`
  width: 100%;
  height: 100vh;
`

const Container4_1 = styled(C.Fc_center_center)`

`

const Title4 = styled(T.Title)`
  line-height: 1.5;
`

const UnderTitle4 = styled(T.UnderTitle)`

`

const Container4_2 = styled(C.Fr_center_center)`
  width: 100%;
  height: 50%;
`

const Text4 = styled.div`
  color: #565656;
  font-size: 22px;
  font-weight: 400;
  text-align: justify;
  padding: 0px 30px;
  line-height: 1.5;
`

const Container4_2_1 = styled(C.Fr_center_center)`
  width: 55%;
  height: 100%;
`

const Container4_2_2 = styled(C.Fr_center_center)`
 width: 45%;
 height: 100%;
 justify-content: unset;
`

const Container4_2_2_1 = styled(C.Fc_center_center)`
  width: 60%;
  height: 100%;
`

const Container4_2_2_2 = styled(C.Fc_center_center)`
width: 40%;
height: 100%;
`

const Container4_2_2_2_1 = styled.div`
width: 100%;
height: 50%;
`

const Container4_2_2_2_2 = styled.div`
width: 100%;
height: 50%;
`

const Activite_chien = () => {
    return ( 
        <Container4>
        <Container4_1>
            <Title4>
            Des activités pour votre chien
            </Title4>
            <UnderTitle4>
            Emmenez votre chien, il s'amusera et sera chouchouté toute la journée !
            </UnderTitle4>
        </Container4_1>
        <Container4_2>
            <Container4_2_1>
            <Text4>
            De nombreuses activités sont proposés pour les chiens, ils sont les bienvenue au festival. C'est le moment de leur faire plaisir, avec nos activités amusantes et nos séances de massages canins.
            <br/><br/>
    Pour rappel, tous les bénéfices de ce festival seront redistribués aux associations pour la cause animal !
    Alors n'attendez plus ! Venez vous amuser, venez offrir un super moment pour votre/vos chiens, et venez soutenir la cause  animal !
            </Text4>
            </Container4_2_1>
            <Container4_2_2>
            <Container4_2_2_1>
                <Image src="/education-dressage-chien.jpg" layout="fill"></Image>
            </Container4_2_2_1>
            <Container4_2_2_2>
                <Container4_2_2_2_1>
                <Image src="/massage-chien.jpg" layout="fill"></Image>
                </Container4_2_2_2_1>
                <Container4_2_2_2_2>
                <Image src="/labrador-en-train-de-nager.jpg" layout="fill"></Image>
                </Container4_2_2_2_2>
            </Container4_2_2_2>
            </Container4_2_2>
        </Container4_2>
        </Container4>
     );
}
 
export default Activite_chien;