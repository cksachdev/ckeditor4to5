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
    console.log('CKEDITOR', CKEDITOR);
  }

  onChange(event: any) {
    console.log('onChange ::', event);
    for (var instanceName in CKEDITOR.instances) {
      console.log('CKEDITOR::', CKEDITOR.instances[instanceName]);
      // CKEDITOR.instances[instanceName].setData(
      //   '<p>Some other editor data.</p>'
      // );
    }
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
    // this.editorData = CKINPUT.result.assessment_item.question;

    // this.cd.detectChanges();
  }
}
