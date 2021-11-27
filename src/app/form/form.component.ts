import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Input() label: string
  @Input() type: string
  @Input() list: any[]
  @Output() onChange = new EventEmitter();

  ngOnInit(): void {
  }

  onFormChange(event) {
    if (this.type == 'checkbox') {
      this.onChange.emit(event.target.checked)
    } else {
      this.onChange.emit(event.target.value)
    }
    console.log(event)
  }
}
