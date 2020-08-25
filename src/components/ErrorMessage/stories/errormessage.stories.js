import React from 'react';
import ErrorMessage from '../index';

export default {
    title: 'ErrorMessage',
    component: ErrorMessage
}

export const Primary = () => <ErrorMessage text='Your search must be between 3 and 120 characters' />