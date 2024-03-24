import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CalculationResult } from "../../../../interfaces/calculation-result";

@Component({
  selector: "app-results",
  standalone: true,
  imports: [],
  templateUrl: "./results.component.html",
  styleUrl: "./results.component.css"
})
export class ResultsComponent {
  @Output() newCalculationEventEmitter = new EventEmitter();
  @Input() results: CalculationResult[] = [];

  goBack() {
    this.newCalculationEventEmitter.emit();
  }
}
