import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { CenterComponent } from './center/center.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HeaderComponent,
        CenterComponent,
        FooterComponent
    ]
})
export class AppModule { }
