var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BOLIVIA_1 = new ol.format.GeoJSON();
var features_BOLIVIA_1 = format_BOLIVIA_1.readFeatures(json_BOLIVIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOLIVIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOLIVIA_1.addFeatures(features_BOLIVIA_1);
var lyr_BOLIVIA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOLIVIA_1, 
                style: style_BOLIVIA_1,
                popuplayertitle: 'BOLIVIA',
                interactive: false,
                title: '<img src="styles/legend/BOLIVIA_1.png" /> BOLIVIA'
            });
var format_ABC_RedVialFundamental2024_2 = new ol.format.GeoJSON();
var features_ABC_RedVialFundamental2024_2 = format_ABC_RedVialFundamental2024_2.readFeatures(json_ABC_RedVialFundamental2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABC_RedVialFundamental2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABC_RedVialFundamental2024_2.addFeatures(features_ABC_RedVialFundamental2024_2);
var lyr_ABC_RedVialFundamental2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABC_RedVialFundamental2024_2, 
                style: style_ABC_RedVialFundamental2024_2,
                popuplayertitle: 'ABC_Red Vial Fundamental 2024',
                interactive: true,
                title: '<img src="styles/legend/ABC_RedVialFundamental2024_2.png" /> ABC_Red Vial Fundamental 2024'
            });
var format_CORREDORNORTESUR_3 = new ol.format.GeoJSON();
var features_CORREDORNORTESUR_3 = format_CORREDORNORTESUR_3.readFeatures(json_CORREDORNORTESUR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDORNORTESUR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDORNORTESUR_3.addFeatures(features_CORREDORNORTESUR_3);
var lyr_CORREDORNORTESUR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDORNORTESUR_3, 
                style: style_CORREDORNORTESUR_3,
                popuplayertitle: 'CORREDOR NORTE SUR',
                interactive: true,
                title: '<img src="styles/legend/CORREDORNORTESUR_3.png" /> CORREDOR NORTE SUR'
            });
var format_CORREDORSUR_4 = new ol.format.GeoJSON();
var features_CORREDORSUR_4 = format_CORREDORSUR_4.readFeatures(json_CORREDORSUR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDORSUR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDORSUR_4.addFeatures(features_CORREDORSUR_4);
var lyr_CORREDORSUR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDORSUR_4, 
                style: style_CORREDORSUR_4,
                popuplayertitle: 'CORREDOR  SUR',
                interactive: true,
                title: '<img src="styles/legend/CORREDORSUR_4.png" /> CORREDOR  SUR'
            });
var format_CORREDOROESTENORTE_5 = new ol.format.GeoJSON();
var features_CORREDOROESTENORTE_5 = format_CORREDOROESTENORTE_5.readFeatures(json_CORREDOROESTENORTE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDOROESTENORTE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDOROESTENORTE_5.addFeatures(features_CORREDOROESTENORTE_5);
var lyr_CORREDOROESTENORTE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDOROESTENORTE_5, 
                style: style_CORREDOROESTENORTE_5,
                popuplayertitle: 'CORREDOR OESTE NORTE',
                interactive: true,
                title: '<img src="styles/legend/CORREDOROESTENORTE_5.png" /> CORREDOR OESTE NORTE'
            });
var format_CORREDOROESTESUR_6 = new ol.format.GeoJSON();
var features_CORREDOROESTESUR_6 = format_CORREDOROESTESUR_6.readFeatures(json_CORREDOROESTESUR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDOROESTESUR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDOROESTESUR_6.addFeatures(features_CORREDOROESTESUR_6);
var lyr_CORREDOROESTESUR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDOROESTESUR_6, 
                style: style_CORREDOROESTESUR_6,
                popuplayertitle: 'CORREDOR OESTE SUR',
                interactive: true,
                title: '<img src="styles/legend/CORREDOROESTESUR_6.png" /> CORREDOR OESTE SUR'
            });
var format_CORREDORESTEOESTE_7 = new ol.format.GeoJSON();
var features_CORREDORESTEOESTE_7 = format_CORREDORESTEOESTE_7.readFeatures(json_CORREDORESTEOESTE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDORESTEOESTE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDORESTEOESTE_7.addFeatures(features_CORREDORESTEOESTE_7);
var lyr_CORREDORESTEOESTE_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDORESTEOESTE_7, 
                style: style_CORREDORESTEOESTE_7,
                popuplayertitle: 'CORREDOR ESTE OESTE',
                interactive: true,
                title: '<img src="styles/legend/CORREDORESTEOESTE_7.png" /> CORREDOR ESTE OESTE'
            });
