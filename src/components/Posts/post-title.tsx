import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1
      className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
      style={{
        fontSize: "3rem",
        maxWidth: "80rem",
        textAlign: "center",
        margin: "0 auto",
      }}
    >
      {children}
    </h1>
  );
};

export default PostTitle;
