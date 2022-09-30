import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder12: "rounded-radius12",
  icbCircleBorder20: "rounded-radius20",
  RoundedBorder1: "rounded-radius1",
  RoundedBorder5: "rounded-radius5",
  CircleBorder19: "rounded-radius19",
};
const variants = {
  icbFillAmber600: "bg-amber_600",
  icbFillBluegray50: "bg-bluegray_50",
  FillAmber600: "bg-amber_600",
  OutlineBlack90026: "bg-white_A700 shadow-bs text-bluegray_900",
  OutlineBlack900261_2: "bg-amber_600 shadow-bs text-bluegray_900",
  FillWhiteA700: "bg-white_A700 text-bluegray_900",
};
const sizes = {
  smIcn: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  mdIcn: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  sm: "p-[4px]",
  md: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  lg: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  xl: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  "2xl": "lg:p-[17px] xl:p-[19px] p-[22px] 3xl:p-[26px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder12",
    "icbCircleBorder20",
    "RoundedBorder1",
    "RoundedBorder5",
    "CircleBorder19",
  ]),
  variant: PropTypes.oneOf([
    "icbFillAmber600",
    "icbFillBluegray50",
    "FillAmber600",
    "OutlineBlack90026",
    "OutlineBlack900261_2",
    "FillWhiteA700",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "sm", "md", "lg", "xl", "2xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "icbFillAmber600",
  size: "mdIcn",
};

export { Button };
