import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditComponent } from './edit/edit.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SoftSkillsComponent,
    ExperienceComponent,
    AddProjectComponent,
    EditComponent,
    EditProjectComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
