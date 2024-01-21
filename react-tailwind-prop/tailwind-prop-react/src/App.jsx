
import './App.css'
import  sumit from './assets/sumit.jpeg'


function App() {

  return (
    <>
      <h1 className='bg-green-400 text-orange-200 p-4 m-4 rounded-xl' >Sumit Saurav</h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <div className="relative h-[400px] w-[300px] rounded-md">
  <img width="245" height="450"
    src={sumit}
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-xl object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">Sumit Saurav</h1>
    <p className="mt-2 text-sm text-gray-300">
    A Full Stack Web Developer
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
    </button>
  </div>
</div>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-sm font-medium">
      "Aiming to achieve a challenging & successful career where i can make a significant contribution using my 
innovative ideas , knowledge ,  skills and experience" 
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sumit Saurav
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Mechanical  Engineer
      </div>
    </figcaption>
  </div>
</figure>



    </>
  )
}

export default App
