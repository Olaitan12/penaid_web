import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ArticleComponent } from './article/article.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch:'full' },
  {path: 'Home', component: HeaderComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Services', component: ServicesComponent},
  {path: 'Testimonials', component: TestimonialsComponent},
  {path: 'Blog', component: BlogComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Footer', component: FooterComponent},
  { path: 'Article/:id', component: ArticleComponent },
  { path: 'Post', component: PostComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }