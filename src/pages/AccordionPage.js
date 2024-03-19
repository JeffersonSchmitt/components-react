import Accordion from "../components/Accordion";

function AccordionPage() {

  const items = [
    {
      id: 0,
      label: 'you can use react for this project?',
      content: 'Yeah, i do'
    },
    {
      id: 1,
      label: 'you can use react for this project?',
      content: 'Yeah, i do'
    },
    {
      id: 2,
      label: 'you can use react for this project?',
      content: 'Yeah, i do'
    }
  ]

  return (
    <Accordion items={items} />
  );
}

export default AccordionPage;
