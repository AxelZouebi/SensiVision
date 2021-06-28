import styled from 'styled-components'
import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'

const Ellipse = styled.div`
    position: fixed;
`
const E1 = styled(Ellipse)`
    right: 30px;
    top: 40px;
`

const E2 = styled(Ellipse)`
    left: 40%;
    top: 50px;
`

const E3 = styled(Ellipse)`
    left: -20px;
    top: 27%;
`
const E4 = styled(Ellipse)`
    right: -200px;
    bottom: -40%;
    z-index: -1;
`

const Overlay = () => {
    return ( 
        <Ellipse>
            <E1>
                <Image src="/ellipse/Ellipse_14.png" width={50} height={50} />
            </E1>
            <E2>
                <Image src="/ellipse/Ellipse_14.png" width={50} height={50} />
            </E2>
            <E3>
                <Image src="/ellipse/Ellipse_14.png" width={100} height={100} />
            </E3>
            <E4>
                <Image src="/ellipse/Ellipse_14.png" width={500} height={500} />
            </E4>
        </Ellipse>
     );
}
 
export default Overlay;