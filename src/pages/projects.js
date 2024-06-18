import ProjectTimelineCard from '../components/ProjectTimelineCard';
import CourseTimelineCard from '../components/CourseTimelineCard';
import { timelineItemsList } from '../data';

const TimelineView = () => {
  const courses = timelineItemsList.filter(item => item.categoryId === 'COURSE');
  const projects = timelineItemsList.filter(item => item.categoryId === 'PROJECT');

  return (
    <div className="container mx-auto mb-20 max-w-screen-2xl">
      <h1 className="text-left ml-8 text-4xl font-bold my-8">PROJECTS</h1>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2">
        {projects.map(eachItem =>
          <ProjectTimelineCard key={eachItem.id} details={eachItem} />
        )}
      </div>
      <div className="text-center">
        <h1 className="text-left ml-8 text-4xl font-bold my-8">COURSES</h1>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2">
          {courses.map(eachItem =>
            <CourseTimelineCard key={eachItem.id} details={eachItem} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineView;
