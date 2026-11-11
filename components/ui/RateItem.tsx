import React from 'react';
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";


export interface RateItemProps {
    isBlackThemes:boolean,
    isBadge:boolean,
    badgeText:string,
    title:string,
    description:string,
    price: string;
    isTransitionPrice:boolean,
    transitionDescription:string,
    descriptionPoints:string[],
    contentButton:string,
}

const RateItem:React.FC<RateItemProps> = ({
                                              isBlackThemes=false,
                                              isBadge=false,
                                              badgeText="Выбор гостей",
                                              title,
                                              description,
                                              price,
                                              isTransitionPrice,
                                              transitionDescription,
                                              descriptionPoints,
                                              contentButton}) => {
    return (
            <li className={`flex flex-col overflow-hidden rounded-lg border-2 p-7  gap-6 ${isBlackThemes ? 'bg-ink' : 'bg-white' } shadow-hard-sm`}>
                <div className={`flex flex-col gap-3 ${isBlackThemes ? 'text-white' : 'text-ink'}`}>
                    <div className={`border-ink text-ink  bg-mint rounded-lg  px-[14px]  ${isBadge ? 'visible' : 'hidden'} mr-auto`}>
                        <span className={`text-[12px] font-bold `}>{badgeText}</span>
                    </div>

                    <h3 className="text-[20px] leading-[24px] lg:text-[24px] lg:leading-[28px] text-lnk2 font-bold">{title}</h3>
                    <p className="text-[15px] leading-[22px] text-lnk2">{description}</p>
                </div>

                <div className={`flex flex-row gap-2  ${isBlackThemes ? 'text-white' : 'text-ink'}`}>
                    <span className="text-[44px] leading-[50px] lg:text-[56px] lg:leading-[62px] text-lnk font-bold">{price}</span>
                    <span className={`text-[18px]  text-lnk mt-auto ${isTransitionPrice ? 'visible' : 'hidden'}`}>/ {transitionDescription}</span>
                </div>

                <ul className="flex flex-col gap-3.5">
                    {descriptionPoints.map((point, index) => (
                        <li key={index} className={`text-[16px] leading-[24px]   ${isBlackThemes? "text-white" : "text-ink" }`}>{point}</li>
                    ))}
                </ul>

                <Button
                    variant={isBlackThemes ? "accent":  "secondary" }
                    className="mt-auto">{contentButton}</Button>
            </li>
    );
};

export default RateItem;