(function(c){"function"===typeof define&&define.amd?define(["jquery","./grid.base"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)})(function(c){var m=c.jgrid,v=m.jqID,x=c.fn.jqGrid,y=function(){var a=c.makeArray(arguments);a[0]="subGrid"+a[0].charAt(0).toUpperCase()+a[0].substring(1);a.unshift("");a.unshift("");a.unshift(this.p);return m.feedback.apply(this,a)},q=function(a,d){return this.each(function(){if(this.grid&&null!=a&&!0===this.p.subGrid){var f=c(this).jqGrid("getInd",a,!0);
c(f).find(">td."+d).trigger("click")}})};m.extend({setSubGrid:function(){return this.each(function(){var a=this.p,d=a.subGridModel[0];a.subGridOptions=c.extend({expandOnLoad:!1,delayOnLoad:50,selectOnExpand:!1,selectOnCollapse:!1,reloadOnExpand:!0},a.subGridOptions||{});a.colNames.unshift("");a.colModel.unshift({name:"subgrid",width:m.cell_width?a.subGridWidth+a.cellLayout:a.subGridWidth,labelClasses:"jqgh_subgrid",sortable:!1,resizable:!1,hidedlg:!0,search:!1,fixed:!0,frozen:!0});if(d)for(d.align=
c.extend([],d.align||[]),a=0;a<d.name.length;a++)d.align[a]=d.align[a]||"left"})},addSubGridCell:function(a,d,f,b){var k=this[0],e=k.p.subGridOptions;f=c.isFunction(e.hasSubgrid)?e.hasSubgrid.call(k,{rowid:f,iRow:d,iCol:a,data:b}):!0;return null==k||null==k.p||null==e?"":"<td role='gridcell' class='"+x.getGuiStyles.call(this,"subgrid.tdStart",f?"ui-sgcollapsed sgcollapsed":"")+"' "+k.formatCol(a,d)+">"+(f?"<a style='cursor:pointer;'><span class='"+m.mergeCssClasses(e.commonIconClass,e.plusicon)+"'></span></a>":
"&nbsp;")+"</td>"},addSubGrid:function(a,d){return this.each(function(){var f=this,b=f.p,k=b.subGridModel[0],e=function(c,b){return x.getGuiStyles.call(f,"subgrid."+c,b||"")},q=e("thSubgrid","ui-th-subgrid ui-th-column ui-th-"+b.direction),z=e("rowSubTable","ui-subtblcell"),C=e("row","ui-subgrid ui-row-"+b.direction),D=e("tdWithIcon","subgrid-cell"),E=e("tdData","subgrid-data"),p=function(b,a,f){a=c("<td align='"+k.align[f]+"'></td>").html(a);b.append(a)},A=function(a,f){var g=b.xmlReader.subgrid;
c(g.root+" "+g.row,a).each(function(){var b,a,n=c("<tr class='"+z+"'></tr>");if(!0===g.repeatitems)c(g.cell,this).each(function(b){p(n,c(this).text()||"&#160;",b)});else if(b=k.mapping||k.name)for(a=0;a<b.length;a++)p(n,c(b[a],this).text()||"&#160;",a);f.append(n)})},B=function(a,f){var g,r,h,n,d,e=b.jsonReader.subgrid,l=m.getAccessor(a,e.root);if(null!=l)for(r=0;r<l.length;r++){d=l[r];g=c("<tr class='"+z+"'></tr>");if(!0===e.repeatitems)for(e.cell&&(d=d[e.cell]),h=0;h<d.length;h++)p(g,d[h]||"&#160;",
h);else if(n=k.mapping||k.name,n.length)for(h=0;h<n.length;h++)p(g,d[n[h]]||"&#160;",h);f.append(g)}},t=function(a,d,g){var e,h,n=c("<table"+(m.msie&&8>m.msiever()?" cellspacing='0'":"")+"><tbody></tbody></table>"),l=c(n[0].tBodies[0]),p=c("<tr></tr>");for(h=0;h<k.name.length;h++)e=c("<th class='"+q+"'></th>").html(k.name[h]).width(k.width[h]),p.append(e);l.append(p);g(a,l);c("#"+v(b.id+"_"+d)).append(n);f.grid.hDiv.loading=!1;c("#load_"+v(b.id)).hide();return!1},F=function(a){var d=c(a).attr("id"),
g={nd_:(new Date).getTime()},e,h;g[b.prmNames.subgridid]=d;if(!k)return!1;if(k.params)for(h=0;h<k.params.length;h++)e=b.iColByName[k.params[h]],void 0!==e&&(g[b.colModel[e].name]=c(a.cells[e]).text().replace(/\&#160\;/ig,""));if(!f.grid.hDiv.loading)switch(f.grid.hDiv.loading=!0,c("#load_"+v(b.id)).show(),b.subgridtype||(b.subgridtype=b.datatype),c.isFunction(b.subgridtype)?b.subgridtype.call(f,g):b.subgridtype=b.subgridtype.toLowerCase(),b.subgridtype){case "xml":case "json":c.ajax(c.extend({type:b.mtype,
url:c.isFunction(b.subGridUrl)?b.subGridUrl.call(f,g):b.subGridUrl,dataType:b.subgridtype,data:m.serializeFeedback.call(f,b.serializeSubGridData,"jqGridSerializeSubGridData",g),complete:function(a){"xml"===b.subgridtype?t(a.responseXML,d,A):(a=m.parse(a.responseText),t(a,d,B))}},m.ajaxOptions,b.ajaxSubgridOptions||{}))}return!1},e=function(){var d=c(this).parent("tr")[0],e=d.nextSibling,g=d.id,k=b.id+"_"+g,h=function(a){return m.mergeCssClasses(b.subGridOptions.commonIconClass,b.subGridOptions[a])},
l=1;c.each(b.colModel,function(){!0!==this.hidden&&"rn"!==this.name&&"cb"!==this.name||l++});if(c(this).hasClass("sgcollapsed")){if(!0===b.subGridOptions.reloadOnExpand||!1===b.subGridOptions.reloadOnExpand&&!c(e).hasClass("ui-subgrid")){e=1<=a?"<td colspan='"+a+"'>&#160;</td>":"";if(!y.call(f,"beforeExpand",k,g))return;c(d).after("<tr role='row' class='"+C+"'>"+e+"<td class='"+D+"'><span class='"+h("openicon")+"'></span></td><td colspan='"+parseInt(b.colNames.length-l,10)+"' class='"+E+"'><div id='"+
k+"' class='tablediv'></div></td></tr>");c(f).triggerHandler("jqGridSubGridRowExpanded",[k,g]);c.isFunction(b.subGridRowExpanded)?b.subGridRowExpanded.call(f,k,g):F(d)}else c(e).show();c(this).html("<a style='cursor:pointer;'><span class='"+h("minusicon")+"'></span></a>").removeClass("sgcollapsed").addClass("sgexpanded");b.subGridOptions.selectOnExpand&&c(f).jqGrid("setSelection",g)}else if(c(this).hasClass("sgexpanded")){if(!y.call(f,"beforeCollapse",k,g))return;!0===b.subGridOptions.reloadOnExpand?
c(e).remove(".ui-subgrid"):c(e).hasClass("ui-subgrid")&&c(e).hide();c(this).html("<a style='cursor:pointer;'><span class='"+h("plusicon")+"'></span></a>").removeClass("sgexpanded").addClass("sgcollapsed");b.subGridOptions.selectOnCollapse&&c(f).jqGrid("setSelection",g)}return!1},w,l,u=1;if(f.grid){w=f.rows.length;void 0!==d&&0<d&&(u=d,w=d+1);for(;u<w;)l=f.rows[u],c(l).hasClass("jqgrow")&&(l=c(l.cells[a]),l.hasClass("ui-sgcollapsed")&&(b.scroll&&l.unbind("click"),l.bind("click",e))),u++;!0===b.subGridOptions.expandOnLoad&&
c(f.rows).filter(".jqgrow").each(function(a,b){c(b.cells[0]).click()});f.subGridXml=function(a,b){t(a,b,A)};f.subGridJson=function(a,b){t(a,b,B)}}})},expandSubGridRow:function(a){return q.call(this,a,"sgcollapsed")},collapseSubGridRow:function(a){return q.call(this,a,"sgexpanded")},toggleSubGridRow:function(a){return q.call(this,a,"ui-sgcollapsed")}})});

//# sourceMappingURL=grid.subgrid.map
