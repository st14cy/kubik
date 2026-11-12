import React from 'react';


interface RadioProps  extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
}

const RadioButton = ({
                         className = "",
                         children,
                         ...props
                     }: RadioProps) => {
    return (
        <label className={`inline-flex cursor-pointer ${className}`}>
            <input
                {...props}
                type="radio"
                className="peer sr-only"
            />

            <span
                className="
                text-[14px] lg:text-[16px]
                    inline-flex items-center justify-center
                    rounded-full border-2 border-ink
                    bg-white px-4 py-2 lg:px-5 lg:py-2.5
                    text-body font-bold text-ink
                    peer-checked:bg-ink peer-checked:text-white
                    peer-focus-visible:outline-2
                    peer-focus-visible:outline-offset-4
                "
            >
                {children}
            </span>
        </label>
    );
};

export default RadioButton;
