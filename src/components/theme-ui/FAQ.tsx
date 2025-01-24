import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Talentzix, and how does it work?",
    answer:
      "Talentzix is an online platform designed to help users create professional resumes effortlessly. Simply choose a template, input your details, and generate a polished resume in minutes.",
    value: "item-1",
  },
  {
    question: "Is Talentzix free to use?",
    answer:
      "Talentzix offers both free and premium plans. The free plan includes basic templates, while the premium plan provides access to advanced templates and additional customization features.",
    value: "item-2",
  },
  {
    question:
      "What file formats can I download my resume in?",
    answer:
      "Resumes can be downloaded in commonly used formats such as PDF, DOCX, and TXT, ensuring compatibility with most job application systems.",
    value: "item-3",
  },
  {
    question: "Can I customize my resume templates?",
    answer: "Yes, all templates are fully customizable. You can adjust fonts, colors, layout, and sections to suit your preferences and needs.",
    value: "item-4",
  },
  {
    question:
      "Does Talentzix offer guidance on what to include in a resume?",
    answer:
      "Absolutely! Talentzix provides pre-written content suggestions for various industries and roles, helping you craft a professional resume even if you're unsure where to start.",
    value: "item-5",
  },

  {
    question:
      "Is my personal information secure on Talentzix?",
    answer:
      "Yes, Talentzix prioritizes your privacy and data security. Your personal information is stored securely and never shared with third parties.",
    value: "item-6",
  },
  {
    question:
      "Can I create resumes for different job applications?",
    answer:
      "Yes, you can create multiple resumes for different roles or industries. Save and manage them conveniently within your account.",
    value: "item-7",
  },
  {
    question:
      "Does Talentzix offer additional career tools or services?",
    answer:
      "Along with resume building, Talentzix offers cover letter templates, interview tips, and career guidance resources to help you succeed in your job search.",
    value: "item-8",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="flex items-center justify-center bg-white py-14"
    >
      <div className="container bg-white">
        <p className="text-semibold text-[11px] uppercase bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text mx-auto text-transparent flex justify-center uppercase">Faq</p>
        <h2 className="text-[24px] md:text-[35px] mb-10 capitalize max-w-[610px] leading-tight text-[#17012C] font-semibold mx-auto">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="max-w-[980px] mx-auto">
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
              className="border-b border-[#000000]"
            >
              <AccordionTrigger className="flex items-center justify-between text-[21px] font-medium text-[#000000] py-4">
                {question}
                
              </AccordionTrigger>

              <AccordionContent className="text-[14px] text-[#504E4E] pb-4">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

   
