import React, { Component } from 'react'
import {
    InputGroup,
    Button,
    InputGroupAddon,
    InputGroupButton,
    Input,
} from '@bootstrap-styled/v4'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    position: absolute;
    left: 100%;
    transform: translate(-100%);
    z-index: 5;
`
const StyledInputGroup = styled(InputGroup)`
    margin-bottom: 0.25rem;
    && {
        width: 33%;
        position: relative;
        left: 50%;
        transform: translate(-50%);
    }
`

const StyledLabel = styled(Input)(
    (props) => `
    &&& {
        background-color: #fff
        cursor: pointer;
        ${props.done === 'true' &&
            'text-decoration: line-through;color: #d9d9d9;'}
    }`
)

const StyledInput = styled.input`
    width: 100%;
`

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deleteButton: false,
            editMode: false,
            input: this.props.text,
        }
    }

    saveChange = (text, input, list, index) => {
        list.updateText(text, input, index)
        this.setState({ editMode: false })
    }

    initializeInput = (input, text) => {
        if (input !== text) {
            // need this or else it is harder to modify input field
            this.setState({ input: text })
        }
    }

    render() {
        const {
            state: { deleteButton, editMode, input },
            props: { list, text, done, index },
            saveChange,
            initializeInput,
        } = this
        return (
            <>
                <StyledInputGroup
                    // container
                    onMouseEnter={() => {
                        this.setState({ deleteButton: true })
                    }}
                    onMouseLeave={() => {
                        this.setState({ deleteButton: false })
                    }}
                >
                    {editMode ? (
                        <StyledInput
                            // editable input
                            ref={(ref) => {
                                this.input = ref
                                this.input && this.input.focus()
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    saveChange(text, input, list, index)
                                } else if (e.key === 'Escape') {
                                    this.setState({ editMode: false })
                                }
                            }}
                            onBlur={() => {
                                saveChange(text, input, list, index)
                            }}
                            onChange={(e) =>
                                // this input value only change with onChange
                                this.setState({ input: e.target.value })
                            }
                            value={
                                // this input value only change with onChange
                                input
                            }
                        />
                    ) : (
                        <>
                            <InputGroupButton disabled>
                                {index + 1}
                            </InputGroupButton>
                            <InputGroupAddon>
                                <Input
                                    addon
                                    type="checkbox"
                                    onChange={() => {
                                        list.toggleDone(text)
                                    }}
                                    checked={done}
                                />
                            </InputGroupAddon>
                            <StyledLabel
                                // disabled input, basically a label
                                disabled
                                readOnly
                                type="text"
                                // className={done && 'list-item-done'}
                                done={done.toString()}
                                aria-label="Text input with checkbox"
                                value={text}
                                onDoubleClick={() => {
                                    initializeInput(input, text)
                                    this.setState({ editMode: true })
                                }}
                            />
                            {deleteButton && (
                                <StyledButton
                                    // remove this item
                                    outline
                                    color="danger"
                                    onClick={() => {
                                        list.deleteItem(text)
                                    }}
                                    onMouseEnter={() => {
                                        this.setState({ deleteButton: true })
                                    }}
                                >
                                    x
                                </StyledButton>
                            )}
                        </>
                    )}
                </StyledInputGroup>
            </>
        )
    }
}

export default ListItem
