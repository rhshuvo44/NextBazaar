import { PolymorphicButtonProps } from "@/types";
import Link from "next/link";
import { forwardRef } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// The props for the button, making href and onClick optional

const PolymorphicButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PolymorphicButtonProps
>(
  (
    {
      href,
      onClick,
      text,
      icon: Icon,
      variant = "solid",
      color = "primary",
      ariaLabel,
      isSubmitting = false,
      className = "",
    },
    ref
  ) => {
    const baseClass =
      "relative inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden group capitalize cursor-pointer";

    // Conditionally set the class based on color and variant
    const variantClass = {
      primary: {
        solid:
          "bg-white text-black  shadow-md hover:shadow-xl hover:-translate-y-1",
        outline:
          "border border-white  hover:bg-black hover:text-white",
        submit:
          "border border-white  hover:bg-black hover:text-white",
      },
      info: {
        solid:
          "bg-black  shadow-md hover:shadow-xl hover:-translate-y-1",
        outline: "border border-black  hover:bg-white hover:text-black",
      },
    };

    const buttonContent = isSubmitting ? (
      <>
        <AiOutlineLoading3Quarters className="animate-spin" />
        Sending...
      </>
    ) : (
      <>
        {text}
        {Icon && (
          <Icon className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </>
    );

    const buttonClass = `${baseClass} ${variantClass[color][variant]} ${className}`;

    if (href) {
      return (
        <Link
          href={href}
          aria-label={ariaLabel}
          className={buttonClass}
          onClick={onClick}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        >
          {buttonContent}
        </Link>
      );
    }

    return (
      <button
        type="submit"
        aria-label={ariaLabel}
        className={buttonClass}
        onClick={onClick}
        disabled={isSubmitting}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
      >
        {buttonContent}
      </button>
    );
  }
);

PolymorphicButton.displayName = "PolymorphicButton";

export default PolymorphicButton;
