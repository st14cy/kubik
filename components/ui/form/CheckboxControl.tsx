import React from "react";

interface CheckboxControlProps {
    id: string;
    name: string;
    label: string;
    required?: boolean;
}

const CheckboxControl: React.FC<CheckboxControlProps> = ({
                                                             id,
                                                             name,
                                                             label,
                                                             required = false,
                                                         }) => {
    return (
        <label
            htmlFor={id}
            className="flex cursor-pointer items-start gap-3 text-ink"
        >
            <input
                id={id}
                name={name}
                type="checkbox"
                required={required}
                className="peer sr-only"
            />

            <span
                aria-hidden="true"
                className="
          flex h-7 w-7 shrink-0 items-center justify-center
          rounded-[8px] border-2 border-ink bg-cream
          peer-checked:bg-mint
          [&>span]:hidden peer-checked:[&>span]:block
          peer-focus-visible:outline-2
          peer-focus-visible:outline-offset-2
          peer-focus-visible:outline-violet-600
        "
            >
        <span className="text-[20px] font-bold leading-none">✓</span>
      </span>

            <span className="text-[16px] leading-[24px]">
        {label}
      </span>
        </label>
    );
};

export default CheckboxControl;