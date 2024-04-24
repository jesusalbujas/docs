"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[30555],{89648:(e,a,i)=>{i.r(a),i.d(a,{default:()=>d});var r=i(26440);const o=(0,r.uE)('<p><strong>Fecha de Liberación:</strong> 2022-10-05</p><h2 id="novedades" tabindex="-1"><a class="header-anchor" href="#novedades" aria-hidden="true">#</a> Novedades</h2><ul><li><p>Se agrega soporte a nuevos comandos fiscales</p><ul><li>Establecer valores de Firmware: Establece valores por defecto en el firmware de la impresora, ideal para un setup inicial antes de imprimir por primera vez</li><li>Re-Imprimir Factura con rango de fecha</li><li>Re-Imprimir Nota de Crédito con rango de fecha</li><li>Re-Imprimir Nota de Débito con rango de fecha</li><li>Re-Imprimir Factura con rango de número</li><li>Re-Imprimir Nota de Crédito con rango de número</li><li>Re-Imprimir Nota de Débito con rango de número</li></ul></li><li><p>Se establece el número de serie de la impresora fiscal + el número de documento desde el proceso <strong>Autorizar Documento Fiscal</strong></p></li><li><p>Se agrega soporte para obtener el número de serie de la impresora fiscal directamente desde el dispositivo para establecerlo en el documento en lugar de obtenerlo desde el registro de aplicación: Esto permite que al cambiar la impresora fiscal no sea necesario actualizar los datos en el registro de aplicación</p></li><li><p>Se agrega funcionalidad para obtener tasas de cambio del Banco Central de Venezuela (BCV) a través de un REST Api.</p></li><li><p>Esta actualización es ideal para evitar la carga manual de las tasas de cambio del BCV todos los días</p></li><li><p>Corrección de Metodo de Referencia en Linea de Factura con Recepción</p></li><li><p>Corrección de Procesos de Generar Orden desde Hoja Tecnica para establecer el tipo de documento seleccionado</p></li><li><p>Cambio en Nomenclatura de Calculo de Peso a Pagar</p><ul><li>Rice_PaidWeight_C01</li><li>Rice_PaidWeight_v1</li></ul></li><li><p>Cambio en Metodo de Seleccion de Tipo de Maiz</p></li><li><p>Corrección en Sequencia de Atributos</p></li></ul><h2 id="tomar-en-cuenta" tabindex="-1"><a class="header-anchor" href="#tomar-en-cuenta" aria-hidden="true">#</a> Tomar en Cuenta</h2><ul><li>Todos los cambios de impresora fiscal funcionan dependiendo de la versión del cliente de impresora fiscal, considere utilizar la versión rs-3.6 o superior para que funcionen las mejoras</li><li>Ejecutar el setup: Create BCVApiDeno Rate Provider</li><li>Asignar el registro de Aplicación BCV Api Deno al Tipo de Conversión BCV</li><li>Ejecutar el proceso para obtener tasas</li><li>De manera opcional se puede agregar el proceso al Scheduler para que se ejecute a diario y no se tenga que hacer manual.</li></ul><h2 id="detalle-tecnico" tabindex="-1"><a class="header-anchor" href="#detalle-tecnico" aria-hidden="true">#</a> Detalle Técnico</h2><ul><li><p>Exchange-Operation-System:</p><ul><li>Add support to BCV Api Deno</li></ul></li><li><p>Fiscal-Printer:</p><ul><li><p>Add support to new fiscal commands</p><ul><li>Set Firmware Values</li><li>Re-Print Invoice with Date Range</li><li>Re-Print Credit Memo with Date Range</li><li>Re-Print Debit Memo with Date Range</li><li>Re-Print Invoice with Number Range</li><li>Re-Print Credit Memo with Number Range</li><li>Re-Print Debit Memo with Number Range</li><li>Re-Print Documents with Tax ID</li></ul></li><li><p>Set Fiscal Printer Serial No + Document No on Invoice Document No from <strong>Fiscal Document Authorization</strong> process</p></li><li><p>Add support to get fiscal printer serial no from device and set on document instead app registration value</p></li></ul></li><li><p>Farmer-Assistance-Program:</p><ul><li>Fix Method for InOut Line Reference</li><li>Fix Set Document type on Generate Order From Technical From Process</li></ul></li><li><p>FAP-Venezuela-Location:</p><ul><li><p>Fix Nomenclature for PaidWeigh calculation</p><ul><li>Rice_PaidWeight_C01</li><li>Rice_PaidWeight_v1</li></ul></li><li><p>Change CategoryType Selection for Category Corn</p></li><li><p>Fix Attributes Sequence</p></li></ul></li></ul><h2 id="reportes-relacionados" tabindex="-1"><a class="header-anchor" href="#reportes-relacionados" aria-hidden="true">#</a> Reportes relacionados</h2>',8),l={href:"https://github.com/erpcya/Control-PROSEIN/issues/264",target:"_blank",rel:"noopener noreferrer"},n={href:"https://github.com/erpcya/Control-ERPYA/issues/900",target:"_blank",rel:"noopener noreferrer"},t={href:"https://github.com/erpcya/Control-VEALCA/issues/200",target:"_blank",rel:"noopener noreferrer"},c=(0,r.uE)('<h2 id="soporte-a-versiones" tabindex="-1"><a class="header-anchor" href="#soporte-a-versiones" aria-hidden="true">#</a> Soporte a Versiones</h2><ul><li>ADempiereBase: Versión de Liberación: 3.9.3-rs-4.3</li><li>CST-STD: Versión de Liberación: rs-35.7</li><li>Consigned-Material: 1.3.0</li><li>Exchange-Operation-System: 1.2.4</li><li>Cloud-Service-Management: 1.2.7</li><li>Cash-Management: 1.1.4</li><li>Currency-Convert-Documents: 1.1.5</li><li>Farmer-Assistance-Program: 1.5.1</li><li>RethinkDB-Replicator-Client: 1.1.5</li><li>Third-Party-Access: 1.0.6</li><li>Fiscal-Printer: 1.5.7</li><li>Sales-Force-Management: 1.1.2</li><li>Delivery-Management-Service: 1.2.0</li><li>Travel-Agency-Management: 1.1.1</li><li>Withholding-Engine: 1.2.8</li><li>Migration-Tools: 1.0.4</li><li>LVE: 2.0.2</li><li>Performance-Analysis: 1.1.4</li><li>Queue-Manager: 1.0.7</li><li>Notification-Queue: 1.1.6</li><li>Point-Of-Sales-Improvements: 1.5.1</li><li>Kafka-Replicator-Client: 1.0.9</li><li>Kafka-Util: 1.0.2</li><li>Core-Tools: 1.4.7</li><li>Get-Weight:1.2.4</li><li>Record-Weight: 1.0.7</li><li>Raw-Material-Receipt: 1.1.7</li><li>Additional-Reports: 1.2.7</li><li>adempiere-customer-backend: 1.2.1</li><li>Material-Management-Improvements: 1.1.6</li><li>Warehouse-Management-System-Improvements: 1.1.6</li><li>Import-Export-Management: 1.0.4</li><li>Update-Management: 1.1.9</li><li>Mini-Retail: 1.1.7</li><li>Print-Queue: 1.1.4</li><li>ERP-Payroll-Definition: 1.0.6</li><li>Internal-Store: 1.0.4</li><li>Telegram-Notifier: 1.0.5</li><li>Costing-Engine-Improvements: 1.1.1</li><li>Default-Attribute: 1.0.1</li><li>Financial-Report: 1.0.1</li><li>Json-Replicator-Client: 1.0.2</li><li>Kubernetes-Cluster: 1.0.7</li><li>ADempiere-Exporter: 1.0.5</li><li>ADempiere-TelegramBot</li><li>e-Commerce-Queue: 1.1.5</li><li>Vue-StoreFront-API: 1.0.9</li><li>Mercado-Libre-Venezuela-API: 1.0.8</li><li>Common-Functionalities: 1.0.0</li><li>FAP-Venezuela-Location: 1.1.2</li><li>LVE-AdditionalTax: 1.2.2</li></ul><h2 id="requerimientos" tabindex="-1"><a class="header-anchor" href="#requerimientos" aria-hidden="true">#</a> Requerimientos</h2><ul><li><p>Aplicar binario de la aplicación</p></li><li><p>Aplicar los XML&#39;s:</p><ul><li><p>Fiscal-Printer:</p><ul><li>07100_ECA05_Add_Parameters_to_setup_fiscal_printer.xml</li></ul></li><li><p>Exchange-Operation-System:</p><ul><li>07310_Add_App_support_to_BCVApiDeno.xml</li><li>07320_Rename_Package_for_EOS.xml</li></ul></li></ul></li></ul>',4),s={},d=(0,i(71212).Z)(s,[["render",function(e,a){const i=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[o,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("p",null,[(0,r._)("a",l,[(0,r.Uk)('Problemas al Actualizar Correlativos Fiscal a través de "Autorizar Documento Fiscal"'),(0,r.Wm)(i)])])]),(0,r._)("li",null,[(0,r._)("p",null,[(0,r._)("a",n,[(0,r.Uk)("Obtener Tasas de Cambio BCV"),(0,r.Wm)(i)])])]),(0,r._)("li",null,[(0,r._)("p",null,[(0,r._)("a",t,[(0,r.Uk)("Proceso Generar Orden desde Hoja Tecnica"),(0,r.Wm)(i)])])])]),c])}]])},36724:(e,a,i)=>{i.r(a),i.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-52b721e5","path":"/downloads/updates/rs-5.x/rs-50.x/rs-50.3.html","title":"rs-50.3","lang":"es-ES","frontmatter":{"title":"rs-50.3","icon":"app","category":"Actualizaciones","star":9,"sticky":9,"article":false,"description":"Fecha de Liberación: 2022-10-05 Novedades Se agrega soporte a nuevos comandos fiscales Establecer valores de Firmware: Establece valores por defecto en el firmware de la impresora, ideal para un setup inicial antes de imprimir por primera vez Re-Imprimir Factura con rango de fecha Re-Imprimir Nota de Crédito con rango de fecha Re-Imprimir Nota de Débito con rango de fecha Re-Imprimir Factura con rango de número Re-Imprimir Nota de Crédito con rango de número Re-Imprimir Nota de Débito con rango de número Se establece el número de serie de la impresora fiscal + el número de documento desde el proceso Autorizar Documento Fiscal Se agrega soporte para obtener el número de serie de la impresora fiscal directamente desde el dispositivo para establecerlo en el documento en lugar de obtenerlo desde el registro de aplicación: Esto permite que al cambiar la impresora fiscal no sea necesario actualizar los datos en el registro de aplicación Se agrega funcionalidad para obtener tasas de cambio del Banco Central de Venezuela (BCV) a través de un REST Api. Esta actualización es ideal para evitar la carga manual de las tasas de cambio del BCV todos los días Corrección de Metodo de Referencia en Linea de Factura con Recepción Corrección de Procesos de Generar Orden desde Hoja Tecnica para establecer el tipo de documento seleccionado Cambio en Nomenclatura de Calculo de Peso a Pagar Rice_PaidWeight_C01 Rice_PaidWeight_v1 Cambio en Metodo de Seleccion de Tipo de Maiz Corrección en Sequencia de Atributos","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/downloads/updates/rs-5.x/rs-50.x/rs-50.3.html"}],["meta",{"property":"og:title","content":"rs-50.3"}],["meta",{"property":"og:description","content":"Fecha de Liberación: 2022-10-05 Novedades Se agrega soporte a nuevos comandos fiscales Establecer valores de Firmware: Establece valores por defecto en el firmware de la impresora, ideal para un setup inicial antes de imprimir por primera vez Re-Imprimir Factura con rango de fecha Re-Imprimir Nota de Crédito con rango de fecha Re-Imprimir Nota de Débito con rango de fecha Re-Imprimir Factura con rango de número Re-Imprimir Nota de Crédito con rango de número Re-Imprimir Nota de Débito con rango de número Se establece el número de serie de la impresora fiscal + el número de documento desde el proceso Autorizar Documento Fiscal Se agrega soporte para obtener el número de serie de la impresora fiscal directamente desde el dispositivo para establecerlo en el documento en lugar de obtenerlo desde el registro de aplicación: Esto permite que al cambiar la impresora fiscal no sea necesario actualizar los datos en el registro de aplicación Se agrega funcionalidad para obtener tasas de cambio del Banco Central de Venezuela (BCV) a través de un REST Api. Esta actualización es ideal para evitar la carga manual de las tasas de cambio del BCV todos los días Corrección de Metodo de Referencia en Linea de Factura con Recepción Corrección de Procesos de Generar Orden desde Hoja Tecnica para establecer el tipo de documento seleccionado Cambio en Nomenclatura de Calculo de Peso a Pagar Rice_PaidWeight_C01 Rice_PaidWeight_v1 Cambio en Metodo de Seleccion de Tipo de Maiz Corrección en Sequencia de Atributos"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2023-09-20T19:27:38.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:modified_time","content":"2023-09-20T19:27:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"rs-50.3\\",\\"description\\":\\"Fecha de Liberación: 2022-10-05 Novedades Se agrega soporte a nuevos comandos fiscales Establecer valores de Firmware: Establece valores por defecto en el firmware de la impresora, ideal para un setup inicial antes de imprimir por primera vez Re-Imprimir Factura con rango de fecha Re-Imprimir Nota de Crédito con rango de fecha Re-Imprimir Nota de Débito con rango de fecha Re-Imprimir Factura con rango de número Re-Imprimir Nota de Crédito con rango de número Re-Imprimir Nota de Débito con rango de número Se establece el número de serie de la impresora fiscal + el número de documento desde el proceso Autorizar Documento Fiscal Se agrega soporte para obtener el número de serie de la impresora fiscal directamente desde el dispositivo para establecerlo en el documento en lugar de obtenerlo desde el registro de aplicación: Esto permite que al cambiar la impresora fiscal no sea necesario actualizar los datos en el registro de aplicación Se agrega funcionalidad para obtener tasas de cambio del Banco Central de Venezuela (BCV) a través de un REST Api. Esta actualización es ideal para evitar la carga manual de las tasas de cambio del BCV todos los días Corrección de Metodo de Referencia en Linea de Factura con Recepción Corrección de Procesos de Generar Orden desde Hoja Tecnica para establecer el tipo de documento seleccionado Cambio en Nomenclatura de Calculo de Peso a Pagar Rice_PaidWeight_C01 Rice_PaidWeight_v1 Cambio en Metodo de Seleccion de Tipo de Maiz Corrección en Sequencia de Atributos\\"}"]]},"headers":[{"level":2,"title":"Novedades","slug":"novedades","link":"#novedades","children":[]},{"level":2,"title":"Tomar en Cuenta","slug":"tomar-en-cuenta","link":"#tomar-en-cuenta","children":[]},{"level":2,"title":"Detalle Técnico","slug":"detalle-tecnico","link":"#detalle-tecnico","children":[]},{"level":2,"title":"Reportes relacionados","slug":"reportes-relacionados","link":"#reportes-relacionados","children":[]},{"level":2,"title":"Soporte a Versiones","slug":"soporte-a-versiones","link":"#soporte-a-versiones","children":[]},{"level":2,"title":"Requerimientos","slug":"requerimientos","link":"#requerimientos","children":[]}],"git":{"createdTime":1695238058000,"updatedTime":1695238058000,"contributors":[{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.44,"words":732},"filePathRelative":"downloads/updates/rs-5.x/rs-50.x/rs-50.3.md","localizedDate":"20 de septiembre de 2023","excerpt":"<p><strong>Fecha de Liberación:</strong> 2022-10-05</p>\\n<h2> Novedades</h2>\\n<ul>\\n<li>\\n<p>Se agrega soporte a nuevos comandos fiscales</p>\\n<ul>\\n<li>Establecer valores de Firmware: Establece valores por defecto en el firmware de la impresora, ideal para un setup inicial antes de imprimir por primera vez</li>\\n<li>Re-Imprimir Factura con rango de fecha</li>\\n<li>Re-Imprimir Nota de Crédito con rango de fecha</li>\\n<li>Re-Imprimir Nota de Débito con rango de fecha</li>\\n<li>Re-Imprimir Factura con rango de número</li>\\n<li>Re-Imprimir Nota de Crédito con rango de número</li>\\n<li>Re-Imprimir Nota de Débito con rango de número</li>\\n</ul>\\n</li>\\n<li>\\n<p>Se establece el número de serie de la impresora fiscal + el número de documento desde el proceso <strong>Autorizar Documento Fiscal</strong></p>\\n</li>\\n<li>\\n<p>Se agrega soporte para obtener el número de serie de la impresora fiscal directamente desde el dispositivo para establecerlo en el documento en lugar de obtenerlo desde el registro de aplicación: Esto permite que al cambiar la impresora fiscal no sea necesario actualizar los datos en el registro de aplicación</p>\\n</li>\\n<li>\\n<p>Se agrega funcionalidad para obtener tasas de cambio del Banco Central de Venezuela (BCV) a través de un REST Api.</p>\\n</li>\\n<li>\\n<p>Esta actualización es ideal para evitar la carga manual de las tasas de cambio del BCV todos los días</p>\\n</li>\\n<li>\\n<p>Corrección de Metodo de Referencia en Linea de Factura con Recepción</p>\\n</li>\\n<li>\\n<p>Corrección de Procesos de Generar Orden desde Hoja Tecnica para establecer el tipo de documento seleccionado</p>\\n</li>\\n<li>\\n<p>Cambio en Nomenclatura de Calculo de Peso a Pagar</p>\\n<ul>\\n<li>Rice_PaidWeight_C01</li>\\n<li>Rice_PaidWeight_v1</li>\\n</ul>\\n</li>\\n<li>\\n<p>Cambio en Metodo de Seleccion de Tipo de Maiz</p>\\n</li>\\n<li>\\n<p>Corrección en Sequencia de Atributos</p>\\n</li>\\n</ul>","autoDesc":true}')}}]);