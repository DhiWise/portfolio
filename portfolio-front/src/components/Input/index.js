import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillAmber600: "bg-amber_600",
  FillBluegray50: "bg-bluegray_50",
};

const sizes = {
  sm: "lg:pb-[10px] xl:pb-[12px] pb-[14px] 3xl:pb-[16px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName}  ${variants[variant] || ""} ${
            sizes[size] || ""
          }`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["FillAmber600", "FillBluegray50"]),
  size: PropTypes.oneOf(["sm"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  variant: "FillBluegray50",
  size: "",
};

export { Input };
