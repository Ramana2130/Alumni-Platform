import React from "react";

const PaymentComponent = ({ dietcardItems }) => {
  if (!dietcardItems) {
    // Handle the case where dietcardItems is not defined or is empty
    return <div>No items found.</div>;
  }

  // Rest of your component logic
  return (
    <div>
      {dietcardItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default PaymentComponent;
