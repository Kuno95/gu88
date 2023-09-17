import './App.css'
import Header from './assets/Component/Header'
import Content from './assets/Component/Content'
import Footer from './assets/Component/Footer'
function App() {

  return (
    <>
     <Header/>
     <div className='my-1'>
      <Content/>
     </div>
     <Footer/>
    </>
  )
}

export default App
