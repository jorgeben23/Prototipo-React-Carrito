import { Navbar, Footer } from './components'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './routes'
import './index.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='min-h-screen pt-16 bg-amber-200'>
          <AppRoutes />
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
