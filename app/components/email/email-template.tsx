import { Body, Button, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text, Tailwind } from "@react-email/components";
export const EmailTemplate = ({ businessEmail, lastName, company, estimatedBudget, eventTargeting, firstName, industry, jobTitle, marketingConsent }: onBoardingProps) => {
  return (
    <Html>
      <Head />

      {/* <Preview>{`New Amcy OOH Client Inquiry - ${firstName}`}</Preview> */}

      <Tailwind>
        <Body className='bg-white my-auto mx-auto font-sans'>
          <Container className='my-10 mx-auto p-5 w-[465px]'>
            <Section className='mt-8'>
              <Img src={"/amcy_ooh_logo.jpeg"} width='80' height='80' alt='Logo Example' className='my-0 mx-auto' />
            </Section>

            {/* <Heading className='text-2xl font-normal text-center p-0 my-8 mx-0'>New Amcy OOH Client Inquiry - {firstName}</Heading> */}

            <Text className='text-sm'>We have a new potential client who has shown interest in Amcy OOH services by filling out our online form!</Text>

            <Heading className='text-xl font-normal p-0 my-8 mx-0'>Client Details:</Heading>

            {/* <Text className='text-sm'>
              Name: {firstName} {lastName}
              Company: {company}
              Title: {jobTitle}
              Email: {businessEmail}
              Industry: {industry}
            </Text> */}

            <Section className='text-center mt-[32px] mb-[32px]'>
              {/* <Button pX={20} pY={12} className='bg-[#00A3FF] rounded text-white text-xs font-semibold no-underline text-center' href={`${baseUrl}/get-started`}>
                Get Started
              </Button> */}
            </Section>

            {/* <Text className='text-sm'>
              Cheers,
              <br />
              The {company} Team
            </Text> */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

interface onBoardingProps {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  businessEmail: string;
  industry: string;
  //     informationRequested: array,
  //     serviceType: Array,
  estimatedBudget: string;
  eventTargeting: boolean;
  marketingConsent: boolean;
}
