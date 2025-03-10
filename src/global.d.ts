// Make TypeScript treat this as a module
export {}; 

declare global {
    interface GlobalThis {
        debug: (message: string, ...data: unknown[]) => void;
    }
}