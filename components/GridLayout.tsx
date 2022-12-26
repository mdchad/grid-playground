import { tw } from 'twind';
import { AnimatePresence, motion } from 'framer-motion';
import {IndexedObject} from "../types";

type Props = {
  column: number[],
  gridCol: string
  gridRow: string
  gridFlow: string
  colStart: IndexedObject
  rowStart: IndexedObject
  colSpan: IndexedObject
  rowSpan: IndexedObject
  gap: string
}

function GridLayout({
  column,
  gridCol,
  gridRow,
  gridFlow,
  colStart,
  rowStart,
  colSpan,
  rowSpan,
  gap,
}: Props): JSX.Element {
  function getGridStyle(obj: any, type: string) {
    return {
      [obj + 'col']: `grid-cols-${obj}`,
      [obj + 'gap']: `gap-${obj}`,
      [obj + 'row']: `grid-rows-${obj}`,
      [obj + 'flow']: `grid-flow-${obj}`,
      [obj + 'row-start']: `row-start-${obj}`,
      [obj + 'col-start']: `col-start-${obj}`,
      [obj + 'row-span']: `row-span-${obj}`,
      [obj + 'col-span']: `col-span-${obj}`,
    }[obj + type];
  }

  const spring = {
    type: 'spring',
    bounce: 0.25,
    duration: 0.8,
  };

  return (
    <div className="p-4 bg-gray-700 rounded-l-md w-3/4">
      <div
        className={tw`grid h-full ${
          gridCol ? getGridStyle(gridCol, 'col') : getGridStyle('4', 'col')
        } ${gap ? getGridStyle(gap, 'gap') : getGridStyle('4', 'gap')}
               ${
                 gridRow
                   ? getGridStyle(gridRow, 'row')
                   : getGridStyle('4', 'row')
               } 
               ${
                 gridFlow
                   ? getGridStyle(gridFlow, 'flow')
                   : getGridStyle('col', 'flow')
               } 
                bg-stripes bg-stripes-white
               bg-sky-400 rounded-md`}
      >
        <AnimatePresence initial={false}>
          {column.map((col, index) => {
            return (
              <motion.div
                key={col}
                layout
                className={tw`${col === 3 && 'row-span-3'} ${
                  Object.keys(colStart).includes('' + col) &&
                  getGridStyle(rowStart[index], 'col-start')
                } ${
                  Object.keys(rowStart).includes('' + col) &&
                  getGridStyle(rowStart[index], 'row-start')
                } ${
                  Object.keys(rowSpan).includes('' + col) &&
                  getGridStyle(rowSpan[index], 'row-span')
                } ${
                  Object.keys(colSpan).includes('' + col) &&
                  getGridStyle(colSpan[index], 'col-span')
                } 
                      bg-sky-600 font-mono shadow-lg rounded-lg p-4`}
                transition={spring}
                initial={{ opacity: 0.5, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <p className="text-center text-white">0{col}</p>
                {/*<button*/}
                {/*  className="p-2 text-sm rounded-md bg-gray-300 mr-4 mb-2"*/}
                {/*  onClick={() => setRowStart({ ['' + index]: '2' })}*/}
                {/*>*/}
                {/*  Row start +*/}
                {/*</button>*/}
                {/*<button*/}
                {/*  className="p-2 text-sm rounded-md bg-gray-300 mr-4 mb-2"*/}
                {/*  onClick={() => setColStart({ ['' + index]: '2' })}*/}
                {/*>*/}
                {/*  Col start +*/}
                {/*</button>*/}
                {/*<button*/}
                {/*  className="p-2 text-sm rounded-md bg-gray-300 mr-4 mb-2"*/}
                {/*  onClick={() =>*/}
                {/*    setColSpan((prev: any) => ({ ['' + index]: '3' }))*/}
                {/*  }*/}
                {/*>*/}
                {/*  Col span +*/}
                {/*</button>*/}
                {/*<button*/}
                {/*  className="p-2 text-sm rounded-md bg-gray-300 mr-4 mb-2"*/}
                {/*  onClick={() => setRowSpan({ ['' + index]: '2' })}*/}
                {/*>*/}
                {/*  Row span +*/}
                {/*</button>*/}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default GridLayout;
