import { AsyncPipe, CommonModule, NgFor, NgIf, NgSwitch } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  imports: [AsyncPipe, NgIf, NgFor],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public condition = signal('A');
  public items: Array<{ name: string }> = [{name: "Natália"}];
  public loadingData$: Observable<string[]> = of([
    "item1",
    "item2",
    "item3",
  ]).pipe(delay(3000))
}
