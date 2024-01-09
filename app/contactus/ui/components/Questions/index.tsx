import Image from "next/image";
const QuestionsData = [
  {
    number: "1",
    question: "هل تقدمون الدعم والصيانة المستمرة بعد اكتمال المشروع؟",
    answer:
      "تقدم Deep stark مجموعة من الخدمات بما في ذلك التصميم والهندسة وإدارة المشاريع. نحن متخصصون في تصميم تجربة المستخدم، وتطوير الويب، وتطوير تطبيقات الهاتف المحمول، وتطوير البرامج المخصصة، والعلامات التجارية والهوية، والمزيد.",
  },
  {
    number: "2",
    question: "هل تقدمون الدعم والصيانة المستمرة بعد اكتمال المشروع؟",
    answer:
      "تقدم Deep stark مجموعة من الخدمات بما في ذلك التصميم والهندسة وإدارة المشاريع. نحن متخصصون في تصميم تجربة المستخدم، وتطوير الويب، وتطوير تطبيقات الهاتف المحمول، وتطوير البرامج المخصصة، والعلامات التجارية والهوية، والمزيد.",
  },
  {
    number: "3",
    question: "هل تقدمون الدعم والصيانة المستمرة بعد اكتمال المشروع؟",
    answer:
      "تقدم Deep stark مجموعة من الخدمات بما في ذلك التصميم والهندسة وإدارة المشاريع. نحن متخصصون في تصميم تجربة المستخدم، وتطوير الويب، وتطوير تطبيقات الهاتف المحمول، وتطوير البرامج المخصصة، والعلامات التجارية والهوية، والمزيد.",
  },
  {
    number: "4",
    question: "هل تقدمون الدعم والصيانة المستمرة بعد اكتمال المشروع؟",
    answer:
      "تقدم Deep stark مجموعة من الخدمات بما في ذلك التصميم والهندسة وإدارة المشاريع. نحن متخصصون في تصميم تجربة المستخدم، وتطوير الويب، وتطوير تطبيقات الهاتف المحمول، وتطوير البرامج المخصصة، والعلامات التجارية والهوية، والمزيد.",
  },
  {
    number: "5",
    question: "هل تقدمون الدعم والصيانة المستمرة بعد اكتمال المشروع؟",
    answer:
      "تقدم Deep stark مجموعة من الخدمات بما في ذلك التصميم والهندسة وإدارة المشاريع. نحن متخصصون في تصميم تجربة المستخدم، وتطوير الويب، وتطوير تطبيقات الهاتف المحمول، وتطوير البرامج المخصصة، والعلامات التجارية والهوية، والمزيد.",
  },
  {
    number: "6",
    question: "هل تقدمون الدعم والصيانة المستمرة بعد اكتمال المشروع؟",
    answer:
      "تقدم Deep stark مجموعة من الخدمات بما في ذلك التصميم والهندسة وإدارة المشاريع. نحن متخصصون في تصميم تجربة المستخدم، وتطوير الويب، وتطوير تطبيقات الهاتف المحمول، وتطوير البرامج المخصصة، والعلامات التجارية والهوية، والمزيد.",
  },
  {
    number: "7",
    question: "هل تقدمون الدعم والصيانة المستمرة بعد اكتمال المشروع؟",
    answer:
      "تقدم Deep stark مجموعة من الخدمات بما في ذلك التصميم والهندسة وإدارة المشاريع. نحن متخصصون في تصميم تجربة المستخدم، وتطوير الويب، وتطوير تطبيقات الهاتف المحمول، وتطوير البرامج المخصصة، والعلامات التجارية والهوية، والمزيد.",
  },
  {
    number: "8",
    question: "هل تقدمون الدعم والصيانة المستمرة بعد اكتمال المشروع؟",
    answer:
      "تقدم Deep stark مجموعة من الخدمات بما في ذلك التصميم والهندسة وإدارة المشاريع. نحن متخصصون في تصميم تجربة المستخدم، وتطوير الويب، وتطوير تطبيقات الهاتف المحمول، وتطوير البرامج المخصصة، والعلامات التجارية والهوية، والمزيد.",
  },
  {
    number: "9",
    question: "هل تقدمون الدعم والصيانة المستمرة بعد اكتمال المشروع؟",
    answer:
      "تقدم Deep stark مجموعة من الخدمات بما في ذلك التصميم والهندسة وإدارة المشاريع. نحن متخصصون في تصميم تجربة المستخدم، وتطوير الويب، وتطوير تطبيقات الهاتف المحمول، وتطوير البرامج المخصصة، والعلامات التجارية والهوية، والمزيد.",
  },
  {
    number: "10",
    question: "هل تقدمون الدعم والصيانة المستمرة بعد اكتمال المشروع؟",
    answer:
      "تقدم Deep stark مجموعة من الخدمات بما في ذلك التصميم والهندسة وإدارة المشاريع. نحن متخصصون في تصميم تجربة المستخدم، وتطوير الويب، وتطوير تطبيقات الهاتف المحمول، وتطوير البرامج المخصصة، والعلامات التجارية والهوية، والمزيد.",
  },
];

