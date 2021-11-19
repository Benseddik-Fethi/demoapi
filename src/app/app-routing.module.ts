import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VoituresComponent} from './pages/voitures/voitures.component';
import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import {VoitureFormComponent} from "./pages/voiture-form/voiture-form.component";

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "voitures", component: VoituresComponent},
    {path: "voitures/:id", component: DetailsComponent},
    {path: 'form', component: VoitureFormComponent},
    {path: "**", redirectTo: "home"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
