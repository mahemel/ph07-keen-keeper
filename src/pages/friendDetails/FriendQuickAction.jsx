import React from "react";
import {
    PiChatDotsBold,
    PiPhoneCallBold,
    PiVideoCameraBold,
} from "react-icons/pi";
import { toast } from "react-toastify";

const handleCheckInAction = (name, checkInType) => {
    const message = `${checkInType} with ${name}`;
    toast.success(message);
};

const FriendQuickAction = ({ name }) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                <button
                    onClick={() => handleCheckInAction(name, "Call")}
                    className="h-24 btn bg-[#F8FAFC] border border-[##E9E9E9] text-lg text-dark-black flex flex-col gap-2 items-center"
                >
                    <span className="text-[32px]">
                        <PiPhoneCallBold></PiPhoneCallBold>
                    </span>
                    Call
                </button>
                <button
                    onClick={() => handleCheckInAction(name, "Text")}
                    className="h-24 btn bg-[#F8FAFC] border border-[##E9E9E9] text-lg text-dark-black flex flex-col gap-2 items-center"
                >
                    <span className="text-[32px]">
                        <PiChatDotsBold></PiChatDotsBold>
                    </span>
                    Text
                </button>
                <button
                    onClick={() => handleCheckInAction(name, "Video")}
                    className="h-24 btn bg-[#F8FAFC] border border-[##E9E9E9] text-lg text-dark-black flex flex-col gap-2 items-center"
                >
                    <span className="text-[32px]">
                        <PiVideoCameraBold></PiVideoCameraBold>
                    </span>
                    Video
                </button>
            </div>
        </>
    );
};

export default FriendQuickAction;
