import React from 'react';
import Typography from "@/components/ui/Typography";
import Link from "../ui/AppLink";
import Button from "../ui/Button";
import RadioButton from "@/components/ui/form/RadioButton";
import WorkItem from "@/components/sections/how-it-works/WorkItem";
import HitsItem from "@/components/sections/catalog/HitsItem";
import AppLink from "../ui/AppLink";
import RateItem, {RateItemProps} from "@/components/sections/rates/RateItem";
import ReviewsItem, {ReviewsItemProps} from "@/components/sections/reviews/ReviewsItem";
import QuestionItem, {QuestionItemProps} from "@/components/sections/faq/QuestionItem";
import InputControl from "@/components/ui/form/InputControl";
import {AwaiterOnce} from "next/dist/server/after/awaiter";
import SelectControl from "@/components/ui/form/SelectControl";
import Counter from "@/components/ui/form/Counter";
import TextareaControl from "@/components/ui/form/TextareaControl";
import CheckboxControl from "@/components/ui/form/CheckboxControl";

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

    const rateItems: RateItemProps[] = [
        {
            isBlackThemes: false,
            isBadge: false,
            badgeText: "",
            title: "Почасовой",
            description: "Чтобы заскочить на пару партий",
            price: "250 ₽",
            isTransitionPrice: true,
            transitionDescription: "час",
            descriptionPoints: [
                "Любые игры из каталога",
                "Чай, кофе и печеньки",
                "Помощь ведущего с правилами",
            ],
            contentButton: "Выбрать",
        },
        {
            isBlackThemes: true,
            isBadge: true,
            badgeText: "Выбор гостей",
            title: "Весь вечер",
            description: "С 18:00 и до закрытия",
            price: "790 ₽",
            isTransitionPrice: true,
            transitionDescription: "вечер",
            descriptionPoints: [
                "Всё из почасового тарифа",
                "Стол за вами весь вечер",
                "Скидка 10% на пиццу",
                "Участие в турнире недели",
            ],
            contentButton: "Выбрать",
        },
        {
            isBlackThemes: false,
            isBadge: false,
            badgeText: "",
            title: "Праздник",
            description: "День рождения или тимбилдинг",
            price: "от 9 900 ₽",
            isTransitionPrice: false,
            transitionDescription: "",
            descriptionPoints: [
                "Отдельный зал до 20 гостей",
                "Личный ведущий на 3 часа",
                "Сценарий и подбор игр",
                "Можно со своим тортом",
            ],
            contentButton: "Обсудить",
        },
    ];

    const ratingItems: ReviewsItemProps[] = [
        {
            rating: 5,
            name: "Аня",
            surname: "Морозова",
            description:
                "Пришли вчетвером на час, ушли в полночь. Ведущий подобрал игру, которая зашла даже моему папе, который «не любит настолки».",
            avatarColor: "#FFCF36",
            isMintTheme:false
        },
        {
            rating: 5,
            name: "Дмитрий",
            surname: "Ковалёв",
            description:
                "Отмечали тут день рождения сына. Дети в восторге от «Взрывных котят», взрослые — от того, что не нужно ничего организовывать.",
            avatarColor: "#FFFFFF",
            isMintTheme:true
        },
        {
            rating: 5,
            name: "Лиза",
            surname: "Соколова",
            description:
                "Лучшее место для свиданий, если вы оба не любите неловкие паузы. Рекомендую «Пэтчворк» и бесконечный облепиховый чай.",
            avatarColor: "#FF8DD2",
            isMintTheme:false
        },
    ];

    const questionItem:QuestionItemProps[] = [
        {
            question: "Нужно ли знать правила заранее?",
            answer:
                "Нет. Ведущий подойдёт к столу, объяснит правила и сыграет с вами первый круг, пока все не разберутся.",
        },
        {
            question: "Можно прийти без брони?",
            answer:
                "Да, если есть свободные столы. Вечером и в выходные лучше забронировать заранее, особенно если собираетесь большой компанией.",
        },
        {
            question: "Можно ли принести свою еду?",
            answer:
                "У нас можно заказать еду и напитки. Если хотите принести что-то своё, заранее обсудите это с администратором. Для праздника можно принести свой торт.",
        },
        {
            question: "Есть ли игры для детей?",
            answer:
                "Да! Поможем выбрать игру по возрасту и интересам ребёнка, объясним правила и подскажем, во что можно поиграть всей семьёй.",
        },
        {
            question: "Как отменить бронь?",
            answer:
                "Позвоните или напишите нам, указав имя, дату и время бронирования. Сообщите об отмене как можно раньше, чтобы мы могли предложить стол другим гостям.",
        },
    ];

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
                    <Link variant="button" href="/" className="bg-tomato text-white">Забронировать стол →</Link>
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
                        <WorkItem num={item.num} key={index} title={item.title} description={item.description} className={item.className}/>
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
                                  key={index}
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

                <AppLink href={""} className="bg-white" variant="button">Показать еще игры</AppLink>
            </section>

            <section className="  bg-sun">
                <div className="flex flex-col justify-center px-5">
                    <Typography variant="badge">Тарифы</Typography>
                    <Typography variant="title">Платите за время,  а не за чай</Typography>
                    <Typography variant="description">Цены указаны за одного гостя. Дети до 7 лет — бесплатно.</Typography>
                </div>
                <ul>
                    {rateItems.map((item,index) => (
                        <RateItem isBlackThemes={item.isBlackThemes}
                                  key={index}
                                  isBadge={item.isBadge}
                                  badgeText={item.badgeText}
                                  title={item.title}
                                  description={item.description}
                                  price={item.price}
                                  isTransitionPrice={item.isTransitionPrice}
                                  transitionDescription={item.transitionDescription}
                                  descriptionPoints={item.descriptionPoints}
                                  contentButton={item.contentButton}></RateItem>
                    ))}
                </ul>
            </section>

            <section className='flex flex-col justify-center mx-5 lg:grid lg:grid-cols-2'>
                <Typography variant="badge">Отзывы</Typography>
                <Typography variant="title">Что говорят игроки</Typography>
                <Typography variant="description">Больше 1 500 отзывов на картах.</Typography>
                <ul className="flex flex-col gap-4 lg:justify-between">
                    {ratingItems.map((rate, index) => (<ReviewsItem key={index} rating={rate.rating} name={rate.name} surname={rate.surname} description={rate.description} avatarColor={rate.avatarColor} isMintTheme={rate.isMintTheme} />))}
                </ul>
            </section>

            <section className='flex flex-col justify-center mx-5 lg:grid lg:grid-cols-2'>
                <Typography variant="badge">FAQ</Typography>
                <Typography variant="title">Частые вопросы</Typography>

                <ul className="flex flex-col gap-4 lg:justify-between">
                    {questionItem.map((item, index) => (
                        <li key={index} >
                        <QuestionItem question={item.question} answer={item.answer} />
                    </li>))}
                </ul>
                <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] text-ink2">
                    Не нашли ответ? Напишите нам в Telegram — отвечаем за 10 минут.
                </p>
            </section>

            <section className={`flex flex-col overflow-hidden rounded-lg border-2 pt-7  px-5 pb-5 bg-tomato shadow-hard-sm`}>
                <div>
                    <Typography variant="badge">Бронь</Typography>
                    <h2 className="text-[32px] leading-[36px] lg:text-[56px] lg:leading-[62px] font-bold text-white">
                        Займите стол заранее
                    </h2>
                    <p className={`text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] text-white`}>
                        По пятницам и выходным свободных столов почти не бывает. Оставьте заявку — перезвоним за 15 минут.
                    </p>
                    <address className="flex flex-col gap-5 not-italic text-white">
                        <div>
                            <p className="text-[20px] font-bold">
                                ул. Игровая, 12
                            </p>
                            <p className="text-[16px] leading-[24px]">
                                3 минуты от метро «Пушкинская»
                            </p>
                        </div>

                        <div>
                            <p className="text-[20px] font-bold">
                                Каждый день 12:00–00:00
                            </p>
                            <p className="text-[16px] leading-[24px]">
                                В пт и сб до 02:00
                            </p>
                        </div>

                        <div className="flex flex-col items-start">
                            <a href="tel:+79991234567"
                                className="text-[20px] font-bold hover:underline">
                                +7 (999) 123-45-67
                            </a>

                            <a href="mailto:hello@kubik.cafe"
                                className="text-[16px] leading-[24px] hover:underline">
                                hello@kubik.cafe
                            </a>
                        </div>
                    </address>
                </div>
                <form>
                    <div className="flex flex-col gap-4 rounded-lg border-2 border-ink bg-white p-5 text-ink ">
                        <InputControl
                            type="text"
                            placeholder="Имя"
                            id="name"
                            name="name"
                            value="Алексей"/>
                        <InputControl
                            type="phone"
                            placeholder="Телефон"
                            id="phone"
                            name="phone"
                            value="+7 (___) ___-__-__"/>
                        <div className=" grid  grid-cols-2  gap-3 ">
                            <SelectControl
                                label="Дата"
                                id="date"
                                name="date"
                                defaultValue="Пт,24 окт"
                                options={[
                                    "Пт, 24 окт",
                                    "Сб, 25 окт",
                                    "Вс, 26 окт",
                                    "Пн, 27 окт",
                                    "Вт, 28 окт",
                                    "Ср, 29 окт",
                                    "Чт, 30 окт",
                                ]}
                            />
                            <SelectControl
                                label="Время"
                                id="time"
                                name="time"
                                defaultValue="19:00"
                                options={["18:00", "18:30", "19:00", "19:30", "20:00"]}
                            />
                        </div>
                        <Counter label="Сколько вас будет?"></Counter>
                        <TextareaControl
                            label="Комментарий"
                            id="comment"
                            name="comment"
                            rows={3}
                            placeholder="Например: хотим что-нибудь на детективную тему"
                        />

                        <CheckboxControl
                            id="consent"
                            name="consent"
                            label="Согласен на обработку персональных данных"
                            required
                        />

                        <Button>Отправить заявку</Button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Main;
