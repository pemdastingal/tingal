var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Dusun_1 = new ol.format.GeoJSON();
var features_Dusun_1 = format_Dusun_1.readFeatures(json_Dusun_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dusun_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dusun_1.addFeatures(features_Dusun_1);
var lyr_Dusun_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dusun_1, 
                style: style_Dusun_1,
                popuplayertitle: "Dusun",
                interactive: true,
    title: 'Dusun<br />\
    <img src="styles/legend/Dusun_1_0.png" /> Dusun Gansri<br />\
    <img src="styles/legend/Dusun_1_1.png" /> Dusun Tingal<br />\
    <img src="styles/legend/Dusun_1_2.png" /> Dusun Tulungsari Kulon<br />\
    <img src="styles/legend/Dusun_1_3.png" /> Dusun Tulungsari Wetan<br />'
        });
var format_Perbatasan_2 = new ol.format.GeoJSON();
var features_Perbatasan_2 = format_Perbatasan_2.readFeatures(json_Perbatasan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perbatasan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perbatasan_2.addFeatures(features_Perbatasan_2);
var lyr_Perbatasan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perbatasan_2, 
                style: style_Perbatasan_2,
                popuplayertitle: "Perbatasan",
                interactive: false,
                title: '<img src="styles/legend/Perbatasan_2.png" /> Perbatasan'
            });
var format_JalanDesa_3 = new ol.format.GeoJSON();
var features_JalanDesa_3 = format_JalanDesa_3.readFeatures(json_JalanDesa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_3.addFeatures(features_JalanDesa_3);
var lyr_JalanDesa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_3, 
                style: style_JalanDesa_3,
                popuplayertitle: "JalanDesa",
                interactive: false,
                title: '<img src="styles/legend/JalanDesa_3.png" /> JalanDesa'
            });
var format_Kabel_Listrik_4 = new ol.format.GeoJSON();
var features_Kabel_Listrik_4 = format_Kabel_Listrik_4.readFeatures(json_Kabel_Listrik_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kabel_Listrik_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kabel_Listrik_4.addFeatures(features_Kabel_Listrik_4);
var lyr_Kabel_Listrik_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kabel_Listrik_4, 
                style: style_Kabel_Listrik_4,
                popuplayertitle: "Kabel_Listrik",
                interactive: false,
                title: '<img src="styles/legend/Kabel_Listrik_4.png" /> Kabel_Listrik'
            });
var format_Kontur_5 = new ol.format.GeoJSON();
var features_Kontur_5 = format_Kontur_5.readFeatures(json_Kontur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_5.addFeatures(features_Kontur_5);
var lyr_Kontur_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kontur_5, 
                style: style_Kontur_5,
                popuplayertitle: "Kontur",
                interactive: false,
                title: '<img src="styles/legend/Kontur_5.png" /> Kontur'
            });
var format_Relka_6 = new ol.format.GeoJSON();
var features_Relka_6 = format_Relka_6.readFeatures(json_Relka_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Relka_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Relka_6.addFeatures(features_Relka_6);
var lyr_Relka_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Relka_6, 
                style: style_Relka_6,
                popuplayertitle: "Relka",
                interactive: false,
                title: '<img src="styles/legend/Relka_6.png" /> Relka'
            });
var format_Sungai_7 = new ol.format.GeoJSON();
var features_Sungai_7 = format_Sungai_7.readFeatures(json_Sungai_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_7.addFeatures(features_Sungai_7);
var lyr_Sungai_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_7, 
                style: style_Sungai_7,
                popuplayertitle: "Sungai",
                interactive: false,
                title: '<img src="styles/legend/Sungai_7.png" /> Sungai'
            });
var format_Pemukiman_Warga_8 = new ol.format.GeoJSON();
var features_Pemukiman_Warga_8 = format_Pemukiman_Warga_8.readFeatures(json_Pemukiman_Warga_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_Warga_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_Warga_8.addFeatures(features_Pemukiman_Warga_8);
var lyr_Pemukiman_Warga_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_Warga_8, 
                style: style_Pemukiman_Warga_8,
                popuplayertitle: "Pemukiman_Warga",
                interactive: false,
                title: '<img src="styles/legend/Pemukiman_Warga_8.png" /> Pemukiman_Warga'
            });
