import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
  name: 'customPipe',
})
export class CustomPipe implements PipeTransform {
  constructor() {}
  transform(value, extension: string = 'default') {
    return value + extension;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log(this);
  }
}
