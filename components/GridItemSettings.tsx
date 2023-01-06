import { Dispatch, SetStateAction } from 'react';
import { IndexedObject } from '../types';
import {motion, Variants} from 'framer-motion';
import { SettingsLayout } from '../enum';

type Props = {
  setRowStart: Dispatch<SetStateAction<IndexedObject>>;
  setColStart: Dispatch<SetStateAction<IndexedObject>>;
  setColSpan: Dispatch<SetStateAction<IndexedObject>>;
  setRowSpan: Dispatch<SetStateAction<IndexedObject>>;
  setSettingsLayout: Dispatch<SetStateAction<SettingsLayout>>;
  itemIndex: number;
};

const itemVariants: Variants = {
  hidden: { opacity: 0.7 },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  exit: { opacity: 0, x: -20, transition: { duration: 0.1 } }
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

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
        [itemIndex]: 2,
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
        [itemIndex]: 2,
      };
    }
  }

  return (
    <div className="p-4 bg-gray-100 rounded-r-md sm:w-1/4 overflow-hidden">
      <motion.div
        transition={{ duration: 0.1, staggerChildren: 0.5 }}
        variants={itemVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div>
          <button
            className="mb-5 text-sm"
            onClick={() => setSettingsLayout(SettingsLayout.gridSettings)}
          >
            &#8592; Back
          </button>
          <motion.h1
            className="mb-6 text-center font-bold text-lg font-mono"
            key={itemIndex}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0.5, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {String(itemIndex).padStart(2, '0')}
          </motion.h1>
        </div>
        <motion.div className="flex align-center justify-between" variants={item}>
          <p className="text-sm text-center mr-4 font-semibold">Row Start</p>
          <div>
            <button
              className="hover:bg-amber-100 w-6 h-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
              onClick={() =>
                setRowStart((prev: any) => setIncrementValue(prev))
              }
            >
              +
            </button>
            <button
              className="hover:bg-amber-100  w-6 h-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
              onClick={() =>
                setRowStart((prev: any) => setDecrementValue(prev))
              }
            >
              -
            </button>
          </div>
        </motion.div>
        <motion.div className="flex align-center justify-between" variants={item}>
          <p className="text-sm text-center mr-4 font-semibold">Col Start</p>
          <div>
            <button
              className="hover:bg-amber-100 w-6 h-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
              onClick={() =>
                setColStart((prev: any) => setIncrementValue(prev))
              }
            >
              +
            </button>
            <button
              className="hover:bg-amber-100 w-6 h-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
              onClick={() =>
                setColStart((prev: any) => setDecrementValue(prev))
              }
            >
              -
            </button>
          </div>
        </motion.div>
        <motion.div className="flex align-center justify-between" variants={item}>
          <p className="text-sm text-center mr-4 font-semibold">Col span</p>
          <div>
            <button
              className="hover:bg-amber-100 w-6 h-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
              onClick={() => setColSpan((prev: any) => setIncrementValue(prev))}
            >
              +
            </button>
            <button
              className="hover:bg-amber-100 w-6 h-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
              onClick={() => setColSpan((prev: any) => setDecrementValue(prev))}
            >
              -
            </button>
          </div>
        </motion.div>
        <motion.div className="flex align-center justify-between" variants={item}>
          <p className="text-sm text-center mr-4 font-semibold">Row Span</p>
          <div>
            <button
              className="hover:bg-amber-100 w-6 h-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
              onClick={() => setRowSpan((prev: any) => setIncrementValue(prev))}
            >
              +
            </button>
            <button
              className="hover:bg-amber-100 w-6 h-6 text-sm rounded-md bg-white shadow-md mr-4 mb-2"
              onClick={() => setRowSpan((prev: any) => setDecrementValue(prev))}
            >
              -
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default GridLayoutSettings;
