import Link from 'next/link'
import Image from 'next/image'
import { HiMoon, HiMail } from 'react-icons/hi'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillGithub,
} from 'react-icons/ai'
import {
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoBootstrap,
    BiLogoTailwindCss,
    BiLogoSass,
    BiLogoGit,
    BiLogoPhp,
    BiLogoRedux,
} from 'react-icons/bi'
import { SiMysql, SiFigma, SiAdobexd } from 'react-icons/si'
import Avatar from '../public/avatar.png'
import Design from '../public/design.png'
import Code from '../public/code.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import ThemeBtn from './components/ThemeBtn'

export default function Home() {
    return (
        <main className="bg-white dark:bg-slate-900 px-4 sm:px-12 md:px-20 lg:px-40">
            <section className="min-h-screen">
                <nav className="navbar py-10 mb-12 flex justify-between align-middle">
                    <h1 className="text-lg dark:text-white font-REM font-black tracking-wide md:text-3xl md:tracking-wide sm:text-xl">
                        <a href="#">SOBAN</a>
                    </h1>
                    <ul className="flex items-center gap-4 whitespace-nowrap">
                        <li className="cursor-pointer text-2xl sm:text-lg">
                            <a href="#">
                                <ThemeBtn />
                            </a>
                        </li>
                        <li className="cursor-pointer text-2xl sm:text-lg">
                            <a href="mailto:sobanshafeq123@gmail.com">
                                <HiMail className="text-black dark:text-white text-lg sm:text-lg" />
                            </a>
                        </li>
                        <li>
                            <a
                                className="font-Poppins text-white bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-xl text-xs sm:text-sm"
                                target="_blank"
                                href="/resume.pdf"
                                rel="noopener noreferrer"
                            >
                                My Resume
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="text-center p-10">
                    <h2 className="text-4xl font-Poppins font-extrabold py-2 text-teal-600 dark:bg-gradient-to-r from-cyan-500 to-teal-500 dark:text-transparent dark:bg-clip-text md:text-5xl">
                        Soban Shafiq
                    </h2>
                    <h3 className="text-lg font-Poppins font-medium py-2 md:text-2xl md:pb-2 md:pt-0">
                        Web developer and UI designer.
                    </h3>
                    <p className="text-md font-Poppins font-semibold py-4 leading-6 text-gray-700 md:text-lg dark:text-gray-200">
                        Web developer creating cool stuff with cool web tools
                        and technologies. <br />
                        Scroll down to learn more about my work!
                    </p>
                </div>
                <div className="text-4xl flex justify-center gap-8 sm:gap-12 py-4 md:text-5xl">
                    <a
                        className=" text-teal-600 hover:text-teal-800 transition-all duration-400"
                        href="#"
                    >
                        <AiFillGithub />
                    </a>
                    <a
                        className=" text-teal-600 hover:text-teal-800 transition-all duration-400"
                        href="#"
                    >
                        <AiFillTwitterCircle />
                    </a>
                    <a
                        className=" text-teal-600 hover:text-teal-800 transition-all duration-400"
                        href="#"
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        className=" text-teal-600 hover:text-teal-800 transition-all duration-400"
                        href="#"
                    >
                        <AiFillInstagram />
                    </a>
                </div>
                <div className="w-60 h-80 sm:w-80 sm:h-80 bg-gradient-to-b from-teal-500 to-cyan-200 flex justify-center align-middle rounded-se-full mx-auto mt-12 md:rounded-full md:overflow-y-hidden">
                    <Image
                        className="w-52 relative text-center"
                        src={Avatar}
                        alt="avatar"
                    />
                </div>
            </section>

            <section className="mt-12">
                <div>
                    <h3 className="text-3xl font-Poppins font-bold py-1">
                        My Skillset
                    </h3>
                    <p className="text-sm sm:text-md font-Poppins py-2 leading-8 text-gray-700 dark:text-white">
                        My journey into web development started as a hobby,
                        something I did in my spare time. I used to design
                        website UIs in Figma and then try to build them as live
                        and interactive sites with HTML and CSS. But, soon I
                        realized I needed to learn and master the more advanced
                        tools and technologies of web development such as{' '}
                        <span className="text-teal-600 dark:text-teal-400">
                            Javascript, ReactJS, NextJS, Typescript, PHP,
                            NodeJS, ExpressJS, MongoDB/MySQL
                        </span>{' '}
                        and many others. That is when I started my dive into
                        these tools and developed a passion for web development.
                    </p>
                    <p className="text-sm sm:text-md font-Poppins py-2 leading-8 text-gray-800 dark:text-white">
                        I also have a background in working as a freelance{' '}
                        <span className="text-teal-600 dark:text-teal-400">
                            Graphic Designer
                        </span>
                        , which has given me the ability to pay close attention
                        to detail and develop a creative mindset.{' '}
                    </p>
                </div>
                <div>
                    <div className="font-Poppins text-center shadow-md hover:shadow-lg p-10 rounded-xl my-10 bg-gray-100 dark:bg-slate-800 flex-1 transition-all duration-400">
                        <Image
                            src={Design}
                            className="inline-block relative z-10"
                            width="94"
                            height="94"
                            alt="design"
                        />
                        <Image
                            src={Code}
                            className="inline-block relative -ml-10 mt-2 z-0"
                            width="94"
                            height="94"
                            alt="code"
                        />
                        <h3 className="text-xl font-Poppins font-semibold pt-8 pb-2  ">
                            Web Design & Development
                        </h3>
                        <p className="text-sm sm:text-md font-Poppins py-2">
                            Designing a great website first and then building it
                            up from scratch requires the knowledge and usage of
                            of design principles and theories, expertise in web
                            technologies and sharp attention to detail.
                            Here&apos;s the{' '}
                            <span className="text-teal-600 dark:text-teal-400">
                                tech stack (tools and technologies)
                            </span>{' '}
                            that I use to build websites and web apps:
                        </p>
                        <BiLogoHtml5 className="fill-gray-400 text-6xl inline-block hover:fill-orange-600 cursor-pointer transition-all duration-400" />
                        <BiLogoCss3 className="fill-gray-400 text-6xl inline-block hover:fill-blue-600 cursor-pointer transition-all duration-400" />
                        <BiLogoJavascript className="fill-gray-400 text-6xl inline-block hover:fill-yellow-400 cursor-pointer transition-all duration-400" />
                        <BiLogoReact className="fill-gray-400 text-6xl inline-block hover:fill-cyan-400 cursor-pointer transition-all duration-400" />
                        <BiLogoRedux className="fill-gray-400 text-6xl inline-block hover:fill-purple-500 cursor-pointer transition-all duration-400" />
                        <BiLogoGit className="fill-gray-400 text-6xl inline-block hover:fill-orange-600 cursor-pointer transition-all duration-400" />
                        <BiLogoTailwindCss className="fill-gray-400 text-6xl inline-block hover:fill-cyan-500 cursor-pointer transition-all duration-400" />
                        <BiLogoBootstrap className="fill-gray-400 text-6xl inline-block hover:fill-purple-800 cursor-pointer transition-all duration-400" />
                        <BiLogoSass className="fill-gray-400 text-6xl inline-block hover:fill-pink-500 cursor-pointer transition-all duration-400" />
                        <BiLogoPhp className="fill-gray-400 text-6xl inline-block hover:fill-purple-300 cursor-pointer transition-all duration-400" />
                        <SiMysql className="fill-gray-400 text-6xl inline-block hover:fill-blue-800 cursor-pointer transition-all duration-400" />
                        <SiFigma className="fill-gray-400 text-5xl inline-block hover:fill-black cursor-pointer transition-all duration-400" />
                        <SiAdobexd className="fill-gray-400 text-5xl inline-block hover:fill-purple-950 cursor-pointer transition-all duration-400" />
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div>
                    <h3 className="text-3xl font-Poppins font-bold py-1 ">
                        Recent Work
                    </h3>
                    <p className="text-sm sm:text-md font-Poppins py-2 leading-8 text-gray-800 dark:text-white">
                        Here&apos;s some{' '}
                        <span className="text-teal-600 dark:text-teal-400">
                            websites and UI Designs
                        </span>{' '}
                        I have worked on recently:{' '}
                    </p>
                </div>
                <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap">
                    <div className="basis-1/3 flex-1">
                        <Image
                            className="rounded-xl object-cover mb-6 w-full hover:w-[98%] transition-all duration-400 cursor-pointer"
                            src={web1}
                            alt="project"
                        />
                        <a
                            className="font-Poppins text-white bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 my-4 rounded-xl text-xs sm:text-md md:text-lg lg:text-base"
                            href="#"
                        >
                            Github Repo
                        </a>
                        <a
                            className="font-Poppins text-white bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 mx-4 rounded-xl text-xs sm:text-md md:text-lg lg:text-base"
                            href="#"
                        >
                            Live Demo
                        </a>
                    </div>
                    <div className="basis-1/3 flex-1">
                        <Image
                            className="rounded-xl object-cover mb-6 w-full hover:w-[98%] transition-all duration-400 cursor-pointer"
                            src={web2}
                            alt="project"
                        />
                        <a
                            className="font-Poppins text-white bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 my-4 rounded-xl text-xs sm:text-md md:text-lg lg:text-base"
                            href="#"
                        >
                            Github Repo
                        </a>
                        <a
                            className="font-Poppins text-white bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 mx-4 rounded-xl text-xs sm:text-md md:text-lg lg:text-base"
                            href="#"
                        >
                            Live Demo
                        </a>
                    </div>
                    <div className="basis-1/3 flex-1">
                        <Image
                            className="rounded-xl object-cover mb-6 w-full hover:w-[98%] transition-all duration-400 cursor-pointer"
                            src={web3}
                            alt="project"
                        />
                        <a
                            className="font-Poppins text-white bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 my-4 rounded-xl text-xs sm:text-md md:text-lg lg:text-base"
                            href="#"
                        >
                            Github Repo
                        </a>
                        <a
                            className="font-Poppins text-white bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 mx-4 rounded-xl text-xs sm:text-md md:text-lg lg:text-base"
                            href="#"
                        >
                            Live Demo
                        </a>
                    </div>
                    <div className="basis-1/3 flex-1">
                        <Image
                            className="rounded-xl object-cover mb-6 w-full hover:w-[98%] transition-all duration-400 cursor-pointer"
                            src={web4}
                            alt="project"
                        />
                        <a
                            className="font-Poppins text-white bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 my-4 rounded-xl text-xs sm:text-md md:text-lg lg:text-base"
                            href="#"
                        >
                            Github Repo
                        </a>
                        <a
                            className="font-Poppins text-white bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 mx-4 rounded-xl text-xs sm:text-md md:text-lg lg:text-base"
                            href="#"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div>
                    <h3 className="text-3xl font-Poppins font-bold py-1 ">
                        Contact Me
                    </h3>
                    <p className="text-sm sm:text-md font-Poppins mb-4 py-2 leading-8 text-gray-800 dark:text-white">
                        Enough about me and my work. Now, let&apos;s talk about{' '}
                        <span className="text-teal-600 dark:text-teal-400">
                            your project
                        </span>
                        .
                    </p>
                    <a
                        className="font-Poppins text-white bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 my-4 rounded-xl text-xs sm:text-md md:text-lg"
                        href="mailto:sobanshafeq123@gmail.com"
                    >
                        Send me an Email
                    </a>
                </div>
            </section>

            <section className="flex justify-center align-middle">
                <span className="text-xs font-Poppins text-gray-600 dark:text-white text-center mt-12 mb-4 mx-auto inline-block">
                    Copyright © Soban Shafiq - 2023
                </span>
            </section>
        </main>
    )
}
