import React from 'react';

export interface QuestionItemProps {
    question:string,
    answer:string,
}

const QuestionItem:React.FC<QuestionItemProps> = ({
    question,
    answer,
                                                  }) => {
    return (
        <details className="group rounded-lg border-2 border-ink bg-white p-5 text-ink open:bg-violet open:text-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 ">
                <h3 className="text-[18px] leading-[24px] lg:text-[20px] lg:leading-[24px] font-bold">
                    {question}
                </h3>

                <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-[#FFF7E8] text-ink group-open:bg-[#FFCF36]"
                    aria-hidden="true"
                >
                    <span className="group-open:hidden font-bold">+</span>
                    <span className="hidden group-open:inline font-bold">−</span>
                 </span>
            </summary>
            <p className="mt-3.5 text-[15px] leading-[22px] lg:text-[16px] lg:leading-[24px]">
                {answer}
            </p>
        </details>
    );
};

export default QuestionItem;