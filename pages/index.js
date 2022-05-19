import Head from "next/head";
import Desktop from "../components/desktop/Desktop";
import Taskbar from "../components/taskbar/Taskbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Windows 11</title>
        <link rel="icon" href="/logo.png" />
        <meta name="title" content="Windows 11" />
        <meta
          name="description"
          content="Windows 11 clone made with 💛 using NextJS and TailwindCSS by Vishwa Gaurav."
        />
        <meta name="copyright" content="VishwaGauravIn" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://win.itsvg.in" />
        <meta property="og:title" content="Windows 11" />
        <meta
          property="og:description"
          content="Windows 11 clone made with 💛 using NextJS and TailwindCSS by Vishwa Gaurav."
        />
        <meta property="og:image" content="https://win.itsvg.in/webimg.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://win.itsvg.in" />
        <meta property="twitter:title" content="Windows 11" />
        <meta
          property="twitter:description"
          content="Windows 11 clone made with 💛 using NextJS and TailwindCSS by Vishwa Gaurav."
        />
        <meta
          property="twitter:image"
          content="https://win.itsvg.in/webimg.png"
        />
      </Head>

      <body className="text-white h-[864px] w-[1536px]">
        <Desktop />
        <Taskbar />
      </body>
    </>
  );
}
