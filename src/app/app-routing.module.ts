import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'historia',
    loadChildren: () => import('./historia/historia.module').then( m => m.HistoriaPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'albergues',
    loadChildren: () => import('./albergues/albergues.module').then( m => m.AlberguesPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'medidas',
    loadChildren: () => import('./medidas/medidas.module').then( m => m.MedidasPageModule)
  },
  {
    path: 'miembros',
    loadChildren: () => import('./miembros/miembros.module').then( m => m.MiembrosPageModule)
  },
  {
    path: 'voluntario',
    loadChildren: () => import('./voluntario/voluntario.module').then( m => m.VoluntarioPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'iniciarsesion',
    loadChildren: () => import('./iniciarsesion/iniciarsesion.module').then( m => m.IniciarsesionPageModule)
  },
  {
    path: 'recuperarclave',
    loadChildren: () => import('./recuperarclave/recuperarclave.module').then( m => m.RecuperarclavePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
