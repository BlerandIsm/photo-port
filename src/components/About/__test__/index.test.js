import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
const { asFragment } = render(<About />);


describe('About component', () => {
    //render about test

    //first test
    it('renders',() => {
        render(<About/>);
    });

    it('matches snapshot DOM node structure', () => {
        //render About 
    });

    expect(asFragment()).toMatchSnapshot();

    // second test
})

afterEach(cleanup);