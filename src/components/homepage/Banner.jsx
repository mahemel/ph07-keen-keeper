import React from "react";

const Banner = () => {
    return (
        <div className="text-center space-y-8">
            <div className="space-y-4">
                <h1 className="text-dark-black text-4xl lg:text-5xl font-bold">
                    Friends to keep close in your life
                </h1>
                <p className="text-sm lg:text-base text-light-gray">
                    Your personal shelf of meaningful connections. Browse, tend,
                    and nurture the <br className="hidden md:block" />{" "}
                    relationships that matter most.
                </p>
            </div>

            <button className="font-medium h-11 rounded px-4 text-base text-white bg-[#244D3F] cursor-pointer">
                + Add a Friend
            </button>
        </div>
    );
};

export default Banner;
