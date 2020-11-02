import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LandingComponent } from './landing/landing.component';
import { PopoverModule } from "ngx-smart-popover";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AboutUsComponent } from './about-us/about-us.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { LandingpgComponent } from './landingpg/landingpg.component';
import { ProjectsComponent } from './projects/projects.component';
import { CareersComponent } from './careers/careers.component';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  
  declarations: [
    AppComponent, 
    LandingComponent, ContactUsComponent, ServicesComponent, BlogsComponent,
    PortfolioComponent, AboutUsComponent, LandingpgComponent, ProjectsComponent, CareersComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule,
    MatToolbarModule, PopoverModule, MatTooltipModule, MatCardModule, MatFormFieldModule,ReactiveFormsModule,
    FormsModule, MatTabsModule, MatListModule, MatExpansionModule, MatIconModule, MatSelectModule, 
    MatButtonToggleModule,
  
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
