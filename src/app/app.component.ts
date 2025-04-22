import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateDeferrableViewsComponent } from "./components/template/template-deferrable-views/template-deferrable-views.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateBindingComponent, TemplateControlFlowComponent, TemplateDeferrableViewsComponent],
  template: `
    <!-- <router-outlet></router-outlet> -->
     <h1>Curso de Angular</h1>
     <app-template-binding/>
     <app-template-control-flow />
     <app-template-deferrable-views />
  `,
})
export class AppComponent {}
