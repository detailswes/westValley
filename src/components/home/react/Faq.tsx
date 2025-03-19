"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Data for FAQs
const faqItems = [
  {
    question: (
      <div>
        Comfort-First Medical Detox: <br /><span className="text-sm">Immediate Relief, Minimal withdrawal</span>
      </div>
    ),
    answer: (
      <div>
        <p className="mb-4">
        We understand the anxiety around detox. That's why we've designed our medical detox program to prioritize your comfort above all else. Utilizing evidence-based protocols, and medication when appropriate, our expert medical team is dedicated to minimizing withdrawal symptoms and ensuring you feel as safe and comfortable as possible throughout the process. Your well-being is our central focus, and we're here to support you every step of the way.


        </p>
       
      </div>
    ),
  },
  {
    question: (
      <div>
        24/7 Expert Medical Team: <br /> <span className="text-sm">Around the Clock Support from Expert who Understand</span> 
      </div>
    ),
    answer: "Your safety and well-being are in the hands of deeply experienced and compassionate medical professionals, available to you 24 hours a day, 7 days a week. Our board-certified physicians and dedicated nursing staff are experts in managing complex detox cases, providing continuous monitoring and adjusting your personalized care plan to meet your evolving needs with empathy and skill.",
  },
  {
    question: (
      <div>
        Concierge-Level Care: <br /> <span className="text-sm">Effortless Admissions, Treatment Designed just for you</span> 
      </div>
    ),
    answer: "We believe getting help should be as seamless and stress-free as possible. Our concierge-level intake handles all the logistics – from your insurance, to travel arrangements, to your private curbside arrival. In our exclusive 6-client setting, we go beyond standard care to create a truly personalized detox plan, ensuring your individual needs and preferences are at the heart of your treatment experience.",
  },
  {
    question: (
      <div>
       Private, Retreat-Like Setting: <br /> <span className="text-sm">Nutritious Meals, Comfortable Accommodations & Wellness Focused</span> 
      </div>
    ),
    answer: "Our boutique facility offers a peaceful, upscale setting designed for deep healing, free from distractions and triggers.",
  },
  {
    question: (
      <div>
        Verified Results: <br /> <span className="text-sm">Experience why Over 125 Clients Rated Us 5-stars</span> 
      </div>
    ),
    answer: "Unlike large facilities, we focus all available resources on a maximum of 6 clients at a time, ensuring your 5-star treatment experience is exclusively tailored for you.",
  },
 
];

export default function Faq() {
  return (
    <>
      <div className="border-dashed border-t-2 border-[#E6D8CE] mt-10 md:my-20" />
      <section className="my-10 md:mt-[68px] md:mb-[90px]">
        <h2 className="text-4xl md:text-[56px] text-center font-normal bg-text-gradient text-transparent bg-clip-text font-Frank leading-[42px] md:leading-[62px] ">
        Why Choose West Valley Detox Center
        </h2>
        <div className="w-full max-w-[200px] h-[1px] mt-4 orb-gradient-line mx-auto"></div>

        <div className="mt-6 md:mt-[53px] mx-auto w-full max-w-[1200px] bg-[#FDF7F3] py-12 md:py-[87px] px-4 rounded-[20px]">
          <div className="w-full max-w-[896px] mx-auto">
            <Accordion type="single" defaultValue="item-1" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className={`mt-${
                    index > 0 ? 7 : 0
                  } transition-shadow  hover:shadow-lg hover:shadow-primary`}
                >
                  <AccordionTrigger className="font-normal font-Inter text-[#1F1168]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#1F1168] font-normal">
                    {typeof item.answer === "string" ? (
                      <p>{item.answer}</p>
                    ) : (
                      item.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
