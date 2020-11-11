declare module '*.html' {
    import { IContainer } from '@aurelia/kernel';
    import { BindableDefinition } from '@aurelia/runtime';
    export const name: string;
    export const template: string;
    export default template;
    export const dependencies: string[];
    export const containerless: boolean | undefined;
    export const bindables: Record<string, BindableDefinition>;
    export const shadowOptions: { mode: 'open' | 'closed' } | undefined;
    export function register(container: IContainer);
}

declare module '*.css';
declare module '*.scss';
declare module "*.svg" {
    const value: any;
    export = value;
}

