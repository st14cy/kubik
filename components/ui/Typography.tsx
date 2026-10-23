import React from 'react';


type Variant = "title";

const variants: Record<Variant, string>=
    {
        title:"bg-white border-2 border-ink rounded-lg py-2 px-4 text-[14px] inline-block color-ink font-bold uppercase"
    };

interface TypographyProps {
    variant: Variant;
    children:string
}

const Typography:React.FC<TypographyProps> = ({
    variant="title",
                                                  children="хуй"
                                              }) => {
    return (
       <h1 className={variants[variant]}>
           {children}
       </h1>
    );
};

export default Typography;