var format_Gang_9 = new ol.format.GeoJSON();
var features_Gang_9 = format_Gang_9.readFeatures(json_Gang_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gang_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gang_9.addFeatures(features_Gang_9);
var lyr_Gang_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gang_9, 
                style: style_Gang_9,
                popuplayertitle: "Gang",
                interactive: false,
                title: '<img src="styles/legend/Gang_9.png" /> Gang'
            });
var format_JalanKabupaten_10 = new ol.format.GeoJSON();
var features_JalanKabupaten_10 = format_JalanKabupaten_10.readFeatures(json_JalanKabupaten_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKabupaten_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKabupaten_10.addFeatures(features_JalanKabupaten_10);
var lyr_JalanKabupaten_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKabupaten_10, 
                style: style_JalanKabupaten_10,
                popuplayertitle: "JalanKabupaten",
                interactive: true,
                title: '<img src="styles/legend/JalanKabupaten_10.png" /> JalanKabupaten'
            });
var format_Toponimi_11 = new ol.format.GeoJSON();
var features_Toponimi_11 = format_Toponimi_11.readFeatures(json_Toponimi_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toponimi_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toponimi_11.addFeatures(features_Toponimi_11);
var lyr_Toponimi_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toponimi_11, 
                style: style_Toponimi_11,
                popuplayertitle: "Toponimi",
                interactive: true,
                title: '<img src="styles/legend/Toponimi_11.png" /> Toponimi'
            });
var format_Makam_12 = new ol.format.GeoJSON();
var features_Makam_12 = format_Makam_12.readFeatures(json_Makam_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_12.addFeatures(features_Makam_12);
var lyr_Makam_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_12, 
                style: style_Makam_12,
                popuplayertitle: "Makam",
                interactive: true,
                title: '<img src="styles/legend/Makam_12.png" /> Makam'
            });
var format_Bangunan_13 = new ol.format.GeoJSON();
var features_Bangunan_13 = format_Bangunan_13.readFeatures(json_Bangunan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_13.addFeatures(features_Bangunan_13);
var lyr_Bangunan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_13, 
                style: style_Bangunan_13,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_13.png" /> Bangunan'
            });
var format_Pemerintahan_14 = new ol.format.GeoJSON();
var features_Pemerintahan_14 = format_Pemerintahan_14.readFeatures(json_Pemerintahan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_14.addFeatures(features_Pemerintahan_14);
var lyr_Pemerintahan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_14, 
                style: style_Pemerintahan_14,
                popuplayertitle: "Pemerintahan",
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_14.png" /> Pemerintahan'
            });
var format_Jembatan_15 = new ol.format.GeoJSON();
var features_Jembatan_15 = format_Jembatan_15.readFeatures(json_Jembatan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jembatan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jembatan_15.addFeatures(features_Jembatan_15);
var lyr_Jembatan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jembatan_15, 
                style: style_Jembatan_15,
                popuplayertitle: "Jembatan",
                interactive: true,
                title: '<img src="styles/legend/Jembatan_15.png" /> Jembatan'
            });
var format_Pendidikan_16 = new ol.format.GeoJSON();
var features_Pendidikan_16 = format_Pendidikan_16.readFeatures(json_Pendidikan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_16.addFeatures(features_Pendidikan_16);
var lyr_Pendidikan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_16, 
                style: style_Pendidikan_16,
                popuplayertitle: "Pendidikan",
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_16.png" /> Pendidikan'
            });
var format_Rumah_Sakit_17 = new ol.format.GeoJSON();
var features_Rumah_Sakit_17 = format_Rumah_Sakit_17.readFeatures(json_Rumah_Sakit_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Sakit_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Sakit_17.addFeatures(features_Rumah_Sakit_17);
var lyr_Rumah_Sakit_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Sakit_17, 
                style: style_Rumah_Sakit_17,
                popuplayertitle: "Rumah_Sakit",
                interactive: true,
                title: '<img src="styles/legend/Rumah_Sakit_17.png" /> Rumah_Sakit'
            });
