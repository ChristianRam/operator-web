import { Component } from "@angular/core";
import { MainContentComponent } from "./core/main-content/main-content.component";
import { FooterComponent } from "./core/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [MainContentComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
}
