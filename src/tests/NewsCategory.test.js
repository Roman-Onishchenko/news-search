import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { Route, Link, MemoryRouter } from 'react-router-dom';
import { NewsCategory } from '../NewsCategory';
import { Map, List } from 'immutable';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

describe('NewsCategory', () => {

  it('renders without crashing', () => {

    const fetchNews = sinon.spy();
    const preloadtoTrue = sinon.spy();

    const newslist = new Map({
       foundNews: new List(),
       preload: true
    });

    const match = {
      params: {
        source: "path"
      }
    };

    const renderedComponent = shallow(
        <NewsCategory
          fetchNews={fetchNews}
          newslist={newslist}
          preloadtoTrue={preloadtoTrue}
          match = {match}
        />
    );

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('launches news fetch', () => {
    const fetchNews = sinon.spy();
    const preloadtoTrue = sinon.spy();

    const newslist = new Map({
       foundNews: new List(),
       preload: true
    });

    const preview = new Map({
       preload: true
    });

    const match = {
      params: {
        source: "path"
      }
    };

    const wrapper = mount(
      <MemoryRouter>
        <NewsCategory
          fetchNews={fetchNews}
          newslist={newslist}
          preloadtoTrue={preloadtoTrue}
          match = {match}
        />
    </MemoryRouter>);

    expect(fetchNews.calledOnce).toBeTruthy();
    expect(preloadtoTrue.calledOnce).toBeTruthy();
  });

  it('checks items rendering', () => {

    const fetchNews = sinon.spy();
    const preloadtoTrue = sinon.spy();

    const newslist = new Map({
       foundNews:[{
         id: 1,
         title: 'News'
       },

       {
         id: 2,
         title: 'News'
       },

       {
         id: 3,
         title: 'News'
       }
     ],
       preload: true
    });

    const preview = new Map({
       preload: true
    });

    const match = {
      params: {
        source: "path"
      }
    };

    const wrapper = shallow(

        <NewsCategory
          preview={preview}
          fetchNews={fetchNews}
          newslist={newslist}
          preloadtoTrue={preloadtoTrue}
          match={match}
        />

    );

    const listArr = wrapper.find('li');
    expect(listArr).toHaveLength(newslist.get('foundNews').length);
  });

});
