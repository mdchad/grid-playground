import { tw } from 'twind';
import {Dispatch, SetStateAction, useRef} from 'react';
import { IndexedObject } from '../types';

type Props = {
  setRowStart: Dispatch<SetStateAction<IndexedObject>>;
  setColStart: Dispatch<SetStateAction<IndexedObject>>;
  setColSpan: Dispatch<SetStateAction<IndexedObject>>;
  setRowSpan: Dispatch<SetStateAction<IndexedObject>>;
  setSettingsLayout: Dispatch<SetStateAction<number | null>>;
  itemIndex: number;
};

function GridLayoutSettings({
  setRowStart,
  setColStart,
  setColSpan,
  setRowSpan,
  itemIndex,
  setSettingsLayout,
}: Props): JSX.Element {

  function setIncrementValue(prev: any) {
    if (prev[itemIndex]) {
      return {
        [itemIndex]: prev[itemIndex] + 1,
      };
    } else {
      return {
        [itemIndex]: 1,
      };
    }
  }

  function setDecrementValue(prev: any) {
    if (prev[itemIndex]) {
      return {
        [itemIndex]: prev[itemIndex] - 1,
      };
    } else {
      return {
        [itemIndex]: 1,
      };
    }
  }

  return (
    <div className="p-4 bg-gray-100 rounded-r-md sm:w-1/4">
      <div>
        <button
          className="mb-5 text-sm"
          onClick={() => setSettingsLayout(null)}
        >
          {'< Back'}
        </button>
        <h1 className="mb-6 text-center font-bold text-lg">0{itemIndex}</h1>
      </div>
      <div className="flex align-center justify-between">
        <p>Row Start</p>
        <div>
          <button
            className="p-2 w-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
            onClick={() => setRowStart((prev: any) => setIncrementValue(prev))}
          >
            +
          </button>
          <button
            className="p-2 w-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
            onClick={() => setRowStart((prev: any) => setDecrementValue(prev))}
          >
            -
          </button>
        </div>
      </div>
      <div className="flex align-center justify-between">
        <p>Col Start</p>
        <div>
          <button
            className="p-2 w-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
            onClick={() => setColStart((prev: any) => setIncrementValue(prev))}
          >
            +
          </button>
          <button
            className="p-2 w-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
            onClick={() => setColStart((prev: any) => setDecrementValue(prev))}
          >
            -
          </button>
        </div>
      </div>
      <div className="flex align-center justify-between">
        <p>Col span</p>
        <div>
          <button
            className="p-2 w-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
            onClick={() => setColSpan((prev: any) => setIncrementValue(prev))}
          >
            +
          </button>
          <button
            className="p-2 w-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
            onClick={() => setColSpan((prev: any) => setDecrementValue(prev))}
          >
            -
          </button>
        </div>
      </div>
      <div className="flex align-center justify-between">
        <p>Row Span</p>
        <div>
          <button
            className="p-2 w-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
            onClick={() => setRowSpan((prev: any) => setIncrementValue(prev))}
          >
            +
          </button>
          <button
            className="p-2 w-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
            onClick={() => setRowSpan((prev: any) => setDecrementValue(prev))}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default GridLayoutSettings;
