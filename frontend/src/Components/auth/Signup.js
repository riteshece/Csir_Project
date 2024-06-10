import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(values); // Call Validation function
    setErrors(validationErrors); // Set validation errors
    if (values.name !== "" && values.email !== "" && values.password !== "") {
      try {
        const response = await axios.post(
          "http://localhost:8081/signup",
          values
        );
        console.log("API ", response);
        if (response?.data?.message) {
          navigate("/");
        }
      } catch (error) {
        console.log("Error ", error);
      }
    }
  };
  // JSX for signup form
  return (
    // <div className="d-flex justify-content-center align-items-center bg-secondary bg-gradient vh-100">
    //     <div className="bg-white p-3 rounded w-25">
    //         <h2>Sign-Up</h2>
    //         <form action="" onSubmit={handleSubmit}>
    //             <div className="mb-3">
    //                 <label htmlFor="name"><strong>Name</strong></label>
    //                 <input id="name" type="text" placeholder="Enter Your Name" name='name'
    //                 onChange={handleInput} className="form-control rounded-0"/>
    //                 {errors.name && <span className="text-danger">{errors.name}</span>}

    //             </div>
    //             <div className="mb-3">
    //                 <label htmlFor="email"><strong>Email</strong></label>
    //                 <input id="email" type="email" placeholder="Enter Your E-mail" name='email'
    //                 onChange={handleInput} className="form-control rounded-0"/>
    //                 {errors.email && <span className="text-danger">{errors.email}</span>}

    //             </div>
    //             <div className="mb-3">
    //                 <label htmlFor="password"><strong>Password</strong></label>
    //                 <input id="password" type="password" placeholder="Enter your password here" name='password'
    //                 onChange={handleInput} className="form-control rounded-0"/>
    //                 {errors.password && <span className="text-danger">{errors.password}</span>}
    //             </div>
    //             <button onClick={handleSubmit} type='submit' className="btn btn-success w-100 rounded-0 ">Sign up</button>
    //             <p>You agree to our terms and policies</p>
    //             <Link to="/" className="btn btn-default border w-100 rounded-0 text-decoration-none">Login</Link>
    //         </form>
    //     </div>
    // </div>
    <div className="flex justify-center items-center bg-secondary bg-gradient h-screen ">
      <div className="bg-red-300 p-16  w-[33%] border-slate-200 rounded-lg border-2">
        <h2 className="text-xl font-bold mb-3">Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 flex justify-between">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              value={values.name}
              name="name"
              onChange={handleInput}
              className="form-control rounded-0 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3 flex justify-between">
            <label htmlFor="email" className="font-bold hover:text-indigo-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your E-mail"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3 flex justify-between">
            <label
              htmlFor="password"
              className="font-bold hover:text-indigo-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password here"
              name="password"
              onChange={handleInput}
              className="form-control rounded-0 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          {/* <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-success w-full rounded-0 hover:bg-cyan-800"
          >
            Sign up
          </button> */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              type="submit"
              class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Sign Up
            </button>
          </div>
          <p className="mt-3 text-blod font-bold ">You agree to our terms and policies</p>
          <a
            href="/"
            className="btn btn-default border w-full rounded-0 text-decoration-none inline-block mt-2 hover:bg-green-600 font-bold"
          >
            Login
          </a>
        </form>
      </div>
    </div>
  );
}
export default Signup;

// Handle form submission
// const handleSubmit = (event) => {
//     event.preventDefault()
//     // const err =Validation(values);
//     // setErrors(err);
//     if (values.name !=='' && values.email !== '' && values.password !=="") {
//             axios.post('http://localhost:8081/signup', values)
//             .then(res => {
//                 // navigate('/')
//             })
//             .catch(err => console.log(err))

//  }
// }
