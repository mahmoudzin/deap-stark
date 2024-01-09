const styleObjectOne = {
  background: "linear-gradient(180deg, #00EB9D 0%, #009B81 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const styleObjectTwo = {
  backgroundImage:
    "linear-gradient(227deg, #089FDA 0%, #02D39C 103.55%, rgba(8, 159, 218, 0.00) 103.56%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function SpecialText({
  text,
  textSize,
  fontWeight = "font-semibold",
  styleOption = 1,
}: {
  text: string;
  textSize: string;
  fontWeight?: string;
  styleOption?: 1 | 2;
}) {
  return (
    <span
      className={`text-teal-500 ${textSize} ${fontWeight} `}
      style={styleOption === 1 ? styleObjectOne : styleObjectTwo}>
      {text}
      {""}
    </span>
  );
}
