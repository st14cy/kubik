import React from 'react';

interface HitsItemProps {
    className:string,
    isHit:boolean,
    isNew:boolean,
    title:string,
    description:string,
    iconUrl:string,
    countPerson:string,
    time:string,
    lvl:string,
}

const HitsItem:React.FC<HitsItemProps> = ({className,
    isNew,
    isHit,
    title,
    description,
    countPerson,
    time,
    lvl,
    iconUrl
}) => {
    return (
        <li className="flex flex-col overflow-hidden rounded-lg border-2 border-ink bg-white shadow-hard-sm">
            <div className={`relative flex h-[200px] items-center justify-center border-b-2 border-ink ${className}`}>
                {(isHit || isNew) && (
                    <span className="absolute left-5 top-5 rounded-full border-2 border-ink bg-white px-3 py-1 text-[12px] font-bold">
                        {isHit ? "ХИТ" : "НОВИНКА"}
                 </span>
                )}
                <img
                    src={iconUrl}
                    alt=""
                    className="size-32 object-contain"/>
            </div>
                <div className="flex flex-col p-6 gap-4 ">
                    <span className="text-[18px] leading-[24px] lg:text-[20px] lg:leading-[24px] font-bold">
                        {title}
                    </span>
                    <span className="text-[15px] leading-[22px]">
                        {description}
                    </span>
                    <ul className="flex flex-row flex-wrap gap-2">
                        <li className=" inline-flex items-center justify-center bg-cream px-2.5 py-1.5 border-1 border-ink rounded-[8px]">
                            <span className="text-[12px] leading-[12px] font-bold">
                                {countPerson} игроков
                            </span>
                        </li>

                        <li className=" inline-flex items-center justify-center bg-cream px-2.5 py-1.5 border-1 border-ink rounded-[8px]">
                            <span className="text-[12px] leading-[12px] font-bold">
                                {time} мин
                            </span>
                        </li>

                        <li className=" inline-flex items-center justify-center bg-cream px-2.5 py-1.5 border-1 border-ink rounded-[8px]">
                            <span className="text-[12px] leading-[12px] font-bold">
                                {lvl}
                            </span>
                        </li>
                    </ul>
                </div>

        </li>
    );
};

export default HitsItem;
