import React from 'react'
import Input from './input.component'

export default  {
    component: Input,
    title: 'Atom|Input',
    excludeStories: /.*Data$/,
}

export const Search = () => <Input value='' onChange={(e) => console.log(e)} />