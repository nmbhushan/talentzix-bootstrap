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
    question: "How can I use RESUME BUILDER for free?",
    answer:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    value: "item-1",
  },
  {
    question: "How do I cancel, downgrade or delete my account?",
    answer: "You can cancel, downgrade, or delete your account from the settings page.",
    value: "item-2",
  },
  {
    question: "Can I download my resume to Word or PDF?",
    answer: "Yes, you can download your resume in Word or PDF format.",
    value: "item-3",
  },
  {
    question: "How does billing work?",
    answer: "Billing occurs monthly or annually, depending on your subscription plan.",
    value: "item-4",
  },
  {
    question: "How do I share my resume and cover letter?",
    answer: "You can share your resume and cover letter via the share options provided.",
    value: "item-5",
  },
  {
    question: "How can I customize my resume?",
    answer: "Customization options are available in the editor settings.",
    value: "item-6",
  },
  {     question: "How can I get subscription payment receipts?",
    answer: "Payment receipts can be downloaded from your account's billing section.",
    value: "item-7",
  },
  {
    question: "What can I do with a premium subscription?",
    answer: "Premium subscriptions unlock additional features and templates.",
    value: "item-8",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="flex items-center justify-center min-h-screen bg-white py-14"
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

   
