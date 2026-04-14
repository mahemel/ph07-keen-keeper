import React, { Suspense } from "react";
import Banner from "../../components/homepage/Banner";
import FriendsInfo from "../../components/homepage/FriendsInfo";
import FriendsListing from "../../components/homepage/FriendsListing";
import { HashLoader } from "react-spinners";

const Homepage = () => {
    const fetchFriends = async () => {
        const res = await fetch("/friends.json");
        const friendJson = await res.json();
        return friendJson;
    };

    const friends = fetchFriends();
    return (
        <>
            <Banner></Banner>

            <Suspense
                fallback={
                    <div className="flex justify-center py-5">
                        <HashLoader />
                    </div>
                }
            >
                <FriendsListing friends={friends}></FriendsListing>
            </Suspense>
        </>
    );
};

export default Homepage;
