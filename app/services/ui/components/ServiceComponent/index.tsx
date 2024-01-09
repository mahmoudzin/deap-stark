import { SpecialText } from "@/app/ui/components";

const element = {
  width: "100%",
  height: "650px",
  borderRadius: "40px 300px 300px 40px",
  background: "linear-gradient(180deg, #07aace, 0%, #051714 100%)",
  // Other styles as needed
};

const gradientBorder = {
  position: "relative",
  boxShadow:
    "0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
  borderRadius: "40px 300px 300px 40px",
  background:
    "linear-gradient(227deg, #089FDA 0%, #02D39C 103.55%, rgba(8, 159, 218, 0.00) 103.56%)",
  padding: "3px",
};
function positionElements(
  containerHeight: number,
  i: number,
  numElements: number
) {
  const spaceBetween = containerHeight / (numElements - 1);

  const topPosition = i * spaceBetween - 3;
  // const sidePostion = ()
  // Apply the positions to your elements (this is just a sample output)
  return topPosition;
}
const serviceIdeas = [
  {
    id: 1,
    number: "01",
    idea: "التفكير الابداعي",
    desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
    position: positionElements(360, 0, 5),
    sidePosition: 174 - 3,
  },
  {
    id: 2,
    number: "02",
    idea: "التفكير الابداعي",
    desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
    position: positionElements(360, 1, 5),
    sidePosition: 20,
  },
  {
    id: 3,
    number: "03",
    idea: "التفكير الابداعي",
    desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
    position: positionElements(360, 2, 5),
    sidePosition: -3,
  },
  {
    id: 4,
    number: "04",
    idea: "التفكير الابداعي",
    desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
    position: positionElements(360, 3, 5),
    sidePosition: 20,
  },
  {
    id: 5,
    number: "05",
    idea: "التفكير الابداعي",
    desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
    position: positionElements(360, 4, 5),
    sidePosition: 174 - 3,
  },
];

export default function ServiceComponent() {
  return (
    <div style={gradientBorder} className="mb-[100px]">
      <div style={element} className="flex justify-between py-[138px]">
        <div className="rtl:mr-[330px] ltr:mr-[330px] relative w-[174px] flex flex-col justify-center">
          {/* Content */}

          <div className="w-[350px] h-[200px]  py-2 px-4  rtl:mr-[50px] ltr:ml-[50px] ">
            <SpecialText
              text="تصميم الهوية والجرافيك"
              textSize="text-2xl"
              styleOption={2}
            />
            <p className="text-white text-base font-semibold leading-[1.5] capitalize mt-3">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </p>
          </div>
          <div className="absolute top-0 rtl:right-0 ltr:left-0">
            {serviceIdeas.map((item, idx) => (
              <AbsoluteElement key={item.id} {...item} />
            ))}
            <svg
              width="174"
              height="360"
              viewBox="0 0 174 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_139_2129)">
                <rect
                  x="-6"
                  y="431.025"
                  width="355.002"
                  height="355.002"
                  rx="177.501"
                  transform="rotate(-135 -6 431.025)"
                  stroke="#9CA3AF"
                  stroke-width="5"
                />
              </g>
              <defs>
                <clipPath id="clip0_139_2129">
                  <rect
                    width="360"
                    height="174"
                    fill="white"
                    transform="matrix(0 1 -1 0 174 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const circalStyle = {
  width: "15px",
  height: "15px",
  transform: "rotate(-89deg)",
  borderRadius: "9999px",
  background: "#9CA3AF",
  display: "block",
};

function AbsoluteElement({
  id,
  number,
  idea,
  desc,
  position,
  sidePosition,
}: {
  id: number;
  number: string;
  idea: string;
  desc: string;
  position: number;
  sidePosition: number;
}) {
  return (
    <div
      className={`absolute flex`}
      style={{ top: `${position}px`, right: `${sidePosition}px` }}>
      <p>{idea}</p>
      <span style={circalStyle} />
    </div>
  );
}
