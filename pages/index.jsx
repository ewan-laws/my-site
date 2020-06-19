import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Matthew Ewan-Laws</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main-container">
          <div className="left">
            <div className="nav">
              <ul className="nav-list">
                <li className="link link-1">About</li>
                <li className="link link-2">Projects</li>
                <li className="link link-3">Contact</li>
                <li className="link link-4">CV</li>
              </ul>
              <div>
              </div>
            </div>
          </div>
            <div className="vertical-divider" />
          <div className="right">
            <div className="main-title">
              <h1>Matthew Ewan-Laws</h1>
              <h2>Web Developer</h2>
            </div>
          </div>
        </div>
        <div className="content">
          <p>Hello world</p>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
