import "./style.scss";
const InputField = ({
  type,
  id,
  placeholder,
  width,
  height,
  margin = "0px",
  padding = "10px",
  handleChange,
  backGroundColor = "",
  textColor = "",
  borderColor = "",
  value = "",
}) => {
  return (
    <>
      <input
        onChange={handleChange}
        className="inputField"
        value={value}
        type={type}
        id={id}
        placeholder={placeholder}
        style={{
          width: width ? width : "100%",
          height: height,
          padding: padding,
          margin: margin,
          backgroundColor: backGroundColor,
          color: textColor,
          borderColor: borderColor,
        }}
      />
    </>
  );
};

export default InputField;
