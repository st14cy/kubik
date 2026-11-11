import React from 'react';

export interface ReviewsItemProps {
     rating:number,
     name:string,
    surname:string,
     description:string,
    avatarColor:string,
    isMintTheme:boolean,
}

const ReviewsItem:React.FC<ReviewsItemProps> = ({
                                                    rating,
                                                    name,
                                                    surname,
                                                    description,
                                                    avatarColor,
                                                    isMintTheme}) => {
    return (
        <li className={`flex flex-col overflow-hidden rounded-lg border-2 p-7  gap-4 ${isMintTheme ? 'bg-mint' : 'bg-white' } shadow-hard-sm`}>
            <div>
                {Array.from({ length: rating }).map((_, index) => (
                    <span key={index} aria-hidden="true" className="text-tomato">
                         {index < rating ? "★" : "☆"}
                    </span>
                ))}
            </div>

            <blockquote className="m-0 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                <p>{description}</p>
            </blockquote>

            <div className={`flex flex-row text-ink gap-3.5 items-center`}>
                <div className={`w-13 h-13 rounded-full flex items-center justify-center border-2 border-ink font-bold`}  style={{ backgroundColor: avatarColor }}>
                    {name.charAt(0).toUpperCase()}
                    {surname.charAt(0).toUpperCase()}
                </div>
                <p className="text-[16px] font-bold">
                    {name} {surname}
                </p>
            </div>


        </li>
    );
};

export default ReviewsItem;