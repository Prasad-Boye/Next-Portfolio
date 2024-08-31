// import React from 'react'
// import Head from 'next/head'
// import AnimatedText from '@/components/AnimatedText'
// import Lottie from 'react-lottie';
// import aboutMe from '../../public/images/Animations/About.json'
// import { Calender, Developer, Engineer, Office } from '@/components/icons'
// // import coder from '../../public/images/profile/coder.png'
// import Layout from '@/components/Layout'
// import Image from 'next/image'

// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: aboutMe,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice"
//   }
// };

// const about = () => {
//   return (
//     <>
    // <Head>
    //   <title>Prasad Boye | About Me</title>
    //   <meta name="description" content="Any Description" />
    // </Head>
    // <Layout className='flex flex-col lg:flex-col xl:flex-row mb-0 items-center'>
    //   <div className='md:mr-3'>
    //       <main>
    //         <AnimatedText text={'Adaptable Software Developer: Mastering Dynamic Challenges'}/>    
    //       </main>
    //       <p className='mt-8 mb-3 text-justify font-semibold text-base'>Hey there, I&apos;m <strong>Prasad Boye</strong>, a space enthusiast who found his passion in software development. With over <strong>2 years</strong> of hands-on experience in <strong>software development</strong> and <strong>3 years</strong> in <strong>design and development</strong>, I&apos;ve journeyed from designing rail simulators to coding robust software solutions.</p>
    //       <p className='mb-3 text-justify font-semibold'>Starting as a Design Engineer, I quickly rose to the role of Senior Design Engineer within one and a half year, showcasing not just technical prowess but also adaptability in challenging scenarios. However, I soon realized the immense potential of software development and made a deliberate shift in my career trajectory.</p>
    //       <p className='mb-3 text-justify font-semibold'>Transitioning into software development, I&apos;ve honed my skills while completing a comprehensive certification course in MERN stack development. Currently, I thrive as a software developer at MetricStream, where I contribute my expertise in tools like Next.js, React.js, Node.js, and more to develop cutting-edge GRC tools.</p>
    //       <p className='text-justify mb-3 font-semibold'>With a strong foundation in engineering principles complemented by practical software development experience, I&apos;m poised to tackle complex challenges and make meaningful contributions to any project or team. Let&apos;s connect and create something amazing together!</p>
    //   </div>
    //   {/* <Image width={600} height={350} alt='coder' src={coder}/> */}
    //   <Lottie 
    //       options={defaultOptions}
    //     />
    // </Layout>
    /*
    <Layout >
      <h1 className='text-4xl font-bold pt-16'>Professional Experience:</h1>
      <div className="container w-full h-full inline-block z-0 bg-ligh pt-0 my-12">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap shadow-lg bg-white px-8 rounded-md">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className='flex'>
              <Office />
              <span className="ml-2.5 font-bold text-xl title-font">MetricStream</span>
            </span>
              <span className='flex mt-3'>
                <Developer/>
                <span className='ml-3 text-md font-semibold  '>Software Developer</span> 
              </span>
              <span className='flex mt-3'>
                <Calender/>
                <span className="ml-3 text-sm">Sept 2022 - Present</span>
              </span>
            </div>
            <div className="md:flex-grow">
              <div className="mx-autop-6 rounded-md">
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 ">Frontend Development Focus</h2>
                  <ul className="list-disc pl-6">
                    <li>Primarily responsible for <span className="font-bold">creating form templates</span> and <span className="font-bold">reports</span> using <span className="font-bold">Next.js</span>.</li>
                    <li>Utilized <span className="font-bold">React Hook Form</span> for efficient form handling.</li>
                    <li>Integrated <span className="font-bold">Redux</span> for state management to ensure data consistency across components.</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 ">Contribution and Achievements</h2>
                  <ul className="list-disc pl-6">
                    <li>Resolved <span className="font-bold">200+ issues</span> and developed <span className="font-bold">23 new features</span> within a <span className="font-bold">2-year</span> timeframe upon joining the organization.</li>
                    <li>Played a pivotal role in <span className="font-bold">optimizing code</span> and ensuring adherence to <span className="font-bold">Prettier ESLint</span> standards for consistent code styling.</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 ">Quality Assurance</h2>
                  <ul className="list-disc pl-6">
                    <li>Added <span className="font-bold">multiple unit test cases</span> using <span className="font-bold">Jest</span>, validating the reliability and stability of the codebase.</li>
                    <li>Actively participated in over <span className="font-bold">50 code reviews</span>, contributing to the delivery of <span className="font-bold">high-quality code</span> and fostering a collaborative development environment.</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 ">Technology Stack</h2>
                  <ul className="list-disc pl-6">
                    <li>Leveraged <span className="font-bold">React Hook Form</span> and <span className="font-bold">Redux</span> for streamlined form handling and state management.</li>
                    <li>Implemented <span className="font-bold">Jest</span> for comprehensive unit testing, ensuring robustness and reliability in the application.</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 ">Issue Tracking and Management</h2>
                  <ul className="list-disc pl-6">
                    <li>Utilized <span className="font-bold">Jira</span> for tracking and triaging issues, ensuring efficient workflow management and resolution of issues within the team.</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 ">Version Control</h2>
                  <ul className="list-disc pl-6">
                    <li>Employed <span className="font-bold">GitLab</span> for version control over the codebase, enabling collaborative development and tracking changes across the team.</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 ">Continuous Integration/Continuous Deployment (CI/CD)</h2>
                  <ul className="list-disc pl-6">
                    <li>Closely monitored <span className="font-bold">CI/CD pipelines</span> to ensure smooth integration and deployment processes, facilitating rapid and reliable delivery of code changes.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap shadow-lg mt-8 mb-20 bg-white px-8 rounded-md">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className='flex'>
              <Office />
              <span className="ml-2.5 font-bold text-xl title-font">CC Engineers</span>
            </span>
              <span className='flex mt-3'>
                <Engineer/>
                <span className='ml-3 text-md font-semibold  '>Design Engineer</span> 
              </span>
              <span className='flex mt-3'>
                <Calender/>
                <span className="ml-3 text-sm">May 2019 - Feb 2022</span>
              </span>
            </div>
            <div className="md:flex-grow">
              <div className="mx-autop-6 rounded-md">
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 ">Expertise in Design</h2>
                  <ul className="list-disc pl-6">
                    <li>Designed metro train motion simulators</li>
                    <li>Utilized SolidWorks for detailed design work</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 ">Projects</h2>
                  <ul className="list-disc pl-6">
                    <li>Designed brake, traction, and HVAC systems for toy train operating in Hubballi MG park</li>
                    <li>Designed train body, auxiliary electrical system, and Train control and monitoring systems for Lucknow metro train simulators</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 ">Interaction with Vendors and Clients</h2>
                  <ul className="list-disc pl-6">
                    <li>Liaised with vendors for procuring raw materials</li>
                    <li>Communicated with clients from diverse industries</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 ">Bill of Materials (BOM)</h2>
                  <ul className="list-disc pl-6">
                    <li>Generated comprehensive BOMs for projects</li>
                    <li>Ensured accuracy and completeness of BOMs to facilitate procurement and production processes</li>
                  </ul>
                </div>


                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 ">Production Oversight</h2>
                  <ul className="list-disc pl-6">
                    <li>Monitored production activities to ensure adherence to design specifications</li>
                    <li>Collaborated with production teams to address any design or manufacturing issues</li>
                    <li>Ensured quality control measures were implemented throughout the production process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
          className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    */
    // w-full overflow-hidden relative h-full rounded-2xl py-6 px-8 font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900
