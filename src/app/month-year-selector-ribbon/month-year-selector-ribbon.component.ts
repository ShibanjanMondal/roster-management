import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-month-year-selector-ribbon',
  templateUrl: './month-year-selector-ribbon.component.html',
  styleUrls: ['./month-year-selector-ribbon.component.scss']
})
export class MonthYearSelectorRibbonComponent implements OnInit {
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  years:number[]=[];

  selectedYear?:number;
  selectedMonth?:string;
  constructor() { }

  ngOnInit(): void {
    const d = new Date();
    let year = d.getFullYear();
    this.years.push(year);
    this.years.push(year+1);
  }
  onSelectYear(event:Event){
    this.selectedYear = Number.parseInt((event.target as HTMLSelectElement).value);
    console.log(this.selectedYear);
  }
  onSelectMonth(event:Event){
    this.selectedMonth = (event.target as HTMLSelectElement).value;
    console.log(this.selectedMonth);
  }

}
