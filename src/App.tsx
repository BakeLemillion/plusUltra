import React from 'react'
import './style.css'
import imga from './156512-minimalizm-elektrik-logo-krug-temnota-1920x1080.png'
import testSvg from './test.svg'
import { ClickCounter } from './clickCounter'

export const App = () => {
  return (
    <>
      <ClickCounter />
      <h1>
        Lemillion {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={imga} alt="asd" width={300} />
      <img src={testSvg} alt="asd" width={300} />
    </>
  )
}
