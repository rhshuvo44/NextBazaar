"use client";

import useInView from "@/lib/useInView";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: string;
  direction?: "up" | "left" | "right" | "zoom" | "fade";
  delay?: number;
  className?: string;
  as?: "div" | "section";
}

const directionMap: Record<NonNullable<AnimateOnScrollProps["direction"]>, string> = {
  up: "animate-fade-in-up",
  left: "animate-slide-left",
  right: "animate-slide-right",
  zoom: "animate-zoom-in",
  fade: "animate-fade-in",
};

export default function AnimateOnScroll({
  children,
  animation,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useInView();
  const animClass = animation ?? directionMap[direction];

  return (
    <Tag
      ref={ref}
      className={`${isVisible ? animClass : "opacity-0"} ${className}`}
      style={{ animationFillMode: "both", animationDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}