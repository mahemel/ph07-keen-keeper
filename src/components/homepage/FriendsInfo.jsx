const FriendsInfo = ({ friendsData, timeline }) => {
    const onTrackFriends = friendsData.filter(
        (friend) => friend.status === "On-Track",
    );
    const overdueFriends = friendsData.filter(
        (friend) => friend.status === "Overdue",
    );
    return (
        <div className="grid grid-cols-4 gap-6 py-10 mb-10 border-b border-[#E9E9E9]">
            <div className="card bg-base-100 text-center shadow-sm">
                <div className="card-body py-8">
                    <h2 className="text-[32px] font-semibold text-dark-green">
                        {friendsData.length}
                    </h2>
                    <p className="text-lg text-light-gray">Total Friends</p>
                </div>
            </div>
            <div className="card bg-base-100 text-center shadow-sm">
                <div className="card-body py-8">
                    <h2 className="text-[32px] font-semibold text-dark-green">
                        {onTrackFriends.length || 0}
                    </h2>
                    <p className="text-lg text-light-gray">On Track</p>
                </div>
            </div>
            <div className="card bg-base-100 text-center shadow-sm">
                <div className="card-body py-8">
                    <h2 className="text-[32px] font-semibold text-dark-green">
                        {overdueFriends.length || 0}
                    </h2>
                    <p className="text-lg text-light-gray">Need Attention</p>
                </div>
            </div>
            <div className="card bg-base-100 text-center shadow-sm">
                <div className="card-body py-8">
                    <h2 className="text-[32px] font-semibold text-dark-green">
                        {timeline.length || 0}
                    </h2>
                    <p className="text-lg text-light-gray">
                        Interactions This Month
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FriendsInfo;
