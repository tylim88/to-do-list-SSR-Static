import React from 'react'
import { InputGroup, Input, InputGroupButton } from '@bootstrap-styled/v4'
import { Subscribe } from 'unstated'
import { ListContainer } from '../state'
import styled from 'styled-components'

const StyledInputGroup = styled(InputGroup)`
    && {
        margin-bottom: 1rem;
        width: 33%;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        margin-top: 1rem;
    }
`

// increase specificity with &, the more & the more specificity

const StyledInputGroupButton = styled(InputGroupButton)`
    && {
        color: #000;
    }
`

class ItemInput extends React.Component {
    state = { text: '' }

    onSubmitText = (list) => {
        list.addItem(this.state.text)
        this.setState({ text: '' })
    }
    render() {
        const {
            onSubmitText,
            state: { text },
        } = this
        return (
            <Subscribe to={[ListContainer]}>
                {(list) => (
                    <StyledInputGroup
                    // container
                    >
                        <Input
                            // input field
                            placeholder="Click Insert or Press Enter to add Item"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onSubmitText(list)
                                }
                            }}
                            onChange={(e) => {
                                this.setState({ text: e.target.value })
                            }}
                            value={text}
                        />
                        <StyledInputGroupButton
                            // insert button
                            color="warning"
                            onClick={() => {
                                onSubmitText(list)
                            }}
                        >
                            Insert
                        </StyledInputGroupButton>
                    </StyledInputGroup>
                )}
            </Subscribe>
        )
    }
}

export default ItemInput
