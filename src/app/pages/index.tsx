import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Автосервис</title>
            </Head>
            <main className="p-8">
                <h1 className="text-2xl font-bold">Добро пожаловать в автосервис!</h1>
            </main>
        </>
    );
}
