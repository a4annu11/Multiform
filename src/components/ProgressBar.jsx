const ProgressBar = ({ step }) => {
  const progress = (step / 4) * 100;
  return (
    <div style={{ width: "100%", background: "#ddd", marginBottom: "20px" }}>
      <div
        style={{ width: `${progress}%`, background: "blue", height: "10px" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
