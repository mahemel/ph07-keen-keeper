const FriendsInfo = () => {
    return (
        <div className="grid grid-cols-4 gap-6 py-10 mb-10 border-b border-[#E9E9E9]">
            <div className="card bg-base-100 text-center shadow-sm">
                <div className="card-body py-8">
                    <h2 className="text-[32px] font-semibold text-dark-green">
                        10
                    </h2>
                    <p className="text-lg text-light-gray">Total Friends</p>
                </div>
            </div>
            <div className="card bg-base-100 text-center shadow-sm">
                <div className="card-body py-8">
                    <h2 className="text-[32px] font-semibold text-dark-green">
                        {/* {onTrackFriends.length || 0} */}3
                    </h2>
                    <p className="text-lg text-light-gray">On Track</p>
                </div>
            </div>
            <div className="card bg-base-100 text-center shadow-sm">
                <div className="card-body py-8">
                    <h2 className="text-[32px] font-semibold text-dark-green">
                        {/* {almostDueFriends.length || 0} */}4
                    </h2>
                    <p className="text-lg text-light-gray">Need Attention</p>
                </div>
            </div>
            <div className="card bg-base-100 text-center shadow-sm">
                <div className="card-body py-8">
                    <h2 className="text-[32px] font-semibold text-dark-green">
                        12
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
