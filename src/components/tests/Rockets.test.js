import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Rockets from '../../components/Rockets/Rockets'
import store from '../../Redux/configureStore';
import rocketsReducer from '../../Redux/Rockets/Rockets';
import { fetchRocketsFromServer } from '../../Redux/Rockets/Rockets';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should return an empty state', () => {
    const newState = rocketsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return content from the rocket API', () => {
    const rocketAPI = fetchRocketsFromServer();
    expect(rocketAPI).not.toEqual(null);
  });
})