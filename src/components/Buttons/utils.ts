import { ReactElement, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

interface IconButtonProp {
    icon: ReactElement;
}

export type { ButtonProps, IconButtonProp }
