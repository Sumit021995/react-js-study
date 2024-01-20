
import './App.css'
import './assets/sumit.jpeg'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-orange-200 p-4 m-4 rounded-xl' >Tailwind Test</h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img  src="./assets/sumit.jpeg" alt="Sumit" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
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
