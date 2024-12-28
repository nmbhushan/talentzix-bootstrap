export function convertStringCase(str: string, convertType: 'pascal' | 'camel' | 'upper' | 'lower', preserveSymbol: boolean = true,): string {
    let newStr = str;
    if (!preserveSymbol) {
        newStr = newStr.replace(/-|_|(\s)/g, ' ');
    }

    switch (convertType) {
        case 'pascal':
            return newStr.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
            });
        case 'camel':
            return newStr.charAt(0).toLowerCase() + newStr.slice(1).replace(/\s(\w)/g, function (match, group1) {
                return group1.toUpperCase();
            });
        case 'upper':
            return newStr.toUpperCase();
        case 'lower':
            return newStr.toLowerCase();
        default:
            return str;
    }
}
