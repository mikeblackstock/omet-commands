/*eslint-disable no-extra-parens, no-sparse-arrays*/
import {
	h,
	app
} from 'hyperapp';
import {
	Box,
	BoxContainer,
	Button,
	Menubar,
	MenubarItem,
	Toolbar,
	Statusbar,
	TextareaField
} from '@osjs/gui';
import * as ace from 'brace';


import './lilypond';
import 'brace/mode/html';
import 'brace/mode/json';

import 'brace/theme/chrome';
import * as clipboard from 'clipboard-polyfill';
let snippet = {};
let tmpID = '';
let zoomString = '#zoom=100';








const createEditorInterface = (core, proc, win, $content) => {

	let editor;
 
	const _ = core.make('osjs/locale').translate;
	const vfs = core.make('osjs/vfs');
	const contextmenu = core.make('osjs/contextmenu').show;
//	const basic = core.make('osjs/basic-application', proc, win, {

//		defaultFilename: 'Default.ly'
//	});

	// const setText = contents => editor.setValue(contents); 

	const {icon} = core.make('osjs/theme');
	const getText = () => editor.getValue();



	const view = (state, actions) => h(Box, {}, [


 
   	h(Toolbar, {
				style: {
					display: state.showTools ? undefined : 'none'
				}
				
   	}, [


       h(Button, {
        title: 'A',
        label: "A",
 
        onclick:  (ev) => actions.commandsA(ev)
      }),
      
        h(Button, {
        title: 'B',
        label: "B",
 
        onclick:  (ev) => actions.commandsB(ev)
      }),      

        h(Button, {
        title: 'C',
        label: "C",
 
        onclick:  (ev) => actions.commandsC(ev)
      }),

        h(Button, {
        title: 'D',
        label: "D",
 
        onclick:  (ev) => actions.commandsD(ev)
      }),

       h(Button, {
        title: 'E',
        label: "E",
 
        onclick:  (ev) => actions.commandsE(ev)
      }),
        h(Button, {
        title: 'F',
        label: "F",
 
        onclick:  (ev) => actions.commandsF(ev)
      }),
 
        h(Button, {
        title: 'G',
        label: "G",
 
        onclick:  (ev) => actions.commandsG(ev)
      }),

        h(Button, {
        title: 'H',
        label: "H",
 
        onclick:  (ev) => actions.commandsH(ev)
      }),
 
       h(Button, {
        title: 'I',
        label: "I",
 
        onclick:  (ev) => actions.commandsI(ev)
      }),
      
        h(Button, {
        title: 'J',
        label: "J",
 
        onclick:  (ev) => actions.commandsJ(ev)
      }) 
 
 
 ]),
//2nd row
   	h(Toolbar, {
				style: {
					display: state.showTools ? undefined : 'none'
				}
				
   	}, [


       h(Button, {
        title: 'K',
        label: "K",
 
        onclick:  (ev) => actions.commandsK(ev)
      }),
      
        h(Button, {
        title: 'L',
        label: "L",
 
        onclick:  (ev) => actions.commandsL(ev)
      }),      

        h(Button, {
        title: 'M',
        label: "M",
 
        onclick:  (ev) => actions.commandsM(ev)
      }),

        h(Button, {
        title: 'N',
        label: "N",
 
        onclick:  (ev) => actions.commandsN(ev)
      }),

       h(Button, {
        title: 'O',
        label: "O",
 
        onclick:  (ev) => actions.commandsO(ev)
      }),
        h(Button, {
        title: 'P',
        label: "P",
 
        onclick:  (ev) => actions.commandsP(ev)
      }),
 
        h(Button, {
        title: 'Q',
        label: "Q",
 
        onclick:  (ev) => actions.commandsQ(ev)
      }),

        h(Button, {
        title: 'R',
        label: "R",
 
        onclick:  (ev) => actions.commandsR(ev)
      }),
 
       h(Button, {
        title: 'S',
        label: "S",
 
        onclick:  (ev) => actions.commandsS(ev)
      }),
      
        h(Button, {
        title: 'T',
        label: "T",
 
        onclick:  (ev) => actions.commandsT(ev)
      }) 
 
 
 ]),
// 3rd
   	h(Toolbar, {
				style: {
					display: state.showTools ? undefined : 'none'
				}
				
   	}, [


       h(Button, {
        title: 'U',
        label: "U",
 
        onclick:  (ev) => actions.commandsU(ev)
      }),
      
        h(Button, {
        title: 'V',
        label: "V",
 
        onclick:  (ev) => actions.commandsV(ev)
      }),      

        h(Button, {
        title: 'W',
        label: "W",
 
        onclick:  (ev) => actions.commandsW(ev)
      }),

        h(Button, {
        title: 'X',
        label: "X",
 
        onclick:  (ev) => actions.commandsX(ev)
      }),

       h(Button, {
        title: 'Y',
        label: "Y",
 
        onclick:  (ev) => actions.commandsY(ev)
      }),
        h(Button, {
        title: 'Z',
        label: "Z",
 
        onclick:  (ev) => actions.commandsZ(ev)
      })
 

 
 ]),







		h(Statusbar, {}, [
			h('span', {}, '')
		])
	]);



	const hyperapp = app({
		theme: 'ace/theme/chrome',
		mode: 'ace/mode/lilypond',
		row: 0,
		column: 0,
		lines: 0,
		buttons:'',
		showTools: true,
        selectionRange: "",
        beginSelect: {},
        endSelect: {},
		log: '',
		showLog: false
	}, {

		insert: (token) => {
			core.broadcast('Sandbox', 'Insert', token);
			//			editor.insert(token);
			//			editor.focus();
				},
		backspace: () => {
			core.broadcast('Sandbox', 'Command', 'editor.navigateLeft(1)');	
			core.broadcast('Sandbox', 'Command', 'editor.remove()');
		},
		
		command: (cmd) => {
			core.broadcast('Sandbox', 'Command',  cmd);
		},
		commandsA: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '\\accent',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\accent')

						},
						
						{
 
          				label: '\\acciaccatura',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\acciaccatura')
	
						},
						
 						{
          				label: '\\appoggiatura',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\appoggiatura')
	
						},							
						
/* 
						{
						label: '\\',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\')
	
						},	
*/
						{
          				label: '\\autoBeamOff',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\autoBeamOff')
	
						},							
						
						{
          				label: '\\autoBeamOn',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\autoBeamOn')
	
						}],							
					
			});
	
		},

		commandsB: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '\\bar',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\bar')

						},
						
						{
 
          				label: '\\barNumberCheck',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\barNumberCheck')
	
						},
						
 						{
          				label: '\\bold',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\bold')
	
						},							
						
