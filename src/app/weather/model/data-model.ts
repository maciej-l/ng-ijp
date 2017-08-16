export class WeatherData {
    constructor(
        public location: string,
        public lastUpdate: string,
        public currCond: string,
        public currTemp: number,
        public currFeelsTemp: number,
        public currWindDirIcon: string,
        public currWindString: string,
        public currWindSpeed: number,
        public currPres: number,
        public currPrec: number,
        public currHum: number
    ) {}
}
