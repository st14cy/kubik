import React from 'react';
import Link from "next/link";

const Header = () => {

    const items = [
        { id: 1, name: "Как это работает", href: "/how-it-works" },
        { id: 2, name: "Игры", href: "/games" },
        { id: 3, name: "Тарифы", href: "/pricing" },
        { id: 4, name: "Отзывы", href: "/reviews" },
        { id: 5, name: "Контакты", href: "/contacts" },
    ];

    return (
        <header className="py-5 lg:py-[30px] flex items-center justify-between mx-auto w-full max-w-[1240px] px-5">
            <Link
                href="/"
                aria-label="Кубик — на главную"
                className="inline-flex items-center gap-3 text-white">
                <img
                    src="/icons/logo.svg"
                    alt=""
                    width={36}
                    height={36}
                />
                <span className="text-[22px] font-extrabold leading-none text-ink" >
                     Кубик
                 </span>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex lg:visible">
                {items.map((item) => (
                    <Link key={item.id} href={item.href}>
                        {item.name}
                    </Link>
                ))}
            </nav>


            <button
                type="button"
                aria-label="Открыть меню"
                className="flex h-11 w-11 items-center justify-center rounded-[12px] border-2 border-ink bg-sun lg:hidden"
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5H18M2 10H18M2 15H18" stroke-width="2.5" stroke-linecap="round" stroke="#1B1530"/>
                </svg>

            </button>

        </header>

    );
};

export default Header;
