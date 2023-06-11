import Head from "next/head";

interface SeoProps {
  title: string;
}

export default function Seo({ title }: SeoProps) {
  const message = `${title} | 알약하나`;
  return (
    <Head>
      <title>{message}</title>
    </Head>
  );
}
