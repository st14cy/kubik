import React from 'react';

interface SelectControlProps {
    options:string[],
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    label:string,
    id:string,
    name:string,
    defaultValue?:string,

}

const SelectControl:React.FC<SelectControlProps> = ({
    options,
    onChange,
    label,
    id,
    name,
    defaultValue}) => {
    return (
        <div>
            <label htmlFor={id} className="text-[14px] lg:text-[16px] font-bold text-lnk2">
                {label}
            </label>
            <div className="relative flex gap-2">
                <select
                    name={name}
                    id={id}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    className="w-full  rounded-[12px] border-2 appearance-none border-ink bg-cream px-4 py-3 lg:px-5 lg:py-4 text-[15px] lg:text-[16px] font-bold text-lnk2 placeholder:text-lnk2   focus:outline-violet-600"
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[12px]"
                >▼</span>
            </div>
        </div>
    );
};

export default SelectControl;