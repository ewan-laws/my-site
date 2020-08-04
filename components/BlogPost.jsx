const BlogPost = ({ title, author, date, content }) => (
  <>
    <style global jsx>{`
      .blog-title {
        font-weight: normal;
        font-size: 40px;
        margin-bottom: 10px;
      }
      .blog-author {
        display: inline-block;
        background-color: darkgray;
        color: #ffffef;
        border-radius: 4px;
        padding: 6px 10px;
        margin-bottom: 20px;
      }
      .blog p,
      li {
        font-size: 20px;
        line-height: 30px;
      }
      .blog h1 {
      }
      .blog h2 {
        font-weight: normal;
      }
    `}</style>
    <style jsx>{`
      article {
        max-width: 1000px;
      }
    `}</style>
    <article className="blog">
      <h1 className="blog-title">{title}</h1>
      <p className="blog-author">By {author}</p>
      <div>{content}</div>
    </article>
  </>
);

export default BlogPost;
