import React from "react";
import Header from "./ui/header";
import Footer from "./ui/footer";
import Image from "next/image";
import { services, hero, media_locations, about_us, quote } from "./ui/data";

export default function page() {
  return (
    <>
      <Header />
      <div className='relative flex flex-auto overflow-hidden bg-white pt-14 !rounded-t-[40px] transform-none' style={{ transformOrigin: "50% 50% 0px" }}>
        <div className='relative isolate flex w-full flex-col pt-9' style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
          <svg
            aria-hidden='true'
            className='absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-[#E10000]/15 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]'
          >
            <rect width='100%' height='100%' fill='url(#bgk)' strokeWidth='0'></rect>
            <svg x='50%' y='-96' strokeWidth='0' className='overflow-visible'>
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
              <pattern id='bgk' width='96' height='480' x='50%' patternUnits='userSpaceOnUse' patternTransform='translate(0 -96)' fill='none'>
                <path d='M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128'></path>
              </pattern>
            </defs>
          </svg>

          <main className='w-full flex-auto'>
            {/* Hero */}
            <section id={hero.tag} className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-48'>
              <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='max-w-3xl'>
                  <h1 className='font-display text-3xl font-medium tracking-tight text-[#E10000] [text-wrap:balance] sm:text-6xl'>{hero.title}</h1>
                  <p className='mt-6 text-xl text-neutral-600'>{hero.content}</p>
                </div>
              </div>
            </section>

            {/* Media locations */}
            <section id={media_locations.tag} className='mt-24 rounded-4xl bg-[#E10000] py-20 sm:mt-32 sm:py-32 lg:mt-56'>
              <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:max-w-none'>
                  <div className='flex items-center gap-x-8'>
                    <h2 className='text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left'>{media_locations.title}</h2>
                    <div className='h-px flex-auto bg-white'></div>
                  </div>
                  <div>
                    <ul role='list' className='mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4'>
                      {media_locations.locations.map((location) => (
                        <li key={location.id}>
                          <p className='text-white font-medium flex gap-3 items-center'>
                            {location.icon} {location.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id={services.tag}>
              <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40'>
                <div className='mx-auto max-w-2xl lg:max-w-none'>
                  <div className='max-w-2xl'>
                    <h2>
                      <span className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-[#E10000]'>{services.title}</span>
                    </h2>
                    <div className='mt-6 text-xl text-neutral-600'>
                      <p>{services.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-16'>
                <div className='mx-auto max-w-2xl lg:max-w-none'>
                  <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
                    {services.articles.map((article) => (
                      <div key={article.id} className='flex'>
                        <article className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-[#E10000]/5 transition hover:bg-neutral-50 sm:p-8'>
                          <p className='mt-6 font-display text-2xl font-semibold text-[#E10000]'>{article.title}</p>
                          <p className='mt-4 text-base text-neutral-600'>{article.description}</p>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id={quote.tag} className='relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 mt-24 sm:mt-32 lg:mt-40'>
              <svg aria-hidden='true' className='absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-[#E10000]/15 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]'>
                <rect width='100%' height='100%' fill='url(#:rs:)' strokeWidth='0'></rect>
                <svg x='50%' y='-256' strokeWidth='0' className='overflow-visible'>
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
                        <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">{quote.content}</p>
                      </blockquote>
                      <figcaption className='mt-10'>
                        {/* <img alt='Phobia' loading='lazy' width='184' height='36' decoding='async' data-nimg='1' src='/_next/static/media/logo-dark.353d4760.svg' style={{ color: "transparent" }} /> */}
                      </figcaption>
                      <p>{quote.author}</p>
                    </figure>
                  </div>
                </div>
              </div>
            </section>

            <section id={about_us.tag}>
              <div id={about_us.tag} className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40'>
                <div className='mx-auto max-w-2xl lg:max-w-none'>
                  <div className='max-w-2xl'>
                    <h2>
                      <span className='mb-6 block font-display text-base font-semibold text-[#E10000]'>{about_us.subtitle}</span>
                      <span className='sr-only'> - </span>
                      <span className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-[#E10000]'>{about_us.title}</span>
                    </h2>
                    <div className='mt-6 text-xl text-neutral-600'>
                      <p>{about_us.description}</p>
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
                            <g clipPath='url(#:S1:-clip)' className='group'>
                              <g className='origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105'>
                                <foreignObject width='655' height='680'>
                                  <Image
                                    src={"/duka.jpg"}
                                    width='2400'
                                    height='3000'
                                    decoding='async'
                                    sizes='(min-width: 1024px) 41rem, 31rem'
                                    alt=''
                                    style={{ color: "transparent", aspectRatio: 655 / 680 }}
                                    className='w-full bg-neutral-100 object-cover'
                                  />
                                </foreignObject>
                              </g>
                              <use href='#:S1:-shape' strokeWidth='2' className='stroke-[#E10000]/10'></use>
                            </g>
                            <defs>
                              <clipPath id=':S1:-clip'>
                                <path
                                  id=':S1:-shape'
                                  d='M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z'
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                ></path>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ul role='list' className='text-base text-neutral-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4'>
                        {about_us.solutions.map((solution) => (
                          <li key={solution.id} className='group mt-10 first:mt-0'>
                            <div>
                              <div className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-[#E10000] after:bg-[#E10000]/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
                                <strong className='font-semibold text-[#E10000]'>{solution.title} </strong>
                                {solution.description}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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
                      <div className='mt-10 border-t border-white/30 pt-10'>
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
