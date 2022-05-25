import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ProductService } from 'src/app/services/common/models/product.service';
import {EventEmitter} from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;

@Directive({
  selector: '[appDelete]',
})
export class DeleteDirective {
  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private productService: ProductService,
    private spinner: NgxSpinnerService
  ) {
    const img = _renderer.createElement('img');
    img.setAttribute('src', '../../../../../assets/delete.png');
    img.setAttribute('style', 'cursor: pointer;');
    img.width = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img);
  }

  @Input() id: string;

  @Output() callback: EventEmitter<any> = new EventEmitter();

  @HostListener('click')
  async onclick() {
<<<<<<< HEAD
    this.spinner.show(SpinnerType.BallAtom);
=======
    this.spinner.show(SpinnerType.BallTrianglePath);
>>>>>>> 6540a0446f64d1a9a27fbd19e49f7ae430dc57d5
    const td: HTMLTableCellElement = this.element.nativeElement;
    await this.productService.delete(this.id);
    $(td.parentElement).fadeOut(500, ()=>{
      this.callback.emit();
<<<<<<< HEAD
    })
=======
    });
>>>>>>> 6540a0446f64d1a9a27fbd19e49f7ae430dc57d5
  }
}