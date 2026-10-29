import React from 'react';


type Variant = "heroTitle" | "title" | "badge"| "description";

const variants: Record<Variant, string>=
    {
        heroTitle:"text-[44px] leading-[52px] lg:text-[84px] lg:leading-[96px] font-bold",
        title:"text-[32px] leading-[36px] lg:text-[56px] lg:leading-[62px] font-bold",
        description:"text-[18px] leading-[26px] lg:text-[22px] lg:leading-[32px] text-lnk2",
        badge:"bg-white border-2 border-ink rounded-lg py-1.5 px-3 text-[12px] lg:py-2 lg:px-4 lg:text-[14px] inline-block color-ink font-bold  uppercase"
    };

interface TypographyProps {
    variant: Variant;
    children:React.ReactNode;
}

const Typography:React.FC<TypographyProps> = ({
    variant="title",
    children}) => {

    let Tag: React.ElementType = "p";
    if (variant === "heroTitle") {
        Tag = "h1";
    } else if (variant === "badge") {
        Tag = "span";
    } else if (variant === "title") {
        Tag = "h2";
    }
    else if (variant === "description") {
        Tag = "p";
    }

    return (
        <Tag className={`${variants[variant]}`}>
            {children}
        </Tag>
    );
};

export default Typography;
