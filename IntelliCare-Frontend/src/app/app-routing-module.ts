import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { HomePage } from './pages/home-page/home-page';
import { VerifyOtp } from './verify-otp/verify-otp';
import { Register } from './register/register';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { DoctorListComponent } from './components/doctor-list/doctor-list';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  // ✅ Default route
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // ✅ Public routes
  { path: 'home', component: HomePage },
  { path: 'about', component: AboutUs },
  { path: 'contact', component: ContactUs },

  // ✅ Authentication routes
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'verify-otp', component: VerifyOtp },

  // ✅ Public doctor list & details (renamed to avoid conflict)
  { path: 'doctors', component: DoctorListComponent },
  { path: 'doctors/:id', component: DoctorDetailsComponent },

  // ✅ Admin module (lazy-loaded)
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    data: { expectedRole: 'Admin' }
  },

  // ✅ Doctor module (lazy-loaded)
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor-module').then(m => m.DoctorModule),
    canActivate: [AuthGuard],
    data: { expectedRole: 'Doctor' }
  },

  // ✅ Patient module (lazy-loaded)
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient-module').then(m => m.PatientModule),
    canActivate: [AuthGuard],
    data: { expectedRole: 'Patient' }
  },

  // ✅ Wildcard route
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}





// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { Login } from './login/login';
// import { HomePage } from './pages/home-page/home-page';
// import { VerifyOtp } from './verify-otp/verify-otp';
// import { AdminLayout } from './admin/admin-layout'; 
// import { AuthGuard } from './guards/auth-guard';
// import { Register } from './register/register';
// import { AboutUs } from './about-us/about-us';
// import { ContactUs } from './contact-us/contact-us';
// import { DoctorList } from './admin/doctor-list/doctor-list';
// import { DoctorListComponent } from './components/doctor-list/doctor-list';
// import { DoctorDetailsComponent } from './components/doctor-details/doctor-details';
// const routes: Routes = [
//   // Default path redirects to the home page
//   { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  
//   // Authentication Routes
//   { path: 'login', component: Login }, 
//   { path: 'register', component: Register }, 
//   { path: 'verify-otp', component: VerifyOtp },
//   {path: 'doctor-list', component: DoctorListComponent},
//     { path: 'doctor/:id', component: DoctorDetailsComponent },
//   //{ path: 'my-appointments', component: MyAppointmentsComponent, canActivate: [AuthGuard] },
 
//   //{path: 'doctor-details', component: DoctorDetailsComponent},

//   // Main application routes
//   { path: 'home', component: HomePage },

//   { path: 'about', component: AboutUs },
//    { path: 'contact', component: ContactUs },
//    // {
// //     path: 'home',
// //     component: HomePage,
// //     canActivate: [AuthGuard],
// //     data: { expectedRole: 'Patient' }
// //   },
 
// {
//   path: 'admin',
//   loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule),
//   canActivate: [AuthGuard],
//   data: { role: 'Admin' }
// },
 

 
//   // ✅ Doctor module (lazy-loaded)
//   {
//     path: 'doctor',
//     loadChildren: () => import('./doctor/doctor-module').then(m => m.DoctorModule),
//     canActivate: [AuthGuard],
//     data: { expectedRole: 'Doctor' }
//   },


//    // ✅ patient module (lazy-loaded)
//   {
//     path: 'patient',
//     loadChildren: () => import('./patient/patient-module').then(m => m.PatientModule),
//     canActivate: [AuthGuard],
//     data: { expectedRole: 'Patient' }
//   },

 
 
  

//   // Wildcard route for a 404 page (MUST be the last route)
//   { path: '**', redirectTo: '/home' },


 
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
