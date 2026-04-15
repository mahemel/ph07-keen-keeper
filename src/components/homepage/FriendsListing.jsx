import { use, useContext } from "react";
import FriendCard from "./FriendCard";
import FriendsInfo from "./FriendsInfo";
import { TimelineContext } from "../../contexts/TimelineContext";

const FriendsListing = ({ friends }) => {
    const friendsData = use(friends);
    const { timeline } = useContext(TimelineContext);

    return (
        <div>
            <FriendsInfo
                friendsData={friendsData}
                timeline={timeline}
            ></FriendsInfo>

            <div>
                <h2 className="text-2xl font-semibold text-dark-black mb-4">
                    Your Friends
                </h2>

                <div className="grid grid-cols-4 gap-6">
                    {friendsData.map((friend) => (
                        <FriendCard
                            key={friend.id}
                            friend={friend}
                        ></FriendCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FriendsListing;
