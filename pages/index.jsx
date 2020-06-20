import Head from "next/head";
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Matthew Ewan-Laws</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <div className="main-container">
          <Nav />
          <div className="right">
            <div className="main-title">
              <h1>Matthew <nobr>Ewan-Laws</nobr></h1>
              <h2>Web Developer</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
