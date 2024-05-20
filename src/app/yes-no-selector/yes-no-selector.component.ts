import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yes-no-selector',
  templateUrl: './yes-no-selector.component.html',
  styleUrls: ['./yes-no-selector.component.scss']
})
export class YesNoSelectorComponent implements OnInit {

  val: string = 'N';
  statusFlag: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  bookSeat() {
    this.statusFlag = !this.statusFlag;
    if(this.statusFlag)
      this.val = 'Y';
    else
      this.val = 'N';
  }

}
