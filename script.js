function determineZodiacSign(year) {
    let yearDividedBy12 = year % 12;
    let zodiac;
    switch (yearDividedBy12){
        case 1:
            zodiac = 'Rooster';
            break;
        case 2:
            zodiac = 'Dog';
            break;
        case 3:
            zodiac = 'Pig';
            break;
        case 4:
            zodiac = 'Rat';
            break;
        case 5:
            zodiac = 'Ox';
            break;
        case 6:
            zodiac = 'Tiger';
            break;
        case 7:
            zodiac = 'Rabbit';
            break;
        case 8:
            zodiac = 'Dragon';
            break;
        case 9:
            zodiac = 'Snake';
            break;
        case 10:
            zodiac = 'Horse';
            break;
        case 11:
            zodiac = 'Goat';
            break;
        case 0:
            zodiac = 'Monkey';
            break;
    }
    return zodiac;
}