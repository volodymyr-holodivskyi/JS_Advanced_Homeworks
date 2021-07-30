import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { EditToolsComponent } from './edit-tools/edit-tools.component';
import { EditPanelComponent } from './edit-panel/edit-panel.component';
import { StylePanelComponent } from './style-panel/style-panel.component';
import { AddPanelComponent } from './add-panel/add-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    ControlPanelComponent,
    EditToolsComponent,
    EditPanelComponent,
    StylePanelComponent,
    AddPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
