import React from 'react';
import Header from '../../components/Hader';
import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

