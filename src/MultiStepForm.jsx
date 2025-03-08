import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import ProgressBar from "./components/ProgressBar";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    skills: [],
  });

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const goToStep = (stepNumber) => {
    setStep(stepNumber);
  };

  return (
    <div>
      <ProgressBar step={step} />
      {step === 1 && (
        <Step1
          nextStep={updateFormData}
          formData={formData}
          goToStep={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <Step2
          nextStep={updateFormData}
          prevStep={() => setStep(1)}
          formData={formData}
          goToStep={() => setStep(3)}
        />
      )}
      {step === 3 && (
        <Step3
          nextStep={updateFormData}
          prevStep={() => setStep(2)}
          formData={formData}
          goToStep={() => setStep(4)}
        />
      )}
      {step === 4 && (
        <Step4
          formData={formData}
          prevStep={() => setStep(3)}
          goToStep={goToStep}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
