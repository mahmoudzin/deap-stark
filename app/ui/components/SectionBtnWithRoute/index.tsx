import Link from "next/link";

export default function SectionBtnWithRoute({ path, text }: { path: string; text: string }) {
    return (
      <Link
        href={path}
        className="w-[138px] h-[41px] px-4 py-3 bg-gradient-to-bl from-sky-500 via-teal-500 to-sky-500 rounded border border-white justify-center items-center gap-3 inline-flex">
        <div className="text-white text-sm font-semibold">{text}</div>
      </Link>
    );
  }