import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CKINPUT } from './mock-ckeditorData';
import { CkeditorConfigService } from '../ckeditor-config.service';
declare var CKEDITOR: any;

@Component({
  selector: 'app-ckeditor-tool',
  templateUrl: './ckeditor-tool.component.html',
  styleUrls: ['./ckeditor-tool.component.scss'],
  providers: [CkeditorConfigService]
})
export class CkeditorToolComponent implements OnInit {
  public model: any = {
    editorData: ''
  };
  public instance: any;

  public ckconfig: any;
  constructor(
    private cd: ChangeDetectorRef,
    private ckService: CkeditorConfigService
  ) {
    this.ckconfig = this.ckService.getConfig();
  }

  ngOnInit() {
    this.model.editorData = CKINPUT.result.assessment_item.question;
  }
}
