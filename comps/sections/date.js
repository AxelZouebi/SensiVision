import styled from 'styled-components'
import * as C from '../container.js';
import * as T from "../text.js"
import Dog from '../animation/dog';

const Container2 = styled(C.Fc_center_center)`
  width: 100%;
  height: 100vh;
  background: #FEFCAD;
`

const Container2_1 = styled(C.Fr_center_center)`
  width: 100%;
`

const Container2_2 = styled(C.Fr_center_center)`
  width: 100%;
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

const Title2 = styled(T.Title_Big)`

`

const Date = () => {
    return ( 
    <Container2 id="date">
      <Container2_1>
      <Title2>
          Du 21 au 23 août !
        </Title2>
      </Container2_1>
      <Container2_2>
        <Dog></Dog>
      </Container2_2>
    </Container2>
    );
}
 
export default Date;