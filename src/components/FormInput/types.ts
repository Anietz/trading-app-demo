export enum FormInputType {
    text = 'text',
    email = 'email',
    password = 'password',
    number = 'number',
}

export interface FormInputProps{
    value?: any;
    type:FormInputType;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    placeholder?: string;
    label?: string;
    name?: string;
    id?: string;
    for?: string;
    styleContainer?: React.CSSProperties;
    pattern?: string;
    min?: number;
    max?: number;
}