/* eslint-disable react/no-string-refs */
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import dp from '../../public/images/profile/final2.png'
import manju from '../../public/images/profile/Manju.png'
import baitali from '../../public/images/profile/Baitali.jpeg'
import safeer from '../../public/images/profile/Safeer.jpeg'
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow, MailTo } from '@/components/icons';
import HireMe from '@/components/HireMe';
import ContactMe from '@/components/ContactMe';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import spaceMan from '../../public/images/svgs/space_boy.svg'


export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Head>
        <title>Prasad Boye Portfolio</title>
        <meta name="description" content="Designed  and developed by Prasad Boye." />
      </Head>
      <main className='flex items-center text-black bg-light w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='w-full flex flex-col lg:flex-row'>
            <div className='flex items-center lg:justify-between justify-center w-full '>
              <Image src={dp} alt='Prasad Boye' className='w-21 h-auto' />
            </div>
            <div className='lg:w-3/4 w-full text-justify pt-20'>
              <AnimatedText className='text-justify' text={'Turning Vision Into Reality With Code And Design'}/>
              <p className="my-4 text-base font-medium text-justify">
              Hello, I&apos;m <strong>Prasad Boye</strong>, an accomplished full-stack developer committed to transforming concepts into inventive web applications. Take a look at my recent projects and articles, which demonstrate my proficiency in React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link href="./dummy.pdf" target="_blank" 
                className="flex items-center bg-dark text-light p-2.5 px-6 
                rounded-lg text-lg font-semibold border-2 border-solid border-transparent
                hover:bg-light hover:text-dark hover:border-dark"
                download={true}>
                  Resume <LinkArrow className={"w-6 ml-2"}/>
                  </Link>
                <>
                  <button onClick={handleOpen}
                  className="flex items-center bg-dark text-light p-2.5 px-6 
                  rounded-lg text-lg font-semibold border-2 border-solid border-transparent
                  hover:bg-light hover:text-dark hover:border-dark ml-3
                  fill-white hover:fill-dark"
                  >
                    Contact <MailTo className={"w-6 ml-2 mt-1"}/>
                  </button>
                  <Modal
                    sx={{ display: 'flex',
                    alignItems: 'center',
                    left:'12.5%',
                    justifyContent: 'center',
                    width: '80%',
                    '@media (min-width: 1024px)': {
                      width: '60%',
                    },
                  }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                      <ContactMe handleClose={handleClose}/>
                  </Modal>
                </>
              </div>                
            </div>
          </div>
        </Layout>
        <HireMe/>
      </main>

      <Layout>
      <h1 className='text-5xl font-bold items-center justify-center text-center'>Testimonials</h1>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div class="h-full text-center">
                    <Image width={300} height={200} alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 shadow-lg" src={safeer} />
                    <p class="leading-relaxed">As a staff engineer working closely with Prasad Boye, I can confidently attest to his exceptional skills and dedication as a software developer.He consistently demonstrates a keen ability to tackle complex problems with innovative solutions, contributing significantly to our team&apos;s success. His collaborative nature and commitment to excellence make them an invaluable asset to any project.
                    </p>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Muhammed Safeer</h2>
                    <p class="text-gray-500">Staff Engineer</p>
                  </div>
                </div>
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div class="h-full text-center">
                    <Image width={300} height={200} alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 shadow-lg" src={manju} />
                    <p class="leading-relaxed">As the team lead, I&apos;ve had the pleasure of collaborating closely with Prasad Boye. His coding proficiency and commitment to quality are unmatched. Prasad&apos;s ability to tackle complex challenges head-on and deliver stellar results has been instrumental in our team&apos;s success. With Prasad&apos;s expertise on board, we&apos;re not just meeting expectations – we&apos;re exceeding them.</p>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Manjunatha N</h2>
                    <p class="text-gray-500">Team Lead</p>
                  </div>
                </div>
                <div class="lg:w-1/3 lg:mb-0 p-4">
                  <div class="h-full text-center">
                    <Image width={300} height={200} alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 shadow-lg" src={baitali} />
                    <p class="leading-relaxed">Working alongside Prasad Boye, I&apos;ve witnessed his exceptional coding expertise and problem-solving skills. His dedication to quality and willingness to collaborate make him a valuable asset to our team. Prasad&apos;s positive attitude and eagerness to learn also make him a pleasure to work with, further solidifying his reputation as an outstanding software developer and a good team player.</p>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Baitali Nath</h2>
                    <p class="text-gray-500">Senior Member of Technical Staff</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
    </>
  )
}
