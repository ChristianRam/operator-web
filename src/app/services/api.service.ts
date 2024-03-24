import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { InputRow } from "../models/input-row";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  readonly apiUrl = "http://ec2-3-89-56-177.compute-1.amazonaws.com:8080/operator/maximum";
  constructor(private http: HttpClient) {}

  fetchMaximum(inputRows: InputRow[]): Observable<any> {
    const request = inputRows.length === 1 ? this.fetchMaximumGET(inputRows[0]) : this.fetchMaximumPOST(inputRows);
    return request;
  }

  private fetchMaximumGET(req: InputRow): Observable<any> {
    const { divider, remainder, limit } = req;
    return this.http.get(this.apiUrl, {
      params: { divider: divider.toString(), remainder: remainder.toString(), limit: limit.toString() }
    });
  }

  private fetchMaximumPOST(req: InputRow[]): Observable<any> {
    return this.http.post(this.apiUrl, req);
  }
}
