import React from 'react';
import { Entity } from 'aframe-react';

const props = {
    geometry: {
        primitive: 'box'
    },
    material: {
        color: 'red'
    },
    position:{
        x: 0, y:0, z:-10
    }
}


export default class VRScene extends React.Component {
    render() {
        return (
            <Entity>
                <Entity {...props} />
                
            </Entity>
        );
    }
}