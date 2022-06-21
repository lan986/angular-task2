import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CounterComponent } from './counter/counter.component';
import { PipeTestPipe } from './pipe-test.pipe';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCardComponent } from './client-card/client-card.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { DirectiveIfDirective } from './directive-if.directive';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CounterComponent,
    PipeTestPipe,
    ClientListComponent,
    ClientCardComponent,
    AccountInfoComponent,
    DirectiveIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
