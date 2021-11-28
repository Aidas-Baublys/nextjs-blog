import Link from "next/link";

function FirstPost() {
  return (
    <div>
      <h1>So post, much blog, wow very even</h1>
      <h4>
        Dochati -{" "}
        <Link href="/">
          <a>bey!</a>
        </Link>
      </h4>
    </div>
  );
}

export default FirstPost;
