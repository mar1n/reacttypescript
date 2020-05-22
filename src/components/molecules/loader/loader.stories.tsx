import React from 'react'
import Loading from './loader.component'

export default {
    component: Loading,
    title: 'Molecules|Loading',
    excludeStories: /.*Data$/,
}

export const Loader = () => <Loading />