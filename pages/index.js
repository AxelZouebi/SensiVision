
import React, {useRef, useEffect} from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import * as C from '../styles/container';
import Dog from '../comps/animation/dog';
import * as Scroll from 'react-scroll'

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

const Title1 = styled.div`
  color: #565656;
  font-size: 96px;
  font-weight: 700;
  text-align: center;
  line-height: 1;
`

const UnderTitle1 = styled.div`
  color: #666666;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(90deg, #0B6E4F 0%, #59A96A 100%);
  -webkit-background-clip: text;
`

const UnderTitle2 = styled.div`
  text-color: #565656;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
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
const scrollToRef = (ref) => window.scrollTo({left:0, top:ref.current.offsetTop, behavior: 'smooth'})

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

const Container2 = styled(C.Fr_center_center)`
  width: 100%;
  height: 100vh;
  background: #FEFCAD;
`

const Container2_1 = styled(C.Fc_bottom_center)`
  position: absolute;
  right: 55px;
  bottom: 0px;
  width: 20%;
  height: 100%;
`

const Container2_2 = styled(C.Fr_right_center)`
  width: 100%;
  height: 100%;
`

const Container2_2_1 = styled(C.Fr_center_center)`
  position: absolute;
  right: 150px;
  width: 600px;
  height: 80%;
  padding: 5%;
  border-radius: 25px;
  background: #F5F7FA;
`

const Title2 = styled.div`
  width: 100%;
  text-align: center;
  font-size: 96px;
  font-weight: 700;
  color: #565656;;
`
const Container3 = styled(C.Fc_center_center)`
  width: 100%;
  height: 100vh;
`

const Container3_1 = styled(C.Fc_center_center)`

`

const Title3 = styled.div`
  width: 100%;
  text-align: center;
  font-size: 76px;
  font-weight: 700;
  color: #565656;
  line-height: 1.5;
`

const UnderTitle3 = styled.div`
  text-color: #565656;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

const Container3_2 = styled(C.Fr_center_center)`
  width: 100%;
`

const Img = styled.div`
  border-radius: 100%;
  width: 200px;
  height: 200px;
`

const Container4 = styled(C.Fc_center_center)`
  width: 100%;
  height: 100vh;
`

const Container4_1 = styled(C.Fc_center_center)`

`

const Title4 = styled.div`
  width: 100%;
  text-align: center;
  font-size: 76px;
  font-weight: 700;
  color: #565656;
  line-height: 1.5;
`

const UnderTitle4 = styled.div`
  text-color: #565656;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

const Container4_2 = styled(C.Fr_center_center)`
  width: 100%;
  height: 50%;
`

const Text4 = styled.div`
  text-color: #565656;
  font-size: 22px;
  font-weight: 400;
  text-align: justify;
  padding: 0px 30px;
  line-height: 1.5;
`

const Container4_2_1 = styled(C.Fr_center_center)`
  width: 55%;
  height: 100%
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

const Container5 = styled(C.Fc_center_center)`
  width: 100%;
  height: 1500px;
`

const Container5_1 = styled(C.Fr_center_center)`
  width: 100%;
  height: 300px;
  margin: 25px 0px;
`

const Container5_2 = styled(C.Fr_center_center)`
  width: 100%;
  height: 300px;
  margin: 25px 0px;
`

const Container5_3 = styled(C.Fr_center_center)`
  width: 100%;
  height: 300px;
  margin: 25px 0px;
`

const Title5 = styled.div`
  font-size: 96px;
  font-weight: 700;
  color: #565656;
  text-align: center;
  line-height: 1.5;
`

const Partenaire = styled(C.Fc_center_center)`
  background-color: #f4f4f4;
  width: 352px;
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  filter: drop-shadow(0px 20px 25px rgba(0,0,0,0.12));
`

const Partenaire_Title5 = styled.div`
font-size: 20px;
  font-weight: 700;
  text-align: center;
  line-height: 1.5;
`

