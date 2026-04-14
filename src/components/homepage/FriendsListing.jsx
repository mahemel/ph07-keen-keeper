import { use } from "react";
import FriendCard from "./FriendCard";

const FriendsListing = ({ friends }) => {
    const friendsData = use(friends);

    return (
        <div>
            <h2 className="text-2xl font-semibold text-dark-black mb-4">
                Your Friends
            </h2>

            <div className="grid grid-cols-4 gap-6">
                {friendsData.map((friend) => (
                    <FriendCard key={friend.id} friend={friend}></FriendCard>
                ))}
            </div>
        </div>
    );
};

export default FriendsListing;
