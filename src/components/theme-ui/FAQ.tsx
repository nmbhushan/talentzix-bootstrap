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
      className="flex items-center justify-center min-h-screen bg-gray-50 py-10 px-4"
    >
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h3 className="text-center text-sm font-semibold text-primary mb-2">FAQ</h3>
        <h2 className="text-center text-2xl sm:text-4xl font-bold mb-8">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
              className="border-b border-gray-300"
            >
              <AccordionTrigger className="flex items-center justify-between text-lg font-semibold text-gray-800 py-4">
                {question}
                
              </AccordionTrigger>

              <AccordionContent className="text-sm text-gray-600 pb-4">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

   
