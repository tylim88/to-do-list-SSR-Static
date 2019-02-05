import React, { Component } from 'react'
import ButtonsFilter from '../src/component/ButtonsFilter'
import ItemInput from '../src/component/ItemInput'
import List from '../src/component/List'
import handWriting from '../src/style/handWriting'
import styled from 'styled-components'

const Div = styled.div`
    padding-top: 2.5vh;
    text-align: center;
    height: 100vh;
    box-sizing: border-box;
    position: relative;
`

const H1 = styled.h1`
    ${handWriting +
        `font-family:'handWriting';
        font-size: 2.5rem;
        margin-bottom: .5rem;
        font-weight: 500;
        line-height: 1.2;
        margin-top: 0;`}
`

class Index extends Component {
    render() {
        return (
            <Div>
                <H1>To Do List</H1>
                <ButtonsFilter />
                <ItemInput />
                <List />
            </Div>
        )
    }
}

export default Index
