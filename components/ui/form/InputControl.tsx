import React from 'react';

interface InputControlProps {
    type:  React.HTMLInputTypeAttribute,
    placeholder:string,
    name:string,
    id:string,
    value:string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputControl:React.FC<InputControlProps> = ({
    type,
    placeholder,
    name,
    id,
    value,
    onChange,}) => {
    return (
        <div>
            <label htmlFor={id} className="text-[14px] lg:text-[16px] font-bold text-lnk2">
                {placeholder}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                className={`w-full rounded-[12px] border-2 border-ink bg-cream px-4 py-3 lg:px-5 lg:py-4 text-[14px] lg:text-[16px] font-bold text-lnk2 placeholder:text-lnk2  
                focus:outline-violet-600`}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputControl;