import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  transform(value: any, limit: number = 100): string {
    
    let val = value as string;
    if (val.length > limit) {
      console.log('Limit')
      return val.slice(0, limit-3) + "...";
    }
    return val;
  }

}