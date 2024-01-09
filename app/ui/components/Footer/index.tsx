export default function Footer() {
  return (
    <footer className="bg-[#292929]" id="footer">
      <div className="container mx-auto py-8 ">
        <Subscribe />
        <div className="flex">
          <div className="w-1/4">
            <div className="flex-col justify-center items-start gap-[25px] inline-flex">
              <div className="flex-col justify-start items-start gap-[15px] flex">
                <div className="text-white text-base font-semibold ">
                  عن الشركة
                </div>
                <div className="text-stone-300 text-sm font-semibold ">
                  تواصل معنا في أي وقت ودعنا نخلق مستقبلًا أفضل لجميع مستخدمي
                  التكنولوجيا معًا، إلى الأبد. نحن منفتحون على جميع أنواع عروض
                  التعاون وغيرها الكثير.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="justify-start items-center gap-[11px] inline-flex">
                  <div className=" text-stone-300 text-sm font-semibold ">
                    ساعات العمل
                    <br />
                    من الاثنين إلى الجمعة من 9 صباحًا حتى 5 مساءً{" "}
                  </div>
                  <div className="w-[16.67px] h-[16.67px] relative"></div>
                </div>
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <div className=" text-stone-300 text-sm font-semibold ">
                    ساعات الدعم
                    <br />
                    24/7{" "}
                  </div>
                  <div className="w-5 h-5 relative" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex-col justify-start items-start gap-[15px] inline-flex">
              <div className="text-white text-base font-semibold">خدماتنا</div>
              <div className="text-right text-stone-300 text-sm font-semibold">
                استراتيجية نظم المعلومات
              </div>
              <div className="text-right text-stone-300 text-sm font-semibold">
                برامج مخصصة
              </div>
              <div className="text-right text-stone-300 text-sm font-semibold">
                استراتيجية نظم المعلومات
              </div>
              <div className="text-right text-stone-300 text-sm font-semibold">
                برامج مخصصة
              </div>
              <div className="text-right text-stone-300 text-sm font-semibold">
                استراتيجية نظم المعلومات
              </div>
              <div className="text-right text-stone-300 text-sm font-semibold">
                برامج مخصصة
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex-col justify-start items-start gap-5 inline-flex">
              <div className="text-white text-base font-semibold ">
                تواصل معنا
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="text-white text-sm font-semibold ">
                  info@Deep Stark
                </div>
                <div className="w-5 h-5 relative" />
              </div>
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="text-white text-sm font-semibold ">
                  858-227-4878
                </div>
                <div className="w-5 h-5 relative" />
              </div>
              <div className="text-white text-base font-semibold ">
                كن علي تواصل
              </div>
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="p-3 bg-teal-500 rounded-md border border-zinc-800 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-5 h-5 relative" />
                </div>
                <div className="p-3 bg-teal-500 rounded-md border border-zinc-800 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-5 h-5 relative" />
                </div>
                <div className="p-3 bg-teal-500 rounded-md flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-5 h-5 relative" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="text-right text-white text-base font-semibold">
                مواقعنا
              </div>
              <div className="h-12 relative">
                <div className="h-12 rounded-lg border border-teal-500" />
                <div className="left-[16px] top-[17.50px] text-right text-white text-[11px] font-semibold">
                  الفرع الاول : تواصل معنا في أي وقت ودعنا نخلق{" "}
                </div>
                <div className="w-6 h-6 left-[275px] top-[12px]" />
              </div>
              <div className="h-12 relative">
                <div className="h-12 rounded-lg border border-teal-500" />
                <div className="left-[16px] top-[17.50px] text-right text-white text-[11px] font-semibold">
                  الفرع الثاني : تواصل معنا في أي وقت ودعنا نخلق{" "}
                </div>
                <div className="w-6 h-6 left-[275px] top-[12px]" />
              </div>
              <div className="h-12 relative">
                <div className="h-12 rounded-lg border border-teal-500" />
                <div className="left-[13px] top-[17.50px] text-right text-white text-[11px] font-semibold">
                  الفرع الثالث : تواصل معنا في أي وقت ودعنا نخلق{" "}
                </div>
                <div className="w-6 h-6 left-[275px] top-[12px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* subbscribe */}
    </footer>
  );
}

function Subscribe() {
  return (
    <div className="">
      <div className="flex-col justify-start items-center gap-[22px] inline-flex w-full">
        <div className="text-teal-500 text-xl font-medium font-['Manrope'] uppercase">
          اشترك
        </div>
        <div className="w-[495px] text-center text-white text-3xl font-semibold  capitalize">
          اشترك للحصول على آخر الأخبار عنا
        </div>
        <div className="px-4 py-5 rounded-[14px] border border-teal-500 justify-start items-start gap-2.5 inline-flex">
          <div className="text-white text-base font-semibold">
            أدخل عنوان بريدك الإلكتروني
          </div>
        </div>
      </div>
    </div>
  );
}
