"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[20424],{61578:(e,i,r)=>{r.r(i),r.d(i,{default:()=>g});var l=r(78e3);const a=(0,l.uE)('<p><strong>Fecha de Liberación:</strong> 2022-03-31</p><h2 id="novedades" tabindex="-1"><a class="header-anchor" href="#novedades" aria-hidden="true">#</a> Novedades</h2><ul><li>Corrección de error en tiempo de ejecución al completar una Orden de compra de Crédito a Productor</li><li>Corrección de Visor para Generar Factura desde Líneas de Órdenes de Ventas cuando tiene la bandera &quot;Consolidar en un Documento&quot; habilitada</li><li>Corrección de cálculo de cantidad usada en el cultivo al anular una orden de compra</li></ul><h2 id="detalle-tecnico" tabindex="-1"><a class="header-anchor" href="#detalle-tecnico" aria-hidden="true">#</a> Detalle Técnico</h2><ul><li><p>CST-STD:</p><ul><li>Fixed error with consolidate document flag for Generate Invoice from Order Lines</li></ul></li><li><p>Farmer-Assistance-Program:</p><ul><li>Fixed error with NPE when a Purchase order is completed</li></ul></li><li><p>LVE-AdditionalTax:</p><ul><li>Add support to Setup Document Types AutoAllocate</li><li>Add support to Setup Document Tax Category with Exempt Tax</li><li>Add support to re-Process withholding calculate</li><li>Add Support to Write Tagline on Fiscal Customer Invoice</li></ul></li></ul><h2 id="reportes-relacionados" tabindex="-1"><a class="header-anchor" href="#reportes-relacionados" aria-hidden="true">#</a> Reportes relacionados</h2>',6),t={href:"https://github.com/erpcya/Control-VEALCA/issues/57",target:"_blank",rel:"noopener noreferrer"},o=(0,l.Uk)("Al completar Orden de compra da un NPE"),n={href:"https://github.com/erpcya/Control-VEALCA/issues/50",target:"_blank",rel:"noopener noreferrer"},s=(0,l.Uk)("Cuando se reversa la oc de productor no se reversa la cantidad ordenada del cultivo"),c={href:"https://github.com/erpcya/Control-VEALCA/issues/56",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("Crear factura que involucre varias ordenes de venta"),u={href:"https://github.com/erpcya/Control-ERPYA/issues/868",target:"_blank",rel:"noopener noreferrer"},p=(0,l.Uk)("Característica: IGTF"),m=(0,l.uE)('<h2 id="soporte-a-versiones" tabindex="-1"><a class="header-anchor" href="#soporte-a-versiones" aria-hidden="true">#</a> Soporte a Versiones</h2><ul><li>ADempiereBase: Versión de Liberación: 3.9.3-rs-4.3</li><li>CST-STD: Versión de Liberación: rs-33.2</li><li>Consigned-Material: 1.3.0</li><li>Exchange-Operation-System: 1.2.1</li><li>Cloud-Service-Management: 1.2.4</li><li>Cash-Management: 1.1.4</li><li>Currency-Convert-Documents: 1.0.9</li><li>Farmer-Assistance-Program: 1.3.9</li><li>RethinkDB-Replicator-Client: 1.1.5</li><li>Third-Party-Access: 1.0.5</li><li>Fiscal-Printer: 1.5.1</li><li>Sales-Force-Management: 1.0.6</li><li>Delivery-Management-Service: 1.1.9</li><li>Travel-Agency-Management: 1.1.9</li><li>Withholding: 1.1.6</li><li>Migration-Tools: 1.0.4</li><li>LVE: 1.8.0</li><li>Performance-Analysis: 1.1.3</li><li>Queue-Manager: 1.0.6</li><li>Notification-Queue: 1.1.6</li><li>Point-Of-Sales-Improvements: 1.4.3</li><li>Kafka-Replicator-Client: 1.0.9</li><li>Kafka-Util: 1.0.2</li><li>Core-Tools: 1.3.9</li><li>Get-Weight:1.2.4</li><li>Record-Weight: 1.0.7</li><li>Raw-Material-Receipt: 1.1.6</li><li>Additional-Reports: 1.2.3</li><li>adempiere-customer-backend: 1.2.1</li><li>Material-Management-Improvements: 1.1.5</li><li>Warehouse-Management-System-Improvements: 1.1.6</li><li>Import-Export-Management: 1.0.3</li><li>Update-Management: 1.1.5</li><li>Mini-Retail: 1.1.7</li><li>Print-Queue: 1.0.9</li><li>ERP-Payroll-Definition: 1.0.2</li><li>Internal-Store: 1.0.4</li><li>Telegram-Notifier: 1.0.5</li><li>Costing-Engine-Improvements: 1.1.1</li><li>Default-Attribute: 1.0.1</li><li>Financial-Report: 1.0.1</li><li>Json-Replicator-Client: 1.0.2</li><li>Kubernetes-Cluster: 1.0.7</li><li>ADempiere-Exporter: 1.0.5</li><li>ADempiere-TelegramBot</li><li>e-Commerce-Queue: 1.0.7</li><li>Vue-StoreFront-API: 1.0.5</li><li>Mercado-Libre-Venezuela-API: 1.0.5</li><li>Common-Functionalities: 1.0.0</li><li>FAP-Venezuela-Location: 1.0.0</li><li>LVE-AdditionalTax: 1.0.1</li></ul><h2 id="requerimientos" tabindex="-1"><a class="header-anchor" href="#requerimientos" aria-hidden="true">#</a> Requerimientos</h2><ul><li><p>Aplicar XML&#39;s:</p><ul><li><p>LVE-AdditionalTax:</p><p>0005_Add_TagLine_for_Fiscal_Customer_Invoice.xml</p></li><li><p>Farmer-Assistance-Program:</p><ul><li>07980_Add_FAP_Farming_ID_reference_to_order.xml</li><li>07990_Add_message_for_Process_Create_Order.xml</li></ul></li></ul></li><li><p>Aplicar binario de la aplicación</p></li></ul>',4),h={},g=(0,r(13860).Z)(h,[["render",function(e,i){const r=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[a,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("p",null,[(0,l._)("a",t,[o,(0,l.Wm)(r)])])]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l._)("a",n,[s,(0,l.Wm)(r)])])]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l._)("a",c,[d,(0,l.Wm)(r)])])]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l._)("a",u,[p,(0,l.Wm)(r)])])])]),m])}]])},81621:(e,i,r)=>{r.r(i),r.d(i,{data:()=>l});const l=JSON.parse('{"key":"v-cd6f6cca","path":"/downloads/updates/rs-4.x/rs-44.x/rs-44.4.html","title":"rs-44.4","lang":"es-ES","frontmatter":{"title":"rs-44.4","icon":"app","category":["Actualizaciones"],"star":9,"sticky":9,"tag":["Actualizaciones","Versiones","rs-44.4","2022-03-31T00:00:00.000Z"],"article":false,"summary":"Fecha de Liberación: 2022-03-31 Novedades Corrección de error en tiempo de ejecución al completar una Orden de compra de Crédito a Productor; Corrección de Visor para Generar Factu","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/downloads/updates/rs-4.x/rs-44.x/rs-44.4.html"}],["meta",{"property":"og:title","content":"rs-44.4"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-09T21:08:14.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Actualizaciones"}],["meta",{"property":"article:tag","content":"Versiones"}],["meta",{"property":"article:tag","content":"rs-44.4"}],["meta",{"property":"article:tag","content":"2022-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-09T21:08:14.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Novedades","slug":"novedades","children":[]},{"level":2,"title":"Detalle Técnico","slug":"detalle-tecnico","children":[]},{"level":2,"title":"Reportes relacionados","slug":"reportes-relacionados","children":[]},{"level":2,"title":"Soporte a Versiones","slug":"soporte-a-versiones","children":[]},{"level":2,"title":"Requerimientos","slug":"requerimientos","children":[]}],"git":{"createdTime":1686344894000,"updatedTime":1686344894000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.3,"words":391},"filePathRelative":"downloads/updates/rs-4.x/rs-44.x/rs-44.4.md","localizedDate":"9 de junio de 2023"}')}}]);