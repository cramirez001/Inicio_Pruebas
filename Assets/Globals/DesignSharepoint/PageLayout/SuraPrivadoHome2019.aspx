<%-- SPG:

Este archivo HTML se ha asociado a un diseño de página de SharePoint (archivo .aspx) del mismo nombre. Mientras los archivos estén asociados, no podrá editar el archivo .aspx y las operaciones de cambio de nombre, movimiento o eliminación serán recíprocas.

Para elaborar el diseño de página directamente desde este archivo HTML, solo tiene que rellenar el contenido de los marcadores de posición de contenido. Utilice el Generador de fragmentos de código, en https://websh2013desa01:1200/_layouts/15/ComponentHome.aspx?Url=https%3A%2F%2Fwebsh2013desa01%3A1200%2F%5Fcatalogs%2Fmasterpage%2FSuraPrivadoLayout%5F70%5F30%2Easpx, para crear y personalizar marcadores de posición de contenido adicionales además de otras entidades útiles de SharePoint. A continuación, copie y péguelos como fragmentos de código HTML en el código HTML. Los cambios realizados en los marcadores de posición de contenido de este archivo se sincronizarán automáticamente con el diseño de página asociado.

 --%>
<%@Page language="C#" Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage, Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="PageFieldFieldValue" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<asp:Content runat="server" ContentPlaceHolderID="PlaceHolderPageTitle">
            <SharePoint:ProjectProperty Property="Title" runat="server">
            </SharePoint:ProjectProperty>
            
            
            <PageFieldFieldValue:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server">
            </PageFieldFieldValue:FieldValue>
            
        </asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="PlaceHolderAdditionalPageHead">

            <Publishing:EditModePanel runat="server" id="editmodestyles">
                <SharePoint:CssRegistration name="&lt;% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %&gt;" After="&lt;% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %&gt;" runat="server">
                </SharePoint:CssRegistration>
            </Publishing:EditModePanel>
            
        </asp:Content>
    <asp:Content runat="server" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea">
            
            
            <PageFieldFieldValue:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server">
            </PageFieldFieldValue:FieldValue>
            
        </asp:Content>

        <asp:Content runat="server" ContentPlaceHolderID="PlaceHolderMain">
                <div class="cpl_body cpl_no_padding">
                        <!-- inicio Fondos -->
                        <div class="CPL_Datos_Fondos cpl_section cpl_col cpl_col_12 cpl_flex_box">
                                <div class="cpl_container">
                                        <div class="cpl_col_12 CPL_contFondos">
                                                <div class="cpl_col cpl_col_6 CPL_wp_saldo">
                                                        <WebPartPages:WebPartZone runat="server" ID="Contenedor1" AllowPersonalization="False" FrameType="TitleBarOnly" Orientation="Vertical" Title="Contenedor Saldo">
                                                                <ZoneTemplate></ZoneTemplate>
                                                        </WebPartPages:WebPartZone>
                                                </div>
                        
                                                <div class="cpl_col cpl_col_3 CPL_wp_pension1">
                                                        <WebPartPages:WebPartZone runat="server" ID="Contenedor2" AllowPersonalization="False" FrameType="TitleBarOnly" Orientation="Vertical" Title="Contenedor estimado 1">
                                                                <ZoneTemplate></ZoneTemplate>
                                                        </WebPartPages:WebPartZone>
                                                </div>
                        
                                                <div class="cpl_col cpl_col_3 CPL_wp_pension2">
                                                        <WebPartPages:WebPartZone runat="server" ID="Contenedor3" AllowPersonalization="False" FrameType="TitleBarOnly" Orientation="Vertical" Title="Contenedor estimado 2">
                                                                <ZoneTemplate></ZoneTemplate>
                                                        </WebPartPages:WebPartZone>
                                                </div>
                                        </div>
                                </div>
                        </div> <!-- FIN Fondos -->
        
                    <!-- inicio Accesos Directos -->
                         <div class="CPL_Acceso_directo cpl_section cpl_col cpl_col_12">
                                <div class="cpl_container">
                                        <div class="cpl_col_12 CPL_wp_accesosDir">
                                                <WebPartPages:WebPartZone runat="server" ID="Contenedor4" AllowPersonalization="False" FrameType="TitleBarOnly" Orientation="Vertical" Title="Contenedor Accesos Directos">
                                                        <ZoneTemplate></ZoneTemplate>
                                                </WebPartPages:WebPartZone>
                                        </div>
                                </div>
                         </div> <!-- FIN Accesos Directos -->
        
                    <!-- inicio Asesorias y Herramientas -->
                         <div class="CPL_Acceso_directo cpl_section cpl_col cpl_col_12">
                                 <div class="cpl_container">
                                        <div class="cpl_col_12 CPL_asesHerra">
                                                <div class="cpl_col cpl_col_4 CPL_wp_asesHerra1">
                                                        <WebPartPages:WebPartZone runat="server" ID="Contenedor5" AllowPersonalization="False" FrameType="TitleBarOnly" Orientation="Vertical" Title="Contenedor Asesorias 1">
                                                                <ZoneTemplate></ZoneTemplate>
                                                        </WebPartPages:WebPartZone>
                                                </div>
                        
                                                <div class="cpl_col cpl_col_4 CPL_wp_asesHerra2">
                                                        <WebPartPages:WebPartZone runat="server" ID="Contenedor6" AllowPersonalization="False" FrameType="TitleBarOnly" Orientation="Vertical" Title="Contenedor Asesorias 2">
                                                                <ZoneTemplate></ZoneTemplate>
                                                        </WebPartPages:WebPartZone>
                                                </div>
                        
                                                <div class="cpl_col cpl_col_4 CPL_wp_asesHerra1">
                                                        <WebPartPages:WebPartZone runat="server" ID="Contenedor7" AllowPersonalization="False" FrameType="TitleBarOnly" Orientation="Vertical" Title="Contenedor Asesorias 3">
                                                                <ZoneTemplate></ZoneTemplate>
                                                        </WebPartPages:WebPartZone>
                                                </div>
                                        </div>
                                </div>
                         </div> <!-- FIN Asesorias y Herramientas -->
        
                     <!-- inicio banner -->
                        <div class="CPL_Acceso_directo cpl_section cpl_col cpl_col_12">
                                <div class="cpl_container">
                                        <div class="cpl_col_12 CPL_bannerHome">
                                                <div class="cpl_col cpl_col_6 CPL_wp_banner1">
                                                        <WebPartPages:WebPartZone runat="server" ID="Contenedor8" AllowPersonalization="False" FrameType="TitleBarOnly" Orientation="Vertical" Title="Contenedor Banner 1">
                                                                        <ZoneTemplate></ZoneTemplate>
                                                        </WebPartPages:WebPartZone>
                                                </div>
                                
                                                <div class="cpl_col cpl_col_6 CPL_wp_banner2">
                                                        <WebPartPages:WebPartZone runat="server" ID="Contenedor9" AllowPersonalization="False" FrameType="TitleBarOnly" Orientation="Vertical" Title="Contenedor Banner 2">
                                                                        <ZoneTemplate></ZoneTemplate>
                                                        </WebPartPages:WebPartZone>
                                                </div>
                                        </div>
                                </div>
                        </div> <!-- FIN banner -->
                
                </div><!-- FIN ARMADO NUEVO HOME -->

<!-- CSS MASTER -->
<link rel="stylesheet" href="/_catalogs/masterpage/Kit-Ui-CPL/css/cpl_base.css" />
<script src="/_catalogs/masterpage/Kit-Ui-CPL/js/home-js.js"></script>
        
</asp:Content>