import FAQItem from "@/components/FAQItem";
import type { FAQ } from "@/lib/faqs";

export default function FAQColumns({ faqs }: { faqs: FAQ[] }) {
  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];

  return (
    <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
      {columns.map((column, index) => (
        <div key={index}>
          {column.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      ))}
    </div>
  );
}
