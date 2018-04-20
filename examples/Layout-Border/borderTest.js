Ext.onReady(function() {
    var headMenuTool =  Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width   : 1000,
        items: [
            {
                text: 'Index'
            },
            {
                xtype: 'splitbutton',
                text : 'Student Maintenance'
            },
            '->',
            {
                xtype    : 'textfield',
                name     : 'query',
                emptyText: 'enter search term'
            }
        ]
    });
    Ext.create('Ext.panel.Panel', {
       renderTo: Ext.getBody(),
       height: 600,
       width: 1200,
       layout:'border',
       defaults: {
          collapsible: true,
          split: true,
          bodyStyle: 'padding:15px'
       },
       items: [{
          title: 'tree',
          region:'west',
          html: 'This is Panel 1'
       },{
          title: 'Panel2',
          region:'center',
          html: 'This is Panel 2'
       },{
          title: 'Panel3',
          region: 'south',
          html: 'This is Panel 3'
       },{
          title: 'Panel4',
          region: 'east',
          html: 'This is Panel 4'
       },{
          title: 'XXX System',
          region: 'north',
         items:headMenuTool
       }]
    });
 });