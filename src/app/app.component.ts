import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsBarComponent } from './tabs-bar/tabs-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TitleDescriptionComponent } from './title-description/title-description.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ActionsBarComponent } from './actions-bar/actions-bar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsBarComponent, AboutMeComponent, TitleDescriptionComponent, PortfolioComponent, ResumeComponent, ContactComponent, ActionsBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portofolio';
}
