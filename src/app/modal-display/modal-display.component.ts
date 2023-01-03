import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-display',
  templateUrl: './modal-display.component.html',
  styleUrls: ['./modal-display.component.scss']
})
export class ModalDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() informations = "Inputul functioneaza!";

}
