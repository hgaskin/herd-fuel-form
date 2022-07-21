import React from "react";

const Step4 = ({ formStep, register }) => {
  return (
    <section className={formStep === 0 ? "block" : "hidden"}>
      <h2 className="font-semibold text-3xl mb-8">Artist Information</h2>

      <label
        htmlFor="firstName"
        className="block text-md font-medium text-gray-700"
      >
        First Name:
      </label>
      <div className="my-1">
        <input
          {...register("firstName", { required: true })}
          type="text"
          id="firstName"
          className="p-2 shadow-sm focus:ring-indigo-500 bg-blue-50 focus:border-indigo-500 block w-full sm:text-md border-blue-500 rounded-md"
        />
      </div>

      <label
        htmlFor="artistName"
        className="block text-md font-medium text-gray-700"
      >
        Artist Name:{" "}
      </label>
      <div className="my-1">
        <input
          {...register("artistName", { required: true })}
          type="text"
          id="artistName"
          className="p-2 shadow-sm focus:ring-indigo-500 bg-blue-50 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md"
        />
      </div>

      <label
        htmlFor="email"
        className="block text-md font-medium text-gray-700"
      >
        Email:{" "}
      </label>
      <div className="my-1">
        <input
          {...register("email", { required: true })}
          type="text"
          id="email"
          className="p-2 shadow-sm focus:ring-indigo-500 bg-blue-50 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md"
        />
      </div>

      <label
        htmlFor="phone"
        className="block text-md font-medium text-gray-700"
      >
        Phone:{" "}
      </label>
      <div className="my-1">
        <input
          {...register("phone", { required: true })}
          type="text"
          id="phone"
          className="p-2 shadow-sm focus:ring-indigo-500 bg-blue-50 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md"
        />
      </div>

      <label
        htmlFor="location"
        className="block text-md font-medium text-gray-700"
      >
        Location:{" "}
      </label>
      <div className="my-1">
        <input
          {...register("location", { required: true })}
          type="text"
          id="location"
          className="p-2 shadow-sm focus:ring-indigo-500 bg-blue-50 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md"
        />
      </div>
    </section>
  );
};

export default Step4;
