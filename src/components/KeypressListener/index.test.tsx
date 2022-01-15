import { render } from '@testing-library/react';
import KeypressListener from './index';

interface HandlerMap {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [eventName: string]: any;
}

const handlerMap: HandlerMap = {};

describe('<KeypressListener/>', () => {
  beforeEach(() => {
    jest
      .spyOn(document, 'addEventListener')
      .mockImplementation((eventName, handler) => {
        handlerMap[eventName] = handler;
      });

    jest
      .spyOn(document, 'removeEventListener')
      .mockImplementation(eventName => {
        handlerMap[eventName] = noop;
      });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('attaches the event listener on mount', () => {
    const keyName = 'Enter';
    const otherKeyName = 'Escape';
    const spy = jest.fn();

    render(<KeypressListener keyName={keyName} handler={spy} />);

    handlerMap.keyup({ key: keyName });
    handlerMap.keyup({ key: otherKeyName });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('removes the event listener on unmount', () => {
    const keyName = 'Enter';
    const spy = jest.fn();

    render(<KeypressListener keyName="Enter" handler={spy} />).unmount();

    handlerMap.keyup({ key: keyName });
    expect(spy).not.toHaveBeenCalled();
  });
});

// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}
