import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div
      className="max-w-2xl mx-auto"
      style={{ maxWidth: "42rem", margin: "0 auto" }}
    >
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
