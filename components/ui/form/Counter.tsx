"use client";

import React, { useId, useState } from "react";

interface CounterProps {
    label: string;
}

const Counter: React.FC<CounterProps> = ({ label }) => {
    const [count, setCount] = useState(4);
    const labelId = useId();

    const peopleLabel =
        count % 100 >= 11 && count % 100 <= 14
            ? "человек"
            : count % 10 >= 2 && count % 10 <= 4
                ? "человека"
                : "человек";

    const buttonClass =
        "flex w-16 shrink-0 items-center justify-center text-[28px] font-bold transition-colors hover:bg-ink/5 disabled:cursor-not-allowed disabled:opacity-40 lg:w-20";

    return (
        <div className="flex min-w-0 flex-col gap-2 text-ink">
      <span
          id={labelId}
          className="text-[14px] font-bold lg:text-[16px]"
      >
        {label}
      </span>

            <div
                role="group"
                aria-labelledby={labelId}
                className="flex h-16 w-full overflow-hidden rounded-[20px] border-2 border-ink bg-cream lg:h-20"
            >
                <button
                    type="button"
                    aria-label="Уменьшить число гостей"
                    disabled={count <= 1}
                    onClick={() => setCount((value) => Math.max(1, value - 1))}
                    className={`${buttonClass} border-r-2 border-ink`}
                >
                    −
                </button>

                <output
                    aria-live="polite"
                    className="flex min-w-0 flex-1 items-center justify-center whitespace-nowrap px-2 text-[18px] font-bold lg:text-[24px]"
                >
                    {count} {peopleLabel}
                </output>

                <button
                    type="button"
                    aria-label="Увеличить число гостей"
                    disabled={count >= 20}
                    onClick={() => setCount((value) => Math.min(20, value + 1))}
                    className={`${buttonClass} border-l-2 border-ink`}
                >
                    +
                </button>
            </div>

            <input type="hidden" name="guests" value={count} />
        </div>
    );
};

export default Counter;