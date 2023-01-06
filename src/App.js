
import React, { useState } from 'react'
import NavBar from './components/NavBar'
import News from './components/News';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pagesize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <BrowserRouter>
      <div>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pagesize} country='in' category='general'/>}> </Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pagesize} country='in' category='entertainment'/>}> </Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pagesize} country='in' category='business'/>}> </Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pagesize} country='in' category='health'/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pagesize} country='in' category='science'/>}> </Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pagesize} country='in' category='sports'/>}> </Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pagesize} country='in' category='technology'/>}> </Route>
        </Routes>
      </div>
      </BrowserRouter>
    )
}

export default App