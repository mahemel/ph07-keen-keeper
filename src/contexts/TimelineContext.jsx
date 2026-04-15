import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);

    const handleCheckInAction = (name, checkInType) => {
        const newTimelineItem = {
            id: timeline.length + 1,
            friendName: name,
            type: checkInType,
            time: new Date().toLocaleString(),
        };
        const message = `${checkInType} with ${name}`;

        const newTimeline = [newTimelineItem, ...timeline];

        setTimeline(newTimeline);

        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
        });
    };

    return (
        <TimelineContext.Provider value={{ timeline, handleCheckInAction }}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;
