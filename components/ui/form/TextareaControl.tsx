import React from 'react';

interface TextareaControlProps {
    label:string,
    placeholder:string,
    name:string,
    id:string,
    rows?:number,
    defaultValue?:string,
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextareaControl:React.FC<TextareaControlProps> = ({
    label,
    placeholder,
    name,
    id,
    rows,
    defaultValue,
    onChange}) => {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className="text-[14px] font-bold text-ink lg:text-[16px]"
            >
                {label}
            </label>

            <textarea
                id={id}
                name={name}
                rows={rows}
                defaultValue={defaultValue}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full resize-y rounded-[16px] border-2 border-ink bg-cream px-4 py-3 text-[16px] leading-[24px] text-ink placeholder:text-ink/50 focus:outline-violet-600 lg:px-5 lg:py-4"
            />
        </div>
    );
};

export default TextareaControl;