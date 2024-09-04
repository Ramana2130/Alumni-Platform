import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import add from "../../assets/money1.svg";
import toast from "react-hot-toast";
import axios from "axios";

const AluminiDonationForm = () => {
  const [amount, setAmount] = useState("");
  const alumniId = localStorage.getItem("_id");
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const orderUrl = "/razorpay/createOrder";
      const { data } = await axios.post(orderUrl, { amount });

      const options = {
        key: import.meta.env.REACT_APP_RAZORPAY_KEY_ID, // Access the key from .env file
        amount: data.amount,
        currency: data.currency,
        name: "Alumni Donation",
        description: "Test Transaction",
        order_id: data.id,
        handler: async (response) => {
          try {
            const paymentId = response.razorpay_payment_id;
            const url = `/razorpay/verifyPayment`;
            const { data } = await axios.post(url, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: paymentId,
              razorpay_signature: response.razorpay_signature,
            });
            if (data.status === "success") {
              toast.success("Donation successful");
              navigate(`/aluminidashboard/${alumniId}`);
            } else {
              toast.error("Payment verification failed");
            }
          } catch (error) {
            console.error(error);
            toast.error("Payment verification error");
          }
        },
        theme: {
          color: "#2596be",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error(error);
      toast.error("Failed to initiate payment");
    }
  };

  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center p-6">
      <div className="flex mx-auto bg-[#1E1E1E] p-16 rounded-2xl justify-center items-center">
        <div className="relative w-[35%]">
          <div className="h-[700px] w-[500px] p-5">
            <h1 className="text-white font-semibold text-4xl w-[500px] uppercase">
              Let's Donate to University{" "}
              <span className="text-[#2596be]">Account!</span>
            </h1>
            <div className="mt-24">
              <img src={add} alt="Donation" className="h-[300px]" />
            </div>
          </div>
        </div>

        <div
          id="back-div"
          className="w-[65%] flex justify-center rounded-[26px]"
        >
          <div className="h-[700px] bg-[#111111] relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
            <div>
              <h1 className="text-white font-extrabold text-6xl uppercase">
                Donation Form
              </h1>

              <form className="space-y-4 w-[400px]">
                <div className="mt-10">
                  <label
                    htmlFor="amount"
                    className="text-sm font-semibold text-[#87888C]"
                  >
                    Donation Amount
                  </label>
                  <input
                    id="amount"
                    className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                  <button
                    className="bg-[#2596be] shadow-lg mt-2 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                    type="button"
                    onClick={handlePayment}
                  >
                    Proceed to Pay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AluminiDonationForm;
