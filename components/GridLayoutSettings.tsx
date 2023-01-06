import { tw } from 'twind';
import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { IndexedObject } from '../types';

type Props = {
  column: number[];
  gridCol: string;
  gridRow: string;
  gridFlow: string;
  setGridCol: Dispatch<SetStateAction<string>>;
  setGap: Dispatch<SetStateAction<string>>;
  setGridRow: Dispatch<SetStateAction<string>>;
  setColumn: Dispatch<SetStateAction<number[] | []>>;
  setGridFlow: Dispatch<SetStateAction<string>>;
  gap: string;
  setRowStart: Dispatch<SetStateAction<IndexedObject>>;
  setColStart: Dispatch<SetStateAction<IndexedObject>>;
  setColSpan: Dispatch<SetStateAction<IndexedObject>>;
  setRowSpan: Dispatch<SetStateAction<IndexedObject>>;
};

function GridLayoutSettings({
  gridCol,
  setGridCol,
  gap,
  setGap,
  gridRow,
  setGridRow,
  setColumn,
  gridFlow,
  setGridFlow,
  setRowStart,
  setColStart,
  setColSpan,
  setRowSpan,
}: Props): JSX.Element {
  function resetAll() {
    setRowStart({});
    setColStart({});
    setColSpan({});
    setRowSpan({});
    setColumn([])
  }

  return (
    <div className="p-4 bg-gray-100 rounded-r-md sm:w-1/4 overflow-hidden">
      <motion.div
        transition={{ duration: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: 10 }}
      >
        <div className="flex justify-end">
          <button
            className="p-2 shadow-md text-white bg-red-400 rounded-md"
            onClick={() => resetAll()}
          >
            Reset All
          </button>
        </div>
        <div>
          <label
            htmlFor="column"
            className="font-bold block text-sm font-medium text-gray-700"
          >
            Column
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="column"
              id="column"
              className="h-8 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              min={1}
              max={10}
              value={gridCol}
              onChange={(e) => setGridCol(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="column"
            className="font-bold block text-sm font-medium text-gray-700"
          >
            Gap
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="column"
              id="column"
              className="h-8 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              min={1}
              max={10}
              value={gap}
              onChange={(e) => setGap(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="column"
            className="font-bold block text-sm font-medium text-gray-700"
          >
            Row
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="column"
              id="column"
              className="h-8 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              min={1}
              max={10}
              value={gridRow}
              onChange={(e) => setGridRow(e.target.value)}
            />
          </div>
        </div>
        <div className="flex mt-10 items-center">
          <p className="text-sm text-center mr-4 font-semibold">Add item</p>
          <button
            className="hover:bg-amber-100 w-6 h-6 bg-white rounded-md shadow-md mr-2"
            onClick={() => setColumn((prev: number[]) => prev.concat(prev.length))}
          >
            +
          </button>
          <button
            className="hover:bg-amber-100 w-6 h-6 bg-white rounded-md shadow-md"
            onClick={() => setColumn((prev) => prev.slice(0, -1))}
          >
            -
          </button>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-2">
          <button
            className={tw`${
              gridFlow === 'row' ? 'bg-amber-300' : 'bg-white'
            } hover:bg-amber-100 shadow-md p-2 rounded-md`}
            onClick={() => setGridFlow('row')}
          >
            Row
          </button>
          <button
            className={tw`${
              gridFlow === 'col' ? 'bg-amber-300' : 'bg-white'
            } hover:bg-amber-100 shadow-md p-2 rounded-md`}
            onClick={() => setGridFlow('col')}
          >
            Col
          </button>
          <button
            className={tw`${
              gridFlow === 'dense' ? 'bg-amber-300' : 'bg-white'
            } hover:bg-amber-100 shadow-md p-2 rounded-md`}
            onClick={() => setGridFlow('dense')}
          >
            Dense
          </button>
          <button
            className={tw`${
              gridFlow === 'row-dense' ? 'bg-amber-300' : 'bg-white'
            } hover:bg-amber-100 shadow-md p-2 rounded-md whitespace-nowrap`}
            onClick={() => setGridFlow('row-dense')}
          >
            Row dense
          </button>
          <button
            className={tw`${
              gridFlow === 'col-dense' ? 'bg-amber-300' : 'bg-white'
            } hover:bg-amber-100 shadow-md p-2 rounded-md whitespace-nowrap`}
            onClick={() => setGridFlow('col-dense')}
          >
            Col dense
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default GridLayoutSettings;
