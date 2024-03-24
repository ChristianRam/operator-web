import { Component } from "@angular/core";
import { ResultsComponent } from "./components/results/results.component";
import { CalculationResult } from "../../interfaces/calculation-result";
import { FormComponent } from "./components/form/form.component";

@Component({
  selector: "app-main-form",
  standalone: true,
  imports: [ResultsComponent, FormComponent],
  templateUrl: "./main-form.component.html",
  styleUrl: "./main-form.component.css"
})
export class MainFormComponent {
  results: CalculationResult[] = [];

  setResults(results: CalculationResult[]) {
    this.results = results;
  }
}
