import React from "react";

const TimelineCard = ({ message, getIcon }) => {
    return (
        <div className="card bg-base-100 shadow-sm" key={message.id}>
            <div className="card-body p-4 flex-row items-center gap-4">
                <img src={getIcon(message.type)} alt={message.type} />
                <div className="flex-1">
                    <p className="text-base text-light-gray">
                        <span className="text-xl text-dark-green">
                            {message.type}
                        </span>
                        <span> with {message.friendName}</span>
                    </p>
                    <p className="text-base text-light-gray">{message.time}</p>
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;
