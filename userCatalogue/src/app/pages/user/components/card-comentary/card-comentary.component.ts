import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-comentary',
  templateUrl: './card-comentary.component.html',
  styleUrls: ['./card-comentary.component.scss']
})
export class CardComentaryComponent {
  @Input() comentary: any = {};
}
