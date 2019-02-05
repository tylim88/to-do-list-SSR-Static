import React, { Component } from 'react'
import ListItem from './ListItem'
import { Subscribe } from 'unstated'
import { ListContainer } from '../state'

class List extends Component {
    render() {
        return (
            <Subscribe to={[ListContainer]}>
                {(list) => (
                    <>
                        {list.filteredList().map(({ text, done }, index) => {
                            return (
                                <ListItem
                                    // dynamically generate the list items
                                    key={index}
                                    index={index}
                                    text={text}
                                    done={done}
                                    list={list}
                                />
                            )
                        })}
                    </>
                )}
            </Subscribe>
        )
    }
}

export default List
