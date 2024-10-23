/** @format */
import MeetingCard from "./MeetingCard.js";
import meetings from "./meetingData.js";

const MeetingList = () => {
    return <div className="meetings_container">
        {meetings.map((meeting, index) => (
        <MeetingCard key={index} meeting={meeting}/>
        ))}
        
    </div>;
    
};

export default MeetingList;