import React from 'react'

function Bio() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
        <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>David</h1>
        <p className='text-base md:text-xl mb-3 font-medium'>UX Designer & Web Developer</p>
        <p className='text-sm max-w-xl mb-6 font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore error 
        sed quo eum eaque rerum libero placeat, in qui aliquam! Doloremque, quisquam quo. Consequuntur 
        deserunt voluptatum obcaecati magni quidem consequatur fugit a. Veritatis ipsum tempore, sapiente 
        nostrum obcaecati, facilis temporibus quasi veniam, harum provident sunt earum? Laborum, eius 
        consequatur, doloribus distinctio, sequi praesentium voluptatibus officia impedit magni aliquam 
        cupiditate magnam placeat est eum accusantium dolorum maiores voluptatum nobis quia.
        Voluptatibus enim doloribus porro vel, debitis consectetur delectus architecto!{' '}
        <a 
          href="wwww.google"
          target='blank'
          className='text-cyan-600 hover:underline underline-offset-2 decoration-2
          decoration-red-600'
          rel='noreferrer noopener'
          >
          Google
        </a> 
        {' '} Nisi itaque libero rerum deserunt id consequatur quia maiores nobis, odio iure. 
        Voluptatum ullam eaque porro eum, facilis repudiandae omnis pariatur iste? 
        </p>
    </div>
  )
}

export default Bio;