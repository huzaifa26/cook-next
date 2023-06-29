import ReduxProvider from '@/redux/ReduxProvider'
import './globals.css'

export const metadata = {
  title: 'Learn cooking online | COOK',
  description: "Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Learn cooking online | COOK</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community" />
        <meta name="keywords" content="Cooking, learn cooking, cooking classes" />
        <meta name="author" content="COOK" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&family=Pacifico&display=swap"
          rel="stylesheet" />

        <link rel="shortcut icon" href="/favicons/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png" />

        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="apple-mobile-web-app-title" content="Learn cooking online | COOK" />
        <meta name="application-name" content="COOK" />
        <meta name="msapplication-TileColor" content="#d27722" />
        <meta name="msapplication-TileImage" content="/favicons/apple-touch-icon-144x144.png" />
        <meta name="theme-color" content="#FFFFFF" />
      </head>

      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
