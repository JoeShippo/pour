type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group border-b border-line py-5 first:border-t">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl tracking-wide text-ink marker:content-none">
        {question}
        <span className="shrink-0 font-sans text-2xl leading-none text-accent transition-transform duration-200 group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 max-w-2xl text-muted">{answer}</p>
    </details>
  );
}
