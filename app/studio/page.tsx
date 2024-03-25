import React from "react";
import Header from "./ui/header";

export default function page() {
  return (
    <>
      <Header />
      <div className='relative flex flex-auto overflow-hidden bg-white pt-14 rounded-t-[40px] transform-none' style={{ transformOrigin: "50% 50% 0px" }}>
        <div className='relative isolate flex w-full flex-col pt-9' style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
          <svg
            aria-hidden='true'
            className='absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-[#E10000]/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]'
          >
            <rect width='100%' height='100%' fill='url(#:rr:)' stroke-width='0'></rect>
            <svg x='50%' y='-96' stroke-width='0' className='overflow-visible'>
              <path
                transform='translate(64 160)'
                d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
              ></path>
              <path
                transform='translate(128 320)'
                d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
              ></path>
              <path
                transform='translate(288 480)'
                d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
              ></path>
              <path
                transform='translate(512 320)'
                d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
              ></path>
              <path
                transform='translate(544 640)'
                d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
              ></path>
              <path
                transform='translate(320 800)'
                d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
              ></path>
            </svg>
            <defs>
              <pattern id=':rr:' width='96' height='480' x='50%' patternUnits='userSpaceOnUse' patternTransform='translate(0 -96)' fill='none'>
                <path d='M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128'></path>
              </pattern>
            </defs>
          </svg>

          <main className='w-full flex-auto'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56'>
              <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='max-w-3xl'>
                  <h1 className='font-display text-4xl font-medium tracking-tight text-[#E10000] [text-wrap:balance] sm:text-7xl'>Innovative Brand Awareness and Engagement Solutions</h1>
                  <p className='mt-6 text-xl text-neutral-600'>
                    Amcy OOH is a Digital Out-of-Home Advertising Service in Nairobi, Kenya. We provide the tools, innovation and technology necessary to help businesses create, develop and execute
                    Digital Out-of-Home Ad campaigns for their brands.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-24 rounded-4xl bg-[#E10000] py-20 sm:mt-32 sm:py-32 lg:mt-56'>
              <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:max-w-none'>
                  <div className='flex items-center gap-x-8'>
                    <h2 className='text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left'>Our network of media locations for your brand</h2>
                    <div className='h-px flex-auto bg-white'></div>
                  </div>
                  <div>
                    <ul role='list' className='mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4'>
                      {locations.map((item, idx) => (
                        <li key={idx}>
                          <div>
                            <p className='text-white font-medium flex gap-3 items-center'>
                              {item.icon} {item.text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40'>
              <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='max-w-2xl'>
                  <h2>
                    <span className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-[#E10000]'>Streamline your Out-of-Home Advertising</span>
                  </h2>
                  <div className='mt-6 text-xl text-neutral-600'>
                    <p>
                      We believe innovation, technology and entrepreneurship can transform the world and make it a better place. Therefore, we are committed to helping business brands create unique
                      customer experiences and deliver value to their people, Every day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-16'>
              <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
                  {items.map((item) => (
                    <div key={item.id} className='flex'>
                      <article className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-[#E10000]/5 transition hover:bg-neutral-50 sm:p-8'>
                        <p className='mt-6 font-display text-2xl font-semibold text-[#E10000]'>{item.title}</p>
                        <p className='mt-4 text-base text-neutral-600'>{item.description}</p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 mt-24 sm:mt-32 lg:mt-40'>
              <svg aria-hidden='true' className='absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-[#E10000]/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]'>
                <rect width='100%' height='100%' fill='url(#:rs:)' stroke-width='0'></rect>
                <svg x='50%' y='-256' stroke-width='0' className='overflow-visible'>
                  <path
                    transform='translate(64 160)'
                    d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
                  ></path>
                  <path
                    transform='translate(128 320)'
                    d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
                  ></path>
                  <path
                    transform='translate(288 480)'
                    d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
                  ></path>
                  <path
                    transform='translate(512 320)'
                    d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
                  ></path>
                  <path
                    transform='translate(544 640)'
                    d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
                  ></path>
                  <path
                    transform='translate(320 800)'
                    d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
                  ></path>
                </svg>
                <defs>
                  <pattern id=':rs:' width='96' height='480' x='50%' patternUnits='userSpaceOnUse' patternTransform='translate(0 -256)' fill='none'>
                    <path d='M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128'></path>
                  </pattern>
                </defs>
              </svg>
              <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:max-w-none'>
                  <div>
                    <figure className='mx-auto max-w-4xl'>
                      <blockquote className='relative font-display text-3xl font-medium tracking-tight text-[#E10000] sm:text-4xl'>
                        <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                          Whether you’re just starting out, launching a new product/service, or looking to increase, build and scale your brand, you can trust Amcy OOH to support you and your business
                          conveniently reach your target audience, where they live, dine, shop, work and commute, Every day.
                        </p>
                      </blockquote>
                      <figcaption className='mt-10'>
                        {/* <img alt='Phobia' loading='lazy' width='184' height='36' decoding='async' data-nimg='1' src='/_next/static/media/logo-dark.353d4760.svg' style={{ color: "transparent" }} /> */}
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40'>
              <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='max-w-2xl'>
                  <h2>
                    <span className='mb-6 block font-display text-base font-semibold text-[#E10000]'>Karibu</span>
                    <span className='sr-only'> - </span>
                    <span className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-[#E10000]'>Welcome to AMCY OOH</span>
                  </h2>
                  <div className='mt-6 text-xl text-neutral-600'>
                    <p>
                      AMCY OOH provides innovative, reliable and timely OOH solutions to brands ensuring that your brand is placed on the right platform, at the right time, and with the right content.
                    </p>
                    <p>Most importantly we share with you the details of what is happening in your channels and how we can improve things. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-16'>
              <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='lg:flex lg:items-center lg:justify-end'>
                  <div className='flex justify-center lg:w-1/2 lg:justify-end lg:pr-12'>
                    <div className='w-[33.75rem] flex-none lg:w-[45rem]'>
                      <div className='justify-center lg:justify-end relative flex aspect-[719/680] w-full grayscale'>
                        <svg viewBox='0 0 655 680' fill='none' className='h-full'>
                          <g clip-path='url(#:S1:-clip)' className='group'>
                            <g className='origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105'>
                              <foreignObject width='655' height='680'>
                                <img
                                  alt=''
                                  loading='lazy'
                                  width='2400'
                                  height='3000'
                                  decoding='async'
                                  data-nimg='1'
                                  className='w-full bg-neutral-100 object-cover'
                                  sizes='(min-width: 1024px) 41rem, 31rem'
                                  src='/duka.jpg'
                                  style={{ color: "transparent", aspectRatio: 655 / 680 }}
                                />
                              </foreignObject>
                            </g>
                            <use href='#:S1:-shape' stroke-width='2' className='stroke-[#E10000]/10'></use>
                          </g>
                          <defs>
                            <clipPath id=':S1:-clip'>
                              <path
                                id=':S1:-shape'
                                d='M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              ></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul role='list' className='text-base text-neutral-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4'>
                      {services.map((service) => (
                        <li key={service.id} className='group mt-10 first:mt-0'>
                          <div>
                            <div className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-[#E10000] after:bg-[#E10000]/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
                              <strong className='font-semibold text-[#E10000]'>{service.title} </strong>
                              {service.description}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40'>
              <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='-mx-6 rounded-4xl bg-[#E10000] px-6 py-20 sm:mx-0 sm:py-32 md:px-12'>
                  <div className='mx-auto max-w-4xl'>
                    <div className='max-w-xl'>
                      <h2 className='font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl'>Join the Community of Businesses benefiting from Amcy OOH.</h2>
                      <div className='mt-6 flex'>
                        <a className='inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-[#E10000] hover:bg-neutral-200' href='/get-started'>
                          <span className='relative top-px'>Get Started</span>
                        </a>
                      </div>
                      <div className='mt-10 border-t border-white/10 pt-10'>
                        <h3 className='font-display text-base font-semibold text-white'>Our offices</h3>
                        <ul role='list' className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2'>
                          <li>
                            <address className='text-sm not-italic text-neutral-100'>
                              <strong className='text-white'>Nairobi</strong>
                              <br />
                              Saachi Plaza, C2 Ground Floor,
                              <br />
                              Argwings Kodhek Rd, Kilimani
                            </address>
                          </li>
                          {/* <li>
                            <address className='text-sm not-italic text-neutral-300'>
                              <strong className='text-white'>Billund</strong>
                              <br />
                              24 Lego Allé
                              <br />
                              7190, Billund, Denmark
                            </address>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40'>
            <div className='mx-auto max-w-2xl lg:max-w-none'>
              <div>
                {/* <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2'>
                  <nav>
                    <ul role='list' className='grid grid-cols-2 gap-8 sm:grid-cols-3'>
                      <li>
                        <div className='font-display text-sm font-semibold tracking-wider text-[#E10000]'>Work</div>
                        <ul role='list' className='mt-4 text-sm text-neutral-700'>
                          <li className='mt-4'>
                            <a className='transition hover:text-[#E10000]' href='/work/family-fund'>
                              FamilyFund
                            </a>
                          </li>
                          <li className='mt-4'>
                            <a className='transition hover:text-[#E10000]' href='/work/unseal'>
                              Unseal
                            </a>
                          </li>
                          <li className='mt-4'>
                            <a className='transition hover:text-[#E10000]' href='/work/phobia'>
                              Phobia
                            </a>
                          </li>
                          <li className='mt-4'>
                            <a className='transition hover:text-[#E10000]' href='/work'>
                              See all <span aria-hidden='true'>→</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className='font-display text-sm font-semibold tracking-wider text-[#E10000]'>Company</div>
                        <ul role='list' className='mt-4 text-sm text-neutral-700'>
                          <li className='mt-4'>
                            <a className='transition hover:text-[#E10000]' href='/about'>
                              About
                            </a>
                          </li>
                          <li className='mt-4'>
                            <a className='transition hover:text-[#E10000]' href='/process'>
                              Process
                            </a>
                          </li>
                          <li className='mt-4'>
                            <a className='transition hover:text-[#E10000]' href='/blog'>
                              Blog
                            </a>
                          </li>
                          <li className='mt-4'>
                            <a className='transition hover:text-[#E10000]' href='/contact'>
                              Contact us
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className='font-display text-sm font-semibold tracking-wider text-[#E10000]'>Connect</div>
                        <ul role='list' className='mt-4 text-sm text-neutral-700'>
                          <li className='mt-4'>
                            <a className='transition hover:text-[#E10000]' href='https://facebook.com'>
                              Facebook
                            </a>
                          </li>
                          <li className='mt-4'>
                            <a className='transition hover:text-[#E10000]' href='https://instagram.com'>
                              Instagram
                            </a>
                          </li>
                          <li className='mt-4'>
                            <a className='transition hover:text-[#E10000]' href='https://github.com'>
                              GitHub
                            </a>
                          </li>
                          <li className='mt-4'>
                            <a className='transition hover:text-[#E10000]' href='https://dribbble.com'>
                              Dribbble
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <div className='flex lg:justify-end'>
                    <form className='max-w-sm'>
                      <h2 className='font-display text-sm font-semibold tracking-wider text-[#E10000]'>Sign up for our newsletter</h2>
                      <p className='mt-4 text-sm text-neutral-700'>Subscribe to get the latest design news, articles, resources and inspiration.</p>
                      <div className='relative mt-6'>
                        <input
                          placeholder='Email address'
                          autoComplete='email'
                          aria-label='Email address'
                          className='block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-[#E10000] ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-[#E10000] focus:outline-none focus:ring-[#E10000]/5'
                          type='email'
                        />
                        <div className='absolute inset-y-1 right-1 flex justify-end'>
                          <button
                            type='submit'
                            aria-label='Submit'
                            className='flex aspect-square h-full items-center justify-center rounded-xl bg-[#E10000] text-white transition hover:bg-neutral-800'
                          >
                            <svg viewBox='0 0 16 6' aria-hidden='true' className='w-4'>
                              <path fill='currentColor' fill-rule='evenodd' clip-rule='evenodd' d='M16 3 10 .5v2H0v1h10v2L16 3Z'></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> */}
                <div className='mb-20 mt-24 flex flex-col items-center lg:flex-wrap lg:flex-row lg:items-end lg:justify-between gap-x-6 gap-y-4 border-t border-[#E10000]/10 pt-12'>
                  <a aria-label='Home' href='/'>
                    <svg viewBox='0 0 304.67 69.75' aria-hidden='true' className='group/logo h-12'>
                      <path
                        d='M.17,50.14l15-42.28h8.87l15,42.28H32.48L29,40.28H10.27L6.79,50.14Zm11.6-14.79H27.43l-4.64-13-2.95-8.64h-.35l-3,8.64Z'
                        transform='translate(-0.17 -7.39)'
                        fill='#e10000'
                      />
                      <path
                        d='M43.38,50.14V19.46h5.69l.23,6.09h.35a9.56,9.56,0,0,1,4-4.9,12.1,12.1,0,0,1,12.18,0,9.17,9.17,0,0,1,3.86,5.57h.46a10,10,0,0,1,4.2-5.4A12.35,12.35,0,0,1,81,19a11.38,11.38,0,0,1,5.42,1.28,8.91,8.91,0,0,1,3.8,4.12,17.23,17.23,0,0,1,1.39,7.54V50.14H85.67v-17A15.3,15.3,0,0,0,84.91,28a5.92,5.92,0,0,0-2.26-3.05,7.08,7.08,0,0,0-3.94-1,7.46,7.46,0,0,0-4.35,1.28,8.5,8.5,0,0,0-2.88,3.39,11.07,11.07,0,0,0-1,4.79V50.14h-6v-17A15.3,15.3,0,0,0,63.74,28a5.92,5.92,0,0,0-2.26-3.05,7,7,0,0,0-3.89-1,7.56,7.56,0,0,0-4.4,1.28,8.5,8.5,0,0,0-2.88,3.39,11.07,11.07,0,0,0-1,4.79V50.14Z'
                        transform='translate(-0.17 -7.39)'
                        fill='#e10000'
                      />
                      <path
                        d='M112.46,50.66a15.88,15.88,0,0,1-6.12-1.13,13,13,0,0,1-4.7-3.22,14.64,14.64,0,0,1-3-5,18.44,18.44,0,0,1-1.08-6.49,17.72,17.72,0,0,1,1.86-8.32A13.37,13.37,0,0,1,104.69,21a15.69,15.69,0,0,1,8-2,15.23,15.23,0,0,1,6.64,1.4,11.8,11.8,0,0,1,4.7,3.88,11.15,11.15,0,0,1,2,5.8h-5.8a7,7,0,0,0-1.45-3.36,7.09,7.09,0,0,0-2.69-2,8.78,8.78,0,0,0-3.57-.7,8.27,8.27,0,0,0-4.82,1.37,8.54,8.54,0,0,0-3,3.79,14.47,14.47,0,0,0-1,5.75,13.88,13.88,0,0,0,1.1,5.83,8.43,8.43,0,0,0,3.07,3.68,8.34,8.34,0,0,0,4.64,1.27,9,9,0,0,0,3.94-.81,6.71,6.71,0,0,0,2.7-2.29,7.46,7.46,0,0,0,1.25-3.39h5.8a11.78,11.78,0,0,1-2,6.06,12,12,0,0,1-4.82,4A15.82,15.82,0,0,1,112.46,50.66Z'
                        transform='translate(-0.17 -7.39)'
                        fill='#e10000'
                      />
                      <path
                        d='M130.21,59.83V54.9h3.3a6.33,6.33,0,0,0,2.3-.38,4.39,4.39,0,0,0,1.65-1.16,6.5,6.5,0,0,0,1.16-2l1.85-4.76v2.61L127.89,19.46h6.55l7,18.67,1.28,3.66H143l1.22-3.66,6.61-18.67h6.32L144.36,52.81A13.39,13.39,0,0,1,142,57a7.84,7.84,0,0,1-3.22,2.2,12.79,12.79,0,0,1-4.29.67Z'
                        transform='translate(-0.17 -7.39)'
                        fill='#e10000'
                      />
                      <path
                        d='M193.08,50.66a23.46,23.46,0,0,1-8.53-1.48,18.33,18.33,0,0,1-6.61-4.32A18.68,18.68,0,0,1,173.71,38a26.21,26.21,0,0,1-1.45-9,25.91,25.91,0,0,1,1.48-9A18.79,18.79,0,0,1,178,13.17a18.38,18.38,0,0,1,6.58-4.3,25.47,25.47,0,0,1,17.11,0,18.33,18.33,0,0,1,6.59,4.3A19.07,19.07,0,0,1,212.48,20,25.91,25.91,0,0,1,214,29a25.91,25.91,0,0,1-1.48,9,18.94,18.94,0,0,1-4.26,6.81,18.52,18.52,0,0,1-6.61,4.29A23.46,23.46,0,0,1,193.08,50.66Zm0-5.45a14.54,14.54,0,0,0,7.63-1.94,13,13,0,0,0,5-5.54,19.56,19.56,0,0,0,1.77-8.7,21.51,21.51,0,0,0-1-6.87,14.53,14.53,0,0,0-2.9-5.08A12.33,12.33,0,0,0,199,13.92a15.76,15.76,0,0,0-5.94-1.07,14.47,14.47,0,0,0-7.6,1.91,12.86,12.86,0,0,0-5,5.51A19.71,19.71,0,0,0,178.75,29a21.29,21.29,0,0,0,1,6.84A14.13,14.13,0,0,0,182.64,41a12.45,12.45,0,0,0,4.49,3.16A15.43,15.43,0,0,0,193.08,45.21Z'
                        transform='translate(-0.17 -7.39)'
                        fill='#e10000'
                      />
                      <path
                        d='M240.29,50.66a23.46,23.46,0,0,1-8.53-1.48,18.33,18.33,0,0,1-6.61-4.32A18.68,18.68,0,0,1,220.92,38a26.21,26.21,0,0,1-1.45-9A25.91,25.91,0,0,1,221,20a18.79,18.79,0,0,1,4.23-6.81,18.38,18.38,0,0,1,6.58-4.3,25.47,25.47,0,0,1,17.11,0,18.33,18.33,0,0,1,6.59,4.3A18.93,18.93,0,0,1,259.69,20,25.91,25.91,0,0,1,261.17,29a25.91,25.91,0,0,1-1.48,9,18.81,18.81,0,0,1-4.26,6.81,18.52,18.52,0,0,1-6.61,4.29A23.46,23.46,0,0,1,240.29,50.66Zm0-5.45a14.54,14.54,0,0,0,7.63-1.94,13.05,13.05,0,0,0,5-5.54,19.7,19.7,0,0,0,1.76-8.7,21.23,21.23,0,0,0-1-6.87,14.37,14.37,0,0,0-2.9-5.08,12.37,12.37,0,0,0-4.52-3.16,15.81,15.81,0,0,0-6-1.07,14.47,14.47,0,0,0-7.6,1.91,12.92,12.92,0,0,0-5,5.51A19.71,19.71,0,0,0,226,29a21.29,21.29,0,0,0,1,6.84A14.27,14.27,0,0,0,229.85,41a12.41,12.41,0,0,0,4.5,3.16A15.34,15.34,0,0,0,240.29,45.21Z'
                        transform='translate(-0.17 -7.39)'
                        fill='#e10000'
                      />
                      <path d='M268.54,50.14V7.86h6.32v19l-.93-.92h25.52l-.93.92v-19h6.32V50.14h-6.32V30.54l.93.92H273.93l.93-.92v19.6Z' transform='translate(-0.17 -7.39)' fill='#e10000' />
                      <polygon points='119.83 69.75 40.31 47.75 119.83 47.75 119.83 69.75' fill='#e10000' />
                    </svg>
                    {/* <svg viewBox='0 0 130 32' aria-hidden='true' className='group/logo h-8'>
                      <svg viewBox='0 0 32 32' aria-hidden='true' preserveAspectRatio='xMinYMid meet'>
                        <rect clip-path='url(#:rt:-clip)' className='h-8 transition-all duration-300 fill-[#E10000] w-0 group-hover/logo:w-8'></rect>
                        <use href='#:rt:-path' className='stroke-[#E10000]' fill='none' stroke-width='1.5'></use>
                        <defs>
                          <path
                            id=':rt:-path'
                            d='M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z'
                          ></path>
                          <clipPath id=':rt:-clip'>
                            <use href='#:rt:-path'></use>
                          </clipPath>
                        </defs>
                      </svg>
                      <path
                        className='fill-[#E10000]'
                        d='M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z'
                      ></path>
                    </svg> */}
                  </a>
                  <p className='text-lg text-neutral-700'>© Amcy Management 2024</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

const items = [
  {
    id: "123",
    title: "Advertising Campaigns",
    description: "We develop and execute advertising campaigns that leverage our network digital OOH screens to deliver targeted messages to consumers in high-traffic locations.",
  },
  {
    id: "1234",
    title: "Data Collection and Analysis",
    description:
      "We identify, gather and analyze valuable insights about audience demographics, behavior, and engagement, to aid in making informed decisions on advertising efforts across our media locations. ",
  },
  {
    id: "123456",
    title: "Campaign Monitoring",
    description: "We monitor KPIs and use data-driven insights to optimize campaign performance in real-time to maximize return on investment (ROI) and deliver measurable results for our clients.",
  },
];

const services = [
  {
    id: 123,
    title: "Targeted Advertising",
    description: "Amcy OOH helps you develop and execute advertising campaigns based on specific target demographics, location, and time of the day to deliver relevant and personalized messages.",
  },
  {
    id: 223,
    title: "High Brand Exposure",
    description:
      "With Amcy OOH you can amplify your message and build brand awareness by activating our 1000+ place-based screens in office/commercial buildings, malls, restaurants, residential apartments and digital interactive billboards.",
  },
  {
    id: 323,
    title: "Fast and Flexible Activations",
    description:
      "With Amcy OOH Ad Suite, you can upload, schedule and launch campaigns in minutes. You can also update your messaging in real-time based on various factors such as weather conditions, traffic information, or upcoming events ensuring your messaging is always relevant and timely.",
  },
  {
    id: 423,
    title: "Evidence-Based Measurement",
    description:
      "We regularly collect, analyze, monitor, and report on data, insights and key performance indicators (KPIs) to optimize campaign performance. We use data-driven insights to inform message positioning and campaign performance. ",
  },
  {
    id: 523,
    title: "Extra Support Services",
    description:
      "Our team of on-demand designers, copywriters, editors, marketing and advertising experts from Amcy VA are always available to help you to organize, create and run successful AD campaigns.",
  },
];

const locations = [
  {
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
        />
      </svg>
    ),
    text: "Mall Media",
  },
  {
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z'
        />
      </svg>
    ),
    text: "Instore Media",
  },
  {
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8'>
        <path stroke-linecap='round' stroke-linejoin='round' d='m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z' />
      </svg>
    ),
    text: "Street Digital Media",
  },
  {
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z'
        />
      </svg>
    ),
    text: "Commercial Buildings",
  },
  {
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819'
        />
      </svg>
    ),
    text: "Residential Apartments",
  },
  {
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
        <path stroke-linecap='round' stroke-linejoin='round' d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z' />
      </svg>
    ),
    text: "Digital Marketing",
  },
];
