import {AiFillClockCircle} from 'react-icons/ai'
// import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  const {duration, courseTitle, description, tagsList} = details
  return (
    <div className='p-2'>
      <div className="course-title">
        <h1 className='font-bold text-2xl mb-3'>{courseTitle}</h1>
        <div className="time flex items-center mb-3">
          <AiFillClockCircle />
          <p className="ml-2">{duration}</p>
        </div>
      </div>
      <p className='mb-3'>{description}</p>
      <ul className="list-disc pl-6">
        {tagsList.map(eachItem => (
          <li className="course-tag" key={eachItem.id}>
            {eachItem.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
