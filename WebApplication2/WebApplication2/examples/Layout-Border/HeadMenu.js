var headMenuTool =  Ext.create('Ext.toolbar.Toolbar', {
    renderTo: document.body,
    width   : 400,
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