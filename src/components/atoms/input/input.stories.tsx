import React from 'react'
import Input from './input.component'

export default  {
    component: Input,
    title: 'Input',
    excludeStories: /.*Data$/,
}

export const Default = () => <Input value='' onChange={(e) => console.log(e)} />