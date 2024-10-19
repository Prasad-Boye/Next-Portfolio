import { AiFillCalendar } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';

import { CardBody, CardContainer, CardItem } from '../3DAnimations/3D-Card'

const ProjectTimelineCard = props => {
  const { details } = props;
  const { projectTitle, description, imageUrl, duration, projectUrl } = details;

  // return (
  //   <div className='p-2'>
  //     <Image src={imageUrl} alt="Project" width={300} height={200} className='rounded' />
  //     <div className="mt-3">
  //       <h1 className='text-2xl font-bold mb-3'>{projectTitle}</h1>
  //       <div className="flex items-center mb-3">
  //         <AiFillCalendar />
  //         <p className="ml-2">{duration}</p>
  //       </div>
  //     </div>
  //     <p className="mb-3">{description}</p>
  //     <Link href={projectUrl} target='_blank' className="text-lg text-blue-600 content inline-block whitespace-nowrap">
  //       <span className='flex items-center py-3 px-1'>Visit <BiRightArrowAlt className="ml-1" /></span>
  //     </Link>
  //   </div>
  // );

  return (
    <CardContainer className="inter-var text-left mx-4">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {projectTitle}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col justify-between items-center mt-20 md:flex-row">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="flex items-center px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
          >
            <AiFillCalendar className='mr-1'/>
            {duration}
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
          >
            <Link href={projectUrl} target='_blank' className="text-lg text-blue-600 content inline-block whitespace-nowrap">
              <span className='flex items-center px-1'>Visit <BiRightArrowAlt className="ml-1" /></span>
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default ProjectTimelineCard;
