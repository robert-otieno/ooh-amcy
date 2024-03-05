export default function Hero() {
  return (
    <div className='bg-white'>
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

        <div className='px-6 pt-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-12 lg:pt-16 py-32 sm:py-48 lg:py-56'>
          <section className='overflow-hidden pt-10 pb-12 lg:pt-16 lg:pb-[90px]'>
            <div className='container mx-auto'>
              <div className='flex flex-wrap items-center justify-between -mx-4'>
                <div className='w-full px-4 lg:w-1/2 xl:w-5/12'>
                  <div className='mt-10 lg:mt-0'>
                    <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Data to enrich your online business</h1>
                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className='mt-10 flex items-center justify-start gap-x-6'>
                      <a
                        href='#'
                        className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      >
                        Get started
                      </a>
                      <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
                        Learn more <span aria-hidden='true'>→</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='w-full px-4 lg:w-6/12'>
                  {/* <div className='flex items-center -mx-3 sm:-mx-4'>
                    <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                      <div className='py-3 sm:py-4'>
                        <img src='/thefoodone.jpeg' alt='' className='w-full rounded-2xl' />
                      </div>
                      <div className='py-3 sm:py-4'>
                        <img src='/pexels-kelly-4036764.jpg' alt='' className='w-full rounded-2xl' />
                      </div>
                    </div>
                    <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                      <div className='relative z-10 my-4'>
                        <img src='/duka.jpg' alt='' className='w-full rounded-2xl' />
                        <span className='absolute -right-7 -bottom-7 z-[-1]'>
                          <svg width={134} height={106} viewBox='0 0 134 106' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <circle cx='1.66667' cy={104} r='1.66667' transform='rotate(-90 1.66667 104)' fill='#f7ab0a' />
                            <circle cx='16.3333' cy={104} r='1.66667' transform='rotate(-90 16.3333 104)' fill='#f7ab0a' />
                            <circle cx={31} cy={104} r='1.66667' transform='rotate(-90 31 104)' fill='#f7ab0a' />
                            <circle cx='45.6667' cy={104} r='1.66667' transform='rotate(-90 45.6667 104)' fill='#f7ab0a' />
                            <circle cx='60.3334' cy={104} r='1.66667' transform='rotate(-90 60.3334 104)' fill='#f7ab0a' />
                            <circle cx='88.6667' cy={104} r='1.66667' transform='rotate(-90 88.6667 104)' fill='#f7ab0a' />
                            <circle cx='117.667' cy={104} r='1.66667' transform='rotate(-90 117.667 104)' fill='#f7ab0a' />
                            <circle cx='74.6667' cy={104} r='1.66667' transform='rotate(-90 74.6667 104)' fill='#f7ab0a' />
                            <circle cx={103} cy={104} r='1.66667' transform='rotate(-90 103 104)' fill='#f7ab0a' />
                            <circle cx={132} cy={104} r='1.66667' transform='rotate(-90 132 104)' fill='#f7ab0a' />
                            <circle cx='1.66667' cy='89.3333' r='1.66667' transform='rotate(-90 1.66667 89.3333)' fill='#f7ab0a' />
                            <circle cx='16.3333' cy='89.3333' r='1.66667' transform='rotate(-90 16.3333 89.3333)' fill='#f7ab0a' />
                            <circle cx={31} cy='89.3333' r='1.66667' transform='rotate(-90 31 89.3333)' fill='#f7ab0a' />
                            <circle cx='45.6667' cy='89.3333' r='1.66667' transform='rotate(-90 45.6667 89.3333)' fill='#f7ab0a' />
                            <circle cx='60.3333' cy='89.3338' r='1.66667' transform='rotate(-90 60.3333 89.3338)' fill='#f7ab0a' />
                            <circle cx='88.6667' cy='89.3338' r='1.66667' transform='rotate(-90 88.6667 89.3338)' fill='#f7ab0a' />
                            <circle cx='117.667' cy='89.3338' r='1.66667' transform='rotate(-90 117.667 89.3338)' fill='#f7ab0a' />
                            <circle cx='74.6667' cy='89.3338' r='1.66667' transform='rotate(-90 74.6667 89.3338)' fill='#f7ab0a' />
                            <circle cx={103} cy='89.3338' r='1.66667' transform='rotate(-90 103 89.3338)' fill='#f7ab0a' />
                            <circle cx={132} cy='89.3338' r='1.66667' transform='rotate(-90 132 89.3338)' fill='#f7ab0a' />
                            <circle cx='1.66667' cy='74.6673' r='1.66667' transform='rotate(-90 1.66667 74.6673)' fill='#f7ab0a' />
                            <circle cx='1.66667' cy='31.0003' r='1.66667' transform='rotate(-90 1.66667 31.0003)' fill='#f7ab0a' />
                            <circle cx='16.3333' cy='74.6668' r='1.66667' transform='rotate(-90 16.3333 74.6668)' fill='#f7ab0a' />
                            <circle cx='16.3333' cy='31.0003' r='1.66667' transform='rotate(-90 16.3333 31.0003)' fill='#f7ab0a' />
                            <circle cx={31} cy='74.6668' r='1.66667' transform='rotate(-90 31 74.6668)' fill='#f7ab0a' />
                            <circle cx={31} cy='31.0003' r='1.66667' transform='rotate(-90 31 31.0003)' fill='#f7ab0a' />
                            <circle cx='45.6667' cy='74.6668' r='1.66667' transform='rotate(-90 45.6667 74.6668)' fill='#f7ab0a' />
                            <circle cx='45.6667' cy='31.0003' r='1.66667' transform='rotate(-90 45.6667 31.0003)' fill='#f7ab0a' />
                            <circle cx='60.3333' cy='74.6668' r='1.66667' transform='rotate(-90 60.3333 74.6668)' fill='#f7ab0a' />
                            <circle cx='60.3333' cy='30.9998' r='1.66667' transform='rotate(-90 60.3333 30.9998)' fill='#f7ab0a' />
                            <circle cx='88.6667' cy='74.6668' r='1.66667' transform='rotate(-90 88.6667 74.6668)' fill='#f7ab0a' />
                            <circle cx='88.6667' cy='30.9998' r='1.66667' transform='rotate(-90 88.6667 30.9998)' fill='#f7ab0a' />
                            <circle cx='117.667' cy='74.6668' r='1.66667' transform='rotate(-90 117.667 74.6668)' fill='#f7ab0a' />
                            <circle cx='117.667' cy='30.9998' r='1.66667' transform='rotate(-90 117.667 30.9998)' fill='#f7ab0a' />
                            <circle cx='74.6667' cy='74.6668' r='1.66667' transform='rotate(-90 74.6667 74.6668)' fill='#f7ab0a' />
                            <circle cx='74.6667' cy='30.9998' r='1.66667' transform='rotate(-90 74.6667 30.9998)' fill='#f7ab0a' />
                            <circle cx={103} cy='74.6668' r='1.66667' transform='rotate(-90 103 74.6668)' fill='#f7ab0a' />
                            <circle cx={103} cy='30.9998' r='1.66667' transform='rotate(-90 103 30.9998)' fill='#f7ab0a' />
                            <circle cx={132} cy='74.6668' r='1.66667' transform='rotate(-90 132 74.6668)' fill='#f7ab0a' />
                            <circle cx={132} cy='30.9998' r='1.66667' transform='rotate(-90 132 30.9998)' fill='#f7ab0a' />
                            <circle cx='1.66667' cy='60.0003' r='1.66667' transform='rotate(-90 1.66667 60.0003)' fill='#f7ab0a' />
                            <circle cx='1.66667' cy='16.3333' r='1.66667' transform='rotate(-90 1.66667 16.3333)' fill='#f7ab0a' />
                            <circle cx='16.3333' cy='60.0003' r='1.66667' transform='rotate(-90 16.3333 60.0003)' fill='#f7ab0a' />
                            <circle cx='16.3333' cy='16.3333' r='1.66667' transform='rotate(-90 16.3333 16.3333)' fill='#f7ab0a' />
                            <circle cx={31} cy='60.0003' r='1.66667' transform='rotate(-90 31 60.0003)' fill='#f7ab0a' />
                            <circle cx={31} cy='16.3333' r='1.66667' transform='rotate(-90 31 16.3333)' fill='#f7ab0a' />
                            <circle cx='45.6667' cy='60.0003' r='1.66667' transform='rotate(-90 45.6667 60.0003)' fill='#f7ab0a' />
                            <circle cx='45.6667' cy='16.3333' r='1.66667' transform='rotate(-90 45.6667 16.3333)' fill='#f7ab0a' />
                            <circle cx='60.3333' cy='60.0003' r='1.66667' transform='rotate(-90 60.3333 60.0003)' fill='#f7ab0a' />
                            <circle cx='60.3333' cy='16.3333' r='1.66667' transform='rotate(-90 60.3333 16.3333)' fill='#f7ab0a' />
                            <circle cx='88.6667' cy='60.0003' r='1.66667' transform='rotate(-90 88.6667 60.0003)' fill='#f7ab0a' />
                            <circle cx='88.6667' cy='16.3333' r='1.66667' transform='rotate(-90 88.6667 16.3333)' fill='#f7ab0a' />
                            <circle cx='117.667' cy='60.0003' r='1.66667' transform='rotate(-90 117.667 60.0003)' fill='#f7ab0a' />
                            <circle cx='117.667' cy='16.3333' r='1.66667' transform='rotate(-90 117.667 16.3333)' fill='#f7ab0a' />
                            <circle cx='74.6667' cy='60.0003' r='1.66667' transform='rotate(-90 74.6667 60.0003)' fill='#f7ab0a' />
                            <circle cx='74.6667' cy='16.3333' r='1.66667' transform='rotate(-90 74.6667 16.3333)' fill='#f7ab0a' />
                            <circle cx={103} cy='60.0003' r='1.66667' transform='rotate(-90 103 60.0003)' fill='#f7ab0a' />
                            <circle cx={103} cy='16.3333' r='1.66667' transform='rotate(-90 103 16.3333)' fill='#f7ab0a' />
                            <circle cx={132} cy='60.0003' r='1.66667' transform='rotate(-90 132 60.0003)' fill='#f7ab0a' />
                            <circle cx={132} cy='16.3333' r='1.66667' transform='rotate(-90 132 16.3333)' fill='#f7ab0a' />
                            <circle cx='1.66667' cy='45.3333' r='1.66667' transform='rotate(-90 1.66667 45.3333)' fill='#f7ab0a' />
                            <circle cx='1.66667' cy='1.66683' r='1.66667' transform='rotate(-90 1.66667 1.66683)' fill='#f7ab0a' />
                            <circle cx='16.3333' cy='45.3333' r='1.66667' transform='rotate(-90 16.3333 45.3333)' fill='#f7ab0a' />
                            <circle cx='16.3333' cy='1.66683' r='1.66667' transform='rotate(-90 16.3333 1.66683)' fill='#f7ab0a' />
                            <circle cx={31} cy='45.3333' r='1.66667' transform='rotate(-90 31 45.3333)' fill='#f7ab0a' />
                            <circle cx={31} cy='1.66683' r='1.66667' transform='rotate(-90 31 1.66683)' fill='#f7ab0a' />
                            <circle cx='45.6667' cy='45.3333' r='1.66667' transform='rotate(-90 45.6667 45.3333)' fill='#f7ab0a' />
                            <circle cx='45.6667' cy='1.66683' r='1.66667' transform='rotate(-90 45.6667 1.66683)' fill='#f7ab0a' />
                            <circle cx='60.3333' cy='45.3338' r='1.66667' transform='rotate(-90 60.3333 45.3338)' fill='#f7ab0a' />
                            <circle cx='60.3333' cy='1.66683' r='1.66667' transform='rotate(-90 60.3333 1.66683)' fill='#f7ab0a' />
                            <circle cx='88.6667' cy='45.3338' r='1.66667' transform='rotate(-90 88.6667 45.3338)' fill='#f7ab0a' />
                            <circle cx='88.6667' cy='1.66683' r='1.66667' transform='rotate(-90 88.6667 1.66683)' fill='#f7ab0a' />
                            <circle cx='117.667' cy='45.3338' r='1.66667' transform='rotate(-90 117.667 45.3338)' fill='#f7ab0a' />
                            <circle cx='117.667' cy='1.66683' r='1.66667' transform='rotate(-90 117.667 1.66683)' fill='#f7ab0a' />
                            <circle cx='74.6667' cy='45.3338' r='1.66667' transform='rotate(-90 74.6667 45.3338)' fill='#f7ab0a' />
                            <circle cx='74.6667' cy='1.66683' r='1.66667' transform='rotate(-90 74.6667 1.66683)' fill='#f7ab0a' />
                            <circle cx={103} cy='45.3338' r='1.66667' transform='rotate(-90 103 45.3338)' fill='#f7ab0a' />
                            <circle cx={103} cy='1.66683' r='1.66667' transform='rotate(-90 103 1.66683)' fill='#f7ab0a' />
                            <circle cx={132} cy='45.3338' r='1.66667' transform='rotate(-90 132 45.3338)' fill='#f7ab0a' />
                            <circle cx={132} cy='1.66683' r='1.66667' transform='rotate(-90 132 1.66683)' fill='#f7ab0a' />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div> */}
                  <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'> */}
        {/* <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              Announcing our next round of funding.{" "}
              <a href='#' className='font-semibold text-indigo-600'>
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
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Get started
              </a>
              <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div> */}
        {/* </div> */}

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
  );
}
