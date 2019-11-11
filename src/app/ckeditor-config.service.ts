import { Injectable } from '@angular/core';

@Injectable()
export class CkeditorConfigService {
  constructor() {}
  public getConfig() {
    return {
      customConfig: '/assets/js/ckeditor/ckeditor-config.js'
    };
  }
}
