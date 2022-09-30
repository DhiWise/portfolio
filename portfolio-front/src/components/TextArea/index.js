import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = { FillBluegray50: "bg-bluegray_50 border-0" };

const TextArea = React.forwardRef(
  (
    { className, name, placeholder, children, variant, errors, ...restProps },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className}  ${variants[variant] || ""} `}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(["FillBluegray50"]),
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  variant: "FillBluegray50",
};
export { TextArea };
