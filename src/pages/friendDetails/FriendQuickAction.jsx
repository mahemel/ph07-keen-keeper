import React, { useContext } from "react";
import {
    PiChatDotsBold,
    PiPhoneCallBold,
    PiVideoCameraBold,
} from "react-icons/pi";

import { TimelineContext } from "../../contexts/TimelineContext";

const FriendQuickAction = ({ name }) => {
    const { handleCheckInAction } = useContext(TimelineContext);

    return (
        <>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
                <button
                    onClick={() => handleCheckInAction(name, "Call")}
                    className="h-18 lg:h-24 btn bg-[#F8FAFC] border border-[#E9E9E9] text-base lg:text-lg text-dark-black flex flex-col gap-2 items-center"
                >
                    <span className="text-2xl lg:text-[32px]">
                        <PiPhoneCallBold></PiPhoneCallBold>
                    </span>
                    Call
                </button>
                <button
                    onClick={() => handleCheckInAction(name, "Text")}
                    className="h-18 lg:h-24 btn bg-[#F8FAFC] border border-[#E9E9E9] text-base lg:text-lg text-dark-black flex flex-col gap-2 items-center"
                >
                    <span className="text-2xl lg:text-[32px]">
                        <PiChatDotsBold></PiChatDotsBold>
                    </span>
                    Text
                </button>
                <button
                    onClick={() => handleCheckInAction(name, "Video")}
                    className="h-18 lg:h-24 btn bg-[#F8FAFC] border border-[#E9E9E9] text-base lg:text-lg text-dark-black flex flex-col gap-2 items-center"
                >
                    <span className="text-2xl lg:text-[32px]">
                        <PiVideoCameraBold></PiVideoCameraBold>
                    </span>
                    Video
                </button>
            </div>
        </>
    );
};

export default FriendQuickAction;
