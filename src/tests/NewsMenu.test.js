import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { Route, Link, MemoryRouter } from 'react-router-dom';
import { NewsMenu } from '../NewsMenu';
import toJson from 'enzyme-to-json';

describe('NewsMenu', () => {

  it('renders without crashing', () => {

    const renderedComponent = shallow(
        <NewsMenu />
    )
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

});
