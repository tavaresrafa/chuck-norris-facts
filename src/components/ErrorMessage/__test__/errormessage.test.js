import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from '../../ErrorMessage';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<ErrorMessage />, div);
});

it('renders error message correctly', () => {
    const { getByTestId } = render(<ErrorMessage text="Error Message" />);
    expect(getByTestId('errormessage')).toHaveTextContent('Error Message');
});

// SNAPSHOTS
it('matches snapshot', () => {
    const tree = renderer.create(<ErrorMessage text="Error Message" />).toJSON();
    expect(tree).toMatchSnapshot();
});