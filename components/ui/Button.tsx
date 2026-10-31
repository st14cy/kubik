import React from 'react';

type Variant = "primary" | "accent" | "secondary";

const variants: Record<Variant, string> = {
    primary: "bg-tomato text-white",
    accent: "bg-sun text-ink",
    secondary: "bg-white text-ink",
};


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    className?: string;
}

const Button = ({ variant = "primary",  className = "", children, ...props }: ButtonProps) => {
    return (
        <button type="button"
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
                ${className}
                `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
