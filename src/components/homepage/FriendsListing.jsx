import { use } from "react";
import FriendCard from "./FriendCard";
import FriendsInfo from "./FriendsInfo";

const FriendsListing = ({ friends }) => {
    const friendsData = use(friends);

    return (
        <div>
            <FriendsInfo friendsData={friendsData}></FriendsInfo>

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
