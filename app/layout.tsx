// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
    src: "./fonts/Inter-Variable.woff2",
    variable: "--font-inter",
    display: "swap",
    weight: "100 900",
});

const playfair = localFont({
    src: "./fonts/PlayfairDisplay-Variable.woff2", // путь к вашему файлу Playfair Display
    variable: "--font-playfair",
    display: "swap",
    weight: "400 900",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
            <body className="font-sans bg-cream antialiased text-ink">
                <div>
                    {children}
                </div>
            </body>
        </html>
    );
}
