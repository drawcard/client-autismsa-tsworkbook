import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { WorkbookFormComponent } from './workbook-form/workbook-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageUploadComponent } from "./workbook-form/image-upload/image-upload.component";
import { Section01Component } from './workbook-form/section01/section01.component';
import { Section02Component } from './workbook-form/section02/section02.component';
import { Section03Component } from './workbook-form/section03/section03.component';
import { Section04Component } from './workbook-form/section04/section04.component';
import { Section05Component } from './workbook-form/section05/section05.component';
import { Section06Component } from './workbook-form/section06/section06.component';
import { Section07Component } from './workbook-form/section07/section07.component';
import { Section08Component } from './workbook-form/section08/section08.component';
import { Section09Component } from './workbook-form/section09/section09.component';
import { DefinitionsService } from "./workbook-form/services/definitions.service";
import { MindMapImagesBase64Service } from './workbook-form/services/mind-map-images-base64.service';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    WorkbookFormComponent,
    ImageUploadComponent,
    Section01Component,
    Section02Component,
    Section03Component,
    Section04Component,
    Section05Component,
    Section06Component,
    Section07Component,
    Section08Component,
    Section09Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [DefinitionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
