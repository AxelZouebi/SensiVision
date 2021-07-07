import styled from 'styled-components'
import * as C from '../container.js';
import * as T from "../text.js"
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Container5 = styled(C.Fc_center_center)`
  width: 100%;
`

const Container5_1 = styled.div`
    
`

const Container5_1_1 = styled.div`
    display: flex;
    justify-content: center;
    float: left;
    width: 33%;
    margin: 20px 0px;

    @media screen and (max-width: 1200px)
    {
        width: 50%;
    }

    @media screen and (max-width: 900px)
    {
        width: 100%;
    }
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

const Title5 = styled(T.Title)`
    width: 100%;
  line-height: 1.5;
`

const Partenaire = styled(C.Fc_center_center)`
  background-color: #f4f4f4;
  width: 352px;
  height: 295px;
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

const Partenaires = () => {
    return ( 
        <Container5 id="nos_partenaires">
        <Title5>
        Nos partenaires
        </Title5>
        <Container5_1>
            <Container5_1_1>
            <Partenaire>
            <Image className={styles.img} src="/Logo_de_la_SPA_(France).png" width={100} height={100}></Image>
            <Partenaire_Title5>
                SPA
            </Partenaire_Title5>
            <Partenaire_Text5>
                L'association Société protectrice des animaux est, en France, la plus ancienne des sociétés de protection des animaux.
            </Partenaire_Text5>
            </Partenaire>
            </Container5_1_1>
            <Container5_1_1>
            <Partenaire>
                <Image className={styles.img} src="/fondation_brigitte_bardot.jpg" width={100} height={100}></Image>
                <Partenaire_Title5>
                    Fondation Brigitte Bardot
                </Partenaire_Title5>
                <Partenaire_Text5>
                    Fondation française vouée à la protection des animaux.
                </Partenaire_Text5>
                </Partenaire>
            </Container5_1_1>
            <Container5_1_1>
                <Partenaire>
                <Image className={styles.img} src="/Fondation_30_millions_damis.jpg" width={100} height={100}></Image>
                <Partenaire_Title5>
                    Fondation 30 millions d'amis
                </Partenaire_Title5>
                <Partenaire_Text5>
                    Fondation combattant toutes formes de souffrance animal.
                </Partenaire_Text5>
                </Partenaire>
            </Container5_1_1>
            <Container5_1_1>
                <Partenaire>
                <Image className={styles.img} src="/logo_codeanimal.jpg" width={100} height={100}></Image>
                <Partenaire_Title5>
                    Code Animal
                </Partenaire_Title5>
                <Partenaire_Text5>
                    Association spécialisée dans la relation entre l’espèce humaine et les autres animaux.
                </Partenaire_Text5>
                </Partenaire>
            </Container5_1_1>
            <Container5_1_1>
                <Partenaire>
                <Image className={styles.img} src="/logo-stephane-lamart-habilitation.png" width={100} height={100}></Image>
                <Partenaire_Title5>
                    Fondation Stéfane Lamart 
                </Partenaire_Title5>
                <Partenaire_Text5>
                    Pour la défense des droits des animaux.
                </Partenaire_Text5>
                </Partenaire>
            </Container5_1_1>
            <Container5_1_1>
                <Partenaire>
                <Image className={styles.img} src="/Fondation_assistance_animaux.jpg" width={100} height={100}></Image>
                <Partenaire_Title5>
                    Fondation assist. aux animaux
                </Partenaire_Title5>
                <Partenaire_Text5>
                    1er Fondation créée en France pour la défense des animaux maltraités et abandonnés.
                </Partenaire_Text5>
                </Partenaire>
            </Container5_1_1>
            <Container5_1_1>
                <Partenaire>
                <Image className={styles.img} src="/One_voice.png" width={100} height={100}></Image>
                <Partenaire_Title5>
                    One Voice
                </Partenaire_Title5>
                <Partenaire_Text5>
                    La voix des animaux humains et non-humains, la voix de la planète.
                </Partenaire_Text5>
                </Partenaire>
            </Container5_1_1>
        </Container5_1>
    </Container5>
     );
}
 
export default Partenaires;