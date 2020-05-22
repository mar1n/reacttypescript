import React from 'react'
import Page from './Page.component'

import Input from '../../atoms/input/input.component'
import Loading from '../../molecules/loader/loader.component'
import List from '../../organisms/list/list.component'

export default {
    component: Page,
    title: 'Templates|Pages',
    exludeStories: /.*Data$/,
}

export const WebPage = () => 
        <Page>
            <Input />
            <Loading />
            <List />
        </Page>