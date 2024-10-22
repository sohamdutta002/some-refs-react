import { BrowserRouter as Router,Routes,Route, Navigate, useNavigate } from "react-router-dom"
import { Callback } from "./hooks/Callback"
import Memo from "./hooks/Memo"
import Ref from "./hooks/Ref"
import Reducer from "./hooks/Reducer"

function Navigation(){
  const navigate=useNavigate()
  return(
    <nav className="mb-10">
      <li onClick={()=>navigate('/callback')}>useCallback</li>
      <li onClick={()=>navigate('/memo')}>useMemo</li>
      <li onClick={()=>navigate('/ref')}>useRef</li>
      <li onClick={()=>navigate('/reducer')}>useReducer</li>
      <li onClick={()=>navigate('/')}>Home</li>
    </nav>
  )
}

function App() {
  const MyContext=React.createContext()
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/callback" element={<Callback/>} />
        <Route path="/memo" element={<Memo/>} />
        <Route path="/ref" element={<Ref/>} />
        <Route path="/reducer" element={<Reducer/>} />
        <Route path="/" element={<div>Hello</div>} />
      </Routes>
    </Router>
  )
}

export default App
