// rfce Enter = react functional component export shortcut key (required react snipit)
// import React from 'react'
// import  sumit from '../assets/sumit.jpeg'

function Card(props) {
    console.log(props);
  return (
    
      <div className=" mx-auto relative h-[400px] w-[300px] rounded-md">
  <img
    src={props.myImg}
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">Delba</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
    </button>
  </div>
</div>
    
  )
}

export default Card
