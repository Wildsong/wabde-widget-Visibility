define({
  root: ({
    taskUrl: "Viewshed Service URL",
    portalURL: "Specify the URL to your ArcGIS Online organization or Portal for ArcGIS",
    portalURLError: "The configured URL to your ArcGIS Online organization or Portal for ArcGIS is not valid.",
    privilegeError: "Your user role cannot perform analysis. In order to perform analysis, the administrator of your organization needs to grant you certain <a href=\"http://doc.arcgis.com/en/arcgis-online/reference/roles.htm\" target=\"_blank\">privileges</a>.",
    noServiceError: "Elevation analysis service not available. Please check your ArcGIS Online organization or Portal for ArcGIS configurations.",
    maximumRangeMessage: "Maximum Observable Range must be greater than the Minimum Observable Range and cannot be more than ${limit} ${units}.",

    serviceURLPlaceholder: "Please input Viewshed Geoprocessing task URL",
    setTask: "Set",
    setTaskTitle: "Set Viewshed Geoprocessing Task",
    serviceURLError: "The Geoprocessing task you are trying to configure with this widget is not valid. Please select a valid Viewshed Geoprocessing task URL",
    defaultMilsForAnglesLabel: "Set mils for angles as default",
    defaultObserverHeightLabel: "Default Observer Height unit",
    defaultObservableDistanceLabel: "Default Observable Distance unit",
    defaultObserveHeightLabel: "Default Observer Height",
    defaultMinimumObservableDistanceLabel: "Default Minimum Observable Distance",
    defaultMaximumObservableDistanceLabel: "Default Maximum Observable Distance",
    units: {
      miles: "Miles",
      kilometers: "Kilometers",
      feet: "Feet",
      meters: "Meters",
      yards: "Yards",
      nauticalMiles: "Nautical miles"
    },
    helpIconTooltip: "The operational layer list is populated with layers from the current web map that are polygon geometry type.", // tooltip info for operational drop-down list
    selectOperationalLayerLabel :"Select an operational layer for results",
    lineOfSightTabTitle: "Line of Sight",
    symbologyTabTitle: "Symbology",
    "transparency": 'Transparency', // Shown as label on transparency sliders
    "outline": 'Outline', // Shown as label for outline color picker
    "fill": 'Fill (Color only applies when style set to solid)', // Shown as label for outline color picker
    "style": "Style", // Shown as Title for Style dropdown
    "selectOpLayerLabel": "Select an operational layer for results", // Label for the operational layer drop-down list,
    "selectDefaultMeasurementLabel": "Select a default unit of measure", // Label for default unit of measure
    "helpIconTooltip": "The operational layer list is populated with layers from the current web map that are polygon geometry type.", // tooltip info for operational drop-down list
    "visibleSectionLabel": "Visible Section",
    "nonVisibleSectionLabel": "Non-visible Section",
    "visibleSectionButtonLabel": 'Configure visible section Settings', // Shown as tooltip for visible section Settings dropdown
    "nonVisibleSectionButtonLabel": 'Configure non-visible section Settings', // Shown as tooltip for non-visible section Settings dropdown
    "transparency": 'Transparency', // Shown as label on transparency sliders
    "outline": 'Outline', // Shown as label for outline color picker
    "fill": 'Fill (Color only applies when style set to solid)', // Shown as label for outline color picker
    "style": "Style", // Shown as Title for Style dropdown
    "colorPicker": "Color Picker",
    "lineStyles": {
      "esriSLSDash": "Dash",
      "esriSLSDashDot": "Dash Dot",
      "esriSLSDashDotDot": "Dash Dot Dot",
      "esriSLSDot": "Dot",
      "esriSLSLongDash": "Long Dash",
      "esriSLSLongDashDot": "Long Dash Dot",
      "esriSLSNull": "Null",
      "esriSLSShortDash": "Short Dash",
      "esriSLSShortDashDot": "Short Dash Dot",
      "esriSLSShortDashDotDot": "Short Dash Dot Dot",
      "esriSLSShortDot": "Short Dot",
      "esriSLSSolid": "Solid"
    },
    "fillStyles": {
      "esriSFSBackwardDiagonal": "Backward",
      "esriSFSCross": "Cross",
      "esriSFSDiagonalCross": "Diagonal",
      "esriSFSForwardDiagonal": "Forward",
      "esriSFSHorizontal": "Horizontal",
      "esriSFSNull": "Null",
      "esriSFSSolid": "Solid",
      "esriSFSVertical": "Vertical"
    }
  }),
  "ar": 1,
  "bs": 1,
  "ca": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hr": 1,
  "hu": 1,
  "it": 1,
  "id": 1,
  "ja": 1,
  "ko": 1,
  "lt": 1,
  "lv": 1,
  "nb": 1,
  "nl": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sk": 1,
  "sl": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "uk": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});
