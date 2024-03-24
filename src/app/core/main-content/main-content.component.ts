import { Component } from "@angular/core";
import { MainFormComponent } from "../main-form/main-form.component";

@Component({
  selector: "app-main-content",
  standalone: true,
  imports: [MainFormComponent],
  templateUrl: "./main-content.component.html",
  styleUrl: "./main-content.component.css"
})
export class MainContentComponent {}
