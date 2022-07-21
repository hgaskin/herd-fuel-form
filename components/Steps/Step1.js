import React from "react";

const Step1 = ({ formStep, register }) => {
  return (
    <section className={formStep === 1 ? "block" : "hidden"}>
      <h2 className="font-semibold text-3xl mb-8">Music</h2>
      <label
        htmlFor="spotifyLink"
        className="block text-md font-medium text-gray-700"
      >
        Link to Spotify:{" "}
      </label>
      <div className="mt-1">
        <input
          {...register("spotifyLink", { required: true })}
          type="text"
          name="spotifyLink"
          className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md"
        />
      </div>

      <label
        htmlFor="musicGenre"
        className="block text-md font-medium text-gray-700"
      >
        Music Genre:{" "}
      </label>
      <div className="mt-1">
        <input
          {...register("musicGenre", { required: true })}
          type="text"
          name="musicGenre"
          className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md"
        />
      </div>

      <label
        htmlFor="interestedIn"
        className="block text-md font-medium text-gray-700"
      >
        Interested In:{" "}
      </label>
      <div className="mt-1">
        <select
          {...register("interestedIn", { required: true })}
          type="text"
          name="interestedIn"
          className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md"
        >
          <option>(Funding) Fuel by Herd</option>
          <option>(Distribution) Launch by Herd</option>
        </select>
      </div>
    </section>
  );
};

export default Step1;
