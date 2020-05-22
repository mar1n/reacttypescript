import React from 'react'
import List from './list.component'

export default {
    component: List,
    title: 'Organisms|List',
    excludeStories: /.*Data$/,
}

const Data = [
    { id: 1, name: 'Szymon'},
    { id: 2, name: 'Patrick'},
    { id: 3, name: 'Mr X'}
]

export const PrintList = () => <List data={Data} />