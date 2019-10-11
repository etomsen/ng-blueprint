import { Component, ViewChild, TemplateRef, Input } from "@angular/core";

@Component({
  templateUrl: './tab-group-item.component.html',
  selector: 'app-tab-group-item'
})
export class TabGroupItemComponent {
  @Input()
  title: string;

  @ViewChild('blueprint', { static: true })
  blueprint: TemplateRef<any>;

  active = false;
}
