import {Html, Head, Main, NextScript} from 'next/document'
import {Metadata} from "next";

export default function RootDocument() {
    const meta:Metadata = {
        title: 'Tau Beta Pi - New York Nu Chapter',
        description: 'Tau Beta Pi - New York Nu Chapter Website.',
    }

    return (
        <Html lang="en">
            <Head/>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
