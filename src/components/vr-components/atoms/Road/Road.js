import React from 'react';
import PropTypes from 'prop-types';
import { Entity } from 'aframe-react';
import { Dividers } from './Dividers';

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

export const RoadGround = (props) => (<Entity {...props} />);

export const Road = ({objProps, entityProps}) => {

    return <Entity id="road" {...entityProps}>
        <RoadGround {...getRoadProps(0, 0, objProps.length, 0)} />
        <Dividers length={objProps.length} />
    </Entity>;
}

Road.propTypes = {
    length: PropTypes.number
};

export default Road;