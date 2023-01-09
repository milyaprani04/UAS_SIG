var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.format.GeoJSON();
var features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.readFeatures(json_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.addFeatures(features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0);var lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
                style: style_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,
    title: '[LapakGIS.com] Batas_Kecamatan_BIG_PPBW<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_0.png" /> Animha<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_1.png" /> Elikobal<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_2.png" /> Ilwayab<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_3.png" /> Jagebob<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_4.png" /> Kaptel<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_5.png" /> Kimaam<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_6.png" /> Kurik<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_7.png" /> Malind<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_8.png" /> Merauke<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_9.png" /> Muting<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_10.png" /> Naukenjerai<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_11.png" /> Ngguti<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_12.png" /> Okaba<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_13.png" /> Semangga<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_14.png" /> Sota<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_15.png" /> Tabonji<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_16.png" /> Tanah Miring<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_17.png" /> Tubang<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_18.png" /> Ulilin<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_19.png" /> Waan<br />'
        });

lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0];
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', 'Guru negri': 'Guru negri', 'Guru Swsta': 'Guru Swsta', 'S. Negeri': 'S. Negeri', 'S.Swasta': 'S.Swasta', 'Mrid Negri': 'Mrid Negri', 'Mrid Swsta': 'Mrid Swsta', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'Guru negri': 'TextEdit', 'Guru Swsta': 'TextEdit', 'S. Negeri': 'TextEdit', 'S.Swasta': 'TextEdit', 'Mrid Negri': 'TextEdit', 'Mrid Swsta': 'TextEdit', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldLabels', {'OBJECTID': 'inline label', 'METADATA': 'inline label', 'SRS_ID': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'UUPP': 'inline label', 'Guru negri': 'inline label', 'Guru Swsta': 'inline label', 'S. Negeri': 'inline label', 'S.Swasta': 'inline label', 'Mrid Negri': 'inline label', 'Mrid Swsta': 'inline label', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});