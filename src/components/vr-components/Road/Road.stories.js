import 'aframe';
import React from 'react';
import { Entity, Scene } from 'aframe-react';
import { storiesOf } from '@storybook/react';
import { configure, addDecorator } from '@storybook/react';
import Road from './Road';

storiesOf('Road', module)
    .addDecorator(story => {
        <Scene>
            {story()}
        </Scene>
    })
    .add('default', () => <Road />);