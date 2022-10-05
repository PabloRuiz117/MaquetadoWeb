import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LinksComponent } from './components/links/links.component';
import { HeadlinesComponent } from './components/headlines/headlines.component';
import { NewslettersComponent } from './components/newsletters/newsletters.component';
import { UsersComponent } from './components/users/users.component';
import { SectionsComponent } from './components/sections/sections.component';
import { AsidesComponent } from './components/asides/asides.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    HeadlinesComponent,
    NewslettersComponent,
    UsersComponent,
    SectionsComponent,
    AsidesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
