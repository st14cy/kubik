import React from 'react';
import Typography from "@/components/ui/Typography";

const Main = () => {
    return (
        <div>
            <section className='flex flex-col lg:grid lg:grid-cols-2'>
                <Typography variant='badge'>Антикафе настольных игр</Typography>
                <Typography variant='heroTitle'>Бросай
                        <span className="inline-block bg-sun border-[2px] border-ink rounded-[10px] px-4 text-[44px] leading-none -rotate-2 transform ">
                            кубик
                        </span>,
                    <br/>
                    а не друзей
                </Typography>

                <Typography variant='description'>Больше 200 настолок, ведущие, которые объяснят правила за 5 минут, и бесконечный чай с печеньками. Платите только за время.</Typography>
            </section>
        </div>
    );
};

export default Main;