export default function SpreatedLine({
  num,
  title,
  center = false,
  reverse = false,
}: {
  num: string;
  title: string;
  center?: boolean;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex gap-3 ${center ? "justify-center" : "jsutify-start"} ${
        reverse && "flex-row-reverse"
      } items-center`}>
      <div className="whitespace-nowrap">
        {" "}
        <span className="text-teal-500 text-base font-semibold  tracking-tight">
          {num} |
        </span>
        <span className="text-stone-300 text-base font-semibold  tracking-tight">
          {" "}
        </span>
        <span className="text-white text-base font-semibold  tracking-tight">
          {title}
        </span>
      </div>
      {!center && (
        <div
          style={{
            background:
              "linear-gradient(-90deg, rgba(255, 255, 255, 0.50) -1.52%, rgba(0, 0, 0, 0.00) 109.98%)",
          }}
          className={`h-[1px] w-full`}
        />
      )}
    </div>
  );
}
