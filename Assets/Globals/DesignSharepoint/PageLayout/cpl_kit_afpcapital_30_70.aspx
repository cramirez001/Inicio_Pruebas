<%-- SPG:

Este archivo HTML se ha asociado a un diseño de página de SharePoint (archivo .aspx) del mismo nombre. Mientras los archivos estén asociados, no podrá editar el archivo .aspx y las operaciones de cambio de nombre, movimiento o eliminación serán recíprocas.

Para elaborar el diseño de página directamente desde este archivo HTML, solo tiene que rellenar el contenido de los marcadores de posición de contenido. Utilice el Generador de fragmentos de código, en https://websh2013desa01.ing.cl:1200/_layouts/15/ComponentHome.aspx?Url=https%3A%2F%2Fwebsh2013desa01%2Eing%2Ecl%3A1200%2F%5Fcatalogs%2Fmasterpage%2FSuraPrivadoLayout%5F30%5F70%2Easpx, para crear y personalizar marcadores de posición de contenido adicionales además de otras entidades útiles de SharePoint. A continuación, copie y péguelos como fragmentos de código HTML en el código HTML. Los cambios realizados en los marcadores de posición de contenido de este archivo se sincronizarán automáticamente con el diseño de página asociado.

 --%>
<%@Page language="C#" Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage, Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="PageFieldFieldValue" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="a7ecdabe6" Namespace="Sura.Privado.Webparts.Menu.MenuLateral" Assembly="Sura.Privado.Webparts.Menu, Version=1.0.0.0, Culture=neutral, PublicKeyToken=a2be3e7bada7a796" %>
<asp:Content runat="server" ContentPlaceHolderID="PlaceHolderPageTitle">
            <SharePoint:ProjectProperty Property="Title" runat="server">
            </SharePoint:ProjectProperty>
            
            
            <PageFieldFieldValue:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server">
            </PageFieldFieldValue:FieldValue>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderAdditionalPageHead">
            
            
            
            <Publishing:EditModePanel runat="server" id="editmodestyles">
                <SharePoint:CssRegistration name="&lt;% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %&gt;" After="&lt;% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %&gt;" runat="server">
                </SharePoint:CssRegistration>
            </Publishing:EditModePanel>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderBodyAreaClass">
			<style type="text/css">

 
        .cont_resposive .side_menu_int.cont_izq {
  width: 30%;
}

