import React, { useContext } from "react";
import { TimelineContext } from "../../contexts/TimelineContext";

const Timeline = () => {
    const { timeline } = useContext(TimelineContext);
    console.log(timeline);
    return (
        <div>
            <h2>Timline page {timeline.length}</h2>
            {timeline.map((message) => (
                <p key={message.id}>
                    {message.type} with {message.friendName}
                </p>
            ))}
        </div>
    );
};

export default Timeline;
