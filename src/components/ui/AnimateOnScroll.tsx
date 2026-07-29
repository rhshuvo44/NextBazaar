"use client";

import useInView from "@/lib/useInView";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: string;
  className?: string;
  as?: "div" | "section";
}

export default function AnimateOnScroll({
  children,
  animation = "animate-fade-in-up",
  className = "",
  as: Tag = "div",
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useInView();

  return (
    <Tag
      ref={ref}
      className={`${isVisible ? animation : "opacity-0"} ${className}`}
      style={{ animationFillMode: "both" }}
    >
      {children}
    </Tag>
  );
}
