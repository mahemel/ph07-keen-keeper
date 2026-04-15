import React from "react";
import { useLoaderData, useParams } from "react-router";
import InnerError from "../../components/shared/InnerError";
import { TbBellZ } from "react-icons/tb";
import { PiArchiveBold } from "react-icons/pi";
import { FiTrash2 } from "react-icons/fi";
import FriendQuickAction from "./FriendQuickAction";

const FriendDetails = () => {
    const friends = useLoaderData();
    const { id } = useParams();

    const friend = friends.find((friendData) => friendData.id === parseInt(id));
    if (!friend) {
        return <InnerError></InnerError>;
    }

    const {
        name,
        picture,
        status,
        tags,
        bio,
        days_since_contact,
        email,
        goal,
        next_due_date,
    } = friend;
    const formattedDate = new Date(next_due_date).toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
    });

    let statusStyle = "bg-[#244D3F]";

    if (status === "Overdue") {
        statusStyle = "bg-[#EF4444]";
    } else if (status === "Almost Due") {
        statusStyle = "bg-[#EFAD44]";
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-6">
            <div className="space-y-4">
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body items-center gap-3">
                        <img
                            src={picture}
                            alt="User Image"
                            className="rounded-full w-20"
                        />
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="text-xl font-semibold text-dark-black">
                                {name}
                            </h2>
                            <div
                                className={`badge rounded-full ${statusStyle}  text-white font-medium text-[12px] border-0 px-2`}
                            >
                                {status}
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                {tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="badge rounded-full bg-[#CBFADB] text-dark-green font-medium uppercase text-[12px] border-0 px-2"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm xl:text-base italic text-light-gray text-center font-medium">
                                "{bio}"
                            </p>
                            <p className="text-[12px] lg:text-sm text-light-gray text-center">
                                Preferred: {email}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <button className="w-full h-13 btn bg-base-100 border border-[#E9E9E9] text-base">
                        <span className="text-xl">
                            <TbBellZ></TbBellZ>
                        </span>
                        Snooze 2 Weeks
                    </button>
                    <button className="w-full h-13 btn bg-base-100 border border-[#E9E9E9] text-base">
                        <span className="text-xl">
                            <PiArchiveBold></PiArchiveBold>
                        </span>
                        Archive
                    </button>
                    <button className="w-full h-13 btn bg-base-100 border border-[#E9E9E9] text-base text-[#EF4444]">
                        <span className="text-xl">
                            <FiTrash2></FiTrash2>
                        </span>
                        Delete
                    </button>
                </div>
            </div>

            <div className="md:col-span-2 space-y-5 xl:space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5 xl:gap-6">
                    <div className="card bg-base-100 text-center shadow-sm">
                        <div className="card-body py-7 px-2">
                            <h2 className="text-lg lg:text-[23px] xl:text-[26px] 2xl:text-[30px] font-semibold text-dark-green">
                                {days_since_contact}
                            </h2>
                            <p className="text-sm lg:text-lg text-light-gray">
                                Days Since Contact
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 text-center shadow-sm">
                        <div className="card-body py-7 px-2">
                            <h2 className="text-lg lg:text-[23px] xl:text-[26px] 2xl:text-[30px] font-semibold text-dark-green">
                                {goal}
                            </h2>
                            <p className="text-sm lg:text-lg text-light-gray">
                                Goal (Days)
                            </p>
                        </div>
                    </div>

                    <div className="col-span-2 md:col-span-1 card bg-base-100 text-center shadow-sm">
                        <div className="card-body py-7 px-2">
                            <h2 className="text-lg lg:text-[23px] xl:text-[26px] 2xl:text-[30px] font-semibold text-dark-green">
                                {formattedDate}
                            </h2>
                            <p className="text-sm lg:text-lg text-light-gray">
                                Next Due
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body px-4 lg:px-6 py-4 md:py-7">
                        <h2 className="text-lg lg:text-xl font-semibold text-dark-green flex items-center justify-between">
                            Relationship Goal
                            <button className="h-9 btn bg-[#F8FAFC] border border-[#E9E9E9] text-sm text-dark-black">
                                Edit
                            </button>
                        </h2>
                        <p className="text-base lg:text-lg text-light-gray">
                            Connect every{" "}
                            <span className="font-bold text-dark-black">
                                {goal} days
                            </span>
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body px-4 lg:px-6 py-4 md:py-7">
                        <h2 className="text-xl font-semibold text-dark-green">
                            Quick Check-In
                        </h2>
                        <FriendQuickAction name={name}></FriendQuickAction>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;
