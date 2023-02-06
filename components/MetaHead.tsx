import Head from "next/head";

const defaultProps = {
  title: "Query Storage Slot",
  description:
    "Easily query EIP-1967 & custom storage slots for contracts on any EVM chain",
  imgRelPath: "/metaIMG.png",
  favicon: "/logo.png",
};

const MetaHead = (props: {
  title?: string;
  description?: string;
  imgRelPath?: string | null;
  date?: string;
}) => {
  const title = props.title || defaultProps.title;
  const description = props.description || defaultProps.description;
  const imgRelPath = props.imgRelPath || defaultProps.imgRelPath;

  const baseUrl = "https://storage-slots.apoorv.xyz";
  const twitterHandle = "@apoorvlathey";
  const authorName = "Apoorv Lathey";

  const pageURL = baseUrl;
  const ogImageURL = `${baseUrl}${imgRelPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={pageURL} />
      <meta property="og:type" content={"website"} />
      <meta property="og:site_name" content={authorName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" name="image" content={ogImageURL} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageURL} />
      <meta property="twitter:site" content={twitterHandle} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImageURL} />

      {/* Article */}
      {props.date && (
        <meta property="article:published_time" content={props.date} />
      )}
      <meta name="author" content={authorName} />
      <meta property="author" content={authorName} />

      <link rel="shortcut icon" href={defaultProps.favicon} type="image/png" />
    </Head>
  );
};

export default MetaHead;
