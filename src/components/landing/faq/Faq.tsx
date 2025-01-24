import { ScrollArea } from "@/components/ui/scroll-area";
import HeadingOne from "../common/custom-ui/HeadingOne";

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
      answer: "Talentzix is an online platform designed to help users create professional resumes effortlessly. Simply choose a template, input your details, and generate a polished resume in minutes.",
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

const Faq = () => {
    return (
        <>
            <HeadingOne title='Talentzix Frequently Asked Questions' />
            <ScrollArea className="max-h-full overflow-y-auto">
            <Accordion
                type="single"
                collapsible
                className="w-full AccordionRoot"
            >
                {FAQList.map(({ question, answer, value }: FAQProps) => (
                <AccordionItem
                    key={value}
                    value={value}
                >
                    <AccordionTrigger className="text-left">
                    {question}
                    </AccordionTrigger>

                    <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>

            <h3 className="font-medium mt-4">
                Still have questions?{" "}
                <a
                rel="noreferrer noopener"
                href="/contact-us"
                className="text-primary transition-all border-primary hover:border-b-2"
                >
                Contact us
                </a>
            </h3>
            </ScrollArea>
        </>
    );
}

export default Faq;