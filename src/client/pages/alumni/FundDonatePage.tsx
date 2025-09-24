import FundDonate from "@/components/alumni/fund/FundDonate";
import React from "react";

const FundDonatePage = () => {
  return (
    <div>
      <FundDonate
        onBack={() => {
          /* handle back action here */
        }}
      />
    </div>
  );
};

export default FundDonatePage;
