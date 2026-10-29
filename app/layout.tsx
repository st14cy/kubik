// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
    src: "./fonts/Inter-Variable.woff2", // путь к вашему файлу Inter
    variable: "--font-inter",
    display: "swap",
    weight: "100 700", // обязательно укажите диапазон для variable-шрифта
});

const playfair = localFont({
    src: "./fonts/PlayfairDisplay-Variable.woff2", // путь к вашему файлу Playfair Display
    variable: "--font-playfair",
    display: "swap",
    weight: "400 900", // диапазон для Playfair Display
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
            <body className="font-sans bg-cream antialiased text-ink">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </body>
        </html>
    );
}