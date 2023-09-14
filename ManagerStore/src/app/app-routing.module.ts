import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, children: [
      //{ path: 'home', component: HomeComponent },

      //{ path: 'tecnicos',            component:   TecnicoListComponent },
      //{ path: 'tecnicos/create',     component: TecnicoCreateComponent },
      //{ path: 'tecnicos/update/:id', component: TecnicoUpdateComponent },
      //{ path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent },

      //{ path: 'clientes',            component:   ClienteListComponent },
      //{ path: 'clientes/create',     component: ClienteCreateComponent },
      //{ path: 'clientes/update/:id', component: ClienteUpdateComponent },
      //{ path: 'clientes/delete/:id', component: ClienteDeleteComponent },

      //{ path: 'chamados',                       component:     ChamadoListComponent },
      //{ path: 'chamados/create',                component:   ChamadoCreateComponent },
      //{ path: 'chamados/update/:id',            component:   ChamadoUpdateComponent },
      //{ path: 'chamados/read/:id',              component:     ChamadoReadComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