//     </>
//   )
// }

// export default about


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Lottie from 'react-lottie';
import aboutMe from '../../public/images/Animations/About.json'
import { Calender, Developer, Engineer, Office } from '@/components/icons'
// import coder from '../../public/images/profile/coder.png'
import Layout from '@/components/Layout'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: aboutMe,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function TabsDemo() {
  const tabs = [
    {
      title: "Development Experience",
      value: "software",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl py-6 md:px-8 px-0 shadow-lg font-bold text-white bg-gradient-to-br from-gray-700 to-black ">
          <div className="py-8 flex flex-col md:flex-nowrap rounded-md">
            <div className="flex  md:flex-row md:items-center flex-col justify-between w-full md:px-0 px-8">
              <span className='flex'>
                <div className='rounded-full bg-light p-2'>
                  <Office />
                </div>
                <span className="ml-2.5 mt-2 font-bold text-md title-font ">MetricStream</span>
              </span>
              <span className='flex mt-3 md:mt-0'>
                <div className='rounded-full bg-light p-2'>
                  <Developer/>
                </div>
                <span className='ml-3 mt-2 text-md font-semibold'>Software Developer</span> 
              </span>
              <span className='flex mt-3 md:mt-0'>
                <div className='rounded-full bg-light p-2'>
                  <Calender/>
                </div>
                <span className="ml-3 mt-2 text-md font-semibold">Sept 2022 - Present</span>
              </span>
            </div>
            <div className="md:flex-grow font-light">
              <div className="mx-auto px-6 rounded-md">
                <div className="my-6">
                  <h2 className="text-lg font-bold mb-2">Frontend Development Focus</h2>
                  <ul className="list-disc pl-6">
                    <li>Primarily responsible for <span className="font-bold">creating form templates</span> and <span className="font-bold">reports</span> using <span className="font-bold">Next.js</span>.</li>
                    <li>Utilized <span className="font-bold">React Hook Form</span> for efficient form handling.</li>
                    <li>Integrated <span className="font-bold">Redux</span> for state management to ensure data consistency across components.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-2">Contribution and Achievements</h2>
                  <ul className="list-disc pl-6">
                    <li>Resolved <span className="font-bold">200+ issues</span> and developed <span className="font-bold">23 new features</span> within a <span className="font-bold">2-year</span> timeframe upon joining the organization.</li>
                    <li>Played a pivotal role in <span className="font-bold">optimizing code</span> and ensuring adherence to <span className="font-bold">Prettier ESLint</span> standards for consistent code styling.</li>
                    <li>Closely monitored <span className="font-bold">CI/CD pipelines</span> to ensure smooth integration and deployment processes, facilitating rapid and reliable delivery of code changes.</li>
                    <li>Employed <span className="font-bold">GitLab</span> for version control over the codebase, enabling collaborative development and tracking changes across the team.</li>
                    <li>Utilized <span className="font-bold">Jira</span> for tracking and triaging issues, ensuring efficient workflow management and resolution of issues within the team.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-2">Quality Assurance</h2>
                  <ul className="list-disc pl-6">
                    <li>Added <span className="font-bold">multiple unit test cases</span> using <span className="font-bold">Jest</span>, validating the reliability and stability of the codebase.</li>
                    <li>Actively participated in over <span className="font-bold">50 code reviews</span>, contributing to the delivery of <span className="font-bold">high-quality code</span> and fostering a collaborative development environment.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-2">Technology Stack</h2>
                  <ul className="list-disc pl-6">
                    <li>Leveraged <span className="font-bold">React Hook Form</span> and <span className="font-bold">Redux</span> for streamlined form handling and state management.</li>
                    <li>Implemented <span className="font-bold">Jest</span> for comprehensive unit testing, ensuring robustness and reliability in the application.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Design Experience",
      value: "design",
      content: (
        <div className="w-full overflow-hidden relative h-full  rounded-2xl py-6 md:px-8 px-0  shadow-lg font-bold text-white bg-gradient-to-br from-gray-700 to-black">
          <div className="py-8 flex flex-col md:flex-nowrap rounded-md">
            <div className="flex  md:flex-row md:items-center flex-col justify-between w-full md:px-0 px-8">
              <span className='flex'>
                <div className='rounded-full bg-light p-2'>
                  <Office/>
                </div>
                <span className="ml-2.5 mt-2 font-bold text-md title-font">CC Engineers</span>
              </span>
              <span className='flex mt-3 md:mt-0'>
                <div className='rounded-full bg-light p-2'>
                  <Engineer/>
                </div>
                <span className='ml-3 mt-2 text-md font-semibold'>Design Engineer</span> 
              </span>
              <span className='flex mt-3 md:mt-0'>
                <div className='rounded-full bg-light p-2'>
                  <Calender/>
                </div>
                <span className="ml-3 mt-2 text-md font-semibold">May 2019 - Feb 2022</span>
              </span>
            </div>
            <div className="md:flex-grow font-light">
              <div className="mx-auto px-6 rounded-md">
                <div className="my-6">
                  <h2 className="text-lg font-bold mb-2 ">Expertise in Design</h2>
                  <ul className="list-disc pl-6">
                    <li>Designed advanced motion simulators for metro trains, which accurately replicate the dynamics and behavior of real-world train movements.</li>
                    <li>Utilized SolidWorks for detailed design workCreated highly detailed 3D models of mechanical components and assemblies using SolidWorks.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-2 ">Projects</h2>
                  <ul className="list-disc pl-6">
                    <li>Designed brake, traction, and HVAC systems for toy train operating in Hubballi MG park.</li>
                    <li>Designed train body, auxiliary electrical system, and Train control and monitoring systems for Lucknow metro train simulators.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-2 ">Interaction with Vendors and Clients</h2>
                  <ul className="list-disc pl-6">
                    <li>Researched and identified potential vendors and suppliers for raw materials, ensuring they meet the required quality standards, reliability, and cost-effectiveness.</li>
                    <li>Conducted thorough assessments to understand the unique needs, requirements, and challenges of clients across various industries.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-2 ">Bill of Materials (BOM)</h2>
                  <ul className="list-disc pl-6">
                    <li>Created detailed Bills of Materials (BOMs) that included all components, sub-assemblies, raw materials, and consumables required for project completion.</li>
                    <li>Ensured accuracy and completeness of BOMs to facilitate procurement and production processes</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-2 ">Production Oversight</h2>
                  <ul className="list-disc pl-6">
                    <li>Monitored production activities to ensure adherence to design specifications</li>
                    <li>Collaborated with production teams to address any design or manufacturing issues</li>
                    <li>Ensured quality control measures were implemented throughout the production process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Prasad Boye | About Me</title>
        <meta name="description" content="Any Description" />
      </Head>
      <Layout className='flex flex-col lg:flex-col xl:flex-row mb-0 items-center'>
        <div className='md:mr-3'>
            <main>
              <AnimatedText text={'Adaptable Software Developer: Mastering Dynamic Challenges'}/>    
            </main>
            <p className='mt-8 mb-3 text-justify font-semibold text-base'>Hey there, I&apos;m <strong>Prasad Boye</strong>, a space enthusiast who found his passion in software development. With over <strong>2 years</strong> of hands-on experience in <strong>software development</strong> and <strong>3 years</strong> in <strong>design and development</strong>, I&apos;ve journeyed from designing rail simulators to coding robust software solutions.</p>
            <p className='mb-3 text-justify font-semibold'>Starting as a Design Engineer, I quickly rose to the role of Senior Design Engineer within one and a half year, showcasing not just technical prowess but also adaptability in challenging scenarios. However, I soon realized the immense potential of software development and made a deliberate shift in my career trajectory.</p>
            <p className='mb-3 text-justify font-semibold'>Transitioning into software development, I&apos;ve honed my skills while completing a comprehensive certification course in MERN stack development. Currently, I thrive as a software developer at MetricStream, where I contribute my expertise in tools like Next.js, React.js, Node.js, and more to develop cutting-edge GRC tools.</p>
            <p className='text-justify mb-3 font-semibold'>With a strong foundation in engineering principles complemented by practical software development experience, I&apos;m poised to tackle complex challenges and make meaningful contributions to any project or team. Let&apos;s connect and create something amazing together!</p>
        </div>
        {/* <Image width={600} height={350} alt='coder' src={coder}/> */}
        <Lottie 
            options={defaultOptions}
          />
      </Layout>
      <Layout className="h-[125rem] xsm:h-[125rem] sm:h-[115rem] md:h-[80rem] lg:h-[70rem] xl:h-[60rem] 2xl:h-[58rem] [perspective:1000px] relative flex flex-col w-full items-start justify-start my-40">
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-8 '>Professional Experience:</h1>
        <Tabs tabs={tabs} />
      </Layout>
    </>
  );
}


const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  console.log(active, 'ssssss');

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative h-auto max-w-full w-full mb-4",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => {
          console.log(tab,'ssssss1')
          const textColor = tab.value === active.value ? 'text-white' : 'text-black'
          return <button
          key={tab.title}
          onClick={() => {
            moveSelectedTabToTop(idx);
          }}
          className={cn("relative px-4 py-2 rounded-full", tabClassName)}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {active.value === tab.value && (
            <motion.div
              layoutId="clickedbutton"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              style={{ backgroundColor: "black" }}
              className={cn(
                "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                activeTabClassName
              )}
            />
          )}

          <span className = {`font-bold relative block ${textColor}`} >
            {tab.title}
          </span>
        </button>

        })}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        className={cn("mt-16", contentClassName)}
      />
    </>
  );
};

const FadeInDiv = ({
  className,
  tabs,
  active,
}) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: idx * -80,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 60, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

export default TabsDemo