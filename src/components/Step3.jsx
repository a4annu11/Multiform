import { useForm, useFieldArray } from "react-hook-form";

const Step3 = ({ nextStep, prevStep, formData, goToStep }) => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: { skills: formData.skills },
  });
  const { fields, append, remove } = useFieldArray({ control, name: "skills" });

  const onSubmit = (data) => {
    nextStep({ skills: data.skills });
    goToStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => (
        <div key={item.id}>
          <input {...register(`skills.${index}.name`)} placeholder="Skill" />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append({ name: "" })}>
        Add Skill
      </button>

      <button type="button" onClick={prevStep}>
        Back
      </button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step3;
