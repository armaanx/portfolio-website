import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{"Armaan's Portfolio"}</title>
      </Head>
      {/* Header */}
      <Header />
    </div>
  );
}
