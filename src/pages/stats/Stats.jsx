import React, { useContext } from "react";
import { TimelineContext } from "../../contexts/TimelineContext";
import StatChart from "../../components/statistics/StatChart";

const Stats = () => {
    const { timeline } = useContext(TimelineContext);

    return (
        <div className="space-y-4 lg:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-black">
                Friendship Analytics
            </h2>

            <div className="card bg-base-100 shadow-sm p-6 space-y-5">
                <p className="text-base lg:text-xl font-medium text-dark-green">
                    By Interaction Type
                </p>
                {timeline.length > 0 ? (
                    <StatChart timeline={timeline}></StatChart>
                ) : (
                    <p className="text-sm lg:text-base text-center text-light-gray">
                        No Interactions logged yet. Start connecting with your
                        friends to see insights here!
                    </p>
                )}
            </div>
        </div>
    );
};

export default Stats;
