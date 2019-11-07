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

    CKEDITOR.addCss('figure[class*=easyimage-gradient]::before { content: ""; position: absolute; top: 0; bottom: 0; left: 0; right: 0; }' +
      'figure[class*=easyimage-gradient] figcaption { position: relative; z-index: 2; }' +
      '.easyimage-gradient-1::before { background-image: linear-gradient( 135deg, rgba( 115, 110, 254, 0 ) 0%, rgba( 66, 174, 234, .72 ) 100% ); }' +
      '.easyimage-gradient-2::before { background-image: linear-gradient( 135deg, rgba( 115, 110, 254, 0 ) 0%, rgba( 228, 66, 234, .72 ) 100% ); }');

    CKEDITOR.replace('editor1', {
      extraPlugins: ['ckeditor_wiris', 'easyimage'],
      // For now, MathType is incompatible with CKEditor file upload plugins.
      removePlugins: 'uploadimage,uploadwidget,uploadfile,image',
      height: 520,
      // Update the ACF configuration with MathML syntax.
      extraAllowedContent: this.mathElements.join(' ') + '(*)[*]{*};img[data-mathml,data-custom-editor,role](Wirisformula)',
      removeDialogTabs: 'image:advanced;link:advanced',
      easyimage_toolbar: [ 'EasyImageAlignLeft', 'EasyImageAlignCenter', 'EasyImageAlignRight' ],
      toolbar: [{
          name: 'document',
          items: ['Undo', 'Redo']
        },
        {
          name: 'styles',
          items: ['Format']
        },
        {
          name: 'basicstyles',
          items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat']
        },
        {
          name: 'paragraph',
          items: ['NumberedList', 'BulletedList']
        },
        {
          name: 'links',
          items: ['Link', 'Unlink']
        },
        {
          name: 'wiris',
          items : [ 'ckeditor_wiris_formulaEditor', 'ckeditor_wiris_formulaEditorChemistry']
        }
      ],
    });

    this.model.editorData = CKINPUT.result.assessment_item.question;
  }
}
