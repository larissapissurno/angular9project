import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseService } from 'src/app/shared/services/base.service';

@Injectable()
export class PlanetsService extends BaseService<any> {
  API_URL = 'planets';

  constructor(http: HttpClient) {
    super(http);
  }
}
