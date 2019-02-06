import React from 'react'
import { Button, ButtonGroup } from '@bootstrap-styled/v4'
import { Subscribe } from 'unstated'
import { ListContainer } from '../state'
import styled from 'styled-components'
import Router, { withRouter } from 'next/router'

const StyledButtonGroup = styled(ButtonGroup)`
    margin-top: 1rem;
`
const StyledButton = styled(Button)`
    && {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
        z-index: 5;

        :hover {
            color: #fff;
            background-color: #23272b;
            border-color: #1d2124;
        }

        :focus {
            box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);
        }
    }
`

const buttonsFilter = [
    {
        button: 'All',
        variant: 'primary',
        route: '/',
        textColor: '',
    },
    {
        button: 'Active',
        variant: 'danger',
        route: '/?filter=active',
        textColor: 'red-text',
    },
    {
        button: 'Done',
        variant: 'success',
        route: '/?filter=done',
        textColor: 'green-text',
    },
]

class ButtonsFilter extends React.Component {
    render() {
        return (
            // subscribe to state change in store
            <Subscribe to={[ListContainer]}>
                {(list) => (
                    <StyledButtonGroup
                    // container for filter buttons and clear done button
                    >
                        {buttonsFilter.map((element, index) => {
                            const { variant, button, route } = element
                            return (
                                <Button
                                    // create All, Active, Done buttons
                                    key={index}
                                    outline
                                    color={variant}
                                    active={list.state.filter === button}
                                    onClick={() => {
                                        Router.push(route, route, {
                                            shallow: true,
                                        })
                                        list.updateFilter(button)
                                    }}
                                >
                                    {button + `(${list.state.stat[index]})`}
                                </Button>
                            )
                        })}

                        <StyledButton
                            // this is Clear Done button
                            color="dark"
                            onClick={() => {
                                list.clearDone()
                            }}
                        >
                            Clear Done
                        </StyledButton>
                    </StyledButtonGroup>
                )}
            </Subscribe>
        )
    }
}
export default withRouter(ButtonsFilter)