var format_Surtidorescorredores_8 = new ol.format.GeoJSON();
var features_Surtidorescorredores_8 = format_Surtidorescorredores_8.readFeatures(json_Surtidorescorredores_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surtidorescorredores_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surtidorescorredores_8.addFeatures(features_Surtidorescorredores_8);
var lyr_Surtidorescorredores_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surtidorescorredores_8, 
                style: style_Surtidorescorredores_8,
                popuplayertitle: 'Surtidores-corredores',
                interactive: true,
                title: '<img src="styles/legend/Surtidorescorredores_8.png" /> Surtidores-corredores'
            });
var format_PeajesyPesaje_9 = new ol.format.GeoJSON();
var features_PeajesyPesaje_9 = format_PeajesyPesaje_9.readFeatures(json_PeajesyPesaje_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PeajesyPesaje_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PeajesyPesaje_9.addFeatures(features_PeajesyPesaje_9);
var lyr_PeajesyPesaje_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PeajesyPesaje_9, 
                style: style_PeajesyPesaje_9,
                popuplayertitle: 'Peajes y Pesaje',
                interactive: true,
                title: '<img src="styles/legend/PeajesyPesaje_9.png" /> Peajes y Pesaje'
            });
var format_ADUANASBOLIVIA_10 = new ol.format.GeoJSON();
var features_ADUANASBOLIVIA_10 = format_ADUANASBOLIVIA_10.readFeatures(json_ADUANASBOLIVIA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADUANASBOLIVIA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADUANASBOLIVIA_10.addFeatures(features_ADUANASBOLIVIA_10);
var lyr_ADUANASBOLIVIA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADUANASBOLIVIA_10, 
                style: style_ADUANASBOLIVIA_10,
                popuplayertitle: 'ADUANAS BOLIVIA',
                interactive: true,
                title: '<img src="styles/legend/ADUANASBOLIVIA_10.png" /> ADUANAS BOLIVIA'
            });
var format_PARQUESINDUSTRIALES_11 = new ol.format.GeoJSON();
var features_PARQUESINDUSTRIALES_11 = format_PARQUESINDUSTRIALES_11.readFeatures(json_PARQUESINDUSTRIALES_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARQUESINDUSTRIALES_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUESINDUSTRIALES_11.addFeatures(features_PARQUESINDUSTRIALES_11);
var lyr_PARQUESINDUSTRIALES_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUESINDUSTRIALES_11, 
                style: style_PARQUESINDUSTRIALES_11,
                popuplayertitle: 'PARQUES INDUSTRIALES',
                interactive: true,
                title: '<img src="styles/legend/PARQUESINDUSTRIALES_11.png" /> PARQUES INDUSTRIALES'
            });
var format_PuertosfluvialesBOL_12 = new ol.format.GeoJSON();
var features_PuertosfluvialesBOL_12 = format_PuertosfluvialesBOL_12.readFeatures(json_PuertosfluvialesBOL_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuertosfluvialesBOL_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuertosfluvialesBOL_12.addFeatures(features_PuertosfluvialesBOL_12);
var lyr_PuertosfluvialesBOL_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuertosfluvialesBOL_12, 
                style: style_PuertosfluvialesBOL_12,
                popuplayertitle: 'Puertos fluviales BOL',
                interactive: true,
                title: '<img src="styles/legend/PuertosfluvialesBOL_12.png" /> Puertos fluviales BOL'
            });
var format_viaferroBOLIVIA_13 = new ol.format.GeoJSON();
var features_viaferroBOLIVIA_13 = format_viaferroBOLIVIA_13.readFeatures(json_viaferroBOLIVIA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viaferroBOLIVIA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viaferroBOLIVIA_13.addFeatures(features_viaferroBOLIVIA_13);
var lyr_viaferroBOLIVIA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viaferroBOLIVIA_13, 
                style: style_viaferroBOLIVIA_13,
                popuplayertitle: 'viaferro BOLIVIA',
                interactive: true,
                title: '<img src="styles/legend/viaferroBOLIVIA_13.png" /> viaferro BOLIVIA'
            });
var format_EstacionesferrocarrilBOL_14 = new ol.format.GeoJSON();
var features_EstacionesferrocarrilBOL_14 = format_EstacionesferrocarrilBOL_14.readFeatures(json_EstacionesferrocarrilBOL_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacionesferrocarrilBOL_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesferrocarrilBOL_14.addFeatures(features_EstacionesferrocarrilBOL_14);
var lyr_EstacionesferrocarrilBOL_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacionesferrocarrilBOL_14, 
                style: style_EstacionesferrocarrilBOL_14,
                popuplayertitle: 'Estaciones ferrocarril BOL',
                interactive: true,
                title: '<img src="styles/legend/EstacionesferrocarrilBOL_14.png" /> Estaciones ferrocarril BOL'
            });
