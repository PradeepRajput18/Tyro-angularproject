import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ExamComponent } from './exam/exam.component';
import { LoginComponent } from './login/login.component';
import { ChooseusComponent } from './chooseus/chooseus.component';
import { ReponsiveTagComponent } from './reponsive-tag/reponsive-tag.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'test',component:TestComponent},
  {path:'exam',component:ExamComponent},
  {path:'login',component:LoginComponent},
  {path:'chooseus',component:ChooseusComponent},
  {path:'responsivemenu',component:ReponsiveTagComponent},
  {path:'register-form',component:RegisterFormComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:"**",component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const singlecomponent=[TestComponent,ExamComponent,LoginComponent,ChooseusComponent,ReponsiveTagComponent,PageNotFoundComponent,AppComponent,DashboardComponent];