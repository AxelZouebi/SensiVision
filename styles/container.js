import styled from 'styled-components'

// ROW VERTICAL CENTER HORIZONTAL CENTER //
export const Fr_center_center = styled.section`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
`
// ROW VERTICAL CENTER HORIZONTAL LEFT //
export const Fr_left_center = styled.section`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
`
// ROW VERTICAL CENTER HORIZONTAL RIGHT //
export const Fr_right_center = styled.section`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-end;
`

// COLUMN VERTICAL CENTER HORIZONTAL CENTER //
export const Fc_center_center = styled.section`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-evenly;
`
// COLUMN VERTICAL TOP HORIZONTAL CENTER //
export const Fc_top_center = styled.section`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: flex-start;
`
// COLUMN VERTICAL BOTTOM HORIZONTAL CENTER //
export const Fc_bottom_center = styled.section`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: flex-end;
`