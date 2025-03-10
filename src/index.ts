// Debug
(function (global) {

    (global as GlobalThis).debug = function (
        message: string,
        ...data: unknown[]
    ) {

        const textStyle = 'color: pink;';
        const textBoldStyle = 'color: pink; font-weight: bold;';
    
        // No data passed
        if (data.length === 0) {
            console.log(`%c[DEBUG] %c${message}`, textBoldStyle, textStyle);
            return;
        }
    
        // Data passed
        console.log('%c---------------------------', textStyle);
    
        if (message.includes('%d')) {
    
            let formattedMessage = message;
            const dataCopy = [...data];
            const placeholders = formattedMessage.match(/%d/g) || [];
    
            placeholders.forEach(() => {
                const value = dataCopy.shift();
                formattedMessage = formattedMessage.replace("%d", String(value));
            });
    
            console.log(`%c[DEBUG] %c${formattedMessage}`, textBoldStyle, textStyle);
    
        } else {
    
            console.log(`%c[DEBUG] %c${message}`, textBoldStyle, textStyle);
    
        }
    
        data.forEach((value) => {
            console.log(value);
        });
        console.log('%c---------------------------', textStyle);
    
    }
    
    // CommonJS & ES Modules Support
    if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
        module.exports = { debug: global.debug }; // CommonJS
    }

    // ES Modules Support
    if (typeof exports === "undefined") {
        (global as any).debug = global.debug;
    }

})(globalThis as any);

// ES Module support
export const debug = (globalThis as unknown as GlobalThis).debug;