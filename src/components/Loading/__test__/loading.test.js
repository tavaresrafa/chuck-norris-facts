import React from 'react';
import ReactDOM from 'react-dom';
import Loading from '../../Loading';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loading />, div);
});

it('it has class', () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId('bounce1')).toHaveClass('bounce1');
    expect(getByTestId('bounce2')).toHaveClass('bounce2');
    expect(getByTestId('bounce3')).toHaveClass('bounce3');
});

// SNAPSHOTS
it('matches snapshot', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
});