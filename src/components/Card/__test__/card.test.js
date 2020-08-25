import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../Card';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
});

it('renders card correctly', () => {
    const { getByTestId } = render(<Card text="Chuck Norry Jokes" />);
    expect(getByTestId('card')).toHaveTextContent('Chuck Norry Jokes');
});

// SNAPSHOTS
it('matches snapshot', () => {
    const tree = renderer.create(<Card text="Chuck Norry Jokes" />).toJSON();
    expect(tree).toMatchSnapshot();
});