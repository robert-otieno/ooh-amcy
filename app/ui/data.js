import { randomUUID } from "crypto";

export const about_us = {
  tag: "about us",
  title: "Welcome to AMCY OOH",
  subtitle: "Karibu",
  description: "AMCY OOH provides innovative, reliable and timely OOH solutions to brands ensuring that your brand is placed on the right platform, at the right time, and with the right content.",
  solutions: [
    {
      id: randomUUID(),
      title: "Targeted Advertising",
      description: "Amcy OOH helps you develop and execute advertising campaigns based on specific target demographics, location, and time of the day to deliver relevant and personalized messages.",
    },
    {
      id: randomUUID(),
      title: "High Brand Exposure",
      description:
        "With Amcy OOH you can amplify your message and build brand awareness by activating our 1000+ place-based screens in office/commercial buildings, malls, restaurants, residential apartments and digital interactive billboards.",
    },
    {
      id: randomUUID(),
      title: "Fast and Flexible Activations",
      description:
        "With Amcy OOH Ad Suite, you can upload, schedule and launch campaigns in minutes. You can also update your messaging in real-time based on various factors such as weather conditions, traffic information, or upcoming events ensuring your messaging is always relevant and timely.",
    },
    {
      id: randomUUID(),
      title: "Evidence-Based Measurement",
      description:
        "We regularly collect, analyze, monitor, and report on data, insights and key performance indicators (KPIs) to optimize campaign performance. We use data-driven insights to inform message positioning and campaign performance. ",
    },
    {
      id: randomUUID(),
      title: "Extra Support Services",
      description:
        "Our team of on-demand designers, copywriters, editors, marketing and advertising experts from Amcy VA are always available to help you to organize, create and run successful AD campaigns.",
    },
  ],
};

export const services = {
  tag: "services",
  title: "Streamline your Out-of-Home Advertising",
  description:
    "We believe innovation, technology and entrepreneurship can transform the world and make it a better place. Therefore, we are committed to helping business brands create unique customer experiences and deliver value to their people, Every day.",
  articles: [
    {
      id: randomUUID(),
      title: "Advertising Campaigns",
      description: "We develop and execute advertising campaigns that leverage our network digital OOH screens to deliver targeted messages to consumers in high-traffic locations.",
    },
    {
      id: randomUUID(),
      title: "Data Collection and Analysis",
      description:
        "We identify, gather and analyze valuable insights about audience demographics, behavior, and engagement, to aid in making informed decisions on advertising efforts across our media locations. ",
    },
    {
      id: randomUUID(),
      title: "Campaign Monitoring",
      description: "We monitor KPIs and use data-driven insights to optimize campaign performance in real-time to maximize return on investment (ROI) and deliver measurable results for our clients.",
    },
  ],
};

export const quote = {
  tag: "quote",
  content:
    "Whether you’re just starting out, launching a new product/service, or looking to increase, build and scale your brand, you can trust Amcy OOH to support you and your business conveniently reach your target audience, where they live, dine, shop, work and commute, Every day.",
  author: "Mongare, Anthony",
};

export const media_locations = {
  tag: "media locations",
  title: "Our network of media locations for your brand",
  locations: [
    {
      id: randomUUID(),
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-8 h-8'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
          />
        </svg>
      ),
      text: "Mall Media",
    },
    {
      id: randomUUID(),
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-8 h-8'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z'
          />
        </svg>
      ),
      text: "Instore Media",
    },
    {
      id: randomUUID(),
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-8 h-8'>
          <path strokeLinecap='round' strokeLinejoin='round' d='m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z' />
        </svg>
      ),
      text: "Street Digital Media",
    },
    {
      id: randomUUID(),
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-8 h-8'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z'
          />
        </svg>
      ),
      text: "Commercial Buildings",
    },
    {
      id: randomUUID(),
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-8 h-8'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819'
          />
        </svg>
      ),
      text: "Residential Apartments",
    },
    {
      id: randomUUID(),
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-8 h-8'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z' />
        </svg>
      ),
      text: "Digital Marketing",
    },
  ],
};

export const hero = {
  tag: "hero",
  title: "Innovative Brand Awareness and Engagement Solutions",
  content:
    "Amcy OOH is a Digital Out-of-Home Advertising Service in Nairobi, Kenya. We provide the tools, innovation and technology necessary to help businesses create, develop and execute Digital Out-of-Home Ad campaigns for their brands.",
};
