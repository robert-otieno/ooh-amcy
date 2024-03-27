import { Checkbox } from "@/components/ui/checkbox";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import Swal from "sweetalert2";

const GetStartedForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    businessEmail: "",
    phoneNumber: "",
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
      await addDoc(collection(db, "ooh_requests"), { ...formData, createdAt: serverTimestamp() });
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
      phoneNumber: "",
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
                  className='block outline-none w-full rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
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
                  className='block outline-none w-full rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
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
                  className='block outline-none w-full rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='phoneNumber' className='block text-sm font-medium leading-6 text-slate-900'>
                Phone Number
              </label>
              <div className='mt-2'>
                <input
                  required
                  id='phoneNumber'
                  name='phoneNumber'
                  type='number'
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange(e)}
                  autoComplete='tel'
                  className='block outline-none w-full rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
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
                  autoComplete='organization'
                  value={formData.company}
                  onChange={(e) => handleChange(e)}
                  className='block outline-none w-full rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
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
                  className='block outline-none w-full rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
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
                    <label htmlFor={`item-${item}`} className='font-normal leading-6 text-slate-600'>
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
                      <label htmlFor={`item-${item}`} className='font-normal leading-6 text-slate-600'>
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
                      <label htmlFor={`item-${idx}`} className='font-normal leading-6 text-slate-600'>
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
                className='block outline-none w-full rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#e10000] sm:text-sm sm:leading-6'
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
  );
};

export default GetStartedForm;
