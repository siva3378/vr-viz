import React from 'react';
import { Entity, Scene } from 'aframe-react';

const stortbookScene = story => (<Scene>
    <Entity position="0 3 7">
        <Entity camera rotation="-10 0 0" wasd-controls />
    </Entity>
    <Entity look-controls>
        {story()}
    </Entity>
</Scene>);

export default stortbookScene;
