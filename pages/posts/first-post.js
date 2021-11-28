import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>So post</title>
      </Head>
      <h1>So post, much blog, wow very even</h1>
      <h4>
        Dochati -{" "}
        <Link href="/">
          <a>bey!</a>
        </Link>
      </h4>
    </Layout>
  );
}

export default FirstPost;
