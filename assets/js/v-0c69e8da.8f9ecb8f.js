"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[24415],{36121:(e,a,r)=>{r.r(a),r.d(a,{default:()=>o});var i=r(78e3);const t=[(0,i.uE)('<p><strong>Fecha de Liberación:</strong> 2021-09-22</p><h2 id="mejoras" tabindex="-1"><a class="header-anchor" href="#mejoras" aria-hidden="true">#</a> Mejoras</h2><ul><li>Se agrega nuevo reporte de Almacenamiento de Productos por Proveedor: muy util para ver los productos en consignación</li></ul><p><img src="/assets/img/downloads/updates/resources/rs-28-2-generate-invoice-shipment-automatically.png" alt="reporte de almacenamiento por proveedor"></p><ul><li>Se agrega formato de impresión de paquetes en formato 80 mm</li><li>Se agrega referencia a tipo de paquete en Orden de Compras</li></ul><p><img src="/assets/img/downloads/updates/resources/rs-28-2-purchase-order-add-package-allocation.png" alt="agregar tipo de paquete a orden de compra"></p><ul><li>Se agrega bandera para permitir asignar paquetes a orden de compras</li></ul><p><img src="/assets/img/downloads/updates/resources/rs-28-2-purchase-order-add-package-type.png" alt="agregar asignacion de paquetes a orden de compras"></p><ul><li>Se agrega proceso que permite crear de manera automática los paquetes según peso y volumen al completar una orden de compras</li><li>Se agregan dimensiones permitidas en el tipo de unidad de transporte</li><li>Se predeterminan los valores máximos y mínimos de las unidades de transporte según su tipo</li></ul><p><img src="/assets/img/downloads/updates/resources/rs-28-2-storage-per-vendor.png" alt="agregar medidas a tipo de unidad de transporte"></p><ul><li>Se agrega bandera en tipo de documento de orden de salida para generar de manera automática las entregas al completar el documento</li><li>Se agrega bandera en tipo de documento de orden de salida para generar de manera automática las facturas al completar el documento</li></ul><p><img src="/assets/img/downloads/updates/resources/rs-28-2-transport-type-add-measures.png" alt="generar factura automaticamente"></p><h2 id="correcciones" tabindex="-1"><a class="header-anchor" href="#correcciones" aria-hidden="true">#</a> Correcciones</h2><ul><li>adempiere-gRPC-Server: Fixed error with rounding price from getProductPrice Service</li></ul><h2 id="detalle-tecnico" tabindex="-1"><a class="header-anchor" href="#detalle-tecnico" aria-hidden="true">#</a> Detalle Técnico</h2><ul><li><p>Consigned-Material: Add Storage per Vendor Report</p></li><li><p>Delivery-Management-Service:</p><ul><li>Add Barcode Box Report</li><li>Add flag for Allocate packages from Purchase Orders</li><li>Add Package Type reference to Order</li><li>Generate packages automatically from Purchase Order</li></ul></li><li><p>Import-Export-Management: Initial Commit</p></li><li><p>Warehouse-Management-System-Improvements: Add Flag for generate invoice / shipment from Outbound Order</p></li><li><p>Currency-Convert-Documents: Fixed Bad Reference to Invoice on Negotiated Currency Type</p></li></ul><h2 id="soporte-a-versiones" tabindex="-1"><a class="header-anchor" href="#soporte-a-versiones" aria-hidden="true">#</a> Soporte a Versiones</h2><ul><li>ADempiereBase: Versión de Liberación: 3.9.3-rs-4.3</li><li>CST-STD: Versión de Liberación: rs-25.5</li><li>Consigned-Material: 1.2.8</li><li>Exchange-Operation-System: 1.1.7</li><li>Cash-Management: 1.0.4</li><li>Currency-Convert-Documents: 1.0.6</li><li>Farmer-Assistance-Program: 1.1.6</li><li>RethinkDB-Replicator-Client: 1.1.2</li><li>Third-Party-Access: 1.0.2</li><li>FiscalPrinter: 1.3.2</li><li>Sales-Force-Management: 1.0.2</li><li>Delivery-Management-Service: 1.0.6</li><li>Travel-Agency-Management: 1.0.8</li><li>Withholding: 1.0.9</li><li>Additional-Reports: 1.0.3</li><li>Migration-Tools: 1.0.3</li><li>LVE: 1.3.9</li><li>Performance-Analysis: 1.0.2</li><li>Queue-Manager: 1.0.4</li><li>Notification-Queue: 1.0.4</li><li>Point-Of-Sales-Improvements: 1.1.5</li><li>Kafka-Replicator-Client: 1.0.6</li><li>Core-Tools: 1.1.1</li><li>Get-Weight:1.0.9</li><li>Record-Weight: 1.0.3</li><li>Raw-Material-Receipt: 1.0.9</li><li>Additional-Reports: 1.0.7</li><li>adempiere-gRPC-Server: rt-23.5</li><li>Material-Management-Improvements: 1.0.1</li><li>Warehouse-Management-System-Improvements: 1.0.8</li><li>Import-Export-Management: 1.0.0</li></ul><h2 id="requerimientos" tabindex="-1"><a class="header-anchor" href="#requerimientos" aria-hidden="true">#</a> Requerimientos</h2><ul><li><p>Aplicar binario de la aplicación</p></li><li><p>Aplicar los XML&#39;s:</p><ul><li><p>Consigned-Material: 07830_Add_Storage_per_Vendor.xml</p></li><li><p>Delivery-Management-Service:</p><ul><li>06490_Add_Barcode_Box_Report.xml</li><li>06500_Add_IsAllocatePackages_flag_for_Orders.xml</li><li>06510_Add_PackageType_to_Order.xml</li></ul></li><li><p>Import-Export-Management:</p><ul><li>09380_Add_Entity_Type_for_Fleet_Management_Improvements.xml</li><li>09390_Add_transport_Unit_Type_Values.xml</li><li>09400_Add_Package_Reference.xml</li><li>09410_Add_Functionality_Setup_for_Import_Export_Management.xml</li></ul></li><li><p>Warehouse-Management-System-Improvements: 09380_Add_Flag_for_Invoice_Shipment_Outbound_Automatically.xml</p></li></ul></li></ul>',20)],l={},o=(0,r(13860).Z)(l,[["render",function(e,a){return(0,i.wg)(),(0,i.iD)("div",null,t)}]])},77087:(e,a,r)=>{r.r(a),r.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-0c69e8da","path":"/downloads/updates/rs-2.x/rs-28.x/rs-28.2.html","title":"rs-28.3","lang":"es-ES","frontmatter":{"title":"rs-28.3","icon":"app","category":["Actualizaciones"],"star":9,"sticky":9,"tag":["Actualizaciones","Versiones","rs-28.3","2021-09-22T00:00:00.000Z"],"article":false,"summary":"Fecha de Liberación: 2021-09-22 Mejoras Se agrega nuevo reporte de Almacenamiento de Productos por Proveedor: muy util para ver los productos en consignación; Se agrega formato de ","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/downloads/updates/rs-2.x/rs-28.x/rs-28.2.html"}],["meta",{"property":"og:title","content":"rs-28.3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-09T21:08:14.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Actualizaciones"}],["meta",{"property":"article:tag","content":"Versiones"}],["meta",{"property":"article:tag","content":"rs-28.3"}],["meta",{"property":"article:tag","content":"2021-09-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-09T21:08:14.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Mejoras","slug":"mejoras","children":[]},{"level":2,"title":"Correcciones","slug":"correcciones","children":[]},{"level":2,"title":"Detalle Técnico","slug":"detalle-tecnico","children":[]},{"level":2,"title":"Soporte a Versiones","slug":"soporte-a-versiones","children":[]},{"level":2,"title":"Requerimientos","slug":"requerimientos","children":[]}],"git":{"createdTime":1686344894000,"updatedTime":1686344894000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.57,"words":470},"filePathRelative":"downloads/updates/rs-2.x/rs-28.x/rs-28.2.md","localizedDate":"9 de junio de 2023"}')}}]);