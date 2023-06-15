import React from "react";

const MemberList = () => {
  return (
    <div className="w-full flex justify-center space-x-8 bg-fcPrimary6 py-8">
      <div>
        <div className=" place-items-center grid">
          <p className="text-fcPrimary font-InterRegular text-3xl font-semibold">
            200+
          </p>
          <p className="text-fcPrimary font-InterRegular font-medium text-lg">
            Total Number of Members
          </p>
        </div>
      </div>
      <div className=" border-r-2 border-fcPrimary"></div>
      <div>
        <div className=" place-items-center grid">
          <p className="text-fcPrimary font-InterRegular text-3xl font-semibold">
            20+
          </p>
          <p className="text-fcPrimary font-InterRegular font-medium text-lg">
            Total Number of Mentors
          </p>
        </div>
      </div>
      <div className=" border-r-2 border-fcPrimary"></div>
      <div>
        <div className=" place-items-center grid">
          <p className="text-fcPrimary font-InterRegular text-3xl font-semibold">
            100%
          </p>
          <p className="text-fcPrimary font-InterRegular font-medium text-lg">
            Total Remote
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