var format_Sarana_Ibadah_18 = new ol.format.GeoJSON();
var features_Sarana_Ibadah_18 = format_Sarana_Ibadah_18.readFeatures(json_Sarana_Ibadah_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sarana_Ibadah_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarana_Ibadah_18.addFeatures(features_Sarana_Ibadah_18);
var lyr_Sarana_Ibadah_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sarana_Ibadah_18, 
                style: style_Sarana_Ibadah_18,
                popuplayertitle: "Sarana_Ibadah",
                interactive: true,
                title: '<img src="styles/legend/Sarana_Ibadah_18.png" /> Sarana_Ibadah'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Dusun_1.setVisible(true);lyr_Perbatasan_2.setVisible(true);lyr_JalanDesa_3.setVisible(true);lyr_Kabel_Listrik_4.setVisible(true);lyr_Kontur_5.setVisible(true);lyr_Relka_6.setVisible(true);lyr_Sungai_7.setVisible(true);lyr_Pemukiman_Warga_8.setVisible(false);lyr_Gang_9.setVisible(true);lyr_JalanKabupaten_10.setVisible(true);lyr_Toponimi_11.setVisible(true);lyr_Makam_12.setVisible(true);lyr_Bangunan_13.setVisible(true);lyr_Pemerintahan_14.setVisible(true);lyr_Jembatan_15.setVisible(true);lyr_Pendidikan_16.setVisible(true);lyr_Rumah_Sakit_17.setVisible(true);lyr_Sarana_Ibadah_18.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Dusun_1,lyr_Perbatasan_2,lyr_JalanDesa_3,lyr_Kabel_Listrik_4,lyr_Kontur_5,lyr_Relka_6,lyr_Sungai_7,lyr_Pemukiman_Warga_8,lyr_Gang_9,lyr_JalanKabupaten_10,lyr_Toponimi_11,lyr_Makam_12,lyr_Bangunan_13,lyr_Pemerintahan_14,lyr_Jembatan_15,lyr_Pendidikan_16,lyr_Rumah_Sakit_17,lyr_Sarana_Ibadah_18];
