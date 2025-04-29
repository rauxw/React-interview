import { useEffect, useRef, useState } from "react";

function Otpvalidation() {
  const OTP_LENGTH = 4;
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  console.log(otp);

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, OTP_LENGTH);
  }, []);

  const handleOtpChange = (getCurrentInputIndex, getCurrentInputValue) => {
    if (getCurrentInputValue.length > 1) {
      getCurrentInputValue = getCurrentInputValue.slice(-1);
    }
    const newOtp = [...otp];
    newOtp[getCurrentInputIndex] = getCurrentInputValue;
    setOtp(newOtp);
    if (getCurrentInputValue && getCurrentInputIndex < OTP_LENGTH - 1) {
      inputRefs.current[getCurrentInputIndex + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl">OTP Validation</h1>
      <div className="flex justify-center">
        {otp.map((digit, index) => {
          return (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(event) => handleOtpChange(index, event.target.value)}
              className="w-12 h-12 text-center text-lg m-3 bg-gray-100"
              autoFocus={index === 0}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              onKeyDown={(event) => handleKeyDown(index, event)}
            />
          );
        })}
      </div>
      <button
        disabled={otp.some((digit) => digit === "")}
        className="bg-gray-100 text-black p-3 w-full text-[24px] border rounded-xl hover:bg-gray-600 hover:text-white"
      >
        Verify
      </button>
    </div>
  );
}

export default Otpvalidation;
