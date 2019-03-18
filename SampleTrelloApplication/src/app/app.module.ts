import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { TrelloService } from './service/trello.service';

@NgModule({
	declarations: [
		AppComponent,
		HomepageComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [TrelloService],
	bootstrap: [AppComponent]
})
export class AppModule { }
