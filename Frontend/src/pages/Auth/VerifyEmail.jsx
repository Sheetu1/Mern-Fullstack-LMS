import { useState } from "react";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    // Auto focus next box
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    // 🔗 fetch("/api/verify-otp", { method: "POST", body: JSON.stringify({ otp: finalOtp }) });
    console.log("OTP submitted:", finalOtp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">Verify Your Email</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between space-x-2 mb-6">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                name="otp"
                maxLength="1"
                value={otp[index]}
                onChange={(e) => handleChange(e.target, index)}
                className="w-12 h-12 text-center border border-gray-300 rounded-lg dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
