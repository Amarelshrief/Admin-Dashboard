import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function HelpCompo() {
  return (
    <main className="">
      <div>
        <h1 className="text-3xl">FAQ Help</h1>
      </div>
      <div className="mt-4 text-gray-500">
        <p>Frequently Asked Questions Page</p>
      </div>
      <div className="mt-4">
        <div className="text-2xl mb-6">
          <Accordion type="single" collapsible>
            <AccordionItem
              className="bg-[#eceff1] hover:bg-gray-200 duration-200 rounded-sm text-gray-700"
              value="item-1"
            >
              <AccordionTrigger className="cursor-pointer text-2xl p-4">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-2xl mb-6">
          <Accordion type="single" collapsible>
            <AccordionItem
              className="bg-[#eceff1] hover:bg-gray-200 duration-200 rounded-sm text-gray-700"
              value="item-1"
            >
              <AccordionTrigger className="cursor-pointer text-2xl p-4">
                Is it styled?
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                Yes. It comes with default styles that matches the other
                components' aesthetic.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-2xl mb-6">
          <Accordion type="single" collapsible>
            <AccordionItem
              className="bg-[#eceff1] hover:bg-gray-200 duration-200 rounded-sm text-gray-700"
              value="item-1"
            >
              <AccordionTrigger className="cursor-pointer text-2xl p-4">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-2xl mb-6">
          <Accordion type="single" collapsible>
            <AccordionItem
              className="bg-[#eceff1] hover:bg-gray-200 duration-200 rounded-sm text-gray-700"
              value="item-1"
            >
              <AccordionTrigger className="cursor-pointer text-2xl p-4">
                Is it good?
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                Yes. It good for sure cuz i did it by myself.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-2xl mb-6">
          <Accordion type="single" collapsible>
            <AccordionItem
              className="bg-[#eceff1] hover:bg-gray-200 duration-200 rounded-sm text-gray-700"
              value="item-1"
            >
              <AccordionTrigger className="cursor-pointer text-2xl p-4">
                Why...?
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                Without any fucking reason.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-2xl mb-6">
          <Accordion type="single" collapsible>
            <AccordionItem
              className="bg-[#eceff1] hover:bg-gray-200 duration-200 rounded-sm text-gray-700"
              value="item-1"
            >
              <AccordionTrigger className="cursor-pointer text-2xl p-4">
                Why did you close the door ya m3lm ?
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                We will dance ya roo7 omk.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-2xl mb-6">
          <Accordion type="single" collapsible>
            <AccordionItem
              className="bg-[#eceff1] hover:bg-gray-200 duration-200 rounded-sm text-gray-700"
              value="item-1"
            >
              <AccordionTrigger className="cursor-pointer text-2xl p-4">
                Do you feel anything ?
              </AccordionTrigger>
              <AccordionContent className="pl-4">Nothing...</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-2xl mb-64">
          <Accordion type="single" collapsible>
            <AccordionItem
              className="bg-[#eceff1] hover:bg-gray-200 duration-200 rounded-sm text-gray-700"
              value="item-1"
            >
              <AccordionTrigger className="cursor-pointer text-2xl p-4">
                Is ervin smith the greatest character in the animes ?
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                Sureeeee, and he is 3mk. Shinzuuuu susagioooooooo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}

export default HelpCompo;
