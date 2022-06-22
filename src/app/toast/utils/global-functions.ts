export class GlobalFunctions {

    public static isValidInput(input: any): boolean {
        if (input === null || typeof input === 'undefined' || input.length === 0)
            return false;
        else
            return true;
    }

    public static isStringEqual(input1: string, input2: string,
        isCaseSensitive: boolean = false, shouldConsiderSpaces: boolean = false): boolean {

        if (!this.isValidInput(input1) || !this.isValidInput(input2))
            return false;

        let tempString1 = input1;
        let tempString2 = input2;

        if (!isCaseSensitive) {
            tempString1 = tempString1.toLowerCase();
            tempString2 = tempString2.toLowerCase();
        }

        if (!shouldConsiderSpaces) {
            tempString1 = tempString1.replace(/\s+/g, "");
            tempString2 = tempString2.replace(/\s+/g, "");
        }

        return tempString1 === tempString2 ? true : false;
    }

    public static toTitleCase(input: string, shouldChangeCase: boolean = true): string {
        if (!GlobalFunctions.isValidInput(input))
            return input;

        let sentence = input.trim().split(" ");

        if (shouldChangeCase)
            sentence = input.toLowerCase().trim().split(" ");

        return sentence.map(word => {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    public static getRandomNumber(minimum: number, maximum: number) {
        return Math.round(Math.random() * (maximum - minimum) + minimum);
    }
}