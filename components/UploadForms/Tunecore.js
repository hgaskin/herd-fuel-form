import React from "react";

const Tunecore = ({ register }) => {
  return (
    <section className="block">
      <h2 className="font-semibold text-3xl my-4">TuneCore Upload</h2>
      <div className="sm:col-span-6">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium text-gray-700"
        >
          Tunecore Upload
        </label>
        <p>
          To export your royalty data from Tunecore, log in to your account and
          follow these steps:
        </p>
        <p>1) Click "Money &amp; Reports" in the navigation bar</p>
        <p>2) Select "Music Sales"</p>
        <p>
          3) Click "Download Monthly Sales Reports" in the top right on the page
        </p>
        <p>4) Switch tab to "By Reporting Period" from "By Sales Period"</p>
        <p>
          5) Click the file name for each of the past twelve months to download
          reports
        </p>

        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="fileUpload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <input
                  {...register("file.tunecoreUpload", {})}
                  type="file"
                  id="tunecoreUpload"
                  multiple={true}
                  // onChange={(e) => console.log(e.target.files[0])}
                  // className="sr-only"
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tunecore;
