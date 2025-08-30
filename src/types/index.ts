import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { IconType } from "react-icons";



export interface Banner {
    src: string | StaticImageData;
    brand: string;
    title: ReactNode;
    description: string;
}
export interface Deals {
    src: string | StaticImageData;
    brand: string;
    title: ReactNode;
    description: string;
}
export interface SavingZone {
    src: string | StaticImageData;
    brand: string;
    title: string;
    description: string;
}
export interface Arrivals {
    src: string | StaticImageData;
    title: string;
}
export interface Categories {
    src: string | StaticImageData;
    title: string;
}

export interface BannerSectionProps {
    image: StaticImageData | string;
    brand: string;
    title: React.ReactNode;
    subtitle?: string;
    buttonText?: string;
    buttonHref?: string;
    buttonAriaLabel?: string;
    overlayOpacity?: number;
}

export type SectionHeaderProps = {
    title: string | undefined;
    subtitle?: string;
    className?: string;
};

export interface PolymorphicButtonProps {
    href?: string;
    onClick?: () => void;
    text: string;
    icon?: IconType;
    variant?: "solid" | "outline";
    color?: "primary" | "info";
    ariaLabel?: string;
    isSubmitting?: boolean;
    className?: string;
}

export interface SavingZoneCardProps {
    src: string | StaticImageData;
    title: string;
    brand: string;
    description: string;
    className?: string;
}

export type CategoryCardProps = {
    src: string | StaticImageData;
    title: string;
    href?: string;
    showArrow?: boolean;
}