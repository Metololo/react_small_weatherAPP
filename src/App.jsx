import React,{ useState,useEffect } from 'react'
import './assets/style.css'
import { WEATHER_API_KEY, GEO_API_KEY} from './api_key';

import Search from "./components/Search/Search"

function App() {

  return (
    <>
      <Search />
    </>
  )
}

export default App;
