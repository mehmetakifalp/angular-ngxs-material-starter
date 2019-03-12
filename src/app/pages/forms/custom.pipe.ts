import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
  name: 'customPipe',
})
export class CustomPipe implements PipeTransform {
  constructor() {
    console.log('constructor');
    console.log(this);
  }
  transform(value, extension: string = 'default') {
    console.log(this);
    return value + extension;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy');
    console.log(this);
  }
}
