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
        <div className="bg-ink">
            <div>
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

                <p className={`text-[15px] leading-[24px] lg:text-[18px] lg:leading-[27px] text-white`}>
                    Антикафе настольных игр. Собираем компании за одним столом с 2019 года.
                </p>
            </div>
          <section>
              <nav aria-label="Навигация в подвале" className="grid grid-cols-2 justify-between ">
                <div>
                    <h3 className='text-[15px]  lg:text-[18px] lg:leading-[27px] text-sun'>
                        Меню
                    </h3>
                    <ul>
                        {menuItems.map((item) => (<li key={item}><Link className="text-[15px] text-cream  lg:text-[18px] lg:leading-[27px] " href="/">{item}</Link></li>))}
                    </ul>
                </div>


                  <div>
                      <h3 className='text-[15px]  lg:text-[18px] lg:leading-[27px] text-sun'>
                          Гостям
                      </h3>
                      <ul>
                          {guestItems.map((item) => (<li key={item}><Link className="text-[15px] text-cream  lg:text-[18px] lg:leading-[27px] " href="/">{item}</Link></li>))}
                      </ul>
                  </div>

              </nav>
          </section>
            <section>
                <ul className='flex flex-row gap-3'>
                    {socialItems.map((item) => (
                        <li key={item.name} className='h-[44px]  w-[44px] flex items-center justify-center  [&:not(:last-child)]:mr-[10px] bg-cream rounded-[12px]'>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[13px]  text-ink   lg:text-[18px] lg:leading-[27px]  ">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <div className="mt-8 border-t border-white/20 pt-6">
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
                alt=""

                aria-hidden="true"
                className="mx-auto mt-12 h-auto w-full max-w-[400px]"
            />

        </div>
    );
};

export default Footer;