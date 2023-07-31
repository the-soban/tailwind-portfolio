import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai';
import Avatar from '../public/avatar.png';

export default function Home() {
  return (
    <main>
      <section className='min-h-screen px-10'>
        <nav className='navbar py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-REM font-black tracking-wider'>Soban</h1>
          <ul className='flex items-center gap-4'>
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
        <div className='min-w-44 max-w-4xl w-54 bg-teal-500 flex justify-center align-middle rounded-se-full mb-12'>
          <Image className='w-52 text-center' src={Avatar} alt="avatar" />
        </div>
      </section>
    </main>
  );
}
