export const capitalize = (text: string) => text[0].toUpperCase() + text.slice(1);

export const consoleGreeting = (greeting: string, component: string) => console.log(`${greeting}${component}`);
