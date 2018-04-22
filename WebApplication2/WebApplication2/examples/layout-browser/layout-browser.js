/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath('Ext.ux', '../ux');

Ext.require([
    'Ext.tip.QuickTipManager',
    'Ext.container.Viewport',
    'Ext.layout.*',
    'Ext.form.Panel',
    'Ext.form.Label',
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.tree.*',
    'Ext.selection.*',
    'Ext.tab.Panel',
    'Ext.ux.layout.Center'
    , 'Ext.tree.Panel'
]);





//
// This is the main layout definition.
//
Ext.onReady(function () {

    Ext.tip.QuickTipManager.init();

    // This is an inner body element within the Details panel created to provide a "slide in" effect
    // on the panel body without affecting the body's box itself.  This element is created on
    // initial use and cached in this var for subsequent access.
    var detailEl;

    // Gets all layouts examples
    var layoutExamples = [];
    Ext.Object.each(getBasicLayouts(), function (name, example) {
        layoutExamples.push(example);
    });

    Ext.Object.each(getCombinationLayouts(), function (name, example) {
        layoutExamples.push(example);
    });

    Ext.Object.each(getCustomLayouts(), function (name, example) {
        layoutExamples.push(example);
    });

    // This is the main content center region that will contain each example layout panel.
    // It will be implemented as a CardLayout since it will contain multiple panels with
    // only one being visible at any given time.


    /*  
      //arrayGride
    var companyLists =  Ext.define('KitchenSink.view.grid.ArrayGrid', {
          extend: 'Ext.grid.Panel',
          requires: [
              'Ext.grid.column.Action'
          ],
          xtype: 'array-grid',
          store: 'Companies',
          stateful: true,
          collapsible: true,
          multiSelect: true,
          stateId: 'stateGrid',
          height: 350,
          title: 'Array Grid',
          viewConfig: {
              stripeRows: true,
              enableTextSelection: true
          },
      
          initComponent: function () {
              this.width = 650;
              this.columns = [
                  {
                      text     : 'Company',
                      flex     : 1,
                      sortable : false,
                      dataIndex: 'company'
                  },
                  {
                      text     : 'Price',
                      width    : 75,
                      sortable : true,
                      renderer : 'usMoney',
                      dataIndex: 'price'
                  },
                  {
                      text     : 'Change',
                      width    : 80,
                      sortable : true,
                      renderer : function(val) {
                          if (val > 0) {
                              return '<span style="color:' + '#73b51e' + ';">' + val + '</span>';
                          } else if (val < 0) {
                              return '<span style="color:' + '#cf4c35' + ';">' + val + '</span>';
                          }
                          return val;
                      },
                      dataIndex: 'change'
                  },
                  {
                      text     : '% Change',
                      width    : 100,
                      sortable : true,
                      renderer : function(val) {
                          if (val > 0) {
                              return '<span style="color:' + '#73b51e' + '">' + val + '%</span>';
                          } else if (val < 0) {
                              return '<span style="color:' + '#cf4c35' + ';">' + val + '%</span>';
                          }
                          return val;
                      },
                      dataIndex: 'pctChange'
                  },
                  {
                      text     : 'Last Updated',
                      width    : 115,
                      sortable : true,
                      renderer : Ext.util.Format.dateRenderer('m/d/Y'),
                      dataIndex: 'lastChange'
                  },
                  {
                      menuDisabled: true,
                      sortable: false,
                      xtype: 'actioncolumn',
                      width: 50,
                      items: [{
                          iconCls: 'sell-col',
                          tooltip: 'Sell stock',
                          handler: function(grid, rowIndex, colIndex) {
                              var rec = grid.getStore().getAt(rowIndex);
                              Ext.Msg.alert('Sell', 'Sell ' + rec.get('company'));
                          }
                      }, {
                          getClass: function(v, meta, rec) {
                              if (rec.get('change') < 0) {
                                  return 'alert-col';
                              } else {
                                  return 'buy-col';
                              }
                          },
                          getTip: function(v, meta, rec) {
                              if (rec.get('change') < 0) {
                                  return 'Hold stock';
                              } else {
                                  return 'Buy stock';
                              }
                          },
                          handler: function(grid, rowIndex, colIndex) {
                              var rec = grid.getStore().getAt(rowIndex),
                                  action = (rec.get('change') < 0 ? 'Hold' : 'Buy');
      
                              Ext.Msg.alert(action, action + ' ' + rec.get('company'));
                          }
                      }]
                  }
              ];
      
              this.callParent();
          }
      });
  */


    /*
    //card TabPanel：此布局允许使用容器中的XY坐标定位项目。
    
    var carTab =  Ext.create('Ext.tab.Panel', {
        renderTo: Ext.getBody(),
        requires: ['Ext.layout.container.Card'],
        xtype: 'layout-cardtabs',
        width: 600,
        height: 200,
        items:[{
           title: 'Student',
           items: {
            width: 500,
            height: 300,
             title: "HBoxLayout Panel",
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            renderTo: document.body,
            items: [ {
                
                layout : {
                   type :'table',
                   columns : 3,
                   tableAttrs: {
                      style: {
                         width: '100%'
                      }
                   }               
                },
                width:600,
                height:200,
                items : [{
                   title : 'Panel1',
                   html : 'This panel has colspan = 2',
                   colspan :2
                },{
                   title : 'Panel2',
                   html : 'This panel has rowspan = 2',
                   rowspan: 2
                },{
                   title : 'Panel3',
                   html : 'This  s panel 3'
                },{
                   title : 'Panel4',
                   html : 'This is panel 4'
                },{
                   title : 'Panel5',
                   html : 'This is panel 5'
                }]
             }]
        }
        },{
           title: 'Tab 2',
           html: 'This is second tab.'
        },{
           title: 'Tab 3',
           html: 'This is third tab.'
        }]
     });
    
     */
    /*
    //横向布局
       var hboxE = Ext.create('Ext.Panel', {
            width: 500,
            height: 300,
            title: "HBoxLayout Panel",
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            renderTo: document.body,
            items: [{
                xtype: 'panel',
                title: 'Name',
                flex: 2
            },{
                xtype: 'panel',
                title: 'Age',
                flex: 1
            },{
                xtype: 'panel',
                title: 'Gender',
                flex: 1
            }]
        });
    
      */

    //创建gridPanel   列表


    var userGridPanel = Ext.create('Ext.grid.Panel', {
        title: '用户管理',
        iconCls: 'user',
        store: myStore,//Ext.data.StoreManager.lookup('myStore'),//使用store
        forceFit: true,//设置为true，则强制列自适应成可用宽度。标题头部的尺寸首先根据配置来确定，
        // 无论它被指定了一个width，或是flex。 然后，它们的宽度成比例地改变，以便采用内容的整个宽度。
        columnLines: true,//列框线
        columns: [
            { xtype: 'rownumberer', width: 30, align: 'center', header: '序号' },
            { header: '用户名', dataIndex: 'username' },
            { header: '真实姓名', dataIndex: 'realname' },//, flex: 1   forceFit对他无效
            { header: '入职时间', dataIndex: 'hiredate', renderer: Ext.util.Format.dateRenderer('m/d/Y') },
            { header: '电话', dataIndex: 'phone' },
            {
                header: '状态', dataIndex: 'state', renderer: function (value) {//指定函数，把value值转换为可显示的内容
                    return value ? "在职" : "<font color='red'>离职</font>";
                }
            }],
        bbar: {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            store: myStore,

        },//分页条Ext.data.StoreManager.lookup('myStore')
        //tbar 顶部工具栏
        tbar: [{
            xtype: 'button', text: '新增', iconCls: 'add', border: false, handler: function () {
                testaddWindow.show();
            }
        },
        { xtype: 'button', text: '编辑', iconCls: 'edit', border: false, handler: function () { } },
        { xtype: 'button', text: '删除', iconCls: 'delete', border: false, handler: function () { } },
        { xtype: 'button', text: '刷新', iconCls: 'reload', border: false, handler: function () { } },
        ],
    });
    //弹出层 window.Window
 
    var testaddWindow = Ext.create('Ext.window.Window', {
        title: '新增用户',
        height: 350,
        width: 350,
        layout: 'fit',
        items: {  // Let's put an empty grid in just to illustrate fit layout
            xtype: 'form',
            width: 350,
            // 将会通过 AJAX 请求提交到此URL
            bodyPadding: 30,
            // 将会通过 AJAX 请求提交到此URL
        //    url: './json/user_saveOrUpdate.json',
            url:'/User/AddSave',
            // 表单域 Fields 将被竖直排列, 占满整个宽度
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            // The fields
            defaultType: 'textfield',
            items: [{
                name: 'id',
                hidden: true
            }, {
                    fieldLabel: '用户名',
                    name: 'username',
                    allowBlank: false
                }, {
                    fieldLabel: '真实姓名',
                    name: 'realname',

                }, {
                    fieldLabel: '入职时间',
                    name: 'hiredate',
                    xtype: 'datefield',
                    format: 'Y-m-d'
                }, {
                    fieldLabel: '电话',
                    name: 'phone',

                }, {
                    fieldLabel: '状态',
                    name: 'state',
                    xtype: 'combobox',
                    store: new Ext.data.ArrayStore({
                        fields: ['value', 'text'],
                        data: [
                            [true, '在职'],
                            [false, '离职']
                        ]
                    }),
                    valueField: 'value',
                    dispalyField: 'text',
                }],

            // 重置 和 保存 按钮.
            buttons: [{
                text: '重置',
                handler: function () {
                    this.up('form').getForm().reset();
                }
            }, {
                text: '保存',
                formBind: true, //only enabled once the form is valid
                disabled: true,
                handler: function () {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        form.submit({ 
                            success: function (form, action) {
                                Ext.Msg.alert('温馨提示', '保存成功');
                            },
                            failure: function (form, action) {
                                //Ext.Msg.alert('操作失败', action.result.msg);
                                Ext.Msg.alert('温馨提示','保存失败');
                            }
                        });
                    }
                }
            }],
        }
    });
  
    //弹出层里面的表单 Ext.form.Panel
    



    var contentPanel = {
        id: 'content-panel',
        region: 'center', // this is what makes this panel into a region within the containing layout
        layout: 'card',
        margins: '2 5 5 0',
        activeItem: 0,
        border: false,
        //  items: layoutExamples
        items: userGridPanel//carTab//hboxE
    };



    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true
        },
        proxy: {
            type: 'ajax',
            url: 'tree-data.json'
        }
    });


    var treeStore = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                { text: "detention", leaf: true },
                {
                    text: "homework", expanded: true, children: [
                        { text: "book report", leaf: true },
                        { text: "alegrbra", leaf: true }
                    ]
                },
                { text: "buy lottery tickets", leaf: true }
            ]
        }
    });
    //用我这个tree
    var simpleTreePanel = Ext.create('Ext.tree.Panel', {
        id: 'tree-panel',
        title: 'Simple Tree',
        region: 'north',
        //width: 200,
        height: 360,
        minSize: 150,
        store: treeStore,
        rootVisible: false,
        autoScroll: true,

    });


    // Go ahead and create the TreePanel now so that we can use it below
    var treePanel = Ext.create('Ext.tree.Panel', {
        id: 'tree-panel',
        title: 'Sample Layouts',
        region: 'north',
        split: true,
        height: 360,
        minSize: 150,
        rootVisible: false,
        autoScroll: true,
        store: store
    });

    // Assign the changeLayout function to be called on tree node click.
    treePanel.getSelectionModel().on('select', function (selModel, record) {
        if (record.get('leaf')) {
            Ext.getCmp('content-panel').layout.setActiveItem(record.getId() + '-panel');
            if (!detailEl) {
                var bd = Ext.getCmp('details-panel').body;
                bd.update('').setStyle('background', '#fff');
                detailEl = bd.createChild(); //create default empty div
            }
            detailEl.hide().update(Ext.getDom(record.getId() + '-details').innerHTML).slideIn('l', { stopAnimation: true, duration: 200 });
        }
    });

    // This is the Details panel that contains the description for each example layout.
    var detailsPanel = {
        id: 'details-panel',
        title: 'Details',
        region: 'center',
        bodyStyle: 'padding-bottom:15px;background:#eee;',
        autoScroll: true,
        html: '<p class="details-info">When you select a layout from the tree, additional details will display here.</p>',

    };





    // Finally, build the main layout once all the pieces are ready.  This is also a good
    // example of putting together a full-screen BorderLayout within a Viewport.
    //items项： 这样我们可以将不同的子元素作为容器项添加到容器中。
    //Viewport是一个容器，它会自动调整大小到整个浏览器窗口的大小。 
    //然后，您可以在其中添加其他ExtJS UI组件和容器。
    //layout:fit  指在此布局中，容器用单个面板填充，并且当没有与布局相关的特定要求时，则使用该布局。
    //layout :colum 此布局用于在容器中显示多个列。 
    //我们可以定义列的固定宽度或百分比宽度。 百分比宽度将基于容器的完整大小计算。
    //layout:Table  由于名称意味着此布局以HTML表格式在容器中排列组件。
    //layout vbox :此布局允许元素以垂直方式分布。 这是最常用的布局之一。
    //layout  hbox ：这种布局允许元素以水平方式分布。
    Ext.create('Ext.Viewport', {
        layout: 'border',//在此布局中，各种面板嵌套并由边界分隔。
        title: 'Ext Layout Browser',
        items: [{
            xtype: 'box',
            id: 'header',
            region: 'north',

            html: '<h1>XXX ERP System</h1>',
            height: 30
        }, {
            layout: 'border',
            id: 'layout-browser',
            region: 'west',
            border: false,
            split: true,
            margins: '2 0 5 5',
            width: 275,
            minSize: 100,
            maxSize: 500,
            items: [simpleTreePanel, detailsPanel]// [treePanel, detailsPanel]
        },
            contentPanel
        ],
        renderTo: Ext.getBody()
    });
});

