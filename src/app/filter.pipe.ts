import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(value,field,filtervalue): unknown {
    debugger
    if(!value || !filtervalue){
      return value
    }

      if(field === "totalexp"){
        return value.filter(val =>val[field] === parseInt(filtervalue) );
      }
      else{
        return value.filter(val =>val[field].toLowerCase().indexOf(filtervalue.toLowerCase()) !== -1);
      }

  }

}
