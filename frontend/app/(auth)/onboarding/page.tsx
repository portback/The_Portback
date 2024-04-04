"use client";
import { handleImageInputChange } from "@/lib/utils";
import React, { useState } from "react";

const OnboardingPage = () => {
  const [base64, setBase64] = useState<string>("");

  return (
    <div>
      {/* 
     TODO: CREATE ONBOARDINGPAGEFOR NEW USER 
     // AFTER ONBOARDING SET THE ONBOARDED ATTRIBUTE TO TRUE
     //  DATA TO COLLECT DURING ON BOARDING
     ROLE
     LOCATION
     CURRENTLY WORKING AT / OR LOOKING FOR A JOB (OPEN TO WORK )
     A LIST OF FEW SKILLS AND TECHNOLOGIES YOU USE
     
     */}

      <input
        type="file"
        accept="image/*"
        onChange={async (e) => setBase64(await handleImageInputChange(e))}
      />
    </div>
  );
};

export default OnboardingPage;