/* 
						{
						label: '\\',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\')
	
						},	
*/
						{
          				label: '\\book',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\book')
	
						},							
						
						{
          				label: '\\bookpart',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\bookpart')
	
						},
						{
						label: '\\break',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\break')
	
						}							
						
						
						]							
					
			});
	
		},
		
		commandsC: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '\\clef',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\clef')

						},
						
						{
 
          				label: '\\context',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\context')
	
						},
						
 						{
          				label: '\\cresc',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\cresc')
	
						},							
						
/* 
						{
						label: '\\',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\')
	
						},	
*/

						
						]							
					
			});
	
		},

		commandsD: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '')

						}

						
						]							
					
			});
	
		},
		
		commandsE: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '')

						}

						
						]							
					
			});
	
		},		
		
		
		commandsF: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '\\fermata',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\fermata')

						},
						
						{
 
          				label: '\\finger',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\finger')
	
						},
						
 						{
          				label: '\\fret-diagram',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\fret-diagram')
	
						},							
						
/* 
						{
						label: '\\',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\')
	
						},	
*/

						
						]							
					
			});
	
		},
		commandsG: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '')

						}

						
						]							
					
			});
	
		},		
		commandsH: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [
 						{
 
          				label: '\\header',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\header')

						}

						
						]							
					
			});
	
		},		
				
		commandsI: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '\\include',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\include')

						}

						
						]							
					
			});
	
		},
		commandsJ: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '')

						}

						
						]							
					
			});
	
		},		
		
		commandsK: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '\\key',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\key')

						}	
						
