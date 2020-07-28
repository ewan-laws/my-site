import Link from "next/link";

const MyLink = ({ external, href, children }) =>
  external ? (
    <a href={href}>{children}</a>
  ) : (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );

export default MyLink;
