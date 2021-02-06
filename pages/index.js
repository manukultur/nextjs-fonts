import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="italic text-6xl">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div className="prose font-sans">
          <p>This is a prose text.</p>
        </div>
        <div className="prose font-display">
          <p>This is a prose text.</p>
        </div>
        <h1 className="font-italic text-6xl">This is valentines day</h1>
        <h1 className="font-display uppercase text-6xl">
          This is valentines day
        </h1>
      </main>
    </div>
  );
}