/* 
						{
						label: '\\',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\')
	
						},	
*/
						],							
					
			});

		},		

		commandsL: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [
 						{
 
          				label: '\\layout',
          				onclick: () => core.broadcast('Sandbox', 'Insert',"\\layout")

						}

						
						]							
					
			});
	
		},		

		commandsM: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '\\major',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\major')

						},
						
						{
         				label: '\\midi',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\midi')
							
						},
						
						{
        				label: '\\minor',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\minor')
							
						},						

						
						]							
					
			});
	
		},		

		commandsN: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '')

						}

						
						]							
					
			});
	
		},		

		commandsO: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [
 						{
 
          				label: '\\override',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\override')

						}

						
						]							
					
			});
	
		},	
		
		commandsP: (ev) => {

      		contextmenu({
					position: ev.target,
						
 					menu: [
 						{
 
          				label: '\\paper',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\paper')

						},
						
						{
 
          				label: '\\pointAndClickOff',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\pointAndClickOff')

						},
						{
 
          				label: '\\pointAndClickOn',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\pointAndClickOn')

						},
						
						{
 
          				label: '\\pointAndClickTypes',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\pointAndClickTypes')

						}

						
						]							
					
			});
	
		},				
		
		
		commandsQ: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '')

						}

						
						]							
					
			});
	
		},				
				
		
		
		
		commandsR: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [
 						{
 
          				label: '\\relative',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\relative')

						},
 						{
 
          				label: '\\repeat',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\repeat')

						}	
												
						

						],							
					
			});

		},		

		commandsS: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '\\score',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\score')

						},	
						
						{
         				label: '\\set',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\set')

						},
					
						{
        				label: '\\simultaneous',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\simultaneous')

						},						
						{
         				label: 'Staff',
          				onclick: () => core.broadcast('Sandbox', 'Insert', 'Staff')

						}	

						],							
					
			});

		},		

		
		commandsT: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '\\time',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\time')

						},
						
						{
          				label: '\\times',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\times')

						},
												
						
						{
          				label: '\\transpose',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\transpose')

						}							

						],							
					
			});

		},

		commandsU: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '')

						}

						
						]							
					
			});
	
		},				
		

		
		commandsV: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '\\version',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\version')

						},	
						
						{
         				label: 'Voice',
          				onclick: () => core.broadcast('Sandbox', 'Insert', 'Voice')

						},
												{
         				label: '\\voiceOne',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\voiceOne')

						},
												{
         				label: '\\voiceTwo',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\voiceTwo')

						},	

						{
         				label: '\\voiceThree',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\voiceThree')

						},	

						{
         				label: '\\voiceFour',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\voiceFour')

						}	

						],
	
			});
		},

		commandsW: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '')

						}

						
						]							
					
			});
		},	

			
			
		commandsX: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '')

						}

						
						]							
					
			});
		}

	}, view, $content);


	win.on('focus', () => {
		core.broadcast('Sandbox', 'restore');
	});

	proc.on('attention', (args) => {

	});


//	basic.init();
	

	return hyperapp;
};

export const createEditorWindow = (core, proc) =>
	proc.createWindow({
		id: 'KeyboardWindow',
//		title: proc.metadata.title.en_EN,
		title: '_',
		icon: proc.resource(proc.metadata.icon),
		//a bit bigger

		dimension: {
			width: 360,
			height: 200
		},
		position: 'bottomrleft'
	})
	.on('destroy', () => proc.destroy())
	.render(($content, win) => {
		createEditorInterface(core, proc, win, $content);
	});
