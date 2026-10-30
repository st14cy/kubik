import React from 'react';

type Variant = "primary" | "accent" | "secondary" | "chip";
type Size = "sm" | "lg";

const variants: Record<Variant, string> = {
    primary: "bg-tomato text-white",
    accent: "bg-sun text-ink",
    secondary: "bg-white text-ink",
    chip: "bg-white text-ink border-2 border-ink",
};

const sizes: Record<Size, string> = {
    lg: "py-5 px-8 text-base",
    sm: "py-3.5 px-5.5 text-small",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    className?: string;
}

const Button = ({ variant = "primary", size, className = "", children, ...props }: ButtonProps) => {
    return (

        <button
            className={`
        inline-flex items-center justify-center
        w-full md:w-auto
        px-4 md:px-10  
        py-4 rounded-full
        border-2 border-ink
        font-bold text-body
        shadow-hard-sm cursor-pointer
        transition-all duration-150
        hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard
        active:translate-x-1 active:translate-y-1 active:shadow-none
        ${variants[variant]}
        ${size ? sizes[size] : ""} /* <-- Если решите использовать size */
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
