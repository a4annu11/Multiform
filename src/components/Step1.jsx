import { useForm } from "react-hook-form";

const Step1 = ({ nextStep, formData, goToStep }) => {
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
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        {...register("email", { required: "Email is required" })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register("phone", { required: "Phone is required" })}
        placeholder="Phone"
      />
      {errors.phone && <p>{errors.phone.message}</p>}

      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;
