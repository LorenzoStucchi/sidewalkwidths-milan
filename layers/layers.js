var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sidewalkwidths_1 = new ol.format.GeoJSON();
var features_sidewalkwidths_1 = format_sidewalkwidths_1.readFeatures(json_sidewalkwidths_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sidewalkwidths_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sidewalkwidths_1.addFeatures(features_sidewalkwidths_1);
var lyr_sidewalkwidths_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sidewalkwidths_1, 
                style: style_sidewalkwidths_1,
                interactive: true,
    title: 'sidewalkwidths<br />\
    <img src="styles/legend/sidewalkwidths_1_0.png" /> Non accessibile (< 90 cm)<br />\
    <img src="styles/legend/sidewalkwidths_1_1.png" /> Accessibilità limitata (90-150 cm)<br />\
    <img src="styles/legend/sidewalkwidths_1_2.png" /> Accessibilità limitata in luoghi affollati (150-180 cm)<br />\
    <img src="styles/legend/sidewalkwidths_1_3.png" /> Accessibilità garantita (> 1,8 m)<br />\
    <img src="styles/legend/sidewalkwidths_1_4.png" /> Ampi spazi aperti (> 10 m)<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_sidewalkwidths_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sidewalkwidths_1];
lyr_sidewalkwidths_1.set('fieldAliases', {'id': 'id', 'width': 'width', });
lyr_sidewalkwidths_1.set('fieldImages', {'id': 'TextEdit', 'width': 'TextEdit', });
lyr_sidewalkwidths_1.set('fieldLabels', {'id': 'inline label', 'width': 'inline label', });
lyr_sidewalkwidths_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});