const Partenaire_Text5 = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
`
export default function Home() {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  return (
    <>
    <Spacer/>
    <Container1 >
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
        <Button1 onClick={executeScroll}>
          En savoir plus
        </Button1>
        <Button2>
          Réserver
        </Button2>
      </Container1_2>
    </Container1>
    <Spacer/>
    <Container2 ref={myRef}>
      <Container2_1>
        <Dog></Dog>
      </Container2_1>
      <Container2_2>
        <Title2>
          Du 21 au 23 août !
        </Title2>
      </Container2_2>
    </Container2>
    <Container3 id="intervenants">
      <Container3_1>
        <Title3>
          Des intervenants d'exception
        </Title3>
        <UnderTitle3>
          Retrouvez Vianney, Louane, Julien Doré et bien d'autre encore pour vous faire vibrer.
        </UnderTitle3>
      </Container3_1>
      <Container3_2>
          <Image className={styles.img} src="/Capture.jpeg" width={200} height={200}></Image>
          <Image src="/vianney.png" width={200} height={200}></Image>
          <Image className={styles.img} src="/louane.jpg" width={200} height={200}></Image>
      </Container3_2>
    </Container3>
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
    <Container5 id="nos_partenaires">
      <Title5>
        Nos partenaires
      </Title5>
      <Container5_1>
        <Partenaire>
          <Image className={styles.img} src="/Logo_de_la_SPA_(France).png" width={100} height={100}></Image>
          <Partenaire_Title5>
            SPA
          </Partenaire_Title5>
          <Partenaire_Text5>
            L'association Société protectrice des animaux est, en France, la plus ancienne des sociétés de protection des animaux.
          </Partenaire_Text5>
          </Partenaire>
          <Partenaire>
          <Image className={styles.img} src="/fondation_brigitte_bardot.jpg" width={100} height={100}></Image>
          <Partenaire_Title5>
            Fondation Brigitte Bardot
          </Partenaire_Title5>
          <Partenaire_Text5>
            Fondation française vouée à la protection des animaux.
          </Partenaire_Text5>
          </Partenaire>
          <Partenaire>
          <Image className={styles.img} src="/Fondation_30_millions_damis.jpg" width={100} height={100}></Image>
          <Partenaire_Title5>
            Fondation 30 millions d'amis
          </Partenaire_Title5>
          <Partenaire_Text5>
            Fondation combattant toutes formes de souffrance animal.
          </Partenaire_Text5>
        </Partenaire>
      </Container5_1>
      <Container5_2>
        <Partenaire>
          <Image className={styles.img} src="/logo_codeanimal.jpg" width={100} height={100}></Image>
          <Partenaire_Title5>
            Code Animal
          </Partenaire_Title5>
          <Partenaire_Text5>
            Association spécialisée dans la relation entre l’espèce humaine et les autres animaux.
          </Partenaire_Text5>
          </Partenaire>
          <Partenaire>
          <Image className={styles.img} src="/logo-stephane-lamart-habilitation.png" width={100} height={100}></Image>
          <Partenaire_Title5>
            Fondation Stéfane Lamart 
          </Partenaire_Title5>
          <Partenaire_Text5>
            Pour la défense des droits des animaux.
          </Partenaire_Text5>
          </Partenaire>
          <Partenaire>
          <Image className={styles.img} src="/Fondation_assistance_animaux.jpg" width={100} height={100}></Image>
          <Partenaire_Title5>
            Fondation assist. aux animaux
          </Partenaire_Title5>
          <Partenaire_Text5>
            1er Fondation créée en France pour la défense des animaux maltraités et abandonnés.
          </Partenaire_Text5>
        </Partenaire>
      </Container5_2>
      <Container5_3>
        <Partenaire>
          <Image className={styles.img} src="/One_voice.png" width={100} height={100}></Image>
          <Partenaire_Title5>
            One Voice
          </Partenaire_Title5>
          <Partenaire_Text5>
            La voix des animaux humains et non-humains, la voix de la planète.
          </Partenaire_Text5>
        </Partenaire>
      </Container5_3>
    </Container5>
    </>
  )
}