export default function QuestionList() {
  return (
    <div>
      {/* Image */}
      <QuestionImage />
      {/* Questions */}
      <div className="mx-auto flex justify-center w-full">
        <Questions conditionFunc={(_, idx) => idx < QuestionsData.length / 2} />
        <Questions
          conditionFunc={(_, idx) => QuestionsData.length / 2 <= idx}
        />
      </div>
    </div>
  );
}

function QuestionImage() {
  return (
    <div className="relative w-full">
      <div
        className="absolute z-10"
        style={{
          background:
            "linear-gradient(90deg, #000000 0%, #000000 50%, lightgray 50%, lightgray 100%)",
        }}
      />
      <div className="absolute z-[99] top-0 left-0 bottom-0 right-0 flex-col justify-center items-center gap-2.5 inline-flex ">
        <div className="text-w text-4xl font-semibold leading-normal">
          أسئلة مكررة
        </div>
        <div className="text-white text-lg font-semibold leading-[1.5] tracking-tighter">
          لا يزال لديك أي أسئلة؟ تواصل مع فريقنا عبر Deep Stark.com
        </div>
      </div>
      <Image
        src="/images/contactus/question.jpeg"
        alt="question section"
        className="grayscale w-full h-[300px] object-cover object-center  relative z-0"
        width={1440}
        height={300}
      />
    </div>
  );
}

function Questions({
  conditionFunc,
}: {
  conditionFunc: (item: any, index: number) => boolean;
}) {
  return (
    <div className="flex flex-col ">
      {QuestionsData.filter(conditionFunc).map((question) => (
        <QuestionBlock {...question} />
      ))}
    </div>
  );
}

function QuestionBlock({
  number,
  question,
  answer,
}: {
  number: string;
  question: string;
  answer: string;
}) {
  return (
    <div className="flex items-center px-10 py-6 self-stretch gap-12 p-10 border border-[#262626] w-full">
      <span
        className="py-4 px-5 rounded-[8px] border border-[#2E2E2E]"
        style={{
          background:
            "linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%)",
        }}>
        {number}
      </span>
      <p className="text-Absolute-White font-Barlow text-base font-medium leading-[1.5]">
        {question}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="26"
        viewBox="0 0 27 26"
        fill="none">
        <path
          d="M14.4742 6.1752C14.4742 5.63672 14.0377 5.2002 13.4992 5.2002C12.9607 5.2002 12.5242 5.63672 12.5242 6.1752V12.0252H6.67422C6.13574 12.0252 5.69922 12.4617 5.69922 13.0002C5.69922 13.5387 6.13574 13.9752 6.67422 13.9752L12.5242 13.9752V19.8252C12.5242 20.3637 12.9607 20.8002 13.4992 20.8002C14.0377 20.8002 14.4742 20.3637 14.4742 19.8252V13.9752H20.3242C20.8627 13.9752 21.2992 13.5387 21.2992 13.0002C21.2992 12.4617 20.8627 12.0252 20.3242 12.0252H14.4742V6.1752Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
