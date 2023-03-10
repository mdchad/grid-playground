import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import GridLayout from '../components/GridLayout';
import GridLayoutSettings from '../components/GridLayoutSettings';
import { IndexedObject } from '../types';
import GridItemSettings from '../components/GridItemSettings';
import { AnimatePresence } from 'framer-motion';
import { SettingsLayout } from '../enum';

export default function Home() {
  const [column, setColumn] = useState<number[] | []>([]);
  const [gridCol, setGridCol] = useState('4');
  const [gridRow, setGridRow] = useState('4');
  const [gridFlow, setGridFlow] = useState('col');
  const [colStart, setColStart] = useState<IndexedObject>({});
  const [rowStart, setRowStart] = useState<IndexedObject>({});
  const [colSpan, setColSpan] = useState<IndexedObject>({});
  const [rowSpan, setRowSpan] = useState<IndexedObject>({});
  const [gap, setGap] = useState('4');

  const [settingsLayout, setSettingsLayout] = useState<SettingsLayout>(
    SettingsLayout.gridSettings
  );
  const [settingsItem, setSettingsItem] = useState<number>(0);

  const prevCountRef = useRef<number | null>(null);
  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevCountRef.current = settingsItem;
  }, [settingsItem]);

  return (
    <>
      <Head>
        <title>Grid Playground</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen grid gap-6 grid-cols-1 grid-rows-[auto_1fr_auto]">
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold font-mono">CSS GRID Playground</h1>
        </div>
        <div className="flex flex-col mx-6 mb-4 sm:flex-row sm:mx-20 sm:mb-10">
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
            setSettingsLayout={setSettingsLayout}
            settingsLayout={settingsLayout}
            setSettingsItem={setSettingsItem}
          />
          <AnimatePresence exitBeforeEnter initial={false}>
            {settingsLayout === SettingsLayout.gridSettings ? (
              <GridLayoutSettings
                key={settingsLayout}
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
                setRowStart={setRowStart}
                setColStart={setColStart}
                setColSpan={setColSpan}
                setRowSpan={setRowSpan}
              />
            ) : (
              <GridItemSettings
                key={settingsLayout}
                setRowStart={setRowStart}
                setColStart={setColStart}
                setColSpan={setColSpan}
                setRowSpan={setRowSpan}
                itemIndex={settingsItem}
                setSettingsLayout={setSettingsLayout}
                prevCountRef={prevCountRef}
              />
            )}
          </AnimatePresence>
        </div>
        <footer className="mb-4 text-center font-mono font-bold text-sm">
          ?????? Made by Irsyad
        </footer>
      </main>
    </>
  );
}
