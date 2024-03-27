import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import { AboutMe, Calender, Developer, Engineer, Office } from '@/components/icons'
import Layout from '@/components/Layout'

const about = () => {
  return (
    <>
    <Head>
      <title>Prasad Boye | About Me</title>
      <meta name="description" content="Any Description" />
    </Head>
    <Layout className='flex flex-col lg:flex-row mb-0 items-center'>
      <div className='lg:w-2/3 md:mr-3'>
          <main>
            <AnimatedText text={'Adaptable Software Developer: Mastering Dynamic Challenges'}/>    
          </main>
          <p className='mt-8 mb-3 text-justify font-semibold text-base'>Hey there, I&apos;m <strong>Prasad Boye</strong>, a Mechanical Engineering graduate who found his passion in software development. With over <strong>2 years</strong> of hands-on experience in <strong>software development</strong> and <strong>3 years</strong> in <strong>design and development</strong>, I&apos;ve journeyed from designing rail simulators to coding robust software solutions.</p>
          <p className='mb-3 text-justify font-semibold'>Starting as a Design Engineer, I quickly rose to the role of Senior Design Engineer within one and a half year, showcasing not just technical prowess but also adaptability in challenging scenarios. However, I soon realized the immense potential of software development and made a deliberate shift in my career trajectory.</p>
          <p className='mb-3 text-justify font-semibold'>Transitioning into software development, I&apos;ve honed my skills while completing a comprehensive certification course in MERN stack development. Currently, I thrive as a software developer at MetricStream, where I contribute my expertise in tools like Next.js, React.js, Node.js, and more to develop cutting-edge GRC tools.</p>
          <p className='text-justify mb-3 font-semibold'>With a strong foundation in engineering principles complemented by practical software development experience, I&apos;m poised to tackle complex challenges and make meaningful contributions to any project or team. Let&apos;s connect and create something amazing together!</p>
      </div>
      <AboutMe className={'w-3/5 lg:w-3/5 ml-4 hidden md:block'}/>
    </Layout>
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
                <span className='ml-3 text-md font-semibold  text-gray-700'>Software Developer</span> 
              </span>
              <span className='flex mt-3'>
                <Calender/>
                <span className="ml-3 text-gray-500 text-sm">Sept 2022 - Present</span>
              </span>
            </div>
            <div className="md:flex-grow">
              <div className="mx-autop-6 rounded-md">
                {/* Frontend Development Focus */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 text-gray-700">Frontend Development Focus</h2>
                  <ul className="list-disc pl-6">
                    <li>Primarily responsible for <span className="font-bold">creating form templates</span> and <span className="font-bold">reports</span> using <span className="font-bold">Next.js</span>.</li>
                    <li>Utilized <span className="font-bold">React Hook Form</span> for efficient form handling.</li>
                    <li>Integrated <span className="font-bold">Redux</span> for state management to ensure data consistency across components.</li>
                  </ul>
                </div>

                {/* Contribution and Achievements */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 text-gray-700">Contribution and Achievements</h2>
                  <ul className="list-disc pl-6">
                    <li>Resolved <span className="font-bold">200+ issues</span> and developed <span className="font-bold">23 new features</span> within a <span className="font-bold">2-year</span> timeframe upon joining the organization.</li>
                    <li>Played a pivotal role in <span className="font-bold">optimizing code</span> and ensuring adherence to <span className="font-bold">Prettier ESLint</span> standards for consistent code styling.</li>
                  </ul>
                </div>

                {/* Quality Assurance */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 text-gray-700">Quality Assurance</h2>
                  <ul className="list-disc pl-6">
                    <li>Added <span className="font-bold">multiple unit test cases</span> using <span className="font-bold">Jest</span>, validating the reliability and stability of the codebase.</li>
                    <li>Actively participated in over <span className="font-bold">50 code reviews</span>, contributing to the delivery of <span className="font-bold">high-quality code</span> and fostering a collaborative development environment.</li>
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 text-gray-700">Technology Stack</h2>
                  <ul className="list-disc pl-6">
                    <li>Leveraged <span className="font-bold">React Hook Form</span> and <span className="font-bold">Redux</span> for streamlined form handling and state management.</li>
                    <li>Implemented <span className="font-bold">Jest</span> for comprehensive unit testing, ensuring robustness and reliability in the application.</li>
                  </ul>
                </div>

                {/* Issue Tracking and Management */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 text-gray-700">Issue Tracking and Management</h2>
                  <ul className="list-disc pl-6">
                    <li>Utilized <span className="font-bold">Jira</span> for tracking and triaging issues, ensuring efficient workflow management and resolution of issues within the team.</li>
                  </ul>
                </div>

                {/* Version Control */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 text-gray-700">Version Control</h2>
                  <ul className="list-disc pl-6">
                    <li>Employed <span className="font-bold">GitLab</span> for version control over the codebase, enabling collaborative development and tracking changes across the team.</li>
                  </ul>
                </div>

                {/* Continuous Integration/Continuous Deployment (CI/CD) */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 text-gray-700">Continuous Integration/Continuous Deployment (CI/CD)</h2>
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
                <span className='ml-3 text-md font-semibold  text-gray-700'>Design Engineer</span> 
              </span>
              <span className='flex mt-3'>
                <Calender/>
                <span className="ml-3 text-gray-500 text-sm">May 2019 - Feb 2022</span>
              </span>
            </div>
            <div className="md:flex-grow">
              <div className="mx-autop-6 rounded-md">
                {/* Expertise in SolidWorks */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 text-gray-700">Expertise in Design</h2>
                  <ul className="list-disc pl-6">
                    <li>Designed metro train motion simulators</li>
                    <li>Utilized SolidWorks for detailed design work</li>
                  </ul>
                </div>

                {/* Projects */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 text-gray-700">Projects</h2>
                  <ul className="list-disc pl-6">
                    <li>Designed brake, traction, and HVAC systems for toy train operating in Hubballi MG park</li>
                    <li>Designed train body, auxiliary electrical system, and Train control and monitoring systems for Lucknow metro train simulators</li>
                  </ul>
                </div>

                {/* Interaction with Vendors and Clients */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 text-gray-700">Interaction with Vendors and Clients</h2>
                  <ul className="list-disc pl-6">
                    <li>Liaised with vendors for procuring raw materials</li>
                    <li>Communicated with clients from diverse industries</li>
                  </ul>
                </div>

                {/* Bill of Materials (BOM) */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 text-gray-700">Bill of Materials (BOM)</h2>
                  <ul className="list-disc pl-6">
                    <li>Generated comprehensive BOMs for projects</li>
                    <li>Ensured accuracy and completeness of BOMs to facilitate procurement and production processes</li>
                  </ul>
                </div>

                {/* Production Oversight */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-2 text-gray-700">Production Oversight</h2>
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
    </>
  )
}

export default about
