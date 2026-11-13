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
                <div className={` relative flex flex-col gap-3 ${isBlackThemes ? 'text-white' : 'text-ink'}`}>
                    {isBadge && (
                        <Typography
                            variant="badge"
                            className="mr-auto  text-ink bg-mint">
                            {badgeText}
                        </Typography>
                    )}

                    <h3 className="text-[20px] leading-[24px] lg:text-[24px] lg:leading-[28px] text-lnk2 font-bold">{title}</h3>
                    <p className={`text-[15px] leading-[22px] ${isBlackThemes? "text-cream" : "text-ink2"}`}>{description}</p>
                </div>

                <div className={`flex flex-row gap-2  ${isBlackThemes ? 'text-white' : 'text-ink'}`}>
                    <span className="text-[44px] leading-[50px] lg:text-[56px] lg:leading-[62px] text-lnk font-extrabold">{price}</span>
                    <span className={`text-[18px]  text-lnk mt-auto ${isTransitionPrice ? 'visible' : 'hidden'}`}>/ {transitionDescription}</span>
                </div>

                <ul className="flex flex-col gap-3.5 lg:h-[223px]">
                    {descriptionPoints.map((point, index) => (
                        <li key={index} className={`  text-[16px] leading-[24px]   ${isBlackThemes? "text-white" : "text-ink"}
                          relative pl-9 text-[16px] leading-[24px]
                            before:absolute before:left-0 before:top-1/2
                            before:-translate-y-1/2
                            before:flex before:h-6 before:w-6
                            before:items-center before:justify-center
                            before:rounded-full before:border-[1.5px]
                            before:border-ink before:bg-mint
                            before:text-[14px] before:font-bold before:text-ink
                            before:content-['✓']
                        `}>{point}</li>
                    ))}
                </ul>

                <Button
                    variant={isBlackThemes ? "accent":  "secondary" }
                    className="mt-auto text-[15px]">{contentButton}</Button>
            </li>
    );
};

export default RateItem;