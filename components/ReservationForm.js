import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import logo from "../public/logo.png";

import { supabase } from "../utils/supabaseClient";
import Step0 from "./Steps/Step0";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Amuse from "./UploadForms/Amuse";
import Awal from "./UploadForms/Awal";
import CdBaby from "./UploadForms/CdBaby";
import Distrokid from "./UploadForms/Distrokid";
import Ditto from "./UploadForms/Ditto";
import Empire from "./UploadForms/Empire";
import Other from "./UploadForms/Other";
import Repost from "./UploadForms/Repost";
import Symphonic from "./UploadForms/Symphonic";
import Tunecore from "./UploadForms/Tunecore";
import UnitedMasters from "./UploadForms/UnitedMasters";

function ReservationForm() {
  const [formStep, setFormStep] = useState(0);
  const [fileBin, setFileBin] = useState([]);
  const [maxSteps, setMaxSteps] = useState(5);
  const [distributorsArray, setDistributorsArray] = useState([]);
  const [showJson, setShowJson] = useState(true);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const distributorsArrayList = watch("distributors", []);

  useEffect(() => {
    console.log("DISTRIBUTORS_ARRAY: ", distributorsArray);
    setDistributorsArray(distributorsArrayList);
  }, [distributorsArray, distributorsArrayList]);

  const MAX_STEPS = maxSteps;

  const distributorsList = [
    { id: 1, name: "Distrokid", value: "distrokid" },
    { id: 2, name: "Tunecore", value: "tunecore" },
    { id: 3, name: "Amuse", value: "amuse" },
    { id: 4, name: "United Masters", value: "unitedMasters" },
    { id: 5, name: "CD Baby", value: "cdBaby" },
    { id: 6, name: "Ditto", value: "ditto" },
    { id: 7, name: "AWAL", value: "awal" },
    { id: 8, name: "Symphonic", value: "symphonic" },
    { id: 9, name: "Repost", value: "repost" },
    { id: 10, name: "Empire", value: "empire" },
    { id: 11, name: "Other", value: "other" },
  ];

  // Submit Form
  // Messy, but it works.
  const onSubmit = async (uploadData) => {
    console.log(uploadData);
    console.log(uploadData.file.amuseUpload);
    console.log("KEYS:", Object.keys(uploadData.file));
    console.log("VALUES:", Object.values(uploadData.file));
    console.log("FILE BIN:", fileBin);

    const formm = uploadData.file;
    const formName = Object.keys(formm).map((name) => {
      return name;
    });
    const formMap = Object.values(formm).map((key) => {
      return key;
    });
    console.log(formMap, formName);

    const filex = [];

    formMap.map((file, index) => {
      Array.from(file).forEach((file, i) => {
        console.log(file, i);
        console.log(index, "<----- THIS IS Index?");
        var fileName = file.name.split(".").pop();
        var filePath = `/${uploadData.artistName}/${formName[index]}/${fileName}`;

        filex.push([filePath, file]);
      });
      console.log("File X:", filex);
    });

    setFileBin(filex);

    console.log("FileBin Updated", fileBin);

    const { data, error } = await supabase
      .from("reservations")
      .insert(uploadData);

    fileBin.forEach(async (file, i) => {
      console.log(file, "AHHHHHHHHHH");
      let { error: uploadError } = await supabase.storage
        .from("distributors")
        .upload(file[0], file[1], {
          cacheControl: "3600",
          upsert: false,
        });
      if (uploadError) {
        throw uploadError;
      }
    });

    console.log("Uploaded File!!!", [fileBin]);

    if (error) {
      console.log(error);
    }
    console.log("Success!", data);
  };

  // Next Step Button
  const nextStepButton = () => {
    if (formStep + 1 < MAX_STEPS) {
      return (
        <button
          className={`mt-6 bg-blue-600 text-white rounded px-8 py-4 w-full disabled:bg-gray-400 disabled:cursor-not-allowed`}
          onClick={() => setFormStep((curr) => curr + 1)}
          type={"button"}
          disabled={!isValid}
        >
          Next Step
        </button>
      );
    } else if (formStep + 1 === MAX_STEPS) {
      return (
        <button
          className={`mt-6 bg-green-600 text-white rounded px-8 py-4 w-full`}
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      );
    }
  };

  // Previous Step Button
  const previousStepButton = () => {
    if (formStep > 0 && formStep <= MAX_STEPS) {
      return (
        <button
          onClick={() => setFormStep((curr) => curr - 1)}
          type="button"
          className="mt-6 bg-red-600 text-white rounded px-8 py-4 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Previous
        </button>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-blue-800 inset-x-0 top-0"
      ></div>

      {/* Fuel by Herd Label Title */}
      <div className="mx-auto z-10 mt-24 text-center">
        <Image src={logo} width={100} height={50} alt="logo" />
        <h1 className="text-white text-5xl font-semibold">
          Fuel <span className="text-white-500 font-light">by Herd Label</span>
        </h1>
        <p className="text-green-200 mt-2">
          Fill out the form below and we&apos;ll follow up with a proposal
          within 5 business days{" "}
        </p>
      </div>

      {/* Form Start  */}
      <div className="max-w-xl w-full mt-20 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>
              Step {formStep + 1} of {MAX_STEPS}
            </p>
            {/* FORM STEP 0 - Artist Information */}
            {formStep === 0 && (
              <Step0 formStep={formStep} register={register} />
            )}

            {/* FORM STEP 1  - Music  */}
            {formStep === 1 && (
              <Step1 formStep={formStep} register={register} />
            )}

            {/* FORM STEP 2  -  Distributor(s) */}
            {formStep === 2 && (
              <Step2
                distributorsList={distributorsList}
                formStep={formStep}
                register={register}
              />
            )}

            {/* FORM STEP 3 -  Distributors Upload */}
            {formStep === 3 && (
              <>
                <h1> {JSON.stringify(distributorsArray)}</h1>

                {watch("distributors").includes("distrokid") && (
                  <Distrokid register={register} />
                )}
                {watch("distributors").includes("tunecore") && (
                  <Tunecore register={register} />
                )}
                {watch("distributors").includes("amuse") && (
                  <Amuse register={register} />
                )}
                {watch("distributors").includes("unitedMasters") && (
                  <UnitedMasters register={register} />
                )}
                {watch("distributors").includes("cdBaby") && (
                  <CdBaby register={register} />
                )}
                {watch("distributors").includes("ditto") && (
                  <Ditto register={register} />
                )}
                {watch("distributors").includes("awal") && (
                  <Awal register={register} />
                )}
                {watch("distributors").includes("symphonic") && (
                  <Symphonic register={register} />
                )}
                {watch("distributors").includes("repost") && (
                  <Repost register={register} />
                )}
                {watch("distributors").includes("empire") && (
                  <Empire register={register} />
                )}
                {watch("distributors").includes("other") && (
                  <Other register={register} />
                )}
              </>
            )}

            {/* FORM STEP 4 */}
            {formStep === 4 && (
              <section className={formStep === 4 ? "block" : "hidden"}>
                <h2 className="font-semibold text-3xl mb-8">Submit</h2>
                <div className="flex items-center h-5">
                  <input
                    {...register("submit", {
                      required: false,
                    })}
                    aria-describedby="comments-description"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <p>Press Submit to Submit final form</p>
              </section>
            )}

            {nextStepButton()}

            {previousStepButton()}

            <button
              className="mt-6 bg-red-600 text-white rounded px-4 py-2"
              type="button"
              onClick={() => {
                setShowJson(!showJson);
              }}
            >
              {showJson ? "Hide JSON" : "Show JSON"}
            </button>
            {showJson && <pre>{JSON.stringify(watch(), null, 3)}</pre>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;
