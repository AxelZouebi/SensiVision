import styled from 'styled-components'
import * as C from '../container.js';
import * as T from "../text.js"
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Container3 = styled(C.Fc_center_center)`
  width: 100%;
  height: 100vh;
`

const Container3_1 = styled(C.Fc_center_center)`

`

const Title3 = styled(T.Title)`
  line-height: 1.5;
`

const UnderTitle3 = styled(T.UnderTitle)`

`

const Container3_2 = styled(C.Fr_center_center)`
  width: 100%;
`

const Intervenants = () => {
    return ( 
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
     );
}
 
export default Intervenants;