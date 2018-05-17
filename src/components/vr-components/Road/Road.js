import React from 'react';
import { Entity } from 'aframe-react';

export default class VRScene extends React.Component {
    render() {
        return (
            <Entity>
                <Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 0, z: -5 }} />
                <Entity text={{ value: 'Hello, WebVR!' }} />
            </Entity>
        );
    }
}