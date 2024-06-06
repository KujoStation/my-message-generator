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

class zodiacSign {
    constructor(name, years, traits, placeInRace){
        this.name = name;
        this.years = years;
        this.traits = traits;
        this.placeInRace = placeInRace;
    }
}

let rat = new zodiacSign('Rat', '1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020','Quick-witted, resourceful, versatile, kind', '1st');
let ox = new zodiacSign('Ox', '1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021','Diligent, dependable, strong, determined', '2nd');
let tiger = new zodiacSign('Tiger', '1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022','Brave, confident, competitive', '3rd');
let rabbit = new zodiacSign('Rabbit', '1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023','Quiet, elegant, kind, responsible', '4th');
let dragon = new zodiacSign('Dragon', '1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024','Confident, intelligent, enthusiastic', '5th');
let snake = new zodiacSign('Snake', '1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013','Enigmatic, intelligent, wise', '6th');
let horse = new zodiacSign('Horse', '1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014','Animated, active, energetic', '7th');
let goat = new zodiacSign('Goat', '1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015','Calm, gentle, sympathetic', '8th');
let monkey = new zodiacSign('Monkey', '1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016','Sharp, smart, curiosity', '9th');
let rooster = new zodiacSign('Rooster', '1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017','Observant, hardworking, courageous', '10th');
let dog = new zodiacSign('Dog', '1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018','Lovely, honest, prudent', '11th');
let pig = new zodiacSign('Pig', '1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019','Compassionate, generous, diligent', '12th');