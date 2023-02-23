const Button = ({
  icon, //react-icons
  onClick, //function
  containerStyle, //tailwind classnames
  title, //text
  tooltip, //tooltip text
  inverted, //if false, text comes at left side of the button and icon in the right
  borderStyle = "rounded-md", //border radius
  textStyle = "text-gray-700",
}) => {
  return (
    <button
      title={tooltip}
      onClick={onClick}
      type="button"
      className={`-m-2.5 inline-flex items-center justify-center ${containerStyle} ${borderStyle} ${textStyle}`}
    >
      {inverted ? (
        <>
          {icon}{" "}
          {title && (
            <>
              <div className="px-1" />
              {title}
            </>
          )}
        </>
      ) : (
        <>
          {title}
          {icon && (
            <>
              <div className="px-1" />
              {icon}
            </>
          )}
        </>
      )}
    </button>
  );
};

//props: title, icon, inverted, tooltip
export const PrimaryButton = (props) => (
  <Button
    textStyle="font-semibold text-white txt-sm"
    containerStyle="bg-indigo-600 px-3.5 py-2.5 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    {...props}
  />
);

export const TextButton = (props) => (
  <Button
    textStyle="font-semibold text-grey txt-sm"
    containerStyle="px-3.5 py-2.5"
    {...props}
  />
);

export default Button;
