import React, { ReactNode } from 'react';
import NextLink from 'next/link';

type Variant = "nav" | "button";

const variants: Record<Variant, string> = {
    nav: "text-ink font-bold text-[16px]",
    button: "flex items-center justify-center px-10 py-4 rounded-full border-2 border-ink font-bold text-body shadow-hard-sm cursor-pointer transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard active:translate-x-1 active:translate-y-1 active:shadow-none",
};

interface LinkProps {
    variant?: Variant;
    href: string;
    children: ReactNode;
    className?: string;
}

const CustomLink: React.FC<LinkProps> = ({
                                             variant = "nav",
                                             href,
                                             children,
                                             className = "",
                                         }) => {
    return (
        <NextLink href={href} className={`${variants[variant]} ${className}`.trim()}>
            {children}
        </NextLink>
    );
};

export default CustomLink;
