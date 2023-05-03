import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fourDigits'
})
export class FourDigitsPipe implements PipeTransform {
    transform(value: any): any {
        if (value != null) {
            let fix  = value /1e9
            return fix.toFixed(2) + ' GB';
        }
        return '';
    }
}