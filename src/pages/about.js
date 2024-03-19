import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import { AboutMe } from '@/components/icons'


const about = () => {
  return (
    <>
    <Head>
      <title>Prasad Boye | About Me</title>
      <meta name="description" content="Any Description" />
    </Head>
    <div className='flex justify-center items-center'>
      <div  className='w-1/2 ml-3'>
          <main>
            <AnimatedText className='text-5xl' text={'Adaptable Software Developer: Mastering Varied Challenges'}/>    
          </main>
          <p className='mt-8 mb-2 text-justify font-semibold text-base'>Hey there, I&apos;m <strong>Prasad Boye</strong>, a Mechanical Engineering graduate who found his passion in software development. With one year and eight months of hands-on experience, I&apos;ve journeyed from designing rail simulators to coding robust software solutions.</p>
          <p className='mb-2 text-justify font-semibold'>Starting as a Design Engineer, I quickly rose to the role of Senior Design Engineer within a year, showcasing not just technical prowess but also adaptability in challenging scenarios. However, I soon realized the immense potential of software development and made a deliberate shift in my career trajectory.</p>
          <p className='mb-2 text-justify font-semibold'>Transitioning into software development, I&apos;ve honed my skills while completing a comprehensive certification course in MERN stack development. Currently, I thrive as a software developer at MetricStream, where I contribute my expertise in tools like Next.js, React.js, Node.js, and more to develop cutting-edge GRC tools.</p>
          <p className='text-justify mb-2 font-semibold'>With a strong foundation in engineering principles complemented by practical software development experience, I&apos;m poised to tackle complex challenges and make meaningful contributions to any project or team. Let&apos;s connect and create something amazing together!</p>
        </div>
        <AboutMe className={'ml-4'}/>
    </div>
    <section className="body-font overflow-hidden px-32 py-2">
      <h1 className='text-4xl font-bold pt-16'>Professional Experience:</h1>
      <div className="container w-full h-full inline-block z-0 bg-ligh pt-0 my-12">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap shadow-lg bg-white px-8 rounded-md">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">MetricStream</span>
              <span>Software Developer</span>
              <span className="mt-1 text-gray-500 text-sm">Sept 2022 - Present</span>
            </div>
            <div className="md:flex-grow">
              <div className="mx-autop-6 rounded-md">
                {/* Frontend Development Focus */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-2">Frontend Development Focus</h2>
                  <ul className="list-disc pl-6">
                    <li>Primarily responsible for <span className="font-bold">creating form templates</span> and <span className="font-bold">reports</span> using <span className="font-bold">Next.js</span>.</li>
                    <li>Utilized <span className="font-bold">React Hook Form</span> for efficient form handling.</li>
                    <li>Integrated <span className="font-bold">Redux</span> for state management to ensure data consistency across components.</li>
                  </ul>
                </div>

                {/* Contribution and Achievements */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-2">Contribution and Achievements</h2>
                  <ul className="list-disc pl-6">
                    <li>Resolved <span className="font-bold">200+ issues</span> and developed <span className="font-bold">23 new features</span> within a <span className="font-bold">2-year</span> timeframe upon joining the organization.</li>
                    <li>Played a pivotal role in <span className="font-bold">optimizing code</span> and ensuring adherence to <span className="font-bold">Prettier ESLint</span> standards for consistent code styling.</li>
                  </ul>
                </div>

                {/* Quality Assurance */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-2">Quality Assurance</h2>
                  <ul className="list-disc pl-6">
                    <li>Added <span className="font-bold">multiple unit test cases</span> using <span className="font-bold">Jest</span>, validating the reliability and stability of the codebase.</li>
                    <li>Actively participated in over <span className="font-bold">50 code reviews</span>, contributing to the delivery of <span className="font-bold">high-quality code</span> and fostering a collaborative development environment.</li>
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-2">Technology Stack</h2>
                  <ul className="list-disc pl-6">
                    <li>Leveraged <span className="font-bold">React Hook Form</span> and <span className="font-bold">Redux</span> for streamlined form handling and state management.</li>
                    <li>Implemented <span className="font-bold">Jest</span> for comprehensive unit testing, ensuring robustness and reliability in the application.</li>
                  </ul>
                </div>

                {/* Issue Tracking and Management */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-2">Issue Tracking and Management</h2>
                  <p>Utilized <span className="font-bold">Jira</span> for tracking and triaging issues, ensuring efficient workflow management and resolution of issues within the team.</p>
                </div>

                {/* Version Control */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-2">Version Control</h2>
                  <p>Employed <span className="font-bold">GitLab</span> for version control over the codebase, enabling collaborative development and tracking changes across the team.</p>
                </div>

                {/* Continuous Integration/Continuous Deployment (CI/CD) */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-2">Continuous Integration/Continuous Deployment (CI/CD)</h2>
                  <p>Closely monitored <span className="font-bold">CI/CD pipelines</span> to ensure smooth integration and deployment processes, facilitating rapid and reliable delivery of code changes.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">CATEGORY</span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
              <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">CATEGORY</span>
              <span className="text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
              <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>

  )
}

export default about