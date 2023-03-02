import {Html, Head, Main, NextScript} from 'next/document'

export default function RootDocument() {
    const meta= {
        title: 'Tau Beta Pi - New York Nu Chapter',
        description: 'Tau Beta Pi - New York Nu Chapter Website.',
        image: 'https://www.buffalo.edu/content/www/brand/identity/university-logo-and-marks/jcr:content/par/image_0.img.219.auto.png/1459284839259.png',
    }

    return (
        <Html
            lang="en"
            className="text-white bg-black min-h-full flex flex-col grow"
        >
            <Head>
                <meta name="robots" content="follow, index"/>
                <meta name="description" content={meta.description}/>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:site_name" content={meta.title}/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:image" content={meta.image}/>
            </Head>
            <body >
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
