"use client";

import Header from "./ui/header";
import Footer from "./ui/footer";
import GetStartedForm from "./ui/get-started-form";

export default function GetStarted() {
  return (
    <>
      <Header />

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

          <GetStartedForm />
        </div>
      </div>

      <Footer />
    </>
  );
}
