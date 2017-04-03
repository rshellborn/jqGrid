!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return b||(b=window),void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),require("./grid.base"),a(c),c}:a(jQuery)}(function(a){"use strict";var b=a.jgrid,c=b.jqID,d=a.fn.jqGrid,e=function(){var c=a.makeArray(arguments);return c[0]="subGrid"+c[0].charAt(0).toUpperCase()+c[0].substring(1),c.unshift(""),c.unshift(""),c.unshift(this.p),b.feedback.apply(this,c)},f=function(b,c){return this.each(function(){if(this.grid&&null!=b&&this.p.subGrid===!0){var d=a(this).jqGrid("getInd",b,!0);a(d).find(">td."+c).trigger("click")}})};b.extend({setSubGrid:function(){return this.each(function(){var c,d=this.p,e=a(this),f=d.subGridModel[0],g=function(a){return e.jqGrid("getIconRes",a)};if(d.subGridOptions=a.extend({commonIconClass:g("subgrid.common"),plusicon:g("subgrid.plus"),minusicon:g("subgrid.minus"),openicon:g("rtl"===d.direction?"subgrid.openRtl":"subgrid.openLtr"),expandOnLoad:!1,delayOnLoad:50,selectOnExpand:!1,selectOnCollapse:!1,reloadOnExpand:!0},d.subGridOptions||{}),d.colNames.unshift(""),d.colModel.unshift({name:"subgrid",width:b.cell_width?d.subGridWidth+d.cellLayout:d.subGridWidth,labelClasses:"jqgh_subgrid",sortable:!1,resizable:!1,hidedlg:!0,search:!1,fixed:!0,frozen:!0}),f)for(f.align=a.extend([],f.align||[]),c=0;c<f.name.length;c++)f.align[c]=f.align[c]||"left"})},addSubGridCell:function(c,e,f,g){var h=this[0],i=h.p.subGridOptions,j=!a.isFunction(i.hasSubgrid)||i.hasSubgrid.call(h,{rowid:f,iRow:e,iCol:c,data:g});return null==h.p?"":"<td role='gridcell' class='"+d.getGuiStyles.call(this,"subgrid.tdStart",j?"ui-sgcollapsed sgcollapsed":"")+"' "+h.formatCol(c,e)+">"+(j?"<div class='"+d.getGuiStyles.call(this,"subgrid.buttonDiv","sgbutton-div")+"'><a role='button' class='"+d.getGuiStyles.call(this,"subgrid.button","sgbutton")+"'><span class='"+b.mergeCssClasses(i.commonIconClass,i.plusicon)+"'></span></a></div>":"&nbsp;")+"</td>"},addSubGrid:function(f,g){return this.each(function(){var h,i,j,k=this,l=k.p,m=l.subGridModel[0],n=function(a,b){return d.getGuiStyles.call(k,"subgrid."+a,b||"")},o=n("thSubgrid","ui-th-subgrid ui-th-column ui-th-"+l.direction),p=n("rowSubTable","ui-subtblcell"),q=n("row","ui-subgrid ui-row-"+l.direction),r=n("tdWithIcon","subgrid-cell"),s=n("tdData","subgrid-data"),t=function(b,c,d){var e=m.align[d],f=a("<td"+(e?" style='text-align:"+e+";'":"")+"></td>").html(c);b.append(f)},u=function(b,c){var d=l.xmlReader.subgrid;a(d.root+" "+d.row,b).each(function(){var b,e,f=a("<tr class='"+p+"'></tr>");if(d.repeatitems===!0)a(d.cell,this).each(function(b){t(f,a(this).text()||"&#160;",b)});else if(b=m.mapping||m.name)for(e=0;e<b.length;e++)t(f,a(b[e],this).text()||"&#160;",e);c.append(f)})},v=function(c,d){var e,f,g,h,i,j=l.jsonReader.subgrid,k=b.getAccessor(c,j.root);if(null!=k)for(f=0;f<k.length;f++){if(i=k[f],e=a("<tr class='"+p+"'></tr>"),j.repeatitems===!0)for(j.cell&&(i=i[j.cell]),g=0;g<i.length;g++)t(e,i[g]||"&#160;",g);else if(h=m.mapping||m.name,h.length)for(g=0;g<h.length;g++)t(e,i[h[g]]||"&#160;",g);d.append(e)}},w=function(b,d,e){var f,g,h=n("legacyTable","ui-jqgrid-legacy-subgrid"+(l.altRows===!0&&a(k).jqGrid("isBootstrapGuiStyle")?" table-striped":"")),i=a("<table"+(h?" style='width:1px' role='presentation' class='"+h+"'":"")+"><thead></thead><tbody></tbody></table>"),j=a("<tr></tr>");for(k.grid.endReq.call(k),g=0;g<m.name.length;g++)f=a("<th class='"+o+"'></th>").html(m.name[g]).width(m.width[g]),j.append(f);return j.appendTo(i[0].tHead),e(b,a(i[0].tBodies[0])),a("#"+c(l.id+"_"+d)).append(i),!1},x=function(c){var d,e,f=a(c).attr("id"),g={nd_:(new Date).getTime()};if(g[l.prmNames.subgridid]=f,!m)return!1;if(m.params)for(e=0;e<m.params.length;e++)void 0!==(d=l.iColByName[m.params[e]])&&(g[l.colModel[d].name]=a(c.cells[d]).text().replace(/\&#160\;/gi,""));if(!k.grid.hDiv.loading)switch(k.grid.beginReq.call(k),l.subgridtype||(l.subgridtype=l.datatype),a.isFunction(l.subgridtype)?l.subgridtype.call(k,g):l.subgridtype=l.subgridtype.toLowerCase(),l.subgridtype){case"xml":case"json":a.ajax(a.extend({type:l.mtype,url:a.isFunction(l.subGridUrl)?l.subGridUrl.call(k,g):l.subGridUrl,dataType:l.subgridtype,context:f,data:b.serializeFeedback.call(k,l.serializeSubGridData,"jqGridSerializeSubGridData",g),success:function(a){w(a,this,"xml"===l.subgridtype?u:v)},error:function(b,c,d){var e=void 0===l.loadSubgridError?l.loadError:l.loadSubgridError;k.grid.endReq.call(k),a.isFunction(e)&&e.call(k,b,c,d),l.subGridOptions.noEmptySubgridOnError||w(null,this,"xml"===l.subgridtype?u:v)}},b.ajaxOptions,l.ajaxSubgridOptions||{}))}return!1},y=function(){var c,g=a(this).parent("tr")[0],h=g.nextSibling,i=g.id,j=l.id+"_"+i,m=function(a){return b.mergeCssClasses(l.subGridOptions.commonIconClass,l.subGridOptions[a])},n=1;if(a.each(l.colModel,function(){this.hidden!==!0&&"rn"!==this.name&&"cb"!==this.name||n++}),a(this).hasClass("sgcollapsed")){if(l.subGridOptions.reloadOnExpand===!0||l.subGridOptions.reloadOnExpand===!1&&!a(h).hasClass("ui-subgrid")){if(c=f>=1?"<td colspan='"+f+"'>&#160;</td>":"",!e.call(k,"beforeExpand",j,i))return;a(g).after("<tr role='row' class='"+q+"'>"+c+"<td class='"+r+"'><span class='"+m("openicon")+"'></span></td><td colspan='"+parseInt(l.colNames.length-n,10)+"' class='"+s+"'><div id='"+j+"' class='tablediv'></div></td></tr>"),a(k).triggerHandler("jqGridSubGridRowExpanded",[j,i]),a.isFunction(l.subGridRowExpanded)?l.subGridRowExpanded.call(k,j,i):x(g)}else a(h).show();a(this).html("<div class='"+d.getGuiStyles.call(k,"subgrid.buttonDiv","sgbutton-div")+"'><a role='button' class='"+d.getGuiStyles.call(k,"subgrid.button","sgbutton")+"'><span class='"+m("minusicon")+"'></span></a></div>").removeClass("sgcollapsed").addClass("sgexpanded"),l.subGridOptions.selectOnExpand&&a(k).jqGrid("setSelection",i)}else if(a(this).hasClass("sgexpanded")){if(!e.call(k,"beforeCollapse",j,i))return;l.subGridOptions.reloadOnExpand===!0?a(h).remove(".ui-subgrid"):a(h).hasClass("ui-subgrid")&&a(h).hide(),a(this).html("<div class='"+d.getGuiStyles.call(k,"subgrid.buttonDiv","sgbutton-div")+"'><a role='button' class='"+d.getGuiStyles.call(k,"subgrid.button","sgbutton")+"'><span class='"+m("plusicon")+"'></span></a></div>").removeClass("sgexpanded").addClass("sgcollapsed"),l.subGridOptions.selectOnCollapse&&a(k).jqGrid("setSelection",i)}return!1},z=1;if(k.grid){for(h=k.rows.length,void 0!==g&&g>0&&(z=g,h=g+1);z<h;)i=k.rows[z],a(i).hasClass("jqgrow")&&(j=a(i.cells[f]),j.hasClass("ui-sgcollapsed")&&(l.scroll&&j.off("click"),j.on("click",y))),z++;l.subGridOptions.expandOnLoad===!0&&a(k.rows).filter(".jqgrow").each(function(b,c){a(c.cells[0]).click()}),k.subGridXml=function(a,b){return w(a,b,u)},k.subGridJson=function(a,b){return w(a,b,v)}}})},expandSubGridRow:function(a){return f.call(this,a,"sgcollapsed")},collapseSubGridRow:function(a){return f.call(this,a,"sgexpanded")},toggleSubGridRow:function(a){return f.call(this,a,"ui-sgcollapsed")}})});
//# sourceMappingURL=grid.subgrid.js.map