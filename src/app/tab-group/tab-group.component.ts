import { Component, AfterContentInit, QueryList, ContentChildren } from "@angular/core";
import { TabGroupItemComponent } from '../tab-group-item/tab-group-item.component';

@Component({
  templateUrl: './tab-group.component.html',
  selector: 'app-tab-group'
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(TabGroupItemComponent)
  items: QueryList<TabGroupItemComponent>;

  ngAfterContentInit() {
    this.activateItem(this.items.first);
  }

  activateItem(item: TabGroupItemComponent) {
    this.items.forEach(i => i.active = false);
    item.active = true;
  }
}
