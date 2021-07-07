import styled from 'styled-components'
import * as C from '../comps/container';
import * as T from "../comps/text"
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Container1 = styled(C.Fr_center_center)`
    width: 100%;
    height: 85vh;
    justify-content: center;
`

const Container1_1 = styled(C.Fr_center_center)`
    width: 20%;
    height: 85%;
    background-color: #f4f4f4;
    border-radius: 20px 0px 0px 20px;
`

const Text1_1 = styled(T.Title_Big)`

`

const Container1_2 = styled(C.Fr_center_center)`
    width: 30%;
    height: 85%;
    background-color: #f4f4f4;
    border-radius: 0px 20px 20px 0px;
`

const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const Container1_2_1 = styled(C.Fr_center_center)`
    width: 80%;
    height: 75%;
`

const Text1_2_1 = styled(T.UnderTitle)`
    font-weight: bold;
`

const Container1_2_1_1 = styled(C.Fc_center_center)`
    width: 100%;
    align-items: start;
`
const Text1_2_1_1 = styled.div`
    font-size: 20px;
    margin: 10px 0px;
`

const Input = styled.input.attrs({ 
    type: 'text',
  })`
    background-color: rgba(1, 1, 1, .3);
    color: white;
    padding: 15px;
    border: none;
    outline: none;
    font-size: 1em;
    border-radius: 3px;
    width: 100%;
    transition: width .3s;
  `

const Container1_2_2 = styled(C.Fr_left_center)`
    width: 80%;
    height: 15%;
`

const Button1_2 = styled.div`
    text-align: center;
    background: #11544D;
    color: #FEFCAD;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    padding: 15px;
    width: 100%;
    cursor: pointer;
`

export default function Reserver() {
    return (
        <>
            <Container1>
                <Container1_1>
                    <Image src="/Affiche_publicitaire_1.png" className={styles.img_cover} layout="fill"></Image>
                </Container1_1>
                <Container1_2>
                    <Form>
                        <Container1_2_1>
                            <Text1_2_1>Réservez votre place</Text1_2_1>
                            <Input placeholder="Nom"/>
                            <Input placeholder="Prénom"/>
                            <Input placeholder="Adresse mail"/>
                            <Input placeholder="Numéro de téléphone"/>
                        </Container1_2_1>
                        <Container1_2_2>
                            <Button1_2>Payer :  15€</Button1_2>
                        </Container1_2_2>
                    </Form>
                </Container1_2>
            </Container1>
        </>
    )
}