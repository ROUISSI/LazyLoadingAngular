import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value)
    console.log(args)
    return value+` searched with ${args[0]} method` ;
  }

}
