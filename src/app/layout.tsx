import './globals.css';
import NextThemeProvider from '../components/ThemeProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://avatars.githubusercontent.com/u/108914551" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');var d=localStorage.getItem('darkMode');var prefers=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;var dark = t==='dark'?true:t==='light'?false:d!==null?JSON.parse(d):prefers; if(dark){document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','dark');document.documentElement.style.colorScheme='dark';}else{document.documentElement.classList.remove('dark');document.documentElement.setAttribute('data-theme','light');document.documentElement.style.colorScheme='light';}}catch(e){}})();` }} />
      </head>
      <body>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