lyr_Dusun_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Database': 'Database', });
lyr_Perbatasan_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Database': 'Database', });
lyr_JalanDesa_3.set('fieldAliases', {'fid': 'fid', 'Nama Jalan': 'Nama Jalan', });
lyr_Kabel_Listrik_4.set('fieldAliases', {'fid': 'fid', });
lyr_Kontur_5.set('fieldAliases', {'fid': 'fid', });
lyr_Relka_6.set('fieldAliases', {'fid': 'fid', });
lyr_Sungai_7.set('fieldAliases', {'fid': 'fid', });
lyr_Pemukiman_Warga_8.set('fieldAliases', {'fid': 'fid', });
lyr_Gang_9.set('fieldAliases', {'id': 'id', });
lyr_JalanKabupaten_10.set('fieldAliases', {'fid': 'fid', 'Nama Jalan': 'Nama Jalan', });
lyr_Toponimi_11.set('fieldAliases', {'fid': 'fid', 'Nama Toponimi': 'Nama Toponimi', });
lyr_Makam_12.set('fieldAliases', {'id': 'id', 'Nama Makam': 'Nama Makam', });
lyr_Bangunan_13.set('fieldAliases', {'fid': 'fid', 'Nama Bangunan': 'Nama Bangunan', });
lyr_Pemerintahan_14.set('fieldAliases', {'fid': 'fid', 'Nama Pemerintahan': 'Nama Pemerintahan', });
lyr_Jembatan_15.set('fieldAliases', {'fid': 'fid', 'Nama Jembatan': 'Nama Jembatan', });
lyr_Pendidikan_16.set('fieldAliases', {'fid': 'fid', 'Nama Pendidikan': 'Nama Pendidikan', 'Alamat': 'Alamat', });
lyr_Rumah_Sakit_17.set('fieldAliases', {'fid': 'fid', 'Nama Rumah Sakits': 'Nama Rumah Sakits', });
lyr_Sarana_Ibadah_18.set('fieldAliases', {'fid': 'fid', 'Nama Sarana Ibadah': 'Nama Sarana Ibadah', });
lyr_Dusun_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Database': 'TextEdit', });
lyr_Perbatasan_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Database': 'TextEdit', });
lyr_JalanDesa_3.set('fieldImages', {'fid': 'TextEdit', 'Nama Jalan': 'TextEdit', });
lyr_Kabel_Listrik_4.set('fieldImages', {'fid': '', });
lyr_Kontur_5.set('fieldImages', {'fid': '', });
lyr_Relka_6.set('fieldImages', {'fid': '', });
lyr_Sungai_7.set('fieldImages', {'fid': 'TextEdit', });
lyr_Pemukiman_Warga_8.set('fieldImages', {'fid': 'TextEdit', });
lyr_Gang_9.set('fieldImages', {'id': 'TextEdit', });
lyr_JalanKabupaten_10.set('fieldImages', {'fid': 'TextEdit', 'Nama Jalan': 'TextEdit', });
lyr_Toponimi_11.set('fieldImages', {'fid': 'TextEdit', 'Nama Toponimi': 'TextEdit', });
lyr_Makam_12.set('fieldImages', {'id': 'TextEdit', 'Nama Makam': 'TextEdit', });
lyr_Bangunan_13.set('fieldImages', {'fid': 'TextEdit', 'Nama Bangunan': 'TextEdit', });
lyr_Pemerintahan_14.set('fieldImages', {'fid': 'TextEdit', 'Nama Pemerintahan': 'TextEdit', });
lyr_Jembatan_15.set('fieldImages', {'fid': 'TextEdit', 'Nama Jembatan': 'TextEdit', });
lyr_Pendidikan_16.set('fieldImages', {'fid': 'TextEdit', 'Nama Pendidikan': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_Rumah_Sakit_17.set('fieldImages', {'fid': 'TextEdit', 'Nama Rumah Sakits': 'TextEdit', });
lyr_Sarana_Ibadah_18.set('fieldImages', {'fid': 'TextEdit', 'Nama Sarana Ibadah': 'TextEdit', });
lyr_Dusun_1.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Database': 'inline label - always visible', });
lyr_Perbatasan_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Database': 'no label', });
lyr_JalanDesa_3.set('fieldLabels', {'fid': 'hidden field', 'Nama Jalan': 'hidden field', });
lyr_Kabel_Listrik_4.set('fieldLabels', {'fid': 'no label', });
lyr_Kontur_5.set('fieldLabels', {'fid': 'header label - visible with data', });
lyr_Relka_6.set('fieldLabels', {'fid': 'inline label - visible with data', });
lyr_Sungai_7.set('fieldLabels', {'fid': 'no label', });
lyr_Pemukiman_Warga_8.set('fieldLabels', {'fid': 'no label', });
lyr_Gang_9.set('fieldLabels', {'id': 'no label', });
lyr_JalanKabupaten_10.set('fieldLabels', {'fid': 'hidden field', 'Nama Jalan': 'hidden field', });
lyr_Toponimi_11.set('fieldLabels', {'fid': 'hidden field', 'Nama Toponimi': 'inline label - visible with data', });
lyr_Makam_12.set('fieldLabels', {'id': 'hidden field', 'Nama Makam': 'inline label - always visible', });
lyr_Bangunan_13.set('fieldLabels', {'fid': 'hidden field', 'Nama Bangunan': 'inline label - always visible', });
lyr_Pemerintahan_14.set('fieldLabels', {'fid': 'hidden field', 'Nama Pemerintahan': 'inline label - always visible', });
lyr_Jembatan_15.set('fieldLabels', {'fid': 'hidden field', 'Nama Jembatan': 'header label - visible with data', });
lyr_Pendidikan_16.set('fieldLabels', {'fid': 'hidden field', 'Nama Pendidikan': 'inline label - always visible', 'Alamat': 'hidden field', });
lyr_Rumah_Sakit_17.set('fieldLabels', {'fid': 'hidden field', 'Nama Rumah Sakits': 'inline label - always visible', });
lyr_Sarana_Ibadah_18.set('fieldLabels', {'fid': 'hidden field', 'Nama Sarana Ibadah': 'inline label - always visible', });
lyr_Sarana_Ibadah_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});