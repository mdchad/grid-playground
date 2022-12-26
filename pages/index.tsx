import Head from 'next/head';
import { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { tw } from 'twind';
import GridLayout from '../components/GridLayout';
import GridLayoutSettings from '../components/GridLayoutSettings';
import { IndexedObject } from '../types';

const stylObject = {};

export default function Home() {
  const [column, setColumn] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [gridCol, setGridCol] = useState('4');
  const [gridRow, setGridRow] = useState('4');
  const [gridFlow, setGridFlow] = useState('col');
  const [colStart, setColStart] = useState<IndexedObject>({});
  const [rowStart, setRowStart] = useState<IndexedObject>({});
  const [colSpan, setColSpan] = useState<IndexedObject>({});
  const [rowSpan, setRowSpan] = useState<IndexedObject>({});
  const [gap, setGap] = useState('4');

  function onSetGridCol() {}

  return (
    <>
      <Head>
        <title>Grid Playground</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen grid gap-0 grid-cols-1 grid-flow-row">
        <div className="text-center mt-20">
          <h1 className="text-2xl font-bold font-mono">CSS GRID Playground</h1>
        </div>
        <div className="flex mx-20 mb-20 justify-between row-span-6">
          <GridLayout
            column={column}
            gridCol={gridCol}
            gridRow={gridRow}
            gridFlow={gridFlow}
            colStart={colStart}
            rowStart={rowStart}
            colSpan={colSpan}
            rowSpan={rowSpan}
            gap={gap}
          />
          <GridLayoutSettings
            column={column}
            setColumn={setColumn}
            gridCol={gridCol}
            gridRow={gridRow}
            gridFlow={gridFlow}
            setGridCol={setGridCol}
            setGridRow={setGridRow}
            setGridFlow={setGridFlow}
            gap={gap}
            setGap={setGap}
          />
        </div>
      </main>
    </>
  );
}