var format_AEROPUERTOSBOLaeropuertos_bol_15 = new ol.format.GeoJSON();
var features_AEROPUERTOSBOLaeropuertos_bol_15 = format_AEROPUERTOSBOLaeropuertos_bol_15.readFeatures(json_AEROPUERTOSBOLaeropuertos_bol_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AEROPUERTOSBOLaeropuertos_bol_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AEROPUERTOSBOLaeropuertos_bol_15.addFeatures(features_AEROPUERTOSBOLaeropuertos_bol_15);
var lyr_AEROPUERTOSBOLaeropuertos_bol_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AEROPUERTOSBOLaeropuertos_bol_15, 
                style: style_AEROPUERTOSBOLaeropuertos_bol_15,
                popuplayertitle: 'AEROPUERTOS BOL — aeropuertos_bol',
                interactive: true,
                title: '<img src="styles/legend/AEROPUERTOSBOLaeropuertos_bol_15.png" /> AEROPUERTOS BOL — aeropuertos_bol'
            });
var group_AEROPUERTOS = new ol.layer.Group({
                                layers: [lyr_AEROPUERTOSBOLaeropuertos_bol_15,],
                                fold: 'close',
                                title: 'AEROPUERTOS'});
var group_FERROCARRIL = new ol.layer.Group({
                                layers: [lyr_viaferroBOLIVIA_13,lyr_EstacionesferrocarrilBOL_14,],
                                fold: 'close',
                                title: 'FERROCARRIL'});
var group_PLUVIAL = new ol.layer.Group({
                                layers: [lyr_PuertosfluvialesBOL_12,],
                                fold: 'close',
                                title: 'PLUVIAL'});
var group_PLATAFORMAS = new ol.layer.Group({
                                layers: [lyr_ADUANASBOLIVIA_10,lyr_PARQUESINDUSTRIALES_11,],
                                fold: 'open',
                                title: 'PLATAFORMAS'});
var group_SURTIDORESPEAJES = new ol.layer.Group({
                                layers: [lyr_Surtidorescorredores_8,lyr_PeajesyPesaje_9,],
                                fold: 'close',
                                title: 'SURTIDORES - PEAJES'});
var group_CORREDORESBOL = new ol.layer.Group({
                                layers: [lyr_ABC_RedVialFundamental2024_2,lyr_CORREDORNORTESUR_3,lyr_CORREDORSUR_4,lyr_CORREDOROESTENORTE_5,lyr_CORREDOROESTESUR_6,lyr_CORREDORESTEOESTE_7,],
                                fold: 'close',
                                title: 'CORREDORES BOL'});
var group_BOLIVIA = new ol.layer.Group({
                                layers: [lyr_BOLIVIA_1,],
                                fold: 'close',
                                title: 'BOLIVIA'});

