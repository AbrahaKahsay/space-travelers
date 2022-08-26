import renderer from 'react-test-renderer';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../Redux/configureStore';
import App from '../../App';

describe('Body of the whole Rocket Page', () => {
  it('Check Falcon 1 in the UI', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    await waitFor(() => {
      const waitForDOM = screen.findByText(
        "The Falcon 1 was an expendable"
      );
      expect(waitForDOM).not.toBeNull();
    });
  });

  it('It should matchsnapshot', () => {
    const Tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(Tree).toMatchSnapshot();
  });
});
