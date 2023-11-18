import React, { useState } from 'react';
import { LinkIcon, DiffAddedIcon, FlameIcon, FeedIssueClosedIcon, AlertIcon, VideoIcon, HomeIcon, ThumbsupIcon, DeviceCameraVideoIcon, HistoryIcon, ClockIcon, DeviceCameraIcon } from '@primer/octicons-react';
import { ActionList, Avatar } from '@primer/react';
import '../../public/Searchbar.css';

const SideBar = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
    <ActionList className='sidebar' >
    <ActionList.Item >
      <ActionList.LeadingVisual>
        <HomeIcon size={18} />
      </ActionList.LeadingVisual>
      Home
    </ActionList.Item>
   
    <ActionList.Item >
      <ActionList.LeadingVisual>
        <DeviceCameraVideoIcon size={18} />
      </ActionList.LeadingVisual>
      Shorts
    </ActionList.Item>
    <ActionList.Item>
      <ActionList.LeadingVisual>
        <FeedIssueClosedIcon size={16} />
      </ActionList.LeadingVisual>
      Subscriptions
    </ActionList.Item>

 <ActionList.Divider/>

    <ActionList.Item >
      <ActionList.LeadingVisual>
        <VideoIcon size={18} />
      </ActionList.LeadingVisual>
      Your channel
    </ActionList.Item>


     <ActionList.Item >
      <ActionList.LeadingVisual>
       <HistoryIcon size={18} />
      </ActionList.LeadingVisual>
      History
    </ActionList.Item>


     <ActionList.Item >
      <ActionList.LeadingVisual>
        <VideoIcon size={16} />
      </ActionList.LeadingVisual>
      Your videos
    </ActionList.Item>

 <ActionList.Divider/>

     <ActionList.Item >
      <ActionList.LeadingVisual>
        <ClockIcon size={16} />
      </ActionList.LeadingVisual>
      Watch later
    </ActionList.Item>

    <ActionList.Item >
      <ActionList.LeadingVisual>
        <DeviceCameraIcon size={16} />
      </ActionList.LeadingVisual>
      Your clips
    </ActionList.Item>

    <ActionList.Item >
      <ActionList.LeadingVisual>
        <ThumbsupIcon size={18} />
      </ActionList.LeadingVisual>
      Liked videos
    </ActionList.Item>

 <ActionList.Divider/>
    <ActionList.Item >
      <ActionList.LeadingVisual>
        <DiffAddedIcon size={16} />
      </ActionList.LeadingVisual>
      New
    </ActionList.Item>


    <ActionList.Item >
      <ActionList.LeadingVisual>
        <FlameIcon size={16} />
      </ActionList.LeadingVisual>
      Your clips
    </ActionList.Item>



  </ActionList>
  </div>

    );
}

export default SideBar