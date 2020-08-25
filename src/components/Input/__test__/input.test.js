import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../../Input';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input />, div);
});

// SNAPSHOTS
it('matches snapshot', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
});