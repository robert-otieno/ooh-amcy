"use client";

import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase";

import Swal from "sweetalert2";

export default function GetStarted() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    businessEmail: "",
    industry: "",
    informationRequested: [] as any,
    serviceType: [] as any,
    estimatedBudget: "",
    eventTargeting: false,
    marketingConsent: false,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    setIsSubmitting(true);
    e.preventDefault();
    try {
      await addDoc(collection(db, "ooh_requests"), { ...formData });
    } catch (error) {
      console.log(error);
    }
    setIsSubmitting(false);

    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      jobTitle: "",
      businessEmail: "",
      industry: "",
      informationRequested: [] as any,
      serviceType: [] as any,
      estimatedBudget: "",
      eventTargeting: false,
      marketingConsent: false,
    });

    Swal.fire({
      icon: "success",
      text: "Thank you for contacting AMCY OOH. Our Client Success Officer will be in touch with you shortly.",
      footer: '<a href="/">Go to Home!</a>',
    });
  };

  return (
    <>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img className='h-16 w-auto' src='/amcy_ooh_logo.jpeg' alt='' />
            </a>
          </div>
        </nav>
      </header>

      <div className='relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]'>
        <div className='container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl md:text-center'>
            <h2 className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'>Welcome to Amcy OOH</h2>
            <p className='mt-4 text-lg tracking-tight text-slate-700'>
              Amcy OOH helps startups, businesses and organisations create, develop and execute Out-of-Home AD campaigns on digital screens in stores, malls, restaurants, residential apartments,
              commercial buildings and digital street billboards in Kenya.
            </p>

            <p className='mt-4 font-light tracking-tight text-slate-600'>
              Fill in the form below to join the community of businesses benefiting from Amcy OOH Digital Out of Home Advertising Solutions.
            </p>
          </div>

          <form className='mt-16' onSubmit={onSubmit}>
            <div className='space-y-12'>
              <div className='border-b border-slate-900/10 pb-12'>
                <h2 className='text-base font-semibold leading-7 text-slate-900'>Personal Information</h2>
                <p className='mt-1 text-sm leading-6 text-slate-600'>Use a permanent address where you can receive mail.</p>

                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  <div className='sm:col-span-3'>
                    <label htmlFor='firstName' className='block text-sm font-medium leading-6 text-slate-900'>
                      First name
                    </label>
                    <div className='mt-2'>
                      <input
                        required
                        type='text'
                        name='firstName'
                        id='firstName'
                        value={formData.firstName}
                        onChange={(e) => handleChange(e)}
                        autoComplete='given-name'
                        className='block w-full rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-3'>
                    <label htmlFor='lastName' className='block text-sm font-medium leading-6 text-slate-900'>
                      Last name
                    </label>
                    <div className='mt-2'>
                      <input
                        required
                        type='text'
                        name='lastName'
                        id='lastName'
                        value={formData.lastName}
                        onChange={(e) => handleChange(e)}
                        autoComplete='family-name'
                        className='block w-full rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-6'>
                    <label htmlFor='businessEmail' className='block text-sm font-medium leading-6 text-slate-900'>
                      Business Email
                    </label>
                    <div className='mt-2'>
                      <input
                        required
                        id='businessEmail'
                        name='businessEmail'
                        type='email'
                        value={formData.businessEmail}
                        onChange={(e) => handleChange(e)}
                        autoComplete='email'
                        className='block w-full rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-3'>
                    <label htmlFor='company' className='block text-sm font-medium leading-6 text-slate-900'>
                      Company
                    </label>
                    <div className='mt-2'>
                      <input
                        required
                        type='text'
                        name='company'
                        id='company'
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) => handleChange(e)}
                        className='block w-full rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-3'>
                    <label htmlFor='jobTitle' className='block text-sm font-medium leading-6 text-slate-900'>
                      Title
                    </label>
                    <div className='mt-2'>
                      <input
                        required
                        type='text'
                        name='jobTitle'
                        id='jobTitle'
                        value={formData.jobTitle}
                        onChange={(e) => handleChange(e)}
                        className='block w-full rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
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
                          <input
                            id={`item-${item}`}
                            name='industry'
                            type='radio'
                            checked={formData.industry === item}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFormData({ ...formData, industry: item });
                              }
                            }}
                            className='h-4 w-4 border-slate-300 text-[#e10000] focus:ring-[#e10000]'
                          />
                          <label htmlFor={`item-${item}`} className='font-light leading-6 text-slate-600'>
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>

                  {/* <div className='mt-4'>
                    <label htmlFor='other-industry' className='block text-sm font-medium leading-6 text-slate-900'>
                      Other (Specify)
                    </label>
                    <div className='mt-2'>
                      <input
                        id='other-industry'
                        name='other-industry'
                        type='text'
                        className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div> */}

                  <fieldset>
                    <legend className='text-sm font-semibold leading-6 text-slate-900'>Send information about</legend>
                    {/* <p className='mt-1 text-sm leading-6 text-slate-600'>These are delivered via SMS to your mobile phone.</p> */}
                    <div className='mt-6 space-y-2'>
                      {[
                        "Industry-relevant Case Studies",
                        "Pricing",
                        "Campaign and Advertising Options",
                        "Advertising Campaign Add-ons",
                        "More Information about Amcy OOH",
                        "Send me Everything",
                        "Let's schedule a time to chat",
                      ].map((item, idx) => (
                        <div key={idx} className='flex items-center gap-x-3'>
                          <div className='flex h-6 items-center'>
                            <input
                              id={`item-${item}`}
                              name='informationRequested'
                              checked={formData.informationRequested?.includes(item)}
                              onChange={(e) => {
                                const isChecked = e.target.checked;
                                setFormData((prevData) => ({
                                  ...prevData,
                                  informationRequested: isChecked ? [...(prevData.informationRequested || []), item] : (prevData.informationRequested || []).filter((value: string) => value !== item),
                                }));
                              }}
                              type='checkbox'
                              className='h-4 w-4 rounded border-slate-300 text-[#e10000] focus:ring-[#e10000]'
                            />
                          </div>
                          <div className='leading-6'>
                            <label htmlFor={`item-${item}`} className='font-light leading-6 text-slate-600'>
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
                          <div className='flex h-6 items-center'>
                            <input
                              id={`item-${idx}`}
                              checked={formData.serviceType?.includes(item)}
                              onChange={(e) => {
                                const isChecked = e.target.checked;
                                setFormData((prevData) => ({
                                  ...prevData,
                                  serviceType: isChecked ? [...(prevData.serviceType || []), item] : (prevData.serviceType || []).filter((value: string) => value !== item),
                                }));
                              }}
                              type='checkbox'
                              className='h-4 w-4 rounded border-slate-300 text-[#e10000] focus:ring-[#e10000]'
                            />
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
                </div>

                <div className='mt-4'>
                  <label htmlFor='estimatedBudget' className='block text-sm font-medium leading-6 text-slate-900'>
                    What is your estimated budget for OOH
                  </label>
                  <div className='mt-2'>
                    <input
                      required
                      id='estimatedBudget'
                      name='estimatedBudget'
                      type='text'
                      value={formData.estimatedBudget}
                      onChange={(e) => handleChange(e)}
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='flex items-center gap-x-3 mt-4'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='eventTargeting'
                      name='eventTargeting'
                      type='checkbox'
                      checked={formData.eventTargeting}
                      onChange={(e) => setFormData({ ...formData, eventTargeting: e.target.checked })}
                      className='h-4 w-4 rounded border-slate-300 text-[#e10000] focus:ring-[#e10000]'
                    />
                  </div>
                  <div className='text-sm leading-6'>
                    <label htmlFor='eventTargeting' className='text-sm font-medium leading-6 text-slate-900'>
                      Are you interested in targeting specific events such as conferences, conventions, sporting events, music concerts/festivals/sale offers, etc.?
                    </label>
                  </div>
                </div>

                <div className='flex items-center gap-x-3 mt-4'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='marketingConsent'
                      name='marketingConsent'
                      type='checkbox'
                      checked={formData.marketingConsent}
                      onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                      className='h-4 w-4 rounded border-slate-300 text-[#e10000] focus:ring-[#e10000]'
                    />
                  </div>
                  <div className='text-sm leading-6'>
                    <label htmlFor='marketingConsent' className='text-sm font-semibold leading-6 text-slate-900'>
                      I agree to receive marketing and communications from Amcy OOH. I&apos;ve read and agreed to your privacy policy.
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 flex items-center justify-end gap-x-6'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='rounded-md bg-[#e10000] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#e10000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e10000]'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className=''>
        <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between'>
            <div className='flex gap-x-6'>
              <a className='group' aria-label='TaxPal on X' href='#'>
                <svg className='h-6 w-6 fill-slate-600 group-hover:fill-slate-700' aria-hidden='true' viewBox='0 0 24 24'>
                  <path d='M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z'></path>
                </svg>
              </a>
              <a className='group' aria-label='TaxPal on GitHub' href='#'>
                <svg className='h-6 w-6 fill-slate-600 group-hover:fill-slate-700' aria-hidden='true' viewBox='0 0 24 24'>
                  <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z'></path>
                </svg>
              </a>
            </div>
            <p className='mt-6 text-sm text-slate-600 sm:mt-0'>Copyright © 2024 Amcy Management. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
