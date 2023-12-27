import { Component } from '@angular/core';

@Component({
  selector: 'tooltip-example',
  templateUrl: './tooltip-example.component.html',
  styleUrls: ['./tooltip-example.component.less']
})
export class TooltipExampleComponent {
  arr = [
    { name: "Rasla", carbs: 16.6 },
    { name: "Masala Vada", carbs: 16.2 },
    { name: "Veg Bonda", carbs: 8.1 }
  ];
  tooltipText = this.arr
    .map((x) => 
      ((x.name as any).padEnd(15) + " : " + x.carbs + "(g)")
    )
    .join("\n");
}
