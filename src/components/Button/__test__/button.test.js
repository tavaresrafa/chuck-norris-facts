import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../Button';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
});

it('renders button correctly', () => {
    const {getByTestId} = render(<Button text="Search" />);
    expect(getByTestId('button')).toHaveTextContent('Search');
});

// SNAPSHOTS
it('matches snapshot', () => {
    const tree = renderer.create(<Button text="Search" />).toJSON();
    expect(tree).toMatchSnapshot();
});