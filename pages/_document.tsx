import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* favicon */}
        <link rel="icon" href="https://avatars.githubusercontent.com/u/56214343?v=4" />
      </Head>
      <body className='bg-[#1a1a1a] box-border border-0 border-solid border-gray-200 text-white flex h-screen w-screen items-center justify-center m-0 p-0'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
