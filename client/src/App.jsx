
import './styles/App.css'
import Login from './pages/Login'
import News from './pages/News'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './utils/PrivateRoute'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from './pages/Template';
import Auditoria from './pages/Auditoria'

function App() {
  return (
    <div className="App container">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='login' element={<Login/>} />
            <Route element={<PrivateRoute/>}>
              <Route path='/' element={<Template/>}>
                <Route index element={<News/>}/>
                <Route path='auditoria' element={<Auditoria/>}/>
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
