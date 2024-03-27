import React from "react";

export default function Header() {
  return (
    <header>
      <div className='absolute left-0 right-0 top-2 z-40 pt-14'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='flex items-center justify-between'>
              <a aria-label='Home' href='/'>
                <svg viewBox='0 0 304.67 69.75' aria-hidden='true' className='group/logo h-12'>
                  <path d='M.17,50.14l15-42.28h8.87l15,42.28H32.48L29,40.28H10.27L6.79,50.14Zm11.6-14.79H27.43l-4.64-13-2.95-8.64h-.35l-3,8.64Z' transform='translate(-0.17 -7.39)' fill='#e10000' />
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
              </a>
              <div className='flex items-center gap-x-8'>
                <a className='inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-[#E10000] text-white hover:bg-[#E10000]/80' href='/get-started'>
                  <span className='relative top-px'>Get Started</span>
                </a>
                {/* <button type='button' aria-expanded='false' aria-controls=':rm:' className='group -m-2.5 rounded-full p-2.5 transition hover:bg-[#E10000]/10' aria-label='Toggle navigation'>
                  <svg viewBox='0 0 24 24' aria-hidden='true' className='h-6 w-6 fill-[#E10000] group-hover:fill-[#E10000]/70'>
                    <path d='M2 6h20v2H2zM2 16h20v2H2z'></path>
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id=':rm:' className='relative z-50 overflow-hidden bg-[#E10000] pt-2' aria-hidden='true' style={{ height: "0.5rem" }}>
        {/* <div className='bg-[#E10000]/80'>
          <div className='bg-[#E10000] pb-16 pt-14'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='flex items-center justify-between'>
                  <a aria-label='Home' href='/'>
                    <svg viewBox='0 0 32 32' aria-hidden='true' className='h-8 sm:hidden'>
                      <rect clip-path='url(#:rp:-clip)' className='h-8 transition-all duration-300 fill-white w-0 group-hover/logo:w-8'></rect>
                      <use href='#:rp:-path' className='stroke-white' fill='none' stroke-width='1.5'></use>
                      <defs>
                        <path
                          id=':rp:-path'
                          d='M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z'
                        ></path>
                        <clipPath id=':rp:-clip'>
                          <use href='#:rp:-path'></use>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg viewBox='0 0 130 32' aria-hidden='true' className='hidden h-8 sm:block'>
                      <svg viewBox='0 0 32 32' aria-hidden='true' preserveAspectRatio='xMinYMid meet'>
                        <rect clip-path='url(#:rq:-clip)' className='h-8 transition-all duration-300 fill-white w-0 group-hover/logo:w-8'></rect>
                        <use href='#:rq:-path' className='stroke-white' fill='none' stroke-width='1.5'></use>
                        <defs>
                          <path
                            id=':rq:-path'
                            d='M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z'
                          ></path>
                          <clipPath id=':rq:-clip'>
                            <use href='#:rq:-path'></use>
                          </clipPath>
                        </defs>
                      </svg>
                      <path
                        className='fill-white'
                        d='M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z'
                      ></path>
                    </svg>
                  </a>
                  <div className='flex items-center gap-x-8'>
                    <a className='inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-[#E10000] hover:bg-[#E10000]/20' href='/contact'>
                      <span className='relative top-px'>Contact us</span>
                    </a>
                    <button type='button' aria-expanded='false' aria-controls=':rm:' className='group -m-2.5 rounded-full p-2.5 transition hover:bg-white/10' aria-label='Toggle navigation'>
                      <svg viewBox='0 0 24 24' aria-hidden='true' className='h-6 w-6 fill-white group-hover:fill-[#E10000]/20'>
                        <path d='m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z'></path>
                        <path d='M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z'></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className='mt-px font-display text-5xl font-medium tracking-tight text-white'>
            <div className='even:mt-px sm:bg-[#E10000]'>
              <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:max-w-none'>
                  <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <a
                      className='group relative isolate -mx-6 bg-[#E10000] px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-[#E10000]/80 sm:even:pl-16'
                      href='/work'
                    >
                      Our Work<span className='absolute inset-y-0 -z-10 w-screen bg-[#E10000]-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100'></span>
                    </a>
                    <a
                      className='group relative isolate -mx-6 bg-[#E10000] px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-[#E10000]/80 sm:even:pl-16'
                      href='/about'
                    >
                      About Us<span className='absolute inset-y-0 -z-10 w-screen bg-[#E10000]-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100'></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='even:mt-px sm:bg-[#E10000]'>
              <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:max-w-none'>
                  <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <a
                      className='group relative isolate -mx-6 bg-[#E10000] px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-[#E10000]/80 sm:even:pl-16'
                      href='/process'
                    >
                      Our Process<span className='absolute inset-y-0 -z-10 w-screen bg-[#E10000]/90 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100'></span>
                    </a>
                    <a
                      className='group relative isolate -mx-6 bg-[#E10000] px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-[#E10000]/80 sm:even:pl-16'
                      href='/blog'
                    >
                      Blog<span className='absolute inset-y-0 -z-10 w-screen bg-[#E10000]/90 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100'></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className='relative bg-[#E10000] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[#E10000]/80'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16'>
                  <div>
                    <h2 className='font-display text-base font-semibold text-white'>Our offices</h2>
                    <ul role='list' className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2'>
                      <li>
                        <address className='text-sm not-italic text-[#E10000]-300'>
                          <strong className='text-white'>Copenhagen</strong>
                          <br />1 Carlsberg Gate
                          <br />
                          1260, København, Denmark
                        </address>
                      </li>
                      <li>
                        <address className='text-sm not-italic text-[#E10000]-300'>
                          <strong className='text-white'>Billund</strong>
                          <br />
                          24 Lego Allé
                          <br />
                          7190, Billund, Denmark
                        </address>
                      </li>
                    </ul>
                  </div>
                  <div className='sm:border-l sm:border-transparent sm:pl-16'>
                    <h2 className='font-display text-base font-semibold text-white'>Follow us</h2>
                    <ul role='list' className='flex gap-x-10 text-white mt-6'>
                      <li>
                        <a aria-label='Facebook' className='transition hover:text-[#E10000]-200' href='https://facebook.com'>
                          <svg viewBox='0 0 24 24' aria-hidden='true' className='h-6 w-6 fill-current'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z'
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a aria-label='Instagram' className='transition hover:text-[#E10000]-200' href='https://instagram.com'>
                          <svg viewBox='0 0 24 24' aria-hidden='true' className='h-6 w-6 fill-current'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z'
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a aria-label='GitHub' className='transition hover:text-[#E10000]-200' href='https://github.com'>
                          <svg viewBox='0 0 24 24' aria-hidden='true' className='h-6 w-6 fill-current'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z'
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a aria-label='Dribbble' className='transition hover:text-[#E10000]-200' href='https://dribbble.com'>
                          <svg viewBox='0 0 24 24' aria-hidden='true' className='h-6 w-6 fill-current'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.42 25.42 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.688 8.688 0 0 1 12 3.475Zm-3.633.803a53.889 53.889 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.523 8.523 0 0 1-2.191-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.402 8.402 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715Z'
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </header>
  );
}