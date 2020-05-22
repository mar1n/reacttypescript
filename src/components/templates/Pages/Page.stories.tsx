import React from 'react'
import Page from './Page.component'

import input from '../../atoms/input/input.component'
import loader from '../../atoms/input/input.component'
import input from '../../atoms/input/input.component'

export default {
    component: Page,
    title: 'Templates|Pages',
    exludeStories: /.*Data$/,
}

export const WebPage = () => <Page />