import React from "react";

const Step2 = ({ distributorsList, formStep, register }) => {
  return (
    <section className={formStep === 2 ? "block" : "hidden"}>
      <h2 className="font-semibold text-3xl mb-8">Distributor(s)</h2>

      <fieldset className="space-y-5">
        <div className="columns-2 gap-2">
          {distributorsList.map((distributor, index) => (
            <div key={index} className="relative flex items-center">
              <div className="flex items-center h-5">
                <input
                  {...register("distributors", {
                    required: false,
                  })}
                  aria-describedby="comments-description"
                  value={distributor.value}
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>

              <div className="ml-3 text-lg">
                <label
                  htmlFor={distributor.value}
                  className="font-medium text-gray-700"
                >
                  {distributor.name}
                </label>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </section>
  );
};

export default Step2;
