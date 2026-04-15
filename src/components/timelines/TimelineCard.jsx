import React from "react";

const TimelineCard = ({ message, getIcon }) => {
    return (
        <div className="card bg-base-100 shadow-sm" key={message.id}>
            <div className="card-body p-4 flex-row items-center gap-4">
                <img
                    className="w-7.5 md:w-10"
                    src={getIcon(message.type)}
                    alt={message.type}
                />
                <div className="flex-1 space-y-1">
                    <p className="text-sm lg:text-base text-light-gray">
                        <span className="text-lg lg:text-xl text-dark-green">
                            {message.type}
                        </span>
                        <span> with {message.friendName}</span>
                    </p>
                    <p className="text-sm lg:text-base text-light-gray">
                        {message.time}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;
