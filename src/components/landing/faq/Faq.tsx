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
      question: "Is this template free?",
      answer: "Yes. It is a free ChadcnUI template.",
      value: "item-1",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
      value: "item-2",
    },
    {
      question:
        "Lorem ipsum dolor sit amet  Consectetur natus dolores minus quibusdam?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?",
      value: "item-3",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      value: "item-4",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
      value: "item-5",
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