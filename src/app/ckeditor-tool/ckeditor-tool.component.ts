import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CKINPUT } from "./mock-ckeditorData";
import { CkeditorConfigService } from "../ckeditor-config.service";

declare var CKEDITOR: any;

@Component({
  selector: "app-ckeditor-tool",
  templateUrl: "./ckeditor-tool.component.html",
  styleUrls: ["./ckeditor-tool.component.scss"],
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
    // console.log('CKEDITOR::ngOnInit', CKEDITOR);
  }
  onChange(event: any) {
    // console.log('CKEDITOR::onChange', event);
  }
  onEditorChange(event: any) {
    // console.log('CKEDITOR::onEditorChange', event);
  }
  onContentDom(event: any) {
    // console.log('CKEDITOR::onContentDom', event);
    // if (!this.instance) {
    //   for (var instanceName in CKEDITOR.instances) {
    //     this.instance = CKEDITOR.instances[instanceName];
    //     console.log('CKEDITOR::instances', this.instance);
    //     this.instance.setData(CKINPUT.result.assessment_item.question);
    //   }
    // }
  }
  onReady(event: any) {
    // console.log('CKEDITOR::onReady', event);
  }
}
