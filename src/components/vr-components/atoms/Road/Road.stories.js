import React from 'react';
import { storiesOf } from '@storybook/react';
import { configure, addDecorator } from '@storybook/react';
import Road from './Road';
import storybookScene from '../../storybook-scene';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

storiesOf('Atoms/Road', module)
    .addDecorator(storybookScene)
    .addDecorator(withSmartKnobs)
    .addDecorator(withKnobs)
    .add('with divider', () => {
        return <Road length={number('Length', 10)} />
    });