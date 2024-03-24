import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { InputRow } from "../../../../models/input-row";
import { InputsRowComponent } from "../inputs-row/inputs-row.component";
import { FormsModule } from "@angular/forms";
import { ApiService } from "../../../../services/api.service";
import { NgbAlert } from "@ng-bootstrap/ng-bootstrap";
import { MaximumApiResponse } from "../../../../interfaces/maximum-api-response";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [FormsModule, NgIf, InputsRowComponent, NgbAlert],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css"
})
export class FormComponent {
  @Output() setResultsFromFormEventEmitter = new EventEmitter();

  isLoading = false;
  inputRows: InputRow[] = [new InputRow()];
  errors: { [key: string]: number[] } = { divider: [], remainder: [], limit: [] };
  serverError: string = "";

  constructor(private apiService: ApiService) {}

  addCase() {
    this.inputRows.push(new InputRow());
  }

  deleteRow(index: number) {
    this.inputRows.splice(index, 1);
  }

  calculate() {
    if (!this.validate()) return;
    this.isLoading = true;

    this.apiService.fetchMaximum(this.inputRows).subscribe({
      next: (resp) => this.handleApiResponse(resp),
      error: (error) => this.handleError(error)
    });
  }

  private handleApiResponse(resp: MaximumApiResponse) {
    if (resp?.notification?.code === 200) {
      this.setResultsFromFormEventEmitter.emit(Array.isArray(resp.data) ? resp.data : [resp.data]);
    } else {
      this.serverError = resp?.notification?.description || "";
    }
    this.isLoading = false;
  }

  private handleError(error: any) {
    console.error("Error in API request:", error);
    this.serverError = "An error occurred. Please try again later.";
    this.isLoading = false;
  }

  validate(): boolean {
    this.errors = { divider: [], remainder: [], limit: [] };
    let isValid = true;

    this.inputRows.forEach((row: InputRow, index) => {
      let { divider, remainder, limit } = row;

      if (!divider || isNaN(divider) || divider < 2 || divider > 1000000000) {
        this.errors["divider"].push(index);
        isValid = false;
      }

      if (isNaN(remainder) || remainder < 0 || remainder >= divider) {
        this.errors["remainder"].push(index);
        isValid = false;
      }

      if (isNaN(limit) || limit < remainder || limit > 1000000000) {
        this.errors["limit"].push(index);
        isValid = false;
      }
    });

    return isValid;
  }
}
