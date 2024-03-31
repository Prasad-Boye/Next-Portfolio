import { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';
import ProjectTimelineCard from '../components/ProjectTimelineCard';
import CourseTimelineCard from '../components/CourseTimelineCard';
import { timelineItemsList } from '../data';
import HireMe from '@/components/HireMe';

const TimelineView = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container mx-auto px-4 mb-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold my-8">MY JOURNEY SO FAR</h1>
        {isClient && (
          <Chrono
          mode="VERTICAL_ALTERNATING" 
          items={timelineItemsList}
          enableLayoutSwitch={false}
          enableQuickJump={false}
          highlightCardsOnHover={true}
          disableToolbar={true}
          cardHeight={"100%"}
          theme={{
            primary: 'black',
            secondary: 'white',
            cardBgColor: 'white',
            titleColor: 'grey',
            titleColorActive: 'black',
          }}
          >
            {timelineItemsList.map(eachItem =>
              eachItem.categoryId === 'PROJECT' ? (
                <ProjectTimelineCard key={eachItem.id} details={eachItem} />
              ) : (
                <CourseTimelineCard key={eachItem.id} details={eachItem} />
              ),
            )}
          </Chrono>
        )}
      </div>
    </div>
  );
};

export default TimelineView;
