import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelect = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(sectionName: string){
    this.featureSelect.emit(sectionName);
  }

}
