import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CKINPUT } from './mock-ckeditorData';
declare var CKEDITOR: any;

@Component({
  selector: 'app-ckeditor-tool',
  templateUrl: './ckeditor-tool.component.html',
  styleUrls: ['./ckeditor-tool.component.scss']
})
export class CkeditorToolComponent implements OnInit {
  public model: any = {
    editorData: ''
  };
  public instance: any;
  mathElements = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mglyph',
    'mi',
    'mlabeledtr',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'annotation',
    'annotation-xml'
  ];

  public ckconfig: any = {
    config: {
      fullPage: true, // Full Page Editing
      allowedContent: true
    },
    isReadonly: false
  };
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.model.editorData = CKINPUT.result.assessment_item.question;
  }

  public onChange(event: any) {
    console.log(event.editor.getData());
  }

  public onReady(event: any) {
    this.instance = event;
    console.log('Instance', event);

    CKEDITOR.plugins.addExternal(
      'ckeditor_wiris',
      'https://ckeditor.com/docs/ckeditor4/4.13.0/examples/assets/plugins/ckeditor_wiris/',
      'plugin.js'
    );

    CKEDITOR.replace('editor1', {
      extraPlugins: 'ckeditor_wiris',
      // For now, MathType is incompatible with CKEditor file upload plugins.
      removePlugins:
        'uploadimage,uploadwidget,uploadfile,filetools,filebrowser',
      height: 320,
      // Update the ACF configuration with MathML syntax.
      extraAllowedContent:
        this.mathElements.join(' ') +
        '(*)[*]{*};img[data-mathml,data-custom-editor,role](Wirisformula)'
    });
    this.model.editorData = CKINPUT.result.assessment_item.question;
  }
}
