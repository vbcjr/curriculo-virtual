import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import DadosPessoais from './components/pages/DadosPessoais'
import Formacao from './components/pages/Formacao'
import Experiencia from './components/pages/Experiencia'
import Hobbies from './components/pages/Hobbies'
import CurriculoVirtual from './components/pages/CurriculoVirtual'
import Header from './components/common-components/Header'

function App() {
  return (
    <Router>
    <div>
      <Header />
    </div>
     {/* <div>
       <Link to="/">home</Link>
       <Link to="/dadospessoais">DadosPessoais</Link>
       <Link to="/formacao">Formação</Link>
       <Link to="/experiencia">Experiencia</Link>
       <Link to="/hobbies">Hobbies</Link>
       <Link to="/curriculovirtual">CurriculoVirtual</Link>
     </div> */}
     <Routes>
       <Route path='/' element={<Home />} />
         
       <Route path='/dadospessoais' element={<DadosPessoais />} />
         
       <Route path='/formacao' element={<Formacao />} />
       
       <Route path='/experiencia' element={<Experiencia />} />
      
       <Route path='/hobbies' element={<Hobbies />} />
    
       <Route path='/curriculovirtual' element={<CurriculoVirtual />} />
       
     </Routes>
   </Router>
  );
}

export default App;
