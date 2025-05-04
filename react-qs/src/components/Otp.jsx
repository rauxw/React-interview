import { useEffect, useRef, useState } from "react";

function Otp() {
  const OTP_LENGTH = 6;
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
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
    <div className="flex justify-center m-10 flex-col">
      <div className="flex">
        {" "}
        {otp.map((item, index) => {
          return (
            <input
              key={index}
              className="bg-amber-100 shadow m-5 text-center"
              maxLength={1}
              value={item}
              type="text"
              inputMode="numeric"
              autoFocus={index === 0}
              ref={(element) => {
                inputRefs.current[index] = element;
              }}
              onChange={(event) => handleOtpChange(index, event.target.value)}
              onKeyDown={(event) => handleKeyDown(index, event)}
            />
          );
        })}
      </div>

      <div className="text-center">
        {otp.some((digit) => digit === "") ? (
          <button
            disabled
            className=" hover:cursor-pointer hover:bg-yellow-300 bg-yellow-200 pr-3 pl-3 pt-2 pb-2 shadow-xl rounded"
          >
            Disabled
          </button>
        ) : (
          <button className=" hover:cursor-pointer hover:bg-yellow-300 bg-yellow-200 pr-3 pl-3 pt-2 pb-2 shadow-xl rounded">
            Verify
          </button>
        )}
      </div>
    </div>
  );
}

export default Otp;
