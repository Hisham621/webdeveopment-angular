import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { StatesComponent } from './page/states/states.component';
import { ContactComponent } from './page/contact/contact.component';
import { SinglestateComponent } from './page/singlestate/singlestate.component';

export const routes: Routes = [

{path:'', component:HomeComponent},
{path:'states',component:StatesComponent },
{path:'contact',component:ContactComponent},
{path:'states/:id',component:SinglestateComponent}

];
