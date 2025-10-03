import Link from "next/link";

export default function DashbordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]   p-4">
        <Link
          href="/"
          className=" flex items-center justify-center lg:justify-start gap-2"
        >
          {/* <Image src="/logo.png" alt="logo" width={32} height={32} /> */}
          <h1>LOGO</h1>
          <span className="hidden lg:block">dashbord</span>
        </Link>
        <Link
          href="/blog"
          className=" flex items-center justify-center lg:justify-start gap-2"
        >
          <span>blog</span>
        </Link>
        <Link
          href="/admin"
          className=" flex items-center justify-center lg:justify-start gap-2"
        >
          <span>admin</span>
        </Link>
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        {children}
      </div>
    </div>
  );
}
