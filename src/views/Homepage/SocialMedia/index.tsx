import styles from "./styles.module.sass";

const SocialMedia = () => {
  return (
    <section className={styles.social_media}>
      <div className="container">
        <div
          className={`${styles.title} d-flex justify-content-between align-items-center`}
        >
          <h2 className={styles.bar}>Social Media</h2>
          <div className="buttons">
            <a
              className="btn fill"
              href="https://x.com/0x_SpaceDAO"
              target="_blank"
              rel="noreferrer"
            >
              View More
            </a>
          </div>
        </div>
        <div className={styles.board}>
          <a
            className="twitter-timeline"
            href="https://x.com/0x_SpaceDAO"
            data-tweet-limit="1"
            data-width="500"
          >
            Tweets by @0x_SpaceDAO
          </a>
          <script async src="https://platform.twitter.com/widgets.js" />
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
