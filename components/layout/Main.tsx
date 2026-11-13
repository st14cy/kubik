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
            lvl:"Средне",
            iconUrl:"/icons/mountain.svg"
        },
        {
            className:"bg-pink",
            isNew:true,
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
            isHits:false,
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
    const hitsFilterItem=["Все","Для компании","Для двоих","Стратегии","Детективы"]

    return (
        <main>
            <section className='flex flex-col lg:flex-row mx-auto max-w-[1240px]  mt-6 justify-center px-5 lg:mt-12 gap-[30px]'>
                <div className="flex flex-col gap-6">
                    <Typography   variant='badge'>Антикафе настольных игр</Typography>
                    <Typography variant='heroTitle'>Бросай
                        <span className="inline-block bg-sun border-2 border-ink rounded-[10px] px-4 text-[44px] leading-none -rotate-2 transform lg:text-[84px] lg:leading-[96px]">
                             кубик
                        </span>,
                        <br/>
                        а не друзей
                    </Typography>
                    <Typography className="text-ink2" variant='description'>Больше 200 настолок, ведущие, которые объяснят правила за 5 минут, и бесконечный чай с печеньками. Платите только за время.</Typography>
                    <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
                        <Link  variant="button" href="/" className="bg-tomato text-white text-[16px]">Забронировать стол →</Link>
                        <Button className='text-[16px]' variant="secondary">Смотреть игры</Button>
                    </div>
                    <ul className="flex flex-row justify-between text-ink lg:justify-start gap-12">
                        <li className="flex flex-col gap-0.5 lg:gap-1">
                            <span className="text-[28px] leading-[32px] lg:text-[40px] lg:leading-[44px] font-extrabold">200+</span>
                            <span className="text-[14px] leading-[18px] lg:text-[16px] lg:leading-[22px] text-ink2">настольных игр</span>
                        </li>

                        <li className="flex flex-col gap-0.5 lg:gap-1">
                            <span className="text-[28px] leading-[32px] lg:text-[40px] lg:leading-[44px] font-extrabold">20</span>
                            <span className="text-[14px] leading-[18px] lg:text-[16px] lg:leading-[22px] text-ink2">игровых столов</span>
                        </li>

                        <li className="flex flex-col gap-0.5 lg:gap-1">
                            <span className="text-[28px] leading-[32px] lg:text-[40px] lg:leading-[44px] font-extrabold">4,9</span>
                            <span className="text-[14px] leading-[18px] lg:text-[16px] lg:leading-[22px] text-ink2">рейтинг</span>
                        </li>
                    </ul>
                </div>
                <img  src="/images/Illustration.svg" alt="Илюстрация кубика" className="w-full h-full object-cover mb-[30px]"/>
            </section>
            <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden pb-12 pt-8 lg:pb-20 lg:pt-12">
                <div className="relative left-1/2 w-[110%] -translate-x-1/2 -rotate-2 bg-ink">
                    <ul className="mx-auto flex w-max items-center gap-6 px-6 py-[14px] text-[18px] font-bold leading-none text-cream lg:gap-8 lg:text-[24px]">
                        {[
                            "Мафия",
                            "Кодовые имена",
                            "Колонизаторы",
                            "Диксит",
                            "Взрывные котята",
                        ].map((game) => (
                            <li
                                key={game}
                                className="flex shrink-0 items-center gap-6 whitespace-nowrap lg:gap-8"
                            >
                                <span>{game}</span>

                                <span aria-hidden="true" className="text-sun">
            ✦
          </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <section className='flex flex-col justify-center mx-auto w-full max-w-[1240px] px-5 mb-30'>
                <Typography className="mb-5" variant="badge">Как это работает</Typography>
                <div className='flex flex-col gap-4 mb-[34px] lg:flex-row lg:justify-between lg:items-end'>
                    <Typography  className="lg:max-w-[465px]" variant="title">Три шага до веселого вечера</Typography>
                    <Typography className="lg:max-w-[420px] text-ink2" variant="description">Никаких членских карт и  обязательных заказов. Пришли, сыграли, заплатили за минуты — всё.</Typography>
                </div>

                <ul className="flex flex-col gap-4 lg:justify-between lg:flex-row">
                    {workItems.map((item, index) => (
                        <WorkItem num={item.num} key={index} title={item.title} description={item.description} className={item.className}/>
                    ))}
                </ul>
            </section>
            <section className='flex flex-col justify-center mx-auto w-full max-w-[1240px] px-5 '>
                <Typography variant="badge" >Каталог</Typography>
                <div className='flex flex-col gap-4 mb-[34px] lg:flex-row lg:justify-between lg:items-end'>
                    <Typography variant="title">Хиты этого месяца</Typography>
                    <Typography className='text-ink2 lg:max-w-[420px]' variant="description">Самые популярные игры у наших гостей. Полный список — больше 200 коробок — на полках в зале.</Typography>
                </div>

                <ul className="flex flex-row gap-2 flex-wrap mb-[32px]">
                    {hitsFilterItem.map((item, index) => (    <li key={index}>
                        <RadioButton>{item}</RadioButton>
                    </li>))}
                </ul>
                <ul className="flex flex-col gap-4   mb-[34px] lg:justify-between lg:flex-row lg:gap-[26px] lg:mb-10 ">
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

                <AppLink href={""} className="bg-white mb-16 lg:mb-30 lg:mx-auto" variant="button">Показать еще игры</AppLink>
            </section>

            <section className="bg-sun flex flex-col pt-16 border-y-2 lg:py-30">
                <div className={    `flex flex-col justify-center mx-auto w-full max-w-[1240px] px-5 `}>
                    <div className="flex flex-col justify-center mb-8">
                        <Typography variant="badge" className="mb-4">Тарифы</Typography>
                        <div className="flex flex-col gap-4 mb-[34px] lg:flex-row lg:justify-between lg:items-end">
                            <Typography variant="title" className="max-w-[510px]">Платите за время,  а не за чай</Typography>
                            <Typography variant="description" className="text-ink2 max-w-[420px]">Цены указаны за одного гостя. Дети до 7 лет — бесплатно.</Typography>
                        </div>
                    </div>
                    <ul className="
                        flex flex-col gap-4
                        lg:flex-row lg:items-stretch lg:gap-[26px]
                        lg:[&>*]:flex-1
                        lg:[&>*]:min-w-0
                        lg:[&>*:nth-child(2)]:-my-[10px]
                        ">
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
                </div>

            </section>

            <section className='flex flex-col justify-center mx-auto w-full max-w-[1240px] px-5 py-16 lg:py-30'>
                <Typography variant="badge" className="mb-4">Отзывы</Typography>
                <div className="flex flex-col gap-4 mb-[32px] lg:flex-row lg:justify-between lg:items-end">
                    <Typography variant="title">Что говорят игроки</Typography>
                    <Typography variant="description" className="text-ink2">Больше 1 500 отзывов на картах.</Typography>
                </div>

                <ul className="flex flex-col gap-4 lg:justify-between ">
                    {ratingItems.map((rate, index) => (<ReviewsItem key={index} rating={rate.rating} name={rate.name} surname={rate.surname} description={rate.description} avatarColor={rate.avatarColor} isMintTheme={rate.isMintTheme} />))}
                </ul>
            </section>

            <section className='flex flex-col justify-center mx-auto w-full max-w-[1240px] px-5 pb-16 lg:py-30'>
                <Typography variant="badge" className="mb-4">FAQ</Typography>
                <Typography variant="title" className="mb-8" >Частые вопросы</Typography>

                <ul className="flex flex-col gap-4 lg:justify-between mb-8">
                    {questionItem.map((item, index) => (
                        <li key={index} >
                        <QuestionItem question={item.question} answer={item.answer} />
                    </li>))}
                </ul>
                <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] text-ink2">
                    Не нашли ответ? Напишите нам в Telegram — отвечаем за 10 минут.
                </p>
            </section>

            <section className={`flex flex-col overflow-hidden   px-5 pb-5 `}>
                <div className={`border-2 pt-7 rounded-lg bg-tomato shadow-hard-sm`}>
                    <div className={`flex flex-col px-5 px-7`}>
                        <Typography variant="badge" className={`mb-5`}>Бронь</Typography>
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
                </div>
            </section>

        </main>
    );
};

export default Main;
