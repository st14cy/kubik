import React from 'react';
import Typography from "@/components/ui/Typography";
import Link from "../ui/AppLink";
import Button from "../ui/Button";
import RadioButton from "@/components/ui/RadioButton";
import WorkItem from "@/components/ui/WorkItem";
import HitsItem from "@/components/ui/HitsItem";
import AppLink from "../ui/AppLink";

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

    const hitItems = [
        {
            className:"bg-mint",
            isNew:false,
            isHits:true,
            title:"Кодовые имена",
            description:"Командная игра на ассоциации: угадайте своих агентов по одному слову.",
            countPerson:"4-8",
            time:"20",
            lvl:"Легко",
            iconUrl:"/icons/codenames.svg"
        },
        {
            className:"bg-sun",
            isNew:false,
            isHits:false,
            title:"Каркассон",
            description:"Строим средневековые города, дороги и монастыри из квадратных тайлов.",
            countPerson:"2-5",
            time:"45",
            lvl:"Среднее",
            iconUrl:"/icons/mountain.svg"
        },
        {
            className:"bg-pink",
            isNew:false,
            isHits:false,
            title:"Шерлок Хомс",
            description:"Кооперативный детектив: расследуйте дело по уликам и газетам Лондона.",
            countPerson:"1-8",
            time:"90",
            lvl:"Сложно",
            iconUrl:"/icons/search.svg"
        },
        {
            className:"bg-violet",
            isNew:false,
            isHits:true,
            title:"Взрывные котята",
            description:"Быстрая карточная игра, где главное — не вытянуть взрывного котёнка.",
            countPerson:"2-5",
            time:"15",
            lvl:"Легко",
            iconUrl:"/icons/cat.svg"
        }
    ]
    return (
        <main>
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

            <div className="my-[14px] w-full overflow-x-clip">
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
                <ul className="flex flex-row gap-2 flex-wrap">
                    <li>
                        <RadioButton>Все</RadioButton>
                    </li>
                    <li>
                        <RadioButton>Для компании</RadioButton>
                    </li>
                    <li>
                        <RadioButton>Для двоих</RadioButton>
                    </li>
                    <li>
                        <RadioButton>Стратегии</RadioButton>
                    </li>
                    <li>
                        <RadioButton>Детективы</RadioButton>
                    </li>
                </ul>
                <ul>
                    {hitItems.map((item, index) => (
                        <HitsItem className={item.className}
                                  isHit={item.isHits}
                                  isNew={item.isNew}
                                  title={item.title}
                                  description={item.description}
                                  iconUrl={item.iconUrl}
                                  countPerson={item.countPerson}
                                  time={item.time}
                                  lvl={item.lvl}></HitsItem>
                    ))}
                </ul>

                <AppLink href={""} className="bg-white" variant="button">Посмотреть еще игры</AppLink>
            </section>

            <section className="  bg-sun">
                <div className="flex flex-col justify-center px-5">
                    <Typography variant="badge">Тарифы</Typography>
                    <Typography variant="title">Платите за время,  а не за чай</Typography>
                    <Typography variant="description">Цены указаны за одного гостя. Дети до 7 лет — бесплатно.</Typography>
                </div>
            </section>
        </main>
    );
};

export default Main;
