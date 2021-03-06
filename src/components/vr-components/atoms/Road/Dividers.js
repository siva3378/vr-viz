import React from 'react';
import { Entity } from 'aframe-react';

const DIVIDER_PROPS = {
    geometry: {
        primitive: 'box',
        width: 0.3,
        height: 0.05,
        depth: 0.05,
    },
    material: {
        color: 'white',
    },
}

const getDividerGroupProps = (width, length, id) => ({
    id: `dividers-${id}`,
    layout: {
        type: 'line',
        margin: width * 2,
        plane: 'x',
    },
    rotation: { x: 0, y: 90, z: 0 },
    position: { x: 0, y: 0.001, z: (length - width) / 2 },
})

export const Dividers = ({ length = 10, id }) => {
    const { width } = DIVIDER_PROPS.geometry;
    const dividerGroupProps = getDividerGroupProps(width, length, id);
    const { margin } = dividerGroupProps.layout;
    const dividers = [];

    for (let index = 0; index < length; index += margin) {
        dividers.push(<Entity key={`divider-${id}-${index}`} id={`divider-${id}-${index}`} {...DIVIDER_PROPS} />);
    }
    return (
        <Entity {...dividerGroupProps}>
            {dividers}
        </Entity >
    );
}