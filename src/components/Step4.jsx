const Step4 = ({ formData, prevStep, goToStep }) => {
  return (
    <div>
      <h2>Review Your Information</h2>
      <p>
        <strong>Name:</strong> {formData.name}{" "}
        <button onClick={() => goToStep(1)}>Edit</button>
      </p>
      <p>
        <strong>Email:</strong> {formData.email}{" "}
        <button onClick={() => goToStep(1)}>Edit</button>
      </p>
      <p>
        <strong>Phone:</strong> {formData.phone}{" "}
        <button onClick={() => goToStep(1)}>Edit</button>
      </p>
      <p>
        <strong>Address:</strong> {formData.address}, {formData.city},{" "}
        {formData.state}, {formData.zip}{" "}
        <button onClick={() => goToStep(2)}>Edit</button>
      </p>
      <p>
        <strong>Skills:</strong>{" "}
        {formData.skills.map((skill, index) => (
          <span key={index}>
            {skill.name} <button onClick={() => goToStep(3)}>Edit</button>,{" "}
          </span>
        ))}
      </p>

      <button onClick={prevStep}>Back</button>
      <button onClick={() => alert("Form Submitted!")}>Submit</button>
    </div>
  );
};

export default Step4;
