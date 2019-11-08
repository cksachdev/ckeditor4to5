import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CKINPUT } from './mock-ckeditorData';
import { CkeditorConfigService } from '../ckeditor-config.service';

@Component({
  selector: 'app-ckeditor-tool',
  templateUrl: './ckeditor-tool.component.html',
  styleUrls: ['./ckeditor-tool.component.scss'],
  providers: [CkeditorConfigService]
})
export class CkeditorToolComponent implements OnInit {
  public editorData: any;
  public instance: any;

  public ckconfig: any;
  constructor(
    private ckService: CkeditorConfigService,
    private cd: ChangeDetectorRef
  ) {
    this.ckconfig = this.ckService.getConfig();
  }

  ngOnInit() {
    this.editorData = CKINPUT.result.assessment_item.question;
  }

  onChange(event: any) {
    console.log('onChange ::', event);
  }
  onEditorChange(event: any) {
    console.log('onEditorChange ::', event);
  }
  onContentDom(event: any) {
    console.log('onContentDom ::', event);
    // this.editorData = CKINPUT.result.assessment_item.question;
    // this.cd.detectChanges();
  }
  onReady(event: any) {
    console.log('onReady ::', event);
    // this.cd.detectChanges();
  }
}
