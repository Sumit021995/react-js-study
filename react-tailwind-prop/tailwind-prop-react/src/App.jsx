
import './App.css'
import  sumit from './assets/sumit.jpeg'
import  bhaiya from './assets/bhaiya.jpeg'
import Card from './components/card'


function App() {

  return (
    <>
      <h1 className='bg-green-400 text-orange-200 p-4 m-4 rounded-xl'>Profile Info</h1>
      <Card myImg={sumit} username='Sumit Saurav' text ='Web Developer' btnText = "Click Me"/>
      <Card myImg={bhaiya} username='Amit Gaurav' text ='History Teacher'/>



    </>
  )
}

export default App
