import {AiFillClockCircle} from 'react-icons/ai'
// import './index.css'
import { CardBody, CardContainer, CardItem } from '../3DAnimations/3D-Card'

const CourseTimelineCard = props => {
  const {details} = props
  const {duration, courseTitle, description, tagsList} = details
  // return (
  //   <div className='p-2'>
  //     <div>
  //       <h1 className='font-bold text-2xl mb-3'>{courseTitle}</h1>
  //       <div className="flex items-center mb-3">
  //         <AiFillClockCircle />
  //         <p className="ml-2">{duration}</p>
  //       </div>
  //     </div>
  //     <p className='mb-3'>{description}</p>
  //     <ul className="list-disc pl-6">
  //       {tagsList.map(eachItem => (
  //         <li className="course-tag" key={eachItem.id}>
  //           {eachItem.name}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // )
  return (
    <CardContainer className="inter-var text-left">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        {courseTitle}
      </CardItem>
      <div className="flex flex-col justify-between items-center my-8 md:flex-row">
        <CardItem
          translateZ={20}
          translateX={40}
          as="button"
          className="flex items-center px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
        >
          <AiFillClockCircle className='mr-1'/>
          {duration}
        </CardItem>
      </div>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm  mt-2 text-justify dark:text-neutral-300"
      >
        {description}
      </CardItem>
      <CardItem 
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        <ul className="list-disc pl-6">
        {tagsList.map(eachItem => (
          <li key={eachItem.id}>
           {eachItem.name}
          </li>
          ))}
        </ul>
      </CardItem>
      <CardItem
        translateZ="100"
        rotateX={20}
        rotateZ={-10}
        className="w-full mt-4"
      >
      </CardItem>
    </CardBody>
  </CardContainer>
  )
}

export default CourseTimelineCard
