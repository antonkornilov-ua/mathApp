import Header from '@/Components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Footer from '@/Components/Footer';
import ThemeContextProvider from '@/context/ThemeContext';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Math App',
    description: 'Create to help my son understand the basics',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={`${roboto.className} bg-gray-200 dark:bg-gray-800  max-w-screen-xl mx-auto p-6 flex flex-col dark:text-gray-200`}>
                <ThemeContextProvider>
                    <Header />
                    {children}
                    <Footer />
                </ThemeContextProvider>
            </body>
        </html>
    );
}
