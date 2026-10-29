import React, {ReactNode} from 'react';

type Variant = "nav";


const variants: Record<Variant, string> =
    {
        nav: "text-ink font-bold text-[16px]",
    };

interface LinkProps {
    variant?: Variant,
    href: string,
    children: ReactNode,
    className?: string
}

const Link: React.FC<LinkProps> = ({
                                       variant = "nav",
                                       href,
                                       children,
                                       className
                                   }) => {
    return (
        <Link href={href} className={`${variants[variant]}`}>
            {children}
        </Link>
    );
};

export default Link;