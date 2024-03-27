import { AiFillCalendar } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';

const ProjectTimelineCard = props => {
  const { details } = props;
  const { projectTitle, description, imageUrl, duration, projectUrl } = details;

  return (
    <div className='p-2'>
      <Image src={imageUrl} alt="Project" width={300} height={200} className='rounded' />
      <div className="mt-3">
        <h1 className='text-2xl font-bold mb-3'>{projectTitle}</h1>
        <div className="flex items-center mb-3">
          <AiFillCalendar />
          <p className="ml-2">{duration}</p>
        </div>
      </div>
      <p className="mb-3">{description}</p>
      <Link href={projectUrl} target='_blank' className="text-lg text-blue-600 content inline-block whitespace-nowrap">
        <span className='flex items-center py-3 px-1'>Visit <BiRightArrowAlt className="ml-1" /></span>
      </Link>
    </div>
  );
}

export default ProjectTimelineCard;
