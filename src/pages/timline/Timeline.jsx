import React, { useContext, useState } from "react";
import { TimelineContext } from "../../contexts/TimelineContext";
import Call from "./../../assets/call.png";
import Text from "./../../assets/text.png";
import Video from "./../../assets/video.png";
import TimelineCard from "../../components/timelines/TimelineCard";

const Timeline = () => {
    const { timeline } = useContext(TimelineContext);

    const getIcon = (type) => {
        if (type === "Call") return Call;
        if (type === "Text") return Text;
        if (type === "Video") return Video;
    };

    const [isFilterActive, setFilterActive] = useState(false);
    const [filteredTimeline, setFilteredTimeline] = useState({});

    const handleTimelineFilter = (event) => {
        const filterType = event.target.value;
        setFilterActive(true);

        const filteredData = timeline.filter(
            (message) => message.type === filterType,
        );
        setFilteredTimeline(filteredData);
    };

    return (
        <div className="space-y-4 lg:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-black">
                Timeline
            </h2>
            {timeline.length > 0 && (
                <select
                    onChange={handleTimelineFilter}
                    defaultValue="Filter timeline"
                    className="select h-13 text-light-gray bg-[#f8fafc] border-[#E9E9E9]"
                >
                    <option disabled={true}>Filter timeline</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
            )}
            {!isFilterActive ? (
                <div className="space-y-4 lg:space-y-6">
                    {timeline.length ? (
                        timeline.map((message) => (
                            <TimelineCard
                                key={message.id}
                                message={message}
                                getIcon={getIcon}
                            ></TimelineCard>
                        ))
                    ) : (
                        <div className="card bg-base-100 shadow-sm px-5 py-20">
                            <p className="text-lg lg:text-2xl text-center font-medium text-light-gray">
                                No check-in activities found.
                            </p>
                        </div>
                    )}
                </div>
            ) : filteredTimeline.length ? (
                filteredTimeline.map((message) => (
                    <TimelineCard
                        key={message.id}
                        message={message}
                        getIcon={getIcon}
                    ></TimelineCard>
                ))
            ) : (
                <div className="card bg-base-100 shadow-sm px-5 py-20">
                    <p className="text-lg lg:text-2xl text-center font-medium text-light-gray">
                        No data found.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Timeline;