.cont_resposive .conts_int.cont_der {
  width: 70%;
  box-sizing: border-box;
  padding: 0 0 0 30px;
  background: none;
}
@media only screen and (max-width: 600px){}
@media (max-width: 1200px) {
 
}
@media (max-width: 991px) {
  .wrapper_central .cont_resposive .conts_int.cont_der {
    width: 70% !important;
    padding: 0 0 0 30px !important;
  }
.wrapper_central .cont_resposive .side_menu_int.cont_izq {
  width: 30%;
}
}
@media (max-width: 760px) {
  .wrapper_central .cont_resposive .conts_int.cont_der {
    width: 100% !important;
    padding: 0 0 0 0 !important;
  }
.wrapper_central .cont_resposive .side_menu_int.cont_izq {
  width: 100%;
}
}
                                </style>
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderMain">
			<!-- Layout30_70 -->
            
            <link rel="stylesheet" type="text/css" href="/_layouts/15/Sura.Privado/css/formularios_menu_60.css" />
            <div class="cpl_body">
            	<div class="cpl_container">
            <div class="cont_resposive">
                <div data-name="WebPartZone" class="side_menu_int cont_izq">
                    
                    
                    <div>
                        
                        
                        <a7ecdabe6:MenuLateral runat="server" ChromeType="None" Description="Visualiza el menu lateral del sitio privado." ImportErrorMessage="&lt;%$Resources:core,ImportErrorMessage;%&gt;" Title="Menu Lateral" __MarkupType="vsattributemarkup" __WebPartId="{1241ff50-153b-446b-90ee-59f1e1efb916}" WebPart="true" IsClosed="false" ID="g_1241ff50_153b_446b_90ee_59f1e1efb916">
                            
                        </a7ecdabe6:MenuLateral>
                        
                        <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="x7984bc7206514e3cabe64224065c5d95" FrameType="TitleBarOnly" Orientation="Vertical" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&quot; NamingContainer=&quot;True&quot; /&gt;&lt;/Regions&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; id=&quot;x7984bc7206514e3cabe64224065c5d95&quot;&gt;
	&lt;tr&gt;
		&lt;td style=&quot;white-space:nowrap;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
			&lt;tr&gt;
				&lt;td style=&quot;white-space:nowrap;&quot;&gt;Zona&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;&lt;tr&gt;
		&lt;td style=&quot;height:100%;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;border-color:Gray;border-width:1px;border-style:Solid;width:100%;height:100%;&quot;&gt;
			&lt;tr valign=&quot;top&quot;&gt;
				&lt;td _designerRegion=&quot;0&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
					&lt;tr&gt;
						&lt;td style=&quot;height:100%;&quot;&gt;&lt;/td&gt;
					&lt;/tr&gt;
				&lt;/table&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;" __designer:Values="&lt;P N=&#39;AllowPersonalization&#39; T=&#39;False&#39; /&gt;&lt;P N=&#39;ID&#39; ID=&#39;1&#39; T=&#39;x7984bc7206514e3cabe64224065c5d95&#39; /&gt;&lt;P N=&#39;FrameType&#39; E=&#39;2&#39; /&gt;&lt;P N=&#39;PartChromeType&#39; E=&#39;3&#39; /&gt;&lt;P N=&#39;Page&#39; ID=&#39;2&#39; /&gt;&lt;P N=&#39;TemplateControl&#39; R=&#39;2&#39; /&gt;&lt;P N=&#39;AppRelativeTemplateSourceDirectory&#39; R=&#39;-1&#39; /&gt;" __designer:Templates="&lt;Group Name=&quot;ZoneTemplate&quot;&gt;&lt;Template Name=&quot;ZoneTemplate&quot; Content=&quot;&quot; /&gt;&lt;/Group&gt;"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
                    </div>
                    
                </div>
                <div data-name="WebPartZone" class="conts_int cont_der">
                    
                    
                    <div>
                        <WebPartPages:WebPartZone runat="server" ID="cont_der" AllowPersonalization="False" FrameType="TitleBarOnly" Orientation="Vertical" Title="Zona 70%" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&quot; NamingContainer=&quot;True&quot; /&gt;&lt;/Regions&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; id=&quot;cont_der&quot;&gt;
	&lt;tr&gt;
		&lt;td style=&quot;white-space:nowrap;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
			&lt;tr&gt;
				&lt;td style=&quot;white-space:nowrap;&quot;&gt;Zona 70%&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;&lt;tr&gt;
		&lt;td style=&quot;height:100%;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;border-color:Gray;border-width:1px;border-style:Solid;width:100%;height:100%;&quot;&gt;
			&lt;tr valign=&quot;top&quot;&gt;
				&lt;td _designerRegion=&quot;0&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
					&lt;tr&gt;
						&lt;td style=&quot;height:100%;&quot;&gt;&lt;/td&gt;
					&lt;/tr&gt;
				&lt;/table&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;" __designer:Values="&lt;P N=&#39;AllowPersonalization&#39; T=&#39;False&#39; /&gt;&lt;P N=&#39;HeaderText&#39; ID=&#39;1&#39; T=&#39;Zona 70%&#39; /&gt;&lt;P N=&#39;DisplayTitle&#39; R=&#39;1&#39; /&gt;&lt;P N=&#39;ID&#39; ID=&#39;2&#39; T=&#39;cont_der&#39; /&gt;&lt;P N=&#39;FrameType&#39; E=&#39;2&#39; /&gt;&lt;P N=&#39;Title&#39; R=&#39;1&#39; /&gt;&lt;P N=&#39;PartChromeType&#39; E=&#39;3&#39; /&gt;&lt;P N=&#39;Page&#39; ID=&#39;3&#39; /&gt;&lt;P N=&#39;TemplateControl&#39; R=&#39;3&#39; /&gt;&lt;P N=&#39;AppRelativeTemplateSourceDirectory&#39; R=&#39;-1&#39; /&gt;" __designer:Templates="&lt;Group Name=&quot;ZoneTemplate&quot;&gt;&lt;Template Name=&quot;ZoneTemplate&quot; Content=&quot;&quot; /&gt;&lt;/Group&gt;"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
                    </div>
                    
                </div>
            </div>
            </div>
           </div>
<!-- CSS MASTER -->
<link rel="stylesheet" href="/_catalogs/masterpage/Kit-Ui-CPL/css/cpl_base.css" />

        </asp:Content>