import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth/auth.guard';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DescriptionComponent } from './description/description.component';
import { TopuniversitiesComponent } from './topuniversities/topuniversities.component';
import { UniversityreviewsComponent } from './universityreviews/universityreviews.component';
import { NortheasternReviewComponent } from './northeastern-review/northeastern-review.component';
import { HarvardreviewsComponent } from './harvardreviews/harvardreviews.component';
import { UclareviewComponent } from './uclareview/uclareview.component';
import { ApplicationdeadlineComponent } from './applicationdeadline/applicationdeadline.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PredepartureComponent } from './predeparture/predeparture.component';
import { VisaprepComponent } from './visaprep/visaprep.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
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
import { GreComponent } from './gre/gre.component';
import { GmatComponent } from './gmat/gmat.component';
import { QuizOptionsComponent } from './quiz-options/quiz-options.component';
import { QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  {  path: 'home', component:HomeComponent },
  {path:'gmat',component:GmatComponent },
  {path:'gre',component:GreComponent},
  { path:'register',component:RegisterComponent},
  {path:'userprofile',component:ProfileComponent},
  {path:'checklist',component:ChecklistComponent},
  {path:'checklist/:email',component:ChecklistComponent},
  {path:'checklist/:email/:id',component:EditlistComponent},
  {path:'login',component:LoginComponent},
  {path:'loginpage',component:LoginpageComponent},
  {path:'accountsetting/:email',component:AccountComponent},
  {path:'afterRegister/:email',component:AfterRegisterComponent},
  {path:'search',component:SearchComponent},
  {path:'description/:Name',component:DescriptionComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'topuniversities', component:TopuniversitiesComponent},
  {path:'universityreviews', component:UniversityreviewsComponent,
     children:[
       {path:'northeastern-review', component:NortheasternReviewComponent},
       {path:'harvardreviews', component:HarvardreviewsComponent},
       {path:'ucladreview', component:UclareviewComponent},
      {path:'csureview', component:CsureviewComponent}
     ]},
       {path: 'aboutus', component:AboutusComponent},
       {path: 'predeparture', component:PredepartureComponent},
        {path: 'visaprep', component:VisaprepComponent,
        children:[
          {path:'usvisareq', component:UsvisareqComponent},
          {path:'usinterviewguide', component:UsinterviewguideComponent},
          {path:'canadavisareq', component:CanadavisareqComponent},
          {path:'canadainterviewguide', component:CanadainterviewguideComponent},
          {path:'australiavisareq', component:AustraliavisareqComponent},
          {path:'australiainterviewguide', component:AustraliainterviewguideComponent}
        ]},
  {path:'applicationdeadline', component:ApplicationdeadlineComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
