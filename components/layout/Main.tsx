import React from 'react';
import Typography from "@/components/ui/Typography";
import Link from "../ui/Link";
import Button from "../ui/Button";
import WorkItem from "@/components/ui/WorkItem";

const Main = () => {
    const workItems = [
        {
            num:1,
            title:"Бронируйте стол",
            description:"Через форму на сайте или по телефону. Подберём стол под размер компании — от 2 до 12 человек.",
            className:"bg-sun"
        },
        {
            num:2,
            title:"Выбираете игру",
            description:"Ведущий спросит, что вы любите, и предложит пару вариантов. Правила объяснит за 5 минут.",
            className:"bg-mint"
        },
        {
            num:3,
            title:"Играете сколько хотите",
            description:"Чай, кофе и печеньки уже входят в стоимость. Можно менять игры хоть каждые полчаса.",
            className:"bg-pink"
        }
    ]
    return (
        <div>
            <section className='flex flex-col justify-center mx-5 lg:grid lg:grid-cols-2'>
                <Typography variant='badge'>Антикафе настольных игр</Typography>
                <Typography variant='heroTitle'>Бросай
                        <span className="inline-block bg-sun border-2 border-ink rounded-[10px] px-4 text-[44px] leading-none -rotate-2 transform ">
                            кубик
                        </span>,
                    <br/>
                    а не друзей
                </Typography>
                <Typography variant='description'> 123 Больше 200 настолок, ведущие, которые объяснят правила за 5 минут, и бесконечный чай с печеньками. Платите только за время.</Typography>
                <div>
                    <Link variant="button" href="/" className="bg-tomato text-white">123</Link>
                    <Button variant="secondary">Смотреть игры</Button>
                </div>
                <ul className="flex flex-row justify-between text-ink">
                    <li className="flex flex-col gap-0.5 lg:gap-1">
                       <span className="text-[28px] leading-[32px] lg:text-[40px] lg:leading-[44px] font-bold">200+</span>
                        <span className="text-[14px] leading-[18px] lg:text-[16px] lg:leading-[22px]">настольных игр</span>
                    </li>

                    <li className="flex flex-col gap-0.5 lg:gap-1">
                        <span className="text-[28px] leading-[32px] lg:text-[40px] lg:leading-[44px] font-bold">20</span>
                        <span className="text-[14px] leading-[18px] lg:text-[16px] lg:leading-[22px]">игровых столов</span>
                    </li>

                    <li className="flex flex-col gap-0.5 lg:gap-1">
                        <span className="text-[28px] leading-[32px] lg:text-[40px] lg:leading-[44px] font-bold">4,9</span>
                        <span className="text-[14px] leading-[18px] lg:text-[16px] lg:leading-[22px]">рейтинг</span>
                    </li>
                </ul>
            </section>

            <div className="my-[14px] w-full">
                <ul className={' w-[120%] -ml-[2.5%] py-[14px] flex flex-row gap-10 bg-ink -rotate-2 overflow-hidden'}>
                    <ul className="flex items-center gap-6 whitespace-nowrap">
                        <li>
        <span className="text-[18px] leading-[18px] lg:text-[28px] lg:leading-[28px] text-cream font-bold">
            Мафия
        </span>
                        </li>
                        <li>
        <span className="text-[18px] leading-[18px] lg:text-[28px] lg:leading-[28px] text-cream font-bold">
            Кодовые имена
        </span>
                        </li>
                        <li>
        <span className="text-[18px] leading-[18px] lg:text-[28px] lg:leading-[28px] text-cream font-bold">
            Колонизаторы
        </span>
                        </li>
                        <li>
        <span className="text-[18px] leading-[18px] lg:text-[28px] lg:leading-[28px] text-cream font-bold">
            Диксит
        </span>
                        </li>
                        <li>
        <span className="text-[18px] leading-[18px] lg:text-[28px] lg:leading-[28px] text-cream font-bold">
            Взрывные котята
        </span>
                        </li>
                    </ul>
                </ul>
            </div>

            <section className='flex flex-col justify-center mx-5 lg:grid lg:grid-cols-2'>
                <Typography variant="badge">Как это работает</Typography>
                <Typography variant="title">Три шага до веселого вечера</Typography>
                <Typography variant="description">Никаких членских карт и обязательных заказов. Пришли, сыграли, заплатили за минуты — всё.</Typography>
                <ul className="flex flex-col gap-4 lg:justify-between">
                    {workItems.map((item, index) => (
                        <WorkItem num={item.num} title={item.title} description={item.description} className={item.className}/>
                    ))}
                </ul>
            </section>

            <section className='flex flex-col justify-center mx-5 lg:grid lg:grid-cols-2'>
                <Typography variant="badge">Каталог</Typography>
                <Typography variant="title">Хиты этого месяца</Typography>
                <Typography variant="description">Самые популярные игры у наших гостей. Полный список — на полках в зале.</Typography>
            </section>

        </div>
    );
};

export default Main;
