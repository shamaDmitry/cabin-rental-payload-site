// import React from "react";

// type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

// interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
//   level?: HeadingLevel;
//   children: React.ReactNode;
// }

// const Headline: React.FC<HeadlineProps> = ({
//   level = 1,
//   children,
//   className,
//   ...rest
// }) => {
//   const tagName: React.ElementType =
//     `h${level}` as unknown as React.ElementType;
//   return React.createElement(tagName, { className, ...rest }, children);
// };

// export default Headline;

import React from "react";

export type Level = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: Level;
  as?: `h${Level}`;
  className?: string;
  children: React.ReactNode;
}

const defaultStyles: Record<Level, string> = {
  1: "text-4xl font-extrabold leading-tight",
  2: "text-3xl font-bold leading-tight",
  3: "text-2xl font-semibold leading-snug",
  4: "text-xl font-medium leading-snug",
  5: "text-lg font-medium leading-snug",
  6: "text-base font-medium leading-normal",
};

export default function Headline({
  level = 1,
  as,
  className = "",
  children,
  ...rest
}: HeadlineProps) {
  const tag: React.ElementType = `h${level}` as unknown as React.ElementType;
  const Tag = as || (tag as React.ElementType);

  const styles = defaultStyles[level];

  return (
    <Tag className={`${styles} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
