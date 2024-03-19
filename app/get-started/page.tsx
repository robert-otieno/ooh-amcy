import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function GetStarted() {
  return (
    <div className='relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]'>
      <div className='container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl md:text-center'>
          <h2 className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'>Get Started with Amcy OOH</h2>
          <p className='mt-4 text-lg tracking-tight text-slate-700'>
            Thank you for your interest in Amcy OOH! Please provide us with the following information so that we can assist you in executing innovative Out of Home (OOH) ad campaigns.{" "}
          </p>
        </div>

        <div className='mx-auto mt-16 lg:mx-0'>
          <h2 id='faq-title' className='font-display text-lg tracking-tight text-slate-900 sm:text-4xl'>
            Why should I use this platform?
          </h2>
          <p className='mt-4 font-light tracking-tight text-slate-600'>
            At Amcy OOH, we specialize in helping businesses reach their target audience through disruptive and eye-catching Out of Home advertising. Our services are designed to captivate consumers
            in their everyday environments, making your brand message stick. Join the community of businesses benefiting from our OOH solutions and let us help you create impactful campaigns.
          </p>
        </div>

        <form className='mt-16'>
          <div className='space-y-12'>
            <div className='border-b border-slate-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-slate-900'>Personal Information</h2>
              <p className='mt-1 text-sm leading-6 text-slate-600'>Use a permanent address where you can receive mail.</p>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-slate-900'>
                    First name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label htmlFor='last-name' className='block text-sm font-medium leading-6 text-slate-900'>
                    Last name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='sm:col-span-6'>
                  <label htmlFor='email' className='block text-sm font-medium leading-6 text-slate-900'>
                    Business Email
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-slate-900'>
                    Company
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label htmlFor='last-name' className='block text-sm font-medium leading-6 text-slate-900'>
                    Title
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='border-b border-slate-900/10 pb-12'>
              <div className='mt-10 space-y-10'>
                <fieldset>
                  <legend className='text-sm font-semibold leading-6 text-slate-900'>Industry</legend>
                  {/* <p className='mt-1 text-sm leading-6 text-slate-600'>These are delivered via SMS to your mobile phone.</p> */}
                  <div className='mt-6 space-y-2 grid grid-cols-1 gap-x-6 sm:grid-cols-6'>
                    {["General", "Government", "Healthcare", "Higher Education", "Legal", "Pharmaceuticals", "Technology and Software", "Tourism", "E-commerce", "Fashion Store"].map((item, idx) => (
                      <div key={idx} className='flex items-center gap-x-3 sm:col-span-2'>
                        <input id='push-everything' name='push-notifications' type='radio' className='h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-600' />
                        <label htmlFor='push-everything' className='font-light leading-6 text-slate-600'>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>

                <div className='mt-4'>
                  <label htmlFor='other-industry' className='block text-sm font-medium leading-6 text-slate-900'>
                    Other (Specify)
                  </label>
                  <div className='mt-2'>
                    <input
                      id='other-industry'
                      name='other-industry'
                      type='text'
                      className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className='text-sm font-semibold leading-6 text-slate-900'>Send information about</legend>
                  {/* <p className='mt-1 text-sm leading-6 text-slate-600'>These are delivered via SMS to your mobile phone.</p> */}
                  <div className='mt-6 space-y-2'>
                    {items.map((item, idx) => (
                      <div key={idx} className='flex items-center gap-x-3'>
                        <div className='flex h-6 items-center'>
                          <input id={`item-${idx}`} type='checkbox' className='h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600' />
                        </div>
                        <div className='leading-6'>
                          <label htmlFor={`item-${idx}`} className='font-light leading-6 text-slate-600'>
                            {item}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className='text-sm font-semibold leading-6 text-slate-900'>What type of Amcy OOH service do you want</legend>
                  {/* <p className='mt-1 text-sm leading-6 text-slate-600'>These are delivered via SMS to your mobile phone.</p> */}
                  <div className='mt-6 space-y-2'>
                    {["Mall Media Advertising", "Instore Media Advertising", "Street Digital Out-of-Home Advertising", "Residential and Commercial Building Advertising"].map((item, idx) => (
                      <div key={idx} className='flex items-center gap-x-3'>
                        <input id='push-everything' name='push-notifications' type='radio' className='h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-600' />
                        <label htmlFor='push-everything' className='font-light leading-6 text-slate-600'>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className='mt-4'>
                <label htmlFor='email' className='block text-sm font-medium leading-6 text-slate-900'>
                  What is your estimated budget for OOH
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='flex items-center gap-x-3 mt-4'>
                <div className='flex h-6 items-center'>
                  <input id='' type='checkbox' className='h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600' />
                </div>
                <div className='text-sm leading-6'>
                  <label htmlFor='' className='text-sm font-medium leading-6 text-slate-900'>
                    Are you interested in targeting specific events such as conferences, conventions, sporting events, music concerts/festivals/sale offers, etc.?
                  </label>
                </div>
              </div>

              <div className='flex items-center gap-x-3 mt-4'>
                <div className='flex h-6 items-center'>
                  <input id='' type='checkbox' className='h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600' />
                </div>
                <div className='text-sm leading-6'>
                  <label htmlFor='' className='text-sm font-semibold leading-6 text-slate-900'>
                    I agree to receive marketing and communications from Amcy OOH. I&apos;ve read and agreed to your privacy policy.
                  </label>
                </div>
              </div>
            </div>
          </div>

          <p className='mt-4 text-sm font-light tracking-tight text-slate-600'>
            Join the community of businesses benefiting from Amcy OOH! Submit the form and let us help you execute innovative Out of Home ad campaigns.
          </p>

          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <button type='button' className='text-sm font-semibold leading-6 text-slate-900'>
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const items = [
  "Industry-relevant Case Studies",
  "Pricing",
  "Campaign and Advertising Options",
  "Advertising Campaign Add-ons",
  "More Information about Amcy OOH",
  "Send me Everything",
  "Let's schedule a time to chat",
];
