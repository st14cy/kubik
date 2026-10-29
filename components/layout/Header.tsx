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
        <nav className='flex items-center gap-10 justify-center my-[30px]'>
            {items.map((item) => (
                <Link key={item.id} href={item.href}>
                    {item.name}
                </Link>
            ))}
        </nav>
    );
};

export default Header;