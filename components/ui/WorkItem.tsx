import React from 'react';

interface WorkItemProps {
    num:number,
    title:string,
    description:string,
    className:string,
}

const WorkItem: React.FC<WorkItemProps> = ({
    num,
    title,
    description,
    className,
                  }) => {
    return (
        <li className="flex flex-col p-6
        bg-white
        gap-4
        rounded-md
        border-2 border-ink
        shadow-hard-sm">
            <div className={` w-12 h-[48px] flex border-2  justify-start rounded-[12px] border-ink  ${className}  rounded-3`}>
                <span className=" block my-auto mx-auto text-[22px] leading-5.5 lg:text-[28px] lg:leading-7 font-bold">
                   {num}
                </span>
            </div>

           <span className="text-[20px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold">
               {title}
           </span>

            <span>
                {description}
            </span>

        </li>
    );
};

export default WorkItem;