lyr_OSMStandard_0.setVisible(true);lyr_BOLIVIA_1.setVisible(false);lyr_ABC_RedVialFundamental2024_2.setVisible(true);lyr_CORREDORNORTESUR_3.setVisible(false);lyr_CORREDORSUR_4.setVisible(false);lyr_CORREDOROESTENORTE_5.setVisible(false);lyr_CORREDOROESTESUR_6.setVisible(false);lyr_CORREDORESTEOESTE_7.setVisible(false);lyr_Surtidorescorredores_8.setVisible(true);lyr_PeajesyPesaje_9.setVisible(true);lyr_ADUANASBOLIVIA_10.setVisible(false);lyr_PARQUESINDUSTRIALES_11.setVisible(true);lyr_PuertosfluvialesBOL_12.setVisible(true);lyr_viaferroBOLIVIA_13.setVisible(false);lyr_EstacionesferrocarrilBOL_14.setVisible(false);lyr_AEROPUERTOSBOLaeropuertos_bol_15.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_BOLIVIA,group_CORREDORESBOL,group_SURTIDORESPEAJES,group_PLATAFORMAS,group_PLUVIAL,group_FERROCARRIL,group_AEROPUERTOS];
lyr_BOLIVIA_1.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_ABC_RedVialFundamental2024_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ruta': 'ruta', 'rodadura': 'rodadura', 'tipo': 'tipo', 'depto': 'depto', 'de': 'de', 'a': 'a', 'longitud': 'longitud', });
lyr_CORREDORNORTESUR_3.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', });
lyr_CORREDORSUR_4.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_CORREDOROESTENORTE_5.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', });
lyr_CORREDOROESTESUR_6.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', });
lyr_CORREDORESTEOESTE_7.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', });
lyr_Surtidorescorredores_8.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'ogc_fid': 'ogc_fid', 'oid_': 'oid_', 'folderpath': 'folderpath', 'symbolid': 'symbolid', 'altmode': 'altmode', 'base': 'base', 'snippet': 'snippet', 'popupinfo': 'popupinfo', 'haslabel': 'haslabel', 'labelid': 'labelid', });
lyr_PeajesyPesaje_9.set('fieldAliases', {'name': 'name', 'ogc_fid': 'ogc_fid', 'layer': 'layer', 'estaciones': 'estaciones', 'departamen': 'departamen', 'ruta': 'ruta', 'norma_crea': 'norma_crea', 'convenio_a': 'convenio_a', 'nom_trans': 'nom_trans', 'inicio_ope': 'inicio_ope', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_ADUANASBOLIVIA_10.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'n': 'n', 'administra': 'administra', 'tipo': 'tipo', 'departamen': 'departamen', 'ciudad': 'ciudad', 'direccion': 'direccion', 'telefono': 'telefono', 'pais': 'pais', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_PARQUESINDUSTRIALES_11.set('fieldAliases', {'acept': 'acept', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_PuertosfluvialesBOL_12.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'gml_id': 'gml_id', 'id': 'id', });
lyr_viaferroBOLIVIA_13.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'gml_id': 'gml_id', 'id': 'id', 'tipo_red': 'tipo_red', });
lyr_EstacionesferrocarrilBOL_14.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'idusco': 'idusco', 'acc': 'acc', 'nam': 'nam', 'ops': 'ops', 'tuc': 'tuc', 'zpp': 'zpp', 'acc_lbl': 'acc_lbl', 'ops_lbl': 'ops_lbl', 'tuc_lbl': 'tuc_lbl', 'zpp_lbl': 'zpp_lbl', });
lyr_AEROPUERTOSBOLaeropuertos_bol_15.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'nro': 'nro', 'departamen': 'departamen', 'municipio': 'municipio', 'ciudad': 'ciudad', 'nombre_aer': 'nombre_aer', 'tipo_aerod': 'tipo_aerod', });
lyr_BOLIVIA_1.set('fieldImages', {'GID_1': '', 'GID_0': '', 'COUNTRY': '', 'NAME_1': '', 'VARNAME_1': '', 'NL_NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'CC_1': '', 'HASC_1': '', 'ISO_1': '', });
lyr_ABC_RedVialFundamental2024_2.set('fieldImages', {'ogc_fid': '', 'ruta': '', 'rodadura': '', 'tipo': '', 'depto': '', 'de': '', 'a': '', 'longitud': '', });
lyr_CORREDORNORTESUR_3.set('fieldImages', {'fid': '', 'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', 'TO_ID': '', 'layer': '', 'path': '', });
lyr_CORREDORSUR_4.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_CORREDOROESTENORTE_5.set('fieldImages', {'fid': '', 'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', 'TO_ID': '', 'layer': '', 'path': '', });
lyr_CORREDOROESTESUR_6.set('fieldImages', {'fid': '', 'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', 'TO_ID': '', 'layer': '', 'path': '', });
lyr_CORREDORESTEOESTE_7.set('fieldImages', {'fid': '', 'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', 'TO_ID': '', 'layer': '', 'path': '', });
lyr_Surtidorescorredores_8.set('fieldImages', {'fid': '', 'name': '', 'ogc_fid': '', 'oid_': '', 'folderpath': '', 'symbolid': '', 'altmode': '', 'base': '', 'snippet': '', 'popupinfo': '', 'haslabel': '', 'labelid': '', });
lyr_PeajesyPesaje_9.set('fieldImages', {'name': '', 'ogc_fid': '', 'layer': '', 'estaciones': '', 'departamen': '', 'ruta': '', 'norma_crea': '', 'convenio_a': '', 'nom_trans': '', 'inicio_ope': '', 'Longitud': '', 'Latitud': '', });
lyr_ADUANASBOLIVIA_10.set('fieldImages', {'ogc_fid': '', 'n': '', 'administra': '', 'tipo': '', 'departamen': '', 'ciudad': '', 'direccion': '', 'telefono': '', 'pais': '', 'latitud': '', 'longitud': '', });
lyr_PARQUESINDUSTRIALES_11.set('fieldImages', {'acept': '', 'LATITUD': '', 'LONGITUD': '', });
lyr_PuertosfluvialesBOL_12.set('fieldImages', {'ogc_fid': '', 'gml_id': '', 'id': '', });
lyr_viaferroBOLIVIA_13.set('fieldImages', {'ogc_fid': '', 'gml_id': '', 'id': '', 'tipo_red': '', });
lyr_EstacionesferrocarrilBOL_14.set('fieldImages', {'fid': '', 'ogc_fid': '', 'idusco': '', 'acc': '', 'nam': '', 'ops': '', 'tuc': '', 'zpp': '', 'acc_lbl': '', 'ops_lbl': '', 'tuc_lbl': '', 'zpp_lbl': '', });
lyr_AEROPUERTOSBOLaeropuertos_bol_15.set('fieldImages', {'fid': '', 'ogc_fid': '', 'nro': '', 'departamen': '', 'municipio': '', 'ciudad': '', 'nombre_aer': '', 'tipo_aerod': '', });
lyr_BOLIVIA_1.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_ABC_RedVialFundamental2024_2.set('fieldLabels', {'ogc_fid': 'inline label - visible with data', 'ruta': 'inline label - visible with data', 'rodadura': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'depto': 'inline label - visible with data', 'de': 'hidden field', 'a': 'hidden field', 'longitud': 'inline label - visible with data', });
lyr_CORREDORNORTESUR_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CORREDORSUR_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_CORREDOROESTENORTE_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CORREDOROESTESUR_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CORREDORESTEOESTE_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Surtidorescorredores_8.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - visible with data', 'ogc_fid': 'hidden field', 'oid_': 'hidden field', 'folderpath': 'hidden field', 'symbolid': 'hidden field', 'altmode': 'hidden field', 'base': 'hidden field', 'snippet': 'hidden field', 'popupinfo': 'inline label - visible with data', 'haslabel': 'hidden field', 'labelid': 'hidden field', });
lyr_PeajesyPesaje_9.set('fieldLabels', {'name': 'inline label - visible with data', 'ogc_fid': 'hidden field', 'layer': 'hidden field', 'estaciones': 'hidden field', 'departamen': 'inline label - visible with data', 'ruta': 'inline label - visible with data', 'norma_crea': 'hidden field', 'convenio_a': 'hidden field', 'nom_trans': 'hidden field', 'inicio_ope': 'hidden field', 'Longitud': 'hidden field', 'Latitud': 'hidden field', });
lyr_ADUANASBOLIVIA_10.set('fieldLabels', {'ogc_fid': 'hidden field', 'n': 'inline label - visible with data', 'administra': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'departamen': 'hidden field', 'ciudad': 'inline label - visible with data', 'direccion': 'hidden field', 'telefono': 'inline label - visible with data', 'pais': 'inline label - visible with data', 'latitud': 'hidden field', 'longitud': 'hidden field', });
lyr_PARQUESINDUSTRIALES_11.set('fieldLabels', {'acept': 'inline label - visible with data', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', });
lyr_PuertosfluvialesBOL_12.set('fieldLabels', {'ogc_fid': 'hidden field', 'gml_id': 'inline label - visible with data', 'id': 'hidden field', });
lyr_viaferroBOLIVIA_13.set('fieldLabels', {'ogc_fid': 'hidden field', 'gml_id': 'inline label - visible with data', 'id': 'hidden field', 'tipo_red': 'inline label - visible with data', });
lyr_EstacionesferrocarrilBOL_14.set('fieldLabels', {'fid': 'hidden field', 'ogc_fid': 'hidden field', 'idusco': 'hidden field', 'acc': 'hidden field', 'nam': 'inline label - visible with data', 'ops': 'hidden field', 'tuc': 'hidden field', 'zpp': 'hidden field', 'acc_lbl': 'hidden field', 'ops_lbl': 'inline label - visible with data', 'tuc_lbl': 'hidden field', 'zpp_lbl': 'inline label - visible with data', });
lyr_AEROPUERTOSBOLaeropuertos_bol_15.set('fieldLabels', {'fid': 'hidden field', 'ogc_fid': 'hidden field', 'nro': 'hidden field', 'departamen': 'inline label - visible with data', 'municipio': 'hidden field', 'ciudad': 'inline label - visible with data', 'nombre_aer': 'inline label - visible with data', 'tipo_aerod': 'hidden field', });
lyr_AEROPUERTOSBOLaeropuertos_bol_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});