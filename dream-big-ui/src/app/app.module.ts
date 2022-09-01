import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UnitService } from './services/unit.service';
import { CategoryService } from './services/category.service';

import { UserService } from './services/user.service';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { StarControlComponent } from './Components/StarControl/star-control.component';
import { StarComponent } from './Components/Star/star.component';

import { AdminModule } from './admin/admin.module';
import { TableComponentModule } from './admin/generic/table.component';
import { StudentService } from './services/student.service';
import { StudentJourneyService } from './services/student-journey.service';
import { IntroPageComponent } from './Components/intro-page/intro-page.component';
import { RgbPickerModule } from './rgb-picker/rgb-picker.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    StarControlComponent,
    StarComponent,
    IntroPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule,
    TableComponentModule,
    RgbPickerModule,
    MatDialogModule,
    MatButtonModule,
    MatSliderModule, 
    HammerModule
  ],
  providers: [
    UnitService,
    UserService,
    CategoryService,
    StudentService,
<<<<<<< HEAD
    StudentJourneyService
=======
    StudentJourneyService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    // {
    // provide: HTTP_INTERCEPTORS,
    //useClass: AuthInterceptor,
    // multi: true
    //.},
    //AuthService,
    //UserService,
    //AuthGuard,
>>>>>>> d064906... feat: half implemented material ui upgrade for frontend
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
