import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentServiceService } from './student-service.service';
 
import{ Routes, RouterModule } from '@angular/router'
import { OtherComponent } from './other/other.component';
import { OfficesComponent } from './offices/offices.component';
import { ContactComponent } from './contact/contact.component';

// Routes is an array of Route objects
// Each route maps a URL path to a component
// The 2nd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /home
// The 3rd route (**) is the wildcard route. This route is used
// if the requested URL doesn't match any other routes already defined

const appRoutes: Routes = [
{ path: 'other', component: OtherComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'offices', component: OfficesComponent},
{ path: 'home', component: AppComponent},
// { path: '', redirectTo: '/home', pathMatch: 'full' } 
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    OtherComponent,
    OfficesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
