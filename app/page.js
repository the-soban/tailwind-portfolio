import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai';
import Avatar from '../public/avatar.png';
import Design from '../public/design.png';
import Code from '../public/code.png';

export default function Home() {
  return (
    <main>
      <section className='min-h-screen px-10'>
        <nav className='navbar py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-REM font-black tracking-wider'>Soban</h1>
          <ul className='flex items-center gap-6'>
            <li className='cursor-pointer text-2xl'><BsFillMoonStarsFill/></li>
            <li><a className='font-Poppins text-white bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-lg' href='#'>My Resume</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl font-Poppins font-extrabold py-2 text-teal-600'>Soban Shafiq</h2>
          <h3 className='text-xl font-Poppins font-medium py-2'>Web developer and designer.</h3>
          <p className='text-md font-Poppins font-semibold py-4 leading-6 text-gray-700'>Web developer creating cool stuff with cool web tools and technologies. Scroll down to learn more about my work!</p>
        </div>
        <div className='text-4xl flex justify-center gap-12 py-4'>
          <a className=' text-teal-700 hover:text-teal-800 transition-all duration-400' href='#'><AiFillGithub/></a>
          <a className=' text-teal-700 hover:text-teal-800 transition-all duration-400' href='#'><AiFillTwitterCircle/></a>
          <a className=' text-teal-700 hover:text-teal-800 transition-all duration-400' href='#'><AiFillLinkedin/></a>
          <a className=' text-teal-700 hover:text-teal-800 transition-all duration-400' href='#'><AiFillInstagram/></a>
        </div>
        <div className='w-80 h-80 bg-gradient-to-b from-teal-500 to-cyan-200 flex justify-center align-middle rounded-se-full mx-auto mt-12'>
          <Image className='w-52 relative text-center' src={Avatar} alt="avatar" />
        </div>
      </section>

      <section className='mt-12 px-12'>
        <div className='font-Poppins'>
          <h3 className='text-3xl font-bold py-1'>Services I offer</h3>
          <p className='text-md py-2 leading-8 text-gray-700'>Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-600"> agencies </span>
              consulted for <span className="text-teal-600">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.</p>
          <p className='text-md py-2 leading-8 text-gray-800'>I offer from a wide range of services, including brand design,
              programming and teaching.</p>
        </div>
        <div>
          <div className='font-Poppins text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <Image src={Design} className='inline-block' width='94' height='94' alt='design' />
            <h3 className="text-xl font-semibold pt-8 pb-2  ">
                Web and UI Design
              </h3>
              <p className="text-md py-2">
                Creating elegant designs suited for your needs following core design theory.
              </p>
              <h4 className="py-4 text-md text-teal-600 font-semibold">Design Tools I Use:</h4>
              <p className="text-gray-700 py-1">Photoshop</p>
              <p className="text-gray-700 py-1">Illustrator</p>
              <p className="text-gray-700 py-1">Figma</p>
              <p className="text-gray-700 py-1">Indesign</p>
          </div>

          <div className='font-Poppins text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <Image src={Code} className='inline-block' width='94' height='94' alt='code' />
            <h3 className="text-xl font-semibold pt-8 pb-2  ">
                Web Development
              </h3>
              <p className="text-md py-2">
                Do you have an idea for your next great website? Let's make it a reality.
              </p>
              <h4 className="py-4 text-md text-teal-600 font-semibold">Development Tools I Use:</h4>
              <p className="text-gray-700 py-1">Photoshop</p>
              <p className="text-gray-700 py-1">Illustrator</p>
              <p className="text-gray-700 py-1">Figma</p>
              <p className="text-gray-700 py-1">Indesign</p>
          </div>
        </div>
      </section>

      <section>
        <div>
        <h3>Recent Work</h3>
        </div>
      </section>
    </main>
  );
}
