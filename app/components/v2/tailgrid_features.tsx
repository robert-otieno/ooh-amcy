import React from "react";

const features = [
  {
    title: "Targeted Advertising",
    details: "Develop and execute advertising campaigns based on specific target demographics, location, and time of the day to deliver relevant and personalized messages.",
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8 text-white'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
        />
      </svg>
    ),
  },
  {
    title: "High Brand Exposure",
    details: "Amplify your message and build brand awareness by activating our 1000+ place-based screens in office buildings, malls, restaurants and residential apartments.",
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8 text-white'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z'
        />
      </svg>
    ),
  },
  {
    title: "Fast Activations",
    details: "With AMCY OOH, you can upload, schedule and launch campaigns in minutes.",
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8 text-white'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
        />
      </svg>
    ),
  },
  {
    title: "Increased Flexibility",
    details:
      "Update your messaging in real-time based on various factors such as weather conditions, traffic information, or upcoming events – to ensure that the messaging is always relevant and timely.",
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8 text-white'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941' />
      </svg>
    ),
  },
  {
    title: "Evidence-Based Measurement",
    details: "Monitor key performance indicators (KPIs) and use data-driven insights to optimize campaign performance in real time.",
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8 text-white'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z'
        />
      </svg>
    ),
  },
  {
    title: "Extra Support Services",
    details: "We have a team of on-demand designers, copywriters, editors, marketing and advertising experts to enable you to organize, create and run successful AD campaigns.",
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8 text-white'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z'
        />
      </svg>
    ),
  },
];

const TailGridFeature = () => {
  return (
    <section className='pb-12 pt-20 bg-white lg:pb-[90px] lg:pt-[120px]'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-12 max-w-[510px] text-center lg:mb-20'>
              <span className='mb-2 block text-lg font-semibold text-primary'>Karibu</span>
              <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]'>Welcome to AMCY OOH</h2>
              <p className='text-base text-body-color dark:text-dark-6'>Join the community of Businesses benefiting from AMCY OOH</p>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap'>
          {features.map((feature) => (
            <ServiceCard key={feature.title} title={feature.title} details={feature.details} icon={feature.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TailGridFeature;

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  details: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, details }) => {
  return (
    <>
      <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
        <div className='mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10'>
          <div className='mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary'>{icon}</div>
          <h4 className='mb-[14px] text-2xl font-semibold text-dark dark:text-white'>{title}</h4>
          <p className='text-body-color dark:text-dark-6'>{details}</p>
        </div>
      </div>
    </>
  );
};
