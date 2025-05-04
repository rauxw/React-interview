import { useState } from "react";

function Formvalidation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Name is required!";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must be atleast 2 Characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required!";
    } else if (
      !form.email.includes("@") ||
      !form.email.includes(".") ||
      form.email.startsWith("@") ||
      form.email.endsWith("@")
    ) {
      newErrors.email = "Email must be valid";
    }
    const age = parseInt(form.age, 10);
    if (!form.age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(age)) {
      newErrors.age = "Age must be number";
    } else if (age < 1 || age > 150) {
      newErrors.age = "Age must between 1 and 150";
    }
    return newErrors;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[25px] font-light">Validate Form</h1>
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <div className="flex items-center m-3">
          <label className="mr-3">Name: </label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleOnChange}
            className="w-full px-3 py-2 border border-gray-800 rounded text-sm text-center"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-sm text-red-700 mt-2">{errors.name}</p>
          )}
        </div>
        <div className="flex items-center m-3">
          <label className="mr-3">Email: </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleOnChange}
            className="w-full ml-1 px-3 py-2  border-gray-800  rounded text-sm border text-center"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-sm text-red-700 mt-2">{errors.email}</p>
          )}
        </div>
        <div className="flex items-center m-3">
          <label className="mr-3">Age: </label>
          <input
            name="age"
            type="text"
            value={form.age}
            onChange={handleOnChange}
            className="w-full ml-3 px-3 py-2 border-gray-800 rounded text-sm border text-center"
            placeholder="Enter your age"
          />
          {errors.age && (
            <p className="text-sm text-red-700 mt-2">{errors.age}</p>
          )}
        </div>
        <div className="flex justify-center items-center">
          <button
            className="m-3 p-3 bg-amber-200 shadow-xl rounded hover:bg-amber-400 hover:cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {submitted === true && <div>Form submitted Successfully</div>}
    </div>
  );
}

export default Formvalidation;
