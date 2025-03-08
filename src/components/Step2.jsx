import { useForm } from "react-hook-form";

const Step2 = ({ nextStep, prevStep, formData, goToStep }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    nextStep(data);
    goToStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("address", { required: "Address is required" })}
        placeholder="Address"
      />
      {errors.address && <p>{errors.address.message}</p>}

      <input
        {...register("city", { required: "City is required" })}
        placeholder="City"
      />
      {errors.city && <p>{errors.city.message}</p>}

      <input
        {...register("state", { required: "State is required" })}
        placeholder="State"
      />
      {errors.state && <p>{errors.state.message}</p>}

      <input
        {...register("zip", { required: "Zip Code is required" })}
        placeholder="Zip Code"
      />
      {errors.zip && <p>{errors.zip.message}</p>}

      <button type="button" onClick={prevStep}>
        Back
      </button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2;
