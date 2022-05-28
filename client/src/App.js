import './App.scss';
import React, { useState} from 'react';
import Container from './pages/Container';

export const DataContext = React.createContext()


function App() {
  const [toggleSideBar,setToggleSideBar] = useState(false)
  const [pipeData,setPipe] = useState({})
  const [paramsData,setParamsData] = useState([])
const DataContextValue ={  
  toggleSideBar,setToggleSideBar,
  paramsData,setParamsData,
  pipeData,setPipe
}

  return (
    <DataContext.Provider value={DataContextValue}>
      <Container/>
    </DataContext.Provider>
  );
}


export default App;
