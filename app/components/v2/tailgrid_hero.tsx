"use client";
import React, { useState } from "react";

const TailGridHero = () => {
  return (
    <div className='relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 lg:w-5/12'>
            <div className='hero-content'>
              <h1 className='mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl mb-5  !leading-[1.208] dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl'>
                Digital{" "}
                <span className='relative whitespace-nowrap text-primary'>
                <svg aria-hidden='true' viewBox='0 0 418 42' className='absolute left-0 top-2/3 h-[0.58em] w-full fill-red-300/70' preserveAspectRatio='none'>
                  <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z'></path>
                </svg>
                <span className='relative'>Out-of-Home</span>
              </span>
                {" "} Media
              </h1>

              <p className='mb-8 class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700"'>
                AMCY OOH leverages on data, innovation and technology to provide affordable, reliable and timely OOH and DOOH advertising solutions to brands and businesses.
              </p>
              <ul className='flex flex-wrap items-center'>
                <li>
                  <a href='/#' className='inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7'>
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='hidden px-4 lg:block lg:w-1/12'></div>
          <div className='w-full px-4 lg:w-6/12'>
            <div className='lg:ml-auto lg:text-right'>
              <div className='relative z-10 inline-block pt-11 lg:pt-0'>
                <img src='https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png' alt='hero' className='max-w-full lg:ml-auto' />
                <span className='absolute -bottom-8 -left-8 z-[-1]'>
                  <svg width='93' height='93' viewBox='0 0 93 93' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='2.5' cy='2.5' r='2.5' fill='#3056D3' />
                    <circle cx='2.5' cy='24.5' r='2.5' fill='#3056D3' />
                    <circle cx='2.5' cy='46.5' r='2.5' fill='#3056D3' />
                    <circle cx='2.5' cy='68.5' r='2.5' fill='#3056D3' />
                    <circle cx='2.5' cy='90.5' r='2.5' fill='#3056D3' />
                    <circle cx='24.5' cy='2.5' r='2.5' fill='#3056D3' />
                    <circle cx='24.5' cy='24.5' r='2.5' fill='#3056D3' />
                    <circle cx='24.5' cy='46.5' r='2.5' fill='#3056D3' />
                    <circle cx='24.5' cy='68.5' r='2.5' fill='#3056D3' />
                    <circle cx='24.5' cy='90.5' r='2.5' fill='#3056D3' />
                    <circle cx='46.5' cy='2.5' r='2.5' fill='#3056D3' />
                    <circle cx='46.5' cy='24.5' r='2.5' fill='#3056D3' />
                    <circle cx='46.5' cy='46.5' r='2.5' fill='#3056D3' />
                    <circle cx='46.5' cy='68.5' r='2.5' fill='#3056D3' />
                    <circle cx='46.5' cy='90.5' r='2.5' fill='#3056D3' />
                    <circle cx='68.5' cy='2.5' r='2.5' fill='#3056D3' />
                    <circle cx='68.5' cy='24.5' r='2.5' fill='#3056D3' />
                    <circle cx='68.5' cy='46.5' r='2.5' fill='#3056D3' />
                    <circle cx='68.5' cy='68.5' r='2.5' fill='#3056D3' />
                    <circle cx='68.5' cy='90.5' r='2.5' fill='#3056D3' />
                    <circle cx='90.5' cy='2.5' r='2.5' fill='#3056D3' />
                    <circle cx='90.5' cy='24.5' r='2.5' fill='#3056D3' />
                    <circle cx='90.5' cy='46.5' r='2.5' fill='#3056D3' />
                    <circle cx='90.5' cy='68.5' r='2.5' fill='#3056D3' />
                    <circle cx='90.5' cy='90.5' r='2.5' fill='#3056D3' />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailGridHero;

interface SingleImageProps {
  href: string;
  imgSrc: string;
}

const SingleImage: React.FC<SingleImageProps> = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className='flex w-full items-center justify-center'>
        <img src={imgSrc} alt='brand image' className='h-10 w-full' />
      </a>
    </>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`absolute left-0 top-0 z-20 flex w-full items-center`}>
      <div className='container'>
        <div className='relative -mx-4 flex items-center justify-between'>
          <div className='w-60 max-w-full px-4'>
            <a href='/#' className='block w-full py-5'>
              <img src='https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg' alt='logo' className='w-full dark:hidden' />
              <img src='https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg' alt='logo' className='w-full hidden dark:block' />
            </a>
          </div>
          <div className='flex w-full items-center justify-between px-4'>
            <div>
              <button
                onClick={() => setOpen(!open)}
                id='navbarToggler'
                className={` ${open && "navbarTogglerActive"} absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className='relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white'></span>
                <span className='relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white'></span>
                <span className='relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white'></span>
              </button>
              <nav
                id='navbarCollapse'
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className='block lg:flex'>
                  <ListItem NavLink='/#'>Home</ListItem>
                  <ListItem NavLink='/#'>Payment</ListItem>
                  <ListItem NavLink='/#'>About</ListItem>
                  <ListItem NavLink='/#'>Blog</ListItem>
                </ul>
              </nav>
            </div>
            <div className='hidden justify-end pr-16 sm:flex lg:pr-0'>
              <a href='/#' className='px-7 py-3 text-base font-medium hover:text-primary dark:text-white'>
                Sign in
              </a>

              <a href='/#' className='rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90'>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

interface ListItemProps {
  children: React.ReactNode;
  NavLink: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a href={NavLink} className='flex py-2 text-base font-medium hover:text-primary dark:text-white lg:ml-10 lg:inline-flex'>
          {children}
        </a>
      </li>
    </>
  );
};
