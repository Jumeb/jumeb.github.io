// Icons interfaces

export interface Icons {
    className: string;
}


// Buttons Interfaces

export interface Button {
    text: string;
    disabled?: boolean;
    type?: ButtonType;
    onClick?: () => void;
}

export enum ButtonType {
    PRI,
    SEC,
}

export interface SocialLink {
    to: string;
    children: JSX.Element;
}

export interface TopButton {
    show: boolean;
}


// Navbar intefaces

export interface Navprops {
    position: number;
}

export interface Navlinks {
    to: string,
    label: string,
}


// Card interfaces

export interface ServiceCard {
    title:string;
    description: string;
    icon: JSX.Element;
}

export interface MyworkCard {
    img: string;
    title: string;
    type: string;
    link: string;
    badges: string[];
}


// Input interfaces 

export interface Input {
    label: string;
    placeholder: string;
    type?: string;
}
