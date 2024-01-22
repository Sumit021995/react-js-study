
import './App.css'
import  sumit from './assets/sumit.jpeg'
import Card from './components/card'


function App() {

  return (
    <>
      <h1 className='bg-green-400 text-orange-200 p-4 m-4 rounded-xl'>Sumit Saurav</h1>
      <Card myImg={sumit}/>
      <Card myImg={amit}/>



    </>
  )
}

export default App
