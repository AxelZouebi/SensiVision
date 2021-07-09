import React, { Component, useRef, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as C from '../container.js';
import * as T from "../text.js"
import styled from 'styled-components'

const Container1 = styled(C.Fr_center_center)`
    width: 100%;
    height: 15vh;
    position: sticky;
    background: white;
    opacity: 1;
    top: 0;
    z-index: 999;
`

const Container1_1 = styled(C.Fr_left_center)`
    width: 50%;
`

const Container1_2 = styled(C.Fr_center_center)`
    width: 50%;
`

const Page = styled.a`
    border-radius: 25px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: #565656;
`

const Button1 = styled.div`
  text-align: center;
  background: #11544D;
  color: #FEFCAD;
  padding: 15px 25px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  border: 2px solid #11544D;
  height: auto;
  width: auto;
  cursor: pointer;
`

const Navbar = () => {
    const active = { color: '#11544D' };
    const router = useRouter()
    return (
        <Container1>
            <Container1_1>
                <Image src="/Logo.png" width={263/2} height={194/2} />
            </Container1_1>
            <Container1_2>
                <Page>
                    <Link href="/#accueil">
                        Accueil
                    </Link>
                </Page>
                <Page>
                    <Link href="/#intervenants">
                    <Page>
                        A propos
                        </Page>
                    </Link>
                </Page>
                <Page>
                    <Link href="/#nos_partenaires">
                        Nos partenaires
                    </Link>
                </Page>
                <Link href="/reserver">
                    <Button1>
                        Réserver
                    </Button1>
                </Link>
            </Container1_2>
        </Container1>
     );
}
 
export default Navbar;