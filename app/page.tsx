"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon, FingerPrintIcon } from "@heroicons/react/24/outline";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const features = [
  {
    name: "Push to deploy.",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

const features2 = [
  {
    name: "Push to deploy",
    description: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description: "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description: "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className='bg-white'>
      <div className=''>
        <header className='absolute inset-x-0 top-0 z-50'>
          <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
            <div className='flex lg:flex-1'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>OOH Amcy</span>
                <Image src='/amcy_logo_electricred.svg' alt='OOH Amcy Logo' width={36} height={36} priority />
              </a>
            </div>
            <div className='flex lg:hidden'>
              <button type='button' className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700' onClick={() => setMobileMenuOpen(true)}>
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='hidden lg:flex lg:gap-x-12'>
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className='text-sm font-semibold leading-6 text-gray-900'>
                  {item.name}
                </a>
              ))}
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
              <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
                Log in <span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className='fixed inset-0 z-50' />
            <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
              <div className='flex items-center justify-between'>
                <a href='#' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Your Company</span>
                  <Image src='/tailwindLogo.svg' alt='OOH Amcy Logo' width={36} height={36} priority />
                </a>
                <button type='button' className='-m-2.5 rounded-md p-2.5 text-gray-700' onClick={() => setMobileMenuOpen(false)}>
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className='py-6'>
                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className='relative isolate px-6 pt-14 lg:px-8'>
          <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80' aria-hidden='true'>
            <div
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
            <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
              <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                Announcing our next round of funding.{" "}
                <a href='#' className='font-semibold text-primary'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  Read more <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Data to enrich your online business</h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
                >
                  Get started
                </a>
                <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
                  Learn more <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </div>
          <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]' aria-hidden='true'>
            <div
              className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <h2 className='text-center text-lg font-semibold leading-8 text-gray-900'>Trusted by the world’s most innovative teams</h2>
          <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
            <Image
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='/transistor.7274e6c3.svg'
              alt='Transistor'
              width={158}
              height={48}
              loading='lazy'
              decoding='async'
              style={{ color: "transparent" }}
            />
            <Image
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='/tuple.74eb0ae0.svg'
              alt='Tuple'
              width={105}
              height={48}
              loading='lazy'
              decoding='async'
              style={{ color: "transparent" }}
            />
            <Image
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='/statickit.d7937794.svg'
              alt='StaticKit'
              width={127}
              height={48}
              loading='lazy'
              decoding='async'
              style={{ color: "transparent" }}
            />
            <Image
              className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
              src='/mirage.18d2ec4e.svg'
              alt='Mirage'
              width={138}
              height={48}
              loading='lazy'
              decoding='async'
              style={{ color: "transparent" }}
            />
            <Image
              className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
              src='/laravel.7deed17e.svg'
              alt='Laravel'
              width={127}
              height={48}
              loading='lazy'
              decoding='async'
              style={{ color: "transparent" }}
            />
            {/* <Image src='/statamic.6da5ebfb.svg' alt='Statamic' width={147} height={48} loading="lazy" decoding="async" style={{color: 'transparent'}} /> */}
          </div>
        </div>
      </div>

      <div className='overflow-hidden bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
            <div className='lg:pr-8 lg:pt-4'>
              <div className='lg:max-w-lg'>
                <h2 className='text-base font-semibold leading-7 text-primary'>Deploy faster</h2>
                <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>A better workflow</p>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
                <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                  {features.map((feature) => (
                    <div key={feature.name} className='relative pl-9'>
                      <dt className='inline font-semibold text-gray-900'>
                        <feature.icon className='absolute left-1 top-1 h-5 w-5 text-primary' aria-hidden='true' />
                        {feature.name}
                      </dt>{" "}
                      <dd className='inline'>{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            {/* <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          /> */}
          </div>
        </div>
      </div>

      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-base font-semibold leading-7 text-primary'>Deploy faster</h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Everything you need to deploy your app</p>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {features2.map((feature) => (
                <div key={feature.name} className='relative pl-16'>
                  <dt className='text-base font-semibold leading-7 text-gray-900'>
                    <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary'>
                      <feature.icon className='h-6 w-6 text-white' aria-hidden='true' />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className='mt-2 text-base leading-7 text-gray-600'>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
          <div className='relative isolate overflow-hidden bg-gray-900 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
            <svg
              viewBox='0 0 1024 1024'
              className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
              aria-hidden='true'
            >
              <circle cx={512} cy={512} r={512} fill='url(#759c1415-0410-454c-8f7c-9a820de03641)' fillOpacity='0.7' />
              <defs>
                <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                  <stop stopColor='#7775D6' />
                  <stop offset={1} stopColor='#E935C1' />
                </radialGradient>
              </defs>
            </svg>
            <div className='mx-auto max-w-md text-center lg:flex-auto lg:py-32'>
              <h2 className='text-3xl font-bold tracking-tight text-center text-white sm:text-4xl'>
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                >
                  Get started
                </a>
                <a href='#' className='text-sm font-semibold leading-6 text-white'>
                  Learn more <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className='bg-white'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='py-16'>
            <svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' className='mx-auto h-10 w-auto' viewBox='0 0 442.45 441.57'>
              <g id='Layer_2' data-name='Layer 2'>
                <g id='Layer_1-2' data-name='Layer 1'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    fill='#ff3008'
                    d='M213.64,267.44c-1.06,2.19-2.23,4.32-3.18,6.56-10.37,24.59-21.65,48.73-36.83,70.79-8.63,12.53-18.16,24.37-31.5,32.32-24.29,14.47-48.4,12.79-71.74-2-25.49-16.12-40.56-47.68-28.3-82,2.5-7,2.39-7-4-10.58C-5.07,258.76-6.41,213.8,8.84,186.05c10.13-18.42,27-26.78,46.82-29.31,22.58-2.88,44.29,2.51,64.91,10.87,25.27,10.25,49.88,22.11,74.78,33.27,1.62.73,3.26,1.41,4.89,2.1l1-1.23c-2.14-2-4.18-4.08-6.43-5.93-21.32-17.61-42.84-35-61-56.08-16.19-18.8-30.2-39-36.13-63.71C91.84,51.68,99,31.66,119,17,144.6-1.65,172.3-5.58,201.44,8.32c5.65,2.7,10.85,6.51,15.87,10.32,3.13,2.37,5.19,2.33,8.24-.11C253.67-3.95,288.2-5.93,318.13,13c26.06,16.5,35.15,44.78,24,73.5-12,31-33,55.31-57,77.32-12.76,11.69-26.25,22.59-39.46,33.78a29.81,29.81,0,0,1-4.7,2.67l1.76,2.23c1.85-.73,3.74-1.38,5.55-2.19,23.53-10.61,46.76-21.92,70.63-31.65,21.71-8.85,44.4-14.37,68.26-11.94,30.81,3.13,52.66,25.57,55,56.4,2.44,32.16-11.39,55.27-39.41,70.25-3.87,2.08-4.36,4.06-2.88,7.87,18.61,47.87-16.78,90.48-58.63,95.3-23.52,2.71-42.53-7.28-58.24-24.07s-27-36.67-36.78-57.39c-4.82-10.24-9.17-20.69-13.78-31a12.31,12.31,0,0,0-3.43-4.73c2.11,55.76,15.5,108.84,37.38,160.54l-31.6,11.68c-17.86-57-22.89-114.9-19.29-173.85Z'
                  />
                </g>
              </g>
            </svg>
            <nav className='mt-10 text-sm' aria-label='quick links'>
              <div className='-my-1 flex justify-center gap-x-6'>
                <a className='inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900' href='#features'>
                  Features
                </a>
                <a className='inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900' href='#testimonials'>
                  Testimonials
                </a>
                <a className='inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900' href='#pricing'>
                  Pricing
                </a>
              </div>
            </nav>
          </div>
          <div className='flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between'>
            <div className='flex gap-x-6'>
              <a className='group' aria-label='TaxPal on X' href='#'>
                <svg className='h-6 w-6 fill-slate-500 group-hover:fill-slate-700' aria-hidden='true' viewBox='0 0 24 24'>
                  <path d='M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z'></path>
                </svg>
              </a>
              <a className='group' aria-label='TaxPal on GitHub' href='#'>
                <svg className='h-6 w-6 fill-slate-500 group-hover:fill-slate-700' aria-hidden='true' viewBox='0 0 24 24'>
                  <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z'></path>
                </svg>
              </a>
            </div>
            <p className='mt-6 text-sm text-slate-500 sm:mt-0'>Copyright © 2024 TaxPal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
