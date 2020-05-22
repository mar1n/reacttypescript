import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'

export default {
    component: Button,
    title: 'Button',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

// export const actionsData = {
//     onClick: action('onClick'),
// };

export const Default = () => <Button children="tes" onClick={() => console.log('Szymon')} />