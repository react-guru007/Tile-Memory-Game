import Head from 'next/head'
import react, { useState } from 'react'
import Board from '../components/Board'


export default function Home() {
  const [checked, setChecked] = useState(false)

  const [gameStart, setGameStart] = useState(false)

  function handleToggle() {
    setChecked(!checked)
  }

  return (
    <div>
      <Head>
        <meta name="description" content="Tile Memory Game" />
        <title>Tile Memory Game</title>
      </Head>
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 min-h-16 bg-gray-800 flex">
        <h1 className="sm:text-3xl text-2xl font-bold text-white pt-3 headerFont sm:tracking-wider tracking-wide sm:pl-4 font-header">
          Memory Game
        </h1>

        <div className="flex items-center justify-center w-40 ml-auto">
          <label
            htmlFor="toggleB"
            className="flex items-center cursor-pointer"
            checked={checked}
            onChange={handleToggle}
          >
            <div className="relative">
              <input
                type="checkbox"
                id="toggleB"
                className="sr-only"
                disabled={gameStart}
              />

              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>

              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>

            <div className="ml-3 text-white font-medium">Hard Mode</div>
          </label>
        </div>

        <div className="flex ml-auto text-white font-bold spacing-2 sm:pr-32   ">
          <p className="flex flex-col relative peer h-full justify-center items-center self-center bg-slate-700 px-2 rounded text-center">
            How to play
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </p>

          <ul className="list-disc absolute peer-hover:visible active:visible invisible border-solid border-2 p-2 lg:top-20 top-20 lg:right-12 right-0 lg:w-80 w-full text-sm rounded bg-gray-800 z-20 tracking-wide">
            <li className="ml-4">
              You have 5 Seconds to memorize the black tile positions
            </li>
            <li className="ml-4">
              Then 10 seconds to click original positions *Only 2 errors
              allowed!*
            </li>
            <li className="ml-4">
              Attempt Hard Mode if you dare!
            </li>
          </ul>
        </div>
      </div>
      <Board
        checked={checked}
        gameStart={gameStart}
        setGameStart={setGameStart}
      />
    </div>
  )
}
