import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders} from '@angular/core';
import { Routes,RouterModule} from '@angular/router';

const appRoutes:Routes =[
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    }
];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders =RouterModule.forRoot(appRoutes);