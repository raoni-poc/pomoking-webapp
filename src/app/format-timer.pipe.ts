import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'formatTimer'
})

export class FormatTimerPipe implements PipeTransform {

    transform(value: any, args?: any): any {

        value = parseInt(value, 10);
        const seconds = this.calcSeconds(value);
        const minutes = this.calcMinutes(value);
        const hours = this.calcHours(value);

        return (hours + ':' + minutes + ':' + seconds);
    }

    private calcSeconds(tick: number): string {
        const minutes = Math.floor(tick / 60);
        const seconds = tick - minutes * 60;

        if (!seconds) {
            return '00';
        }
        if (seconds < 10) {
            return '0' + String(seconds);
        }

        return String(seconds);
    }

    private calcMinutes(tick: number): string {
        const hours = Math.floor(tick / 60 / 60);
        const minutes = Math.floor(tick / 60) - hours * 60;

        if (!minutes) {
            return '00';
        }
        if (minutes < 10) {
            return '0' + String(minutes);
        }

        return String(minutes);
    }

    private calcHours(tick: number): string {
        const hours = Math.floor(tick / 60 / 60);

        if (!hours) {
            return '00';
        }
        if (hours < 10) {
            return '0' + String(hours);
        }

        return String(hours);
    }
}
