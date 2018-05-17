
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Todo from './Todo';

storiesOf('Todo', module)
    .add('Checked', () => <Todo todo={{finished: true, title:'Finished todo'}} />)
    .add('Not Checked', () => <Todo todo={{finished: false, title:'Finished todo'}} />);
