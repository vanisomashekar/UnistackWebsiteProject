import { BrowserModule } from '@angular/platform-browser';
import { GreComponent } from './gre/gre.component';
import { GmatComponent } from './gmat/gmat.component';
import { QuizOptionsComponent } from './quiz-options/quiz-options.component';
import { QuizComponent} from './quiz/quiz.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/user.service';
import { UniversityService } from './shared/university.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
// import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './account/account.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';
import { TopuniversitiesComponent } from './topuniversities/topuniversities.component';
import { UniversityreviewsComponent } from './universityreviews/universityreviews.component';
import { NortheasternReviewComponent } from './northeastern-review/northeastern-review.component';
import { HarvardreviewsComponent } from './harvardreviews/harvardreviews.component';
import { UclareviewComponent } from './uclareview/uclareview.component';
import { ApplicationdeadlineComponent } from './applicationdeadline/applicationdeadline.component';
import { ModalModule } from 'angular-custom-modal';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PredepartureComponent } from './predeparture/predeparture.component';
import { VisaprepComponent } from './visaprep/visaprep.component';
import { AgmCoreModule } from '@agm/core';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AfterRegisterComponent } from './after-register/after-register.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { EditlistComponent } from './editlist/editlist.component';
import { CsureviewComponent } from './csureview/csureview.component';
import { UsvisareqComponent } from './usvisareq/usvisareq.component';
import { UsinterviewguideComponent } from './usinterviewguide/usinterviewguide.component';
import { CanadavisareqComponent } from './canadavisareq/canadavisareq.component';
import { CanadainterviewguideComponent } from './canadainterviewguide/canadainterviewguide.component';
import { AustraliainterviewguideComponent } from './australiainterviewguide/australiainterviewguide.component';
import { AustraliavisareqComponent } from './australiavisareq/australiavisareq.component';
// import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    CsureviewComponent,
    LoginComponent,
    ProfileComponent,
    AccountComponent,
    GreComponent,
    GmatComponent,   
    QuizComponent,
    QuizOptionsComponent,
    NavComponent,
    SearchComponent,
    DescriptionComponent,
    FooterComponent,
    TopuniversitiesComponent,
    UniversityreviewsComponent,
    NortheasternReviewComponent,
    HarvardreviewsComponent,
    UclareviewComponent,
    ApplicationdeadlineComponent,
    AboutusComponent,
    PredepartureComponent,
    VisaprepComponent,
    LoginpageComponent,
    AfterRegisterComponent,
    ChecklistComponent,
    EditlistComponent,
    UsvisareqComponent,
    UsinterviewguideComponent,
    CanadavisareqComponent,
    CanadainterviewguideComponent,
    AustraliainterviewguideComponent,
    AustraliavisareqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    HttpClientModule,  
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBDuuhzpdh9ZSAnbluS1_XQH-4xzSqijao'
    })
  ],
  providers: [{
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
      },
       AuthGuard,
       UserService,
      UniversityService],
  bootstrap: [AppComponent],
  entryComponents:[
    LoginComponent
  ]
})
export class AppModule { }
