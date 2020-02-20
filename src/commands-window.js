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






const createViewMenu = (state, actions, _) => ([{
	label: _('Log'),
		checked: state.showLog,
		onclick: () => actions.toggleLog(!state.showLog)
	},
	{
	label: _('Tools'),
		checked: state.showTools,
		onclick: () => actions.toggleTools(!state.showTools)
	},	
	{
	label: 'Zoom: page-fit',
		onclick: () => actions.changeZoom('#zoom=page-fit')
	},
	{
	label: 'Zoom: 100',
		onclick: () => actions.changeZoom('#zoom=100')
	},
	{
	label: 'Zoom: 150',
		onclick: () => actions.changeZoom('#zoom=150')
	},


	{
		label: 'Zoom: 200',
		onclick: () => actions.changeZoom('#zoom=200')
	},

	{
		label: 'Show zoom',
		onclick: () => actions.showZoom()
	}

]);



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
        title: 'F',
        label: "F",
 
        onclick:  (ev) => actions.commandsF(ev)
      }),


        h(Button, {
        title: 'K',
        label: "K",
 
        onclick:  (ev) => actions.commandsK(ev)
      }),
 
        h(Button, {
        title: 'R',
        label: "R",
 
        onclick:  (ev) => actions.commandsR(ev)
      }),
 
       h(Button, {
        title: 'T',
        label: "T",
 
        onclick:  (ev) => actions.commandsT(ev)
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
		
		commandsR: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '\\relative',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\relative')

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
		
		commandsT: (ev) => {

      		contextmenu({
					position: ev.target,
					
 					menu: [{
 
          				label: '\\time',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\time')

						},
						{
          				label: '\\transpose',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\transpose')

						}							
						
/* 
						{
						label: '\\',
          				onclick: () => core.broadcast('Sandbox', 'Insert', '\\')
	
						},	
*/
						],							
					
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
		title: proc.metadata.title.en_EN,
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
