import React from 'react'
import styled from 'styled-components'


const Container = (props) => {
    const Container = styled.div`
        max-width:1024px;
        margin:auto;
    `
  return (
    <Container className='custom_container'>
        {props.children}
    </Container>
    )
}

export default Container