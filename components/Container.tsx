type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-6 2xl:px-48 ${className}`}>{children}</div>
  );
}
