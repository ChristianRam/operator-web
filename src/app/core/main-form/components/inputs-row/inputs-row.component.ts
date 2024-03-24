import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputRow } from "../../../../models/input-row";

@Component({
  selector: "app-inputs-row",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./inputs-row.component.html",
  styleUrl: "./inputs-row.component.css"
})
export class InputsRowComponent {
  @Input() row!: InputRow;
  @Input() index!: number;
  @Input() inputRowsLength!: number;
  @Input() errors!: { [key: string]: number[] };

  @Output() removeInputRowEventEmitter = new EventEmitter();

  onDeleteRow() {
    this.removeInputRowEventEmitter.emit();
  }
}
