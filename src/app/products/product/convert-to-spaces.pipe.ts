import {Pipe, PipeTransform} from '@angular/core'; 

@Pipe({ 
    name : "converttospaces"
})
 class ConvertToSpacePipe implements PipeTransform {

  transform(val : string , characeter : string) : string {
    return val.replace(characeter, ' ' ); 
  }
}  


export { ConvertToSpacePipe } ;