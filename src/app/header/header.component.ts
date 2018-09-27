import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DbStoreService} from '../shared/db-store.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelect = new EventEmitter<String>();

  constructor(private db: DbStoreService) {}

  ngOnInit() {
  }

  onSave() {
    this.db.storeRcp()
      .subscribe((response: Response) => {
        console.log(response);
      });
  }

  onFetch() {
    this.db.fetchRcp();
  }

}
