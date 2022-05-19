import Head from "next/head";
import Desktop from "../components/desktop/Desktop";
import Taskbar from "../components/taskbar/Taskbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Windows 11</title>
        <meta name="description" content="Windows 11 clone made with 💛 using NextJS and TailwindCSS by Vishwa Gaurav." />
        <link rel="icon" href="/logo.png" />
      </Head>

      <body className="text-white h-[864px] w-[1536px]">
        <Desktop />
        <Taskbar />
      </body>
    </>
  );
}
