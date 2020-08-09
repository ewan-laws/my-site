import Layout from "../components/LayoutSideNav";
import PageHeading from "../components/PageHeading";

const ImageCircular = ({ src, ...props }) => (
  <>
    <style jsx>{`
      .circular-image {
        border: 1px solid black;
        border-radius: 50%;
        box-shadow: 3px 3px 9px gray;
      }
    `}</style>
    <img className="circular-image" src={src} {...props} />
  </>
);

const PaperContainer = ({ children }) => (
  <>
    <style jsx>
      {`
        .container {
          padding: 8px 20px;
          border: 1px solid lightgray;
          border-radius: 3px;
          box-shadow: 4px 4px 8px lightgray;
          background-color: white;
          max-width: 800px;
          margin: auto;
          margin-bottom: 20px;
        }
      `}
    </style>
    <div className="container">{children}</div>
  </>
);

const SubHeader = ({ children }) => (
  <>
    <style jsx>{`
      .sub-header {
        font-size: 25px;
        font-weight: bold;
      }
    `}</style>
    <h2>{children}</h2>
  </>
);

const About = () => (
  <Layout>
    <style jsx>{`
      .left {
        float: left;
      }
      .about-container {
        line-height: 30px;
        font-size: 22px;
      }
    `}</style>
    <PageHeading>About Me</PageHeading>
    <PaperContainer>
      <div className="about-container">
        <div style={{ width: 250, margin: "30px auto 20px auto" }}>
          <ImageCircular src="/me.png" height={250} />
        </div>
        <SubHeader>My Personality</SubHeader>
        <p>
          People would describe me as generally a happy person who enjoys being
          around others. I like a good laugh, but take my work seriously. I
          particularly find a lot of joy helping others out and share my
          knowledge.
        </p>
        <p>Learning new things is practically a hobby of mine.</p>
        <SubHeader>My Programming</SubHeader>
        <p>
          My journey in web development began in my mid-teens when I began to
          play around with JavaScript. The state of JS in the mid 2000s was
          pretty rough. Alas, despite this I was hooked.
        </p>
        <p>
          Programming has captivated me since, I couldn't imagine having any
          other profession. It is problem solving for a living and requires
          equal parts logic and reasoning as it does creativity.
        </p>
        <p>
          Fast-forward to now, things may not be perfect in the web-dev world,
          but I believe it has never been better, what we can do with web
          technologies are seemingly boundless. I feel privileged to be
          programming in these times.
        </p>
        <p>
          I also endevour to keep on top of new developments, technologies, and
          best practices. It is definitely a constantly moving target. I also
          know that there is a balance to be had between embracing the shiny new
          and embracing the stable and battle tested.
        </p>
        <SubHeader>My Hobbies and Interests</SubHeader>
        <div style={{ float: "left", marginRight: 40 }}>
          <ImageCircular src="/me2.jpg" height={250} />
        </div>
        <p>
          When I'm not programming I'm first and foremost spending time with my
          wife and baby, who was born during lockdown.
        </p>
        <p>
          Pre baby we both enjoyed a good cycle ride, now we try and get out for
          walks as often as possible.
        </p>
        <p>
          I love a good fantasy, or sci-fi book, though I'll read any genre if
          it's good.
        </p>
        <div
          style={{
            float: "right",
          }}
        >
          <ImageCircular src="/me.jpg" height={250} />
        </div>
        <p>
          Before lockdown I would enjoy meeting with friends an family to play
          board games. Currently that is restricted to the Internet.
        </p>
        <p style={{ marginBottom: 100 }}>
          We also have a projector and sound system set up our second sitting
          room, we like our films!
        </p>
      </div>
    </PaperContainer>
  </Layout>
);

export default About;
