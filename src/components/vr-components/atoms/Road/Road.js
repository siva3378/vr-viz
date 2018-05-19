import React from 'react';
import { Entity } from 'aframe-react';

const getRoadProps = (x = 0, z = 0, length, yr) => ({
    position: { x, y: 0, z },
    geometry: {
        primitive: 'box',
        width: 1,
        height: 0.05,
        depth: length,
    },
    material: {
        color: '#88847B',
    },
    rotation: { x: 0, y: yr, z: 0 }
});

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

const getDividerGroupProps = (width, size, id) => ({
    id: `dividers-${id}`,
    layout: {
        type: 'line',
        margin: width * 3,
        plane: 'x',
    },
    rotation: { x: 0, y: 90, z: 0 },
    position: { x: 0, y: 0.001, z: size / 2 },
})

export const Dividers = ({ length = 10, id }) => {
    const { width } = DIVIDER_PROPS.geometry;
    const dividerGroupProps = getDividerGroupProps(width, length, id);
    const { margin } = dividerGroupProps.layout;
    const dividers = [];

    for (let index = margin; index < length / margin; index += margin) {
        dividers.push(<Entity key={`divider-${id}-${index}`} id={`divider-${id}-${index}`} {...DIVIDER_PROPS} />);
    }
    return (
        <Entity {...dividerGroupProps}>
            {dividers}
        </Entity >
    );
}

export const RoadGround = (props) => (<Entity {...props} />);

export const Road = () => {
    const length = 4;

    return <Entity id="road">
        <RoadGround {...getRoadProps(0, 0, length, 0)} />
        <Dividers length={length} />
    </Entity>;
}

export default Road;