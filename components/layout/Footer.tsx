import React from 'react';
import Link from "next/link";

const Footer = () => {
    const menuItems = ["Как это работает","Игры","Тарифы","Отзывы"]
    const guestItems = ["Праздники","Турниры","Сертификаты","Правила зала"]
    const socialItems = [
        {
        name:"TG",
        url:"https://vk.com/kubik_game"
    },
        {
            name:"VK",
            url:"https://vk.com/kubik_game"
        },
        {
            name:"YT",
            url:"https://vk.com/kubik_game"
        },
    ]
    return (
        <div className=" bg-ink pt-12 pb-10 px-5 gap-8  lg:pt-20 lg:pb-10 lg:px-10 ">
            <div className="flex flex-col justify-center mx-auto w-full max-w-310 ">
                <div className=" grid grid-rows-[auto_auto_auto_auto] grid-cols-[auto_auto]
                 lg:flex lg:flex-row lg:justify-between lg:items-start">
                    <div className=" col-span-2 lg:flex lg:gap-3 mb-8 lg:flex-col lg:max-w-90  lg:justify-between ">
                        <Link
                            href="/"
                            aria-label="Кубик — на главную"
                            className="inline-flex items-center gap-3 text-white"
                        >
                            <img
                                src="/icons/logo.svg"
                                alt=""
                                width={36}
                                height={36}
                            />
                            <span className="text-[28px] font-bold leading-none">
                     Кубик
                 </span>
                        </Link>

                        <p className={`text-[15px] leading-5.5 lg:text-[18px] lg:leading-6.75 text-white opacity-70`}>
                            Антикафе настольных игр. Собираем компании за одним столом с 2019 года.
                        </p>
                    </div>
                    <nav aria-label="Навигация в подвале" className="grid grid-cols-2 justify-between ">
                        <div className="flex flex-col lg:gap-3">
                            <h3 className='text-[15px]  lg:text-[18px] lg:leading-[27px] text-sun'>
                                Меню
                            </h3>
                            <ul className="flex flex-col lg:gap-3 text-cream  opacity-80">
                                {menuItems.map((item) => (<li key={item}><Link className="text-[15px] text-cream  lg:text-[18px] lg:leading-[27px]" href="/">{item}</Link></li>))}
                            </ul>
                        </div>

                    </nav>
                    <nav aria-label="Навигация в подвале" className="grid mb-8 grid-cols-2 justify-between ">
                        <div className="flex flex-col lg:gap-3">
                            <h3 className='text-[15px]  lg:text-[18px] lg:leading-[27px] text-sun'>
                                Гостям
                            </h3>
                            <ul className="flex flex-col text-cream opacity-80 lg:gap-3">
                                {guestItems.map((item) => (<li key={item}><Link className="text-[15px] text-cream  lg:text-[18px] lg:leading-[27px]  " href="/">{item}</Link></li>))}
                            </ul>
                        </div>
                    </nav>
                    <section className={`flex lg:gap-5 lg:flex-col`}>
                        <h3 className="hidden lg:block text-[15px] lg:text-[18px] lg:leading-6.75 text-sun">
                            Мы в сети
                        </h3>
                        <ul className='flex flex-row gap-3'>
                            {socialItems.map((item) => (
                                <li key={item.name} className='h-11  w-11 flex items-center justify-center  [&:not(:last-child)]:mr-[10px] bg-cream rounded-[12px] font-extrabold'>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[13px]  text-ink   lg:text-[18px] lg:leading-[27px]  ">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>


                <div className=" flex mt-8 flex-col border-t border-white/20 pt-6 lg:flex-row lg:justify-between lg:items-start">
                    <p className="text-[14px] text-white/60">
                        © 2026 Кубик. Все права защищены.
                    </p>
                    <a
                        href="/privacy"
                        className="mt-2 inline-block text-[14px] text-white/60 hover:underline"
                    >
                        Политика конфиденциальности
                    </a>
                </div>
                <img
                    src="/images/kubik-wordmark.svg"
                    alt="Текст кубик"

                    aria-hidden="true"
                    className="mx-auto mt-12 h-auto w-full max-w-100 lg:max-w-[1200px] "
                />
            </div>


        </div>
    );
};

export default Footer;