import { Component, OnInit, Input } from '@angular/core';
import { MaterialCovalentModule } from './../../material-covalent.module';


@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html'
})
export class NavListComponent implements OnInit {

  // @Input() menuOpen: boolean;
  @Input() menuOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
