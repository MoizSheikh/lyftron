export const APIDATA = [
    {
      "id": 37,
      "created_by": {
        "id": 3,
        "email": "deenanath.vidyapremi+1@lyftrondata.com",
        "first_name": "Deenanath",
        "last_name": "Vidyapremi"
      },
      "updated_by": {
        "email": "",
        "first_name": "",
        "last_name": ""
      },
      "source": {
        "id": 9,
        "name": "Src_Lyftrondata_Fedex",
        "connection_type": "source",
        "logoURL": "fedex.png"
      },
      "target": {
        "id": 17,
        "name": "Warehouse Sql",
        "connection_type": "target",
        "logoURL": "sql.png"
      },
      "batchprocessed": 2,
      "pipelineprocessed": 0,
      "recordprocessed": 0,
      "created_at": "2021-06-05T14:02:43.543627Z",
      "updated_at": "2021-06-05T14:02:42.774063Z",
      "status": "In Progress",
      "version": "1.0",
      "name": "Test Integration",
      "startAt": "2021-06-03T19:31:00Z",
      "endAt": "2021-06-20T19:31:00Z",
      "lastExecuteAt": "2021-06-05T14:08:34.949525Z",
      "nextExecuteAt": "2021-06-05T15:08:34.949534Z",
      "frequency": "1hr",
      "pipeline": [
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "BillingWeightUnits",
          "delta_fields": "BillingWeightUnits",
          "source_table": "RatedPackage",
          "target_table": "RatedPackage",
          "pipeline_name": "Lyftrondata_RatedPackage",
          "trigger_fields": "BillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "totalBillingWeightUnits",
          "delta_fields": "totalBillingWeightUnits",
          "source_table": "ShipmentRateDetails",
          "target_table": "ShipmentRateDetails",
          "pipeline_name": "Lyftrondata_ShipmentRateDetails",
          "trigger_fields": "totalBillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "ServiceType",
          "delta_fields": "ServiceType",
          "source_table": "rate",
          "target_table": "rate",
          "pipeline_name": "Lyftrondata_rate",
          "trigger_fields": "ServiceType",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayofWeek",
          "delta_fields": "DayofWeek",
          "source_table": "NormalHours",
          "target_table": "NormalHours",
          "pipeline_name": "Lyftrondata_NormalHours",
          "trigger_fields": "DayofWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "CarrierDetails",
          "target_table": "CarrierDetails",
          "pipeline_name": "Lyftrondata_CarrierDetails",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "HoursForEffectiveDate",
          "target_table": "HoursForEffectiveDate",
          "pipeline_name": "Lyftrondata_HoursForEffectiveDate",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CarrierCode",
          "delta_fields": "CarrierCode",
          "source_table": "LocationCapabilities",
          "target_table": "LocationCapabilities",
          "pipeline_name": "Lyftrondata_LocationCapabilities",
          "trigger_fields": "CarrierCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DuplicateWaybill",
          "delta_fields": "DuplicateWaybill",
          "source_table": "track",
          "target_table": "track",
          "pipeline_name": "Lyftrondata_track",
          "trigger_fields": "DuplicateWaybill",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "LocationId",
          "delta_fields": "LocationId",
          "source_table": "LocationDescriptions",
          "target_table": "LocationDescriptions",
          "pipeline_name": "Lyftrondata_LocationDescriptions",
          "trigger_fields": "LocationId",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "postalcode",
          "target_table": "postalcode",
          "pipeline_name": "Lyftrondata_postalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "validatepostalcode",
          "target_table": "validatepostalcode",
          "pipeline_name": "Lyftrondata_validatepostalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": ""
            },
            {
              "group": "1",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": ""
            },
            {
              "group": "1",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": ""
            },
            {
              "group": "2",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": ""
            },
            {
              "group": "2",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "Service",
          "delta_fields": "Service",
          "source_table": "Deliverytime",
          "target_table": "Deliverytime",
          "pipeline_name": "Lyftrondata_Deliverytime",
          "trigger_fields": "Service",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "TotalResultsAvailable",
          "delta_fields": "TotalResultsAvailable",
          "source_table": "searchlocation",
          "target_table": "searchlocation",
          "pipeline_name": "Lyftrondata_searchlocation",
          "trigger_fields": "TotalResultsAvailable",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DistanceValue",
          "delta_fields": "DistanceValue",
          "source_table": "LocationDetails",
          "target_table": "LocationDetails",
          "pipeline_name": "Lyftrondata_LocationDetails",
          "trigger_fields": "DistanceValue",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.tables",
          "target_table": "sys.tables",
          "pipeline_name": "Lyftrondata_sys.tables",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "logs",
          "delta_fields": "logs",
          "source_table": "sys.log",
          "target_table": "sys.log",
          "pipeline_name": "Lyftrondata_sys.log",
          "trigger_fields": "logs",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.constraints",
          "target_table": "sys.constraints",
          "pipeline_name": "Lyftrondata_sys.constraints",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "method",
          "delta_fields": "method",
          "source_table": "sys.methods",
          "target_table": "sys.methods",
          "pipeline_name": "Lyftrondata_sys.methods",
          "trigger_fields": "method",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.delta",
          "target_table": "sys.delta",
          "pipeline_name": "Lyftrondata_sys.delta",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "total time spent",
          "delta_fields": "total time spent",
          "source_table": "sys.usage ",
          "target_table": "sys.usage ",
          "pipeline_name": "Lyftrondata_sys.usage ",
          "trigger_fields": "total time spent",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "version",
          "delta_fields": "version",
          "source_table": "sys.version ",
          "target_table": "sys.version ",
          "pipeline_name": "Lyftrondata_sys.version ",
          "trigger_fields": "version",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "licenseKey",
          "delta_fields": "licenseKey",
          "source_table": "sys.license ",
          "target_table": "sys.license ",
          "pipeline_name": "Lyftrondata_sys.license ",
          "trigger_fields": "licenseKey",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "target",
          "delta_fields": "target",
          "source_table": "sys.connectionstring ",
          "target_table": "sys.connectionstring ",
          "pipeline_name": "Lyftrondata_sys.connectionstring ",
          "trigger_fields": "target",
          "target_table_action": "truncate"
        }
      ],
      "sourceId": 9,
      "targetId": 17
    },
    {
      "id": 44,
      "created_by": {
        "id": 3,
        "email": "deenanath.vidyapremi+1@lyftrondata.com",
        "first_name": "Deenanath",
        "last_name": "Vidyapremi"
      },
      "updated_by": {
        "email": "",
        "first_name": "",
        "last_name": ""
      },
      "source": {
        "id": 9,
        "name": "Src_Lyftrondata_Fedex",
        "connection_type": "source",
        "logoURL": "fedex.png"
      },
      "target": {
        "id": 17,
        "name": "Warehouse Sql",
        "connection_type": "target",
        "logoURL": "sql.png"
      },
      "batchprocessed": 0,
      "pipelineprocessed": null,
      "recordprocessed": null,
      "created_at": "2021-06-05T15:52:06.179378Z",
      "updated_at": "2021-06-05T15:52:05.527808Z",
      "status": "In Progress",
      "version": "1.0",
      "name": "test 3",
      "startAt": "2021-06-04T21:20:00Z",
      "endAt": "2021-06-20T21:20:00Z",
      "lastExecuteAt": "2021-06-05T16:00:01.314245Z",
      "nextExecuteAt": "2021-06-05T17:00:01.314259Z",
      "frequency": "1hr",
      "pipeline": [
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "BillingWeightUnits",
          "delta_fields": "BillingWeightUnits",
          "source_table": "RatedPackage",
          "target_table": "RatedPackage",
          "pipeline_name": "Lyftrondata_RatedPackage",
          "trigger_fields": "BillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "totalBillingWeightUnits",
          "delta_fields": "totalBillingWeightUnits",
          "source_table": "ShipmentRateDetails",
          "target_table": "ShipmentRateDetails",
          "pipeline_name": "Lyftrondata_ShipmentRateDetails",
          "trigger_fields": "totalBillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "ServiceType",
          "delta_fields": "ServiceType",
          "source_table": "rate",
          "target_table": "rate",
          "pipeline_name": "Lyftrondata_rate",
          "trigger_fields": "ServiceType",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayofWeek",
          "delta_fields": "DayofWeek",
          "source_table": "NormalHours",
          "target_table": "NormalHours",
          "pipeline_name": "Lyftrondata_NormalHours",
          "trigger_fields": "DayofWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "CarrierDetails",
          "target_table": "CarrierDetails",
          "pipeline_name": "Lyftrondata_CarrierDetails",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "HoursForEffectiveDate",
          "target_table": "HoursForEffectiveDate",
          "pipeline_name": "Lyftrondata_HoursForEffectiveDate",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CarrierCode",
          "delta_fields": "CarrierCode",
          "source_table": "LocationCapabilities",
          "target_table": "LocationCapabilities",
          "pipeline_name": "Lyftrondata_LocationCapabilities",
          "trigger_fields": "CarrierCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DuplicateWaybill",
          "delta_fields": "DuplicateWaybill",
          "source_table": "track",
          "target_table": "track",
          "pipeline_name": "Lyftrondata_track",
          "trigger_fields": "DuplicateWaybill",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "LocationId",
          "delta_fields": "LocationId",
          "source_table": "LocationDescriptions",
          "target_table": "LocationDescriptions",
          "pipeline_name": "Lyftrondata_LocationDescriptions",
          "trigger_fields": "LocationId",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "postalcode",
          "target_table": "postalcode",
          "pipeline_name": "Lyftrondata_postalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "validatepostalcode",
          "target_table": "validatepostalcode",
          "pipeline_name": "Lyftrondata_validatepostalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": ""
            },
            {
              "group": "1",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": ""
            },
            {
              "group": "1",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": ""
            },
            {
              "group": "2",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": ""
            },
            {
              "group": "2",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "Service",
          "delta_fields": "Service",
          "source_table": "Deliverytime",
          "target_table": "Deliverytime",
          "pipeline_name": "Lyftrondata_Deliverytime",
          "trigger_fields": "Service",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "TotalResultsAvailable",
          "delta_fields": "TotalResultsAvailable",
          "source_table": "searchlocation",
          "target_table": "searchlocation",
          "pipeline_name": "Lyftrondata_searchlocation",
          "trigger_fields": "TotalResultsAvailable",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DistanceValue",
          "delta_fields": "DistanceValue",
          "source_table": "LocationDetails",
          "target_table": "LocationDetails",
          "pipeline_name": "Lyftrondata_LocationDetails",
          "trigger_fields": "DistanceValue",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.tables",
          "target_table": "sys.tables",
          "pipeline_name": "Lyftrondata_sys.tables",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "logs",
          "delta_fields": "logs",
          "source_table": "sys.log",
          "target_table": "sys.log",
          "pipeline_name": "Lyftrondata_sys.log",
          "trigger_fields": "logs",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.constraints",
          "target_table": "sys.constraints",
          "pipeline_name": "Lyftrondata_sys.constraints",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "method",
          "delta_fields": "method",
          "source_table": "sys.methods",
          "target_table": "sys.methods",
          "pipeline_name": "Lyftrondata_sys.methods",
          "trigger_fields": "method",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.delta",
          "target_table": "sys.delta",
          "pipeline_name": "Lyftrondata_sys.delta",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "total time spent",
          "delta_fields": "total time spent",
          "source_table": "sys.usage ",
          "target_table": "sys.usage ",
          "pipeline_name": "Lyftrondata_sys.usage ",
          "trigger_fields": "total time spent",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "version",
          "delta_fields": "version",
          "source_table": "sys.version ",
          "target_table": "sys.version ",
          "pipeline_name": "Lyftrondata_sys.version ",
          "trigger_fields": "version",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "licenseKey",
          "delta_fields": "licenseKey",
          "source_table": "sys.license ",
          "target_table": "sys.license ",
          "pipeline_name": "Lyftrondata_sys.license ",
          "trigger_fields": "licenseKey",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "target",
          "delta_fields": "target",
          "source_table": "sys.connectionstring ",
          "target_table": "sys.connectionstring ",
          "pipeline_name": "Lyftrondata_sys.connectionstring ",
          "trigger_fields": "target",
          "target_table_action": "truncate"
        }
      ],
      "sourceId": 9,
      "targetId": 17
    },
    {
      "id": 45,
      "created_by": {
        "id": 3,
        "email": "deenanath.vidyapremi+1@lyftrondata.com",
        "first_name": "Deenanath",
        "last_name": "Vidyapremi"
      },
      "updated_by": {
        "email": "",
        "first_name": "",
        "last_name": ""
      },
      "source": {
        "id": 9,
        "name": "Src_Lyftrondata_Fedex",
        "connection_type": "source",
        "logoURL": "fedex.png"
      },
      "target": {
        "id": 17,
        "name": "Warehouse Sql",
        "connection_type": "target",
        "logoURL": "sql.png"
      },
      "batchprocessed": 2,
      "pipelineprocessed": 46,
      "recordprocessed": 1848,
      "created_at": "2021-06-05T15:58:50.699152Z",
      "updated_at": "2021-06-05T15:58:50.025747Z",
      "status": "In Progress",
      "version": "1.0",
      "name": "Test 4",
      "startAt": "2021-06-03T21:28:00Z",
      "endAt": "2021-06-13T21:28:00Z",
      "lastExecuteAt": "2021-06-05T19:00:01.416816Z",
      "nextExecuteAt": "2021-06-05T20:00:01.416830Z",
      "frequency": "1hr",
      "pipeline": [
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "BillingWeightUnits",
          "delta_fields": "BillingWeightUnits",
          "source_table": "RatedPackage",
          "target_table": "RatedPackage",
          "pipeline_name": "Lyftrondata_RatedPackage",
          "trigger_fields": "BillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "totalBillingWeightUnits",
          "delta_fields": "totalBillingWeightUnits",
          "source_table": "ShipmentRateDetails",
          "target_table": "ShipmentRateDetails",
          "pipeline_name": "Lyftrondata_ShipmentRateDetails",
          "trigger_fields": "totalBillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "ServiceType",
          "delta_fields": "ServiceType",
          "source_table": "rate",
          "target_table": "rate",
          "pipeline_name": "Lyftrondata_rate",
          "trigger_fields": "ServiceType",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayofWeek",
          "delta_fields": "DayofWeek",
          "source_table": "NormalHours",
          "target_table": "NormalHours",
          "pipeline_name": "Lyftrondata_NormalHours",
          "trigger_fields": "DayofWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "CarrierDetails",
          "target_table": "CarrierDetails",
          "pipeline_name": "Lyftrondata_CarrierDetails",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "HoursForEffectiveDate",
          "target_table": "HoursForEffectiveDate",
          "pipeline_name": "Lyftrondata_HoursForEffectiveDate",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CarrierCode",
          "delta_fields": "CarrierCode",
          "source_table": "LocationCapabilities",
          "target_table": "LocationCapabilities",
          "pipeline_name": "Lyftrondata_LocationCapabilities",
          "trigger_fields": "CarrierCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DuplicateWaybill",
          "delta_fields": "DuplicateWaybill",
          "source_table": "track",
          "target_table": "track",
          "pipeline_name": "Lyftrondata_track",
          "trigger_fields": "DuplicateWaybill",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "LocationId",
          "delta_fields": "LocationId",
          "source_table": "LocationDescriptions",
          "target_table": "LocationDescriptions",
          "pipeline_name": "Lyftrondata_LocationDescriptions",
          "trigger_fields": "LocationId",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "postalcode",
          "target_table": "postalcode",
          "pipeline_name": "Lyftrondata_postalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "validatepostalcode",
          "target_table": "validatepostalcode",
          "pipeline_name": "Lyftrondata_validatepostalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "Service",
          "delta_fields": "Service",
          "source_table": "Deliverytime",
          "target_table": "Deliverytime",
          "pipeline_name": "Lyftrondata_Deliverytime",
          "trigger_fields": "Service",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "TotalResultsAvailable",
          "delta_fields": "TotalResultsAvailable",
          "source_table": "searchlocation",
          "target_table": "searchlocation",
          "pipeline_name": "Lyftrondata_searchlocation",
          "trigger_fields": "TotalResultsAvailable",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DistanceValue",
          "delta_fields": "DistanceValue",
          "source_table": "LocationDetails",
          "target_table": "LocationDetails",
          "pipeline_name": "Lyftrondata_LocationDetails",
          "trigger_fields": "DistanceValue",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.tables",
          "target_table": "sys.tables",
          "pipeline_name": "Lyftrondata_sys.tables",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "logs",
          "delta_fields": "logs",
          "source_table": "sys.log",
          "target_table": "sys.log",
          "pipeline_name": "Lyftrondata_sys.log",
          "trigger_fields": "logs",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.constraints",
          "target_table": "sys.constraints",
          "pipeline_name": "Lyftrondata_sys.constraints",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "method",
          "delta_fields": "method",
          "source_table": "sys.methods",
          "target_table": "sys.methods",
          "pipeline_name": "Lyftrondata_sys.methods",
          "trigger_fields": "method",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.delta",
          "target_table": "sys.delta",
          "pipeline_name": "Lyftrondata_sys.delta",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "total time spent",
          "delta_fields": "total time spent",
          "source_table": "sys.usage ",
          "target_table": "sys.usage ",
          "pipeline_name": "Lyftrondata_sys.usage ",
          "trigger_fields": "total time spent",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "version",
          "delta_fields": "version",
          "source_table": "sys.version ",
          "target_table": "sys.version ",
          "pipeline_name": "Lyftrondata_sys.version ",
          "trigger_fields": "version",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "licenseKey",
          "delta_fields": "licenseKey",
          "source_table": "sys.license ",
          "target_table": "sys.license ",
          "pipeline_name": "Lyftrondata_sys.license ",
          "trigger_fields": "licenseKey",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "target",
          "delta_fields": "target",
          "source_table": "sys.connectionstring ",
          "target_table": "sys.connectionstring ",
          "pipeline_name": "Lyftrondata_sys.connectionstring ",
          "trigger_fields": "target",
          "target_table_action": "truncate"
        }
      ],
      "sourceId": 9,
      "targetId": 17
    },
    {
      "id": 38,
      "created_by": {
        "id": 3,
        "email": "deenanath.vidyapremi+1@lyftrondata.com",
        "first_name": "Deenanath",
        "last_name": "Vidyapremi"
      },
      "updated_by": {
        "id": 3,
        "email": "deenanath.vidyapremi+1@lyftrondata.com",
        "first_name": "Deenanath",
        "last_name": "Vidyapremi"
      },
      "source": {
        "id": 9,
        "name": "Src_Lyftrondata_Fedex",
        "connection_type": "source",
        "logoURL": "fedex.png"
      },
      "target": {
        "id": 17,
        "name": "Warehouse Sql",
        "connection_type": "target",
        "logoURL": "sql.png"
      },
      "batchprocessed": 2,
      "pipelineprocessed": 46,
      "recordprocessed": 1848,
      "created_at": "2021-06-05T14:16:58.167220Z",
      "updated_at": "2021-06-05T21:25:08.044321Z",
      "status": "In Progress",
      "version": "1.0",
      "name": "Update test new",
      "startAt": "2021-06-02T19:46:00Z",
      "endAt": "2021-06-05T19:46:00Z",
      "lastExecuteAt": "2021-06-05T22:00:01.505650Z",
      "nextExecuteAt": "2021-06-05T23:00:01.505739Z",
      "frequency": "2hr",
      "pipeline": [
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type1",
          "load_status": "Unload",
          "natural_key": "BillingWeightUnits",
          "delta_fields": "BillingWeightUnits",
          "source_table": "RatedPackage",
          "target_table": "RatedPackage",
          "pipeline_name": "Lyftrondata_RatedPackage",
          "trigger_fields": "BillingWeightUnits",
          "target_table_action": "drop"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "totalBillingWeightUnits",
          "delta_fields": "totalBillingWeightUnits",
          "source_table": "ShipmentRateDetails",
          "target_table": "ShipmentRateDetails",
          "pipeline_name": "Lyftrondata_ShipmentRateDetails",
          "trigger_fields": "totalBillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "ServiceType",
          "delta_fields": "ServiceType",
          "source_table": "rate",
          "target_table": "rate",
          "pipeline_name": "Lyftrondata_rate",
          "trigger_fields": "ServiceType",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayofWeek",
          "delta_fields": "DayofWeek",
          "source_table": "NormalHours",
          "target_table": "NormalHours",
          "pipeline_name": "Lyftrondata_NormalHours",
          "trigger_fields": "DayofWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "CarrierDetails",
          "target_table": "CarrierDetails",
          "pipeline_name": "Lyftrondata_CarrierDetails",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "HoursForEffectiveDate",
          "target_table": "HoursForEffectiveDate",
          "pipeline_name": "Lyftrondata_HoursForEffectiveDate",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CarrierCode",
          "delta_fields": "CarrierCode",
          "source_table": "LocationCapabilities",
          "target_table": "LocationCapabilities",
          "pipeline_name": "Lyftrondata_LocationCapabilities",
          "trigger_fields": "CarrierCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DuplicateWaybill",
          "delta_fields": "DuplicateWaybill",
          "source_table": "track",
          "target_table": "track",
          "pipeline_name": "Lyftrondata_track",
          "trigger_fields": "DuplicateWaybill",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "LocationId",
          "delta_fields": "LocationId",
          "source_table": "LocationDescriptions",
          "target_table": "LocationDescriptions",
          "pipeline_name": "Lyftrondata_LocationDescriptions",
          "trigger_fields": "LocationId",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "postalcode",
          "target_table": "postalcode",
          "pipeline_name": "Lyftrondata_postalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "validatepostalcode",
          "target_table": "validatepostalcode",
          "pipeline_name": "Lyftrondata_validatepostalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "Service",
          "delta_fields": "Service",
          "source_table": "Deliverytime",
          "target_table": "Deliverytime",
          "pipeline_name": "Lyftrondata_Deliverytime",
          "trigger_fields": "Service",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "TotalResultsAvailable",
          "delta_fields": "TotalResultsAvailable",
          "source_table": "searchlocation",
          "target_table": "searchlocation",
          "pipeline_name": "Lyftrondata_searchlocation",
          "trigger_fields": "TotalResultsAvailable",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DistanceValue",
          "delta_fields": "DistanceValue",
          "source_table": "LocationDetails",
          "target_table": "LocationDetails",
          "pipeline_name": "Lyftrondata_LocationDetails",
          "trigger_fields": "DistanceValue",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.tables",
          "target_table": "sys.tables",
          "pipeline_name": "Lyftrondata_sys.tables",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "logs",
          "delta_fields": "logs",
          "source_table": "sys.log",
          "target_table": "sys.log",
          "pipeline_name": "Lyftrondata_sys.log",
          "trigger_fields": "logs",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.constraints",
          "target_table": "sys.constraints",
          "pipeline_name": "Lyftrondata_sys.constraints",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "method",
          "delta_fields": "method",
          "source_table": "sys.methods",
          "target_table": "sys.methods",
          "pipeline_name": "Lyftrondata_sys.methods",
          "trigger_fields": "method",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.delta",
          "target_table": "sys.delta",
          "pipeline_name": "Lyftrondata_sys.delta",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "total time spent",
          "delta_fields": "total time spent",
          "source_table": "sys.usage ",
          "target_table": "sys.usage ",
          "pipeline_name": "Lyftrondata_sys.usage ",
          "trigger_fields": "total time spent",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "version",
          "delta_fields": "version",
          "source_table": "sys.version ",
          "target_table": "sys.version ",
          "pipeline_name": "Lyftrondata_sys.version ",
          "trigger_fields": "version",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "licenseKey",
          "delta_fields": "licenseKey",
          "source_table": "sys.license ",
          "target_table": "sys.license ",
          "pipeline_name": "Lyftrondata_sys.license ",
          "trigger_fields": "licenseKey",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "target",
          "delta_fields": "target",
          "source_table": "sys.connectionstring ",
          "target_table": "sys.connectionstring ",
          "pipeline_name": "Lyftrondata_sys.connectionstring ",
          "trigger_fields": "target",
          "target_table_action": "truncate"
        }
      ],
      "sourceId": 9,
      "targetId": 17
    },
    {
      "id": 46,
      "created_by": {
        "id": 3,
        "email": "deenanath.vidyapremi+1@lyftrondata.com",
        "first_name": "Deenanath",
        "last_name": "Vidyapremi"
      },
      "updated_by": {
        "email": "",
        "first_name": "",
        "last_name": ""
      },
      "source": {
        "id": 9,
        "name": "Src_Lyftrondata_Fedex",
        "connection_type": "source",
        "logoURL": "fedex.png"
      },
      "target": {
        "id": 17,
        "name": "Warehouse Sql",
        "connection_type": "target",
        "logoURL": "sql.png"
      },
      "batchprocessed": 0,
      "pipelineprocessed": null,
      "recordprocessed": null,
      "created_at": "2021-06-05T18:29:00.363530Z",
      "updated_at": "2021-06-05T18:28:59.697570Z",
      "status": "In Progress",
      "version": "1.0",
      "name": "test 5",
      "startAt": "2021-06-03T23:58:00Z",
      "endAt": "2021-07-24T23:58:00Z",
      "lastExecuteAt": "2021-06-05T20:00:01.253003Z",
      "nextExecuteAt": "2021-06-05T21:00:01.253016Z",
      "frequency": "1hr",
      "pipeline": [
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "BillingWeightUnits",
          "delta_fields": "BillingWeightUnits",
          "source_table": "RatedPackage",
          "target_table": "RatedPackage",
          "pipeline_name": "Lyftrondata_RatedPackage",
          "trigger_fields": "BillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "totalBillingWeightUnits",
          "delta_fields": "totalBillingWeightUnits",
          "source_table": "ShipmentRateDetails",
          "target_table": "ShipmentRateDetails",
          "pipeline_name": "Lyftrondata_ShipmentRateDetails",
          "trigger_fields": "totalBillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "ServiceType",
          "delta_fields": "ServiceType",
          "source_table": "rate",
          "target_table": "rate",
          "pipeline_name": "Lyftrondata_rate",
          "trigger_fields": "ServiceType",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayofWeek",
          "delta_fields": "DayofWeek",
          "source_table": "NormalHours",
          "target_table": "NormalHours",
          "pipeline_name": "Lyftrondata_NormalHours",
          "trigger_fields": "DayofWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "CarrierDetails",
          "target_table": "CarrierDetails",
          "pipeline_name": "Lyftrondata_CarrierDetails",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "HoursForEffectiveDate",
          "target_table": "HoursForEffectiveDate",
          "pipeline_name": "Lyftrondata_HoursForEffectiveDate",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CarrierCode",
          "delta_fields": "CarrierCode",
          "source_table": "LocationCapabilities",
          "target_table": "LocationCapabilities",
          "pipeline_name": "Lyftrondata_LocationCapabilities",
          "trigger_fields": "CarrierCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DuplicateWaybill",
          "delta_fields": "DuplicateWaybill",
          "source_table": "track",
          "target_table": "track",
          "pipeline_name": "Lyftrondata_track",
          "trigger_fields": "DuplicateWaybill",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "LocationId",
          "delta_fields": "LocationId",
          "source_table": "LocationDescriptions",
          "target_table": "LocationDescriptions",
          "pipeline_name": "Lyftrondata_LocationDescriptions",
          "trigger_fields": "LocationId",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "postalcode",
          "target_table": "postalcode",
          "pipeline_name": "Lyftrondata_postalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "validatepostalcode",
          "target_table": "validatepostalcode",
          "pipeline_name": "Lyftrondata_validatepostalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": ""
            },
            {
              "group": "1",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": ""
            },
            {
              "group": "1",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": ""
            },
            {
              "group": "2",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": ""
            },
            {
              "group": "2",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "Service",
          "delta_fields": "Service",
          "source_table": "Deliverytime",
          "target_table": "Deliverytime",
          "pipeline_name": "Lyftrondata_Deliverytime",
          "trigger_fields": "Service",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "TotalResultsAvailable",
          "delta_fields": "TotalResultsAvailable",
          "source_table": "searchlocation",
          "target_table": "searchlocation",
          "pipeline_name": "Lyftrondata_searchlocation",
          "trigger_fields": "TotalResultsAvailable",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DistanceValue",
          "delta_fields": "DistanceValue",
          "source_table": "LocationDetails",
          "target_table": "LocationDetails",
          "pipeline_name": "Lyftrondata_LocationDetails",
          "trigger_fields": "DistanceValue",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.tables",
          "target_table": "sys.tables",
          "pipeline_name": "Lyftrondata_sys.tables",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "logs",
          "delta_fields": "logs",
          "source_table": "sys.log",
          "target_table": "sys.log",
          "pipeline_name": "Lyftrondata_sys.log",
          "trigger_fields": "logs",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.constraints",
          "target_table": "sys.constraints",
          "pipeline_name": "Lyftrondata_sys.constraints",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "method",
          "delta_fields": "method",
          "source_table": "sys.methods",
          "target_table": "sys.methods",
          "pipeline_name": "Lyftrondata_sys.methods",
          "trigger_fields": "method",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.delta",
          "target_table": "sys.delta",
          "pipeline_name": "Lyftrondata_sys.delta",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "total time spent",
          "delta_fields": "total time spent",
          "source_table": "sys.usage ",
          "target_table": "sys.usage ",
          "pipeline_name": "Lyftrondata_sys.usage ",
          "trigger_fields": "total time spent",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "version",
          "delta_fields": "version",
          "source_table": "sys.version ",
          "target_table": "sys.version ",
          "pipeline_name": "Lyftrondata_sys.version ",
          "trigger_fields": "version",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "licenseKey",
          "delta_fields": "licenseKey",
          "source_table": "sys.license ",
          "target_table": "sys.license ",
          "pipeline_name": "Lyftrondata_sys.license ",
          "trigger_fields": "licenseKey",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "target",
          "delta_fields": "target",
          "source_table": "sys.connectionstring ",
          "target_table": "sys.connectionstring ",
          "pipeline_name": "Lyftrondata_sys.connectionstring ",
          "trigger_fields": "target",
          "target_table_action": "truncate"
        }
      ],
      "sourceId": 9,
      "targetId": 17
    },
    {
      "id": 47,
      "created_by": {
        "id": 3,
        "email": "deenanath.vidyapremi+1@lyftrondata.com",
        "first_name": "Deenanath",
        "last_name": "Vidyapremi"
      },
      "updated_by": {
        "email": "",
        "first_name": "",
        "last_name": ""
      },
      "source": {
        "id": 9,
        "name": "Src_Lyftrondata_Fedex",
        "connection_type": "source",
        "logoURL": "fedex.png"
      },
      "target": {
        "id": 17,
        "name": "Warehouse Sql",
        "connection_type": "target",
        "logoURL": "sql.png"
      },
      "batchprocessed": 0,
      "pipelineprocessed": null,
      "recordprocessed": null,
      "created_at": "2021-06-05T18:33:23.534579Z",
      "updated_at": "2021-06-05T18:33:22.539657Z",
      "status": "In Progress",
      "version": "1.0",
      "name": "test 6",
      "startAt": "2021-06-03T23:58:00Z",
      "endAt": "2021-07-24T23:58:00Z",
      "lastExecuteAt": "2021-06-05T21:00:01.517511Z",
      "nextExecuteAt": "2021-06-05T22:00:01.517524Z",
      "frequency": "1hr",
      "pipeline": [
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "BillingWeightUnits",
          "delta_fields": "BillingWeightUnits",
          "source_table": "RatedPackage",
          "target_table": "RatedPackage",
          "pipeline_name": "Lyftrondata_RatedPackage",
          "trigger_fields": "BillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "totalBillingWeightUnits",
          "delta_fields": "totalBillingWeightUnits",
          "source_table": "ShipmentRateDetails",
          "target_table": "ShipmentRateDetails",
          "pipeline_name": "Lyftrondata_ShipmentRateDetails",
          "trigger_fields": "totalBillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "ServiceType",
          "delta_fields": "ServiceType",
          "source_table": "rate",
          "target_table": "rate",
          "pipeline_name": "Lyftrondata_rate",
          "trigger_fields": "ServiceType",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayofWeek",
          "delta_fields": "DayofWeek",
          "source_table": "NormalHours",
          "target_table": "NormalHours",
          "pipeline_name": "Lyftrondata_NormalHours",
          "trigger_fields": "DayofWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "CarrierDetails",
          "target_table": "CarrierDetails",
          "pipeline_name": "Lyftrondata_CarrierDetails",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "HoursForEffectiveDate",
          "target_table": "HoursForEffectiveDate",
          "pipeline_name": "Lyftrondata_HoursForEffectiveDate",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CarrierCode",
          "delta_fields": "CarrierCode",
          "source_table": "LocationCapabilities",
          "target_table": "LocationCapabilities",
          "pipeline_name": "Lyftrondata_LocationCapabilities",
          "trigger_fields": "CarrierCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DuplicateWaybill",
          "delta_fields": "DuplicateWaybill",
          "source_table": "track",
          "target_table": "track",
          "pipeline_name": "Lyftrondata_track",
          "trigger_fields": "DuplicateWaybill",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "LocationId",
          "delta_fields": "LocationId",
          "source_table": "LocationDescriptions",
          "target_table": "LocationDescriptions",
          "pipeline_name": "Lyftrondata_LocationDescriptions",
          "trigger_fields": "LocationId",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "postalcode",
          "target_table": "postalcode",
          "pipeline_name": "Lyftrondata_postalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "validatepostalcode",
          "target_table": "validatepostalcode",
          "pipeline_name": "Lyftrondata_validatepostalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": ""
            },
            {
              "group": "1",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": ""
            },
            {
              "group": "1",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": ""
            },
            {
              "group": "2",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": ""
            },
            {
              "group": "2",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "Service",
          "delta_fields": "Service",
          "source_table": "Deliverytime",
          "target_table": "Deliverytime",
          "pipeline_name": "Lyftrondata_Deliverytime",
          "trigger_fields": "Service",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "TotalResultsAvailable",
          "delta_fields": "TotalResultsAvailable",
          "source_table": "searchlocation",
          "target_table": "searchlocation",
          "pipeline_name": "Lyftrondata_searchlocation",
          "trigger_fields": "TotalResultsAvailable",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DistanceValue",
          "delta_fields": "DistanceValue",
          "source_table": "LocationDetails",
          "target_table": "LocationDetails",
          "pipeline_name": "Lyftrondata_LocationDetails",
          "trigger_fields": "DistanceValue",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.tables",
          "target_table": "sys.tables",
          "pipeline_name": "Lyftrondata_sys.tables",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "logs",
          "delta_fields": "logs",
          "source_table": "sys.log",
          "target_table": "sys.log",
          "pipeline_name": "Lyftrondata_sys.log",
          "trigger_fields": "logs",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.constraints",
          "target_table": "sys.constraints",
          "pipeline_name": "Lyftrondata_sys.constraints",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "method",
          "delta_fields": "method",
          "source_table": "sys.methods",
          "target_table": "sys.methods",
          "pipeline_name": "Lyftrondata_sys.methods",
          "trigger_fields": "method",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.delta",
          "target_table": "sys.delta",
          "pipeline_name": "Lyftrondata_sys.delta",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "total time spent",
          "delta_fields": "total time spent",
          "source_table": "sys.usage ",
          "target_table": "sys.usage ",
          "pipeline_name": "Lyftrondata_sys.usage ",
          "trigger_fields": "total time spent",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "version",
          "delta_fields": "version",
          "source_table": "sys.version ",
          "target_table": "sys.version ",
          "pipeline_name": "Lyftrondata_sys.version ",
          "trigger_fields": "version",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "licenseKey",
          "delta_fields": "licenseKey",
          "source_table": "sys.license ",
          "target_table": "sys.license ",
          "pipeline_name": "Lyftrondata_sys.license ",
          "trigger_fields": "licenseKey",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "target",
          "delta_fields": "target",
          "source_table": "sys.connectionstring ",
          "target_table": "sys.connectionstring ",
          "pipeline_name": "Lyftrondata_sys.connectionstring ",
          "trigger_fields": "target",
          "target_table_action": "truncate"
        }
      ],
      "sourceId": 9,
      "targetId": 17
    },
    {
      "id": 48,
      "created_by": {
        "id": 3,
        "email": "deenanath.vidyapremi+1@lyftrondata.com",
        "first_name": "Deenanath",
        "last_name": "Vidyapremi"
      },
      "updated_by": {
        "email": "",
        "first_name": "",
        "last_name": ""
      },
      "source": {
        "id": 9,
        "name": "Src_Lyftrondata_Fedex",
        "connection_type": "source",
        "logoURL": "fedex.png"
      },
      "target": {
        "id": 17,
        "name": "Warehouse Sql",
        "connection_type": "target",
        "logoURL": "sql.png"
      },
      "batchprocessed": 0,
      "pipelineprocessed": null,
      "recordprocessed": null,
      "created_at": "2021-06-05T18:38:40.966979Z",
      "updated_at": "2021-06-05T18:38:40.340409Z",
      "status": "In Progress",
      "version": "1.0",
      "name": "test 6",
      "startAt": "2021-06-03T23:58:00Z",
      "endAt": "2021-07-24T23:58:00Z",
      "lastExecuteAt": "2021-06-05T23:00:01.203306Z",
      "nextExecuteAt": "2021-06-06T00:00:01.203320Z",
      "frequency": "1hr",
      "pipeline": [
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "BillingWeightUnits",
          "delta_fields": "BillingWeightUnits",
          "source_table": "RatedPackage",
          "target_table": "RatedPackage",
          "pipeline_name": "Lyftrondata_RatedPackage",
          "trigger_fields": "BillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "totalBillingWeightUnits",
          "delta_fields": "totalBillingWeightUnits",
          "source_table": "ShipmentRateDetails",
          "target_table": "ShipmentRateDetails",
          "pipeline_name": "Lyftrondata_ShipmentRateDetails",
          "trigger_fields": "totalBillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": ""
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": ""
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": ""
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": ""
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": ""
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": ""
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": ""
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "ServiceType",
          "delta_fields": "ServiceType",
          "source_table": "rate",
          "target_table": "rate",
          "pipeline_name": "Lyftrondata_rate",
          "trigger_fields": "ServiceType",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayofWeek",
          "delta_fields": "DayofWeek",
          "source_table": "NormalHours",
          "target_table": "NormalHours",
          "pipeline_name": "Lyftrondata_NormalHours",
          "trigger_fields": "DayofWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "CarrierDetails",
          "target_table": "CarrierDetails",
          "pipeline_name": "Lyftrondata_CarrierDetails",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "HoursForEffectiveDate",
          "target_table": "HoursForEffectiveDate",
          "pipeline_name": "Lyftrondata_HoursForEffectiveDate",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CarrierCode",
          "delta_fields": "CarrierCode",
          "source_table": "LocationCapabilities",
          "target_table": "LocationCapabilities",
          "pipeline_name": "Lyftrondata_LocationCapabilities",
          "trigger_fields": "CarrierCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DuplicateWaybill",
          "delta_fields": "DuplicateWaybill",
          "source_table": "track",
          "target_table": "track",
          "pipeline_name": "Lyftrondata_track",
          "trigger_fields": "DuplicateWaybill",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "LocationId",
          "delta_fields": "LocationId",
          "source_table": "LocationDescriptions",
          "target_table": "LocationDescriptions",
          "pipeline_name": "Lyftrondata_LocationDescriptions",
          "trigger_fields": "LocationId",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "postalcode",
          "target_table": "postalcode",
          "pipeline_name": "Lyftrondata_postalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "validatepostalcode",
          "target_table": "validatepostalcode",
          "pipeline_name": "Lyftrondata_validatepostalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": ""
            },
            {
              "group": "1",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": ""
            },
            {
              "group": "1",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": ""
            },
            {
              "group": "1",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": ""
            },
            {
              "group": "2",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": ""
            },
            {
              "group": "2",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": ""
            },
            {
              "group": "2",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "Service",
          "delta_fields": "Service",
          "source_table": "Deliverytime",
          "target_table": "Deliverytime",
          "pipeline_name": "Lyftrondata_Deliverytime",
          "trigger_fields": "Service",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "TotalResultsAvailable",
          "delta_fields": "TotalResultsAvailable",
          "source_table": "searchlocation",
          "target_table": "searchlocation",
          "pipeline_name": "Lyftrondata_searchlocation",
          "trigger_fields": "TotalResultsAvailable",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DistanceValue",
          "delta_fields": "DistanceValue",
          "source_table": "LocationDetails",
          "target_table": "LocationDetails",
          "pipeline_name": "Lyftrondata_LocationDetails",
          "trigger_fields": "DistanceValue",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.tables",
          "target_table": "sys.tables",
          "pipeline_name": "Lyftrondata_sys.tables",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "logs",
          "delta_fields": "logs",
          "source_table": "sys.log",
          "target_table": "sys.log",
          "pipeline_name": "Lyftrondata_sys.log",
          "trigger_fields": "logs",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.constraints",
          "target_table": "sys.constraints",
          "pipeline_name": "Lyftrondata_sys.constraints",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "method",
          "delta_fields": "method",
          "source_table": "sys.methods",
          "target_table": "sys.methods",
          "pipeline_name": "Lyftrondata_sys.methods",
          "trigger_fields": "method",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.delta",
          "target_table": "sys.delta",
          "pipeline_name": "Lyftrondata_sys.delta",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "total time spent",
          "delta_fields": "total time spent",
          "source_table": "sys.usage ",
          "target_table": "sys.usage ",
          "pipeline_name": "Lyftrondata_sys.usage ",
          "trigger_fields": "total time spent",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "version",
          "delta_fields": "version",
          "source_table": "sys.version ",
          "target_table": "sys.version ",
          "pipeline_name": "Lyftrondata_sys.version ",
          "trigger_fields": "version",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "licenseKey",
          "delta_fields": "licenseKey",
          "source_table": "sys.license ",
          "target_table": "sys.license ",
          "pipeline_name": "Lyftrondata_sys.license ",
          "trigger_fields": "licenseKey",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "target",
          "delta_fields": "target",
          "source_table": "sys.connectionstring ",
          "target_table": "sys.connectionstring ",
          "pipeline_name": "Lyftrondata_sys.connectionstring ",
          "trigger_fields": "target",
          "target_table_action": "truncate"
        }
      ],
      "sourceId": 9,
      "targetId": 17
    },
    {
      "id": 52,
      "created_by": {
        "id": 3,
        "email": "deenanath.vidyapremi+1@lyftrondata.com",
        "first_name": "Deenanath",
        "last_name": "Vidyapremi"
      },
      "updated_by": {
        "email": "",
        "first_name": "",
        "last_name": ""
      },
      "source": {
        "id": 9,
        "name": "Src_Lyftrondata_Fedex",
        "connection_type": "source",
        "logoURL": "fedex.png"
      },
      "target": {
        "id": 17,
        "name": "Warehouse Sql",
        "connection_type": "target",
        "logoURL": "sql.png"
      },
      "batchprocessed": 1,
      "pipelineprocessed": 23,
      "recordprocessed": 924,
      "created_at": "2021-06-05T21:44:23.163761Z",
      "updated_at": "2021-06-05T21:44:22.537453Z",
      "status": "In Progress",
      "version": "1.0",
      "name": "Intg Demo",
      "startAt": "2021-06-04T03:13:00Z",
      "endAt": "2021-06-04T03:13:00Z",
      "lastExecuteAt": "2021-06-06T00:00:01.254624Z",
      "nextExecuteAt": "2021-06-06T01:00:01.254640Z",
      "frequency": "1hr",
      "pipeline": [
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "BillingWeightUnits",
          "delta_fields": "BillingWeightUnits",
          "source_table": "RatedPackage",
          "target_table": "RatedPackage",
          "pipeline_name": "Lyftrondata_RatedPackage",
          "trigger_fields": "BillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "totalBillingWeightUnits",
          "delta_fields": "totalBillingWeightUnits",
          "source_table": "ShipmentRateDetails",
          "target_table": "ShipmentRateDetails",
          "pipeline_name": "Lyftrondata_ShipmentRateDetails",
          "trigger_fields": "totalBillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "ServiceType",
          "delta_fields": "ServiceType",
          "source_table": "rate",
          "target_table": "rate",
          "pipeline_name": "Lyftrondata_rate",
          "trigger_fields": "ServiceType",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayofWeek",
          "delta_fields": "DayofWeek",
          "source_table": "NormalHours",
          "target_table": "NormalHours",
          "pipeline_name": "Lyftrondata_NormalHours",
          "trigger_fields": "DayofWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "CarrierDetails",
          "target_table": "CarrierDetails",
          "pipeline_name": "Lyftrondata_CarrierDetails",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "HoursForEffectiveDate",
          "target_table": "HoursForEffectiveDate",
          "pipeline_name": "Lyftrondata_HoursForEffectiveDate",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CarrierCode",
          "delta_fields": "CarrierCode",
          "source_table": "LocationCapabilities",
          "target_table": "LocationCapabilities",
          "pipeline_name": "Lyftrondata_LocationCapabilities",
          "trigger_fields": "CarrierCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DuplicateWaybill",
          "delta_fields": "DuplicateWaybill",
          "source_table": "track",
          "target_table": "track",
          "pipeline_name": "Lyftrondata_track",
          "trigger_fields": "DuplicateWaybill",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "LocationId",
          "delta_fields": "LocationId",
          "source_table": "LocationDescriptions",
          "target_table": "LocationDescriptions",
          "pipeline_name": "Lyftrondata_LocationDescriptions",
          "trigger_fields": "LocationId",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "postalcode",
          "target_table": "postalcode",
          "pipeline_name": "Lyftrondata_postalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "validatepostalcode",
          "target_table": "validatepostalcode",
          "pipeline_name": "Lyftrondata_validatepostalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "Service",
          "delta_fields": "Service",
          "source_table": "Deliverytime",
          "target_table": "Deliverytime",
          "pipeline_name": "Lyftrondata_Deliverytime",
          "trigger_fields": "Service",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "TotalResultsAvailable",
          "delta_fields": "TotalResultsAvailable",
          "source_table": "searchlocation",
          "target_table": "searchlocation",
          "pipeline_name": "Lyftrondata_searchlocation",
          "trigger_fields": "TotalResultsAvailable",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DistanceValue",
          "delta_fields": "DistanceValue",
          "source_table": "LocationDetails",
          "target_table": "LocationDetails",
          "pipeline_name": "Lyftrondata_LocationDetails",
          "trigger_fields": "DistanceValue",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.tables",
          "target_table": "sys.tables",
          "pipeline_name": "Lyftrondata_sys.tables",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "logs",
          "delta_fields": "logs",
          "source_table": "sys.log",
          "target_table": "sys.log",
          "pipeline_name": "Lyftrondata_sys.log",
          "trigger_fields": "logs",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.constraints",
          "target_table": "sys.constraints",
          "pipeline_name": "Lyftrondata_sys.constraints",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "method",
          "delta_fields": "method",
          "source_table": "sys.methods",
          "target_table": "sys.methods",
          "pipeline_name": "Lyftrondata_sys.methods",
          "trigger_fields": "method",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.delta",
          "target_table": "sys.delta",
          "pipeline_name": "Lyftrondata_sys.delta",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "total time spent",
          "delta_fields": "total time spent",
          "source_table": "sys.usage ",
          "target_table": "sys.usage ",
          "pipeline_name": "Lyftrondata_sys.usage ",
          "trigger_fields": "total time spent",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "version",
          "delta_fields": "version",
          "source_table": "sys.version ",
          "target_table": "sys.version ",
          "pipeline_name": "Lyftrondata_sys.version ",
          "trigger_fields": "version",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "licenseKey",
          "delta_fields": "licenseKey",
          "source_table": "sys.license ",
          "target_table": "sys.license ",
          "pipeline_name": "Lyftrondata_sys.license ",
          "trigger_fields": "licenseKey",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "target",
          "delta_fields": "target",
          "source_table": "sys.connectionstring ",
          "target_table": "sys.connectionstring ",
          "pipeline_name": "Lyftrondata_sys.connectionstring ",
          "trigger_fields": "target",
          "target_table_action": "truncate"
        }
      ],
      "sourceId": 9,
      "targetId": 17
    },
    {
      "id": 49,
      "created_by": {
        "id": 3,
        "email": "deenanath.vidyapremi+1@lyftrondata.com",
        "first_name": "Deenanath",
        "last_name": "Vidyapremi"
      },
      "updated_by": {
        "email": "",
        "first_name": "",
        "last_name": ""
      },
      "source": {
        "id": 9,
        "name": "Src_Lyftrondata_Fedex",
        "connection_type": "source",
        "logoURL": "fedex.png"
      },
      "target": {
        "id": 17,
        "name": "Warehouse Sql",
        "connection_type": "target",
        "logoURL": "sql.png"
      },
      "batchprocessed": 1,
      "pipelineprocessed": 23,
      "recordprocessed": 924,
      "created_at": "2021-06-05T18:49:52.169403Z",
      "updated_at": "2021-06-05T18:49:51.545301Z",
      "status": "In Progress",
      "version": "1.0",
      "name": "Test 8",
      "startAt": "2021-06-04T00:19:00Z",
      "endAt": "2021-06-27T00:19:00Z",
      "lastExecuteAt": "2021-06-06T01:00:01.281234Z",
      "nextExecuteAt": "2021-06-06T02:00:01.281256Z",
      "frequency": "1hr",
      "pipeline": [
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "BillingWeightUnits",
          "delta_fields": "BillingWeightUnits",
          "source_table": "RatedPackage",
          "target_table": "RatedPackage",
          "pipeline_name": "Lyftrondata_RatedPackage",
          "trigger_fields": "BillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "totalBillingWeightUnits",
          "delta_fields": "totalBillingWeightUnits",
          "source_table": "ShipmentRateDetails",
          "target_table": "ShipmentRateDetails",
          "pipeline_name": "Lyftrondata_ShipmentRateDetails",
          "trigger_fields": "totalBillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "ServiceType",
          "delta_fields": "ServiceType",
          "source_table": "rate",
          "target_table": "rate",
          "pipeline_name": "Lyftrondata_rate",
          "trigger_fields": "ServiceType",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayofWeek",
          "delta_fields": "DayofWeek",
          "source_table": "NormalHours",
          "target_table": "NormalHours",
          "pipeline_name": "Lyftrondata_NormalHours",
          "trigger_fields": "DayofWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "CarrierDetails",
          "target_table": "CarrierDetails",
          "pipeline_name": "Lyftrondata_CarrierDetails",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "HoursForEffectiveDate",
          "target_table": "HoursForEffectiveDate",
          "pipeline_name": "Lyftrondata_HoursForEffectiveDate",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CarrierCode",
          "delta_fields": "CarrierCode",
          "source_table": "LocationCapabilities",
          "target_table": "LocationCapabilities",
          "pipeline_name": "Lyftrondata_LocationCapabilities",
          "trigger_fields": "CarrierCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DuplicateWaybill",
          "delta_fields": "DuplicateWaybill",
          "source_table": "track",
          "target_table": "track",
          "pipeline_name": "Lyftrondata_track",
          "trigger_fields": "DuplicateWaybill",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "LocationId",
          "delta_fields": "LocationId",
          "source_table": "LocationDescriptions",
          "target_table": "LocationDescriptions",
          "pipeline_name": "Lyftrondata_LocationDescriptions",
          "trigger_fields": "LocationId",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "postalcode",
          "target_table": "postalcode",
          "pipeline_name": "Lyftrondata_postalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "validatepostalcode",
          "target_table": "validatepostalcode",
          "pipeline_name": "Lyftrondata_validatepostalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "Service",
          "delta_fields": "Service",
          "source_table": "Deliverytime",
          "target_table": "Deliverytime",
          "pipeline_name": "Lyftrondata_Deliverytime",
          "trigger_fields": "Service",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "TotalResultsAvailable",
          "delta_fields": "TotalResultsAvailable",
          "source_table": "searchlocation",
          "target_table": "searchlocation",
          "pipeline_name": "Lyftrondata_searchlocation",
          "trigger_fields": "TotalResultsAvailable",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DistanceValue",
          "delta_fields": "DistanceValue",
          "source_table": "LocationDetails",
          "target_table": "LocationDetails",
          "pipeline_name": "Lyftrondata_LocationDetails",
          "trigger_fields": "DistanceValue",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.tables",
          "target_table": "sys.tables",
          "pipeline_name": "Lyftrondata_sys.tables",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "logs",
          "delta_fields": "logs",
          "source_table": "sys.log",
          "target_table": "sys.log",
          "pipeline_name": "Lyftrondata_sys.log",
          "trigger_fields": "logs",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.constraints",
          "target_table": "sys.constraints",
          "pipeline_name": "Lyftrondata_sys.constraints",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "method",
          "delta_fields": "method",
          "source_table": "sys.methods",
          "target_table": "sys.methods",
          "pipeline_name": "Lyftrondata_sys.methods",
          "trigger_fields": "method",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.delta",
          "target_table": "sys.delta",
          "pipeline_name": "Lyftrondata_sys.delta",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "total time spent",
          "delta_fields": "total time spent",
          "source_table": "sys.usage ",
          "target_table": "sys.usage ",
          "pipeline_name": "Lyftrondata_sys.usage ",
          "trigger_fields": "total time spent",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "version",
          "delta_fields": "version",
          "source_table": "sys.version ",
          "target_table": "sys.version ",
          "pipeline_name": "Lyftrondata_sys.version ",
          "trigger_fields": "version",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "licenseKey",
          "delta_fields": "licenseKey",
          "source_table": "sys.license ",
          "target_table": "sys.license ",
          "pipeline_name": "Lyftrondata_sys.license ",
          "trigger_fields": "licenseKey",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "target",
          "delta_fields": "target",
          "source_table": "sys.connectionstring ",
          "target_table": "sys.connectionstring ",
          "pipeline_name": "Lyftrondata_sys.connectionstring ",
          "trigger_fields": "target",
          "target_table_action": "truncate"
        }
      ],
      "sourceId": 9,
      "targetId": 17
    },
    {
      "id": 50,
      "created_by": {
        "id": 3,
        "email": "deenanath.vidyapremi+1@lyftrondata.com",
        "first_name": "Deenanath",
        "last_name": "Vidyapremi"
      },
      "updated_by": {
        "email": "",
        "first_name": "",
        "last_name": ""
      },
      "source": {
        "id": 9,
        "name": "Src_Lyftrondata_Fedex",
        "connection_type": "source",
        "logoURL": "fedex.png"
      },
      "target": {
        "id": 17,
        "name": "Warehouse Sql",
        "connection_type": "target",
        "logoURL": "sql.png"
      },
      "batchprocessed": 1,
      "pipelineprocessed": 23,
      "recordprocessed": 924,
      "created_at": "2021-06-05T19:47:39.342998Z",
      "updated_at": "2021-06-05T19:47:39.256877Z",
      "status": "In Progress",
      "version": "1.0",
      "name": "test intg for create tables",
      "startAt": "2021-06-19T01:16:00Z",
      "endAt": "2021-06-18T01:16:00Z",
      "lastExecuteAt": "2021-06-06T02:00:01.364484Z",
      "nextExecuteAt": "2021-06-06T03:00:01.364499Z",
      "frequency": "1hr",
      "pipeline": [
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "RatedPackage",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "RatedPackage",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "RatedPackage",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "RatedPackage",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "RatedPackage",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "RatedPackage",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "RatedPackage",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "RatedPackage",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "RatedPackage",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "RatedPackage",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "RatedPackage",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "RatedPackage",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "BillingWeightUnits",
          "delta_fields": "BillingWeightUnits",
          "source_table": "RatedPackage",
          "target_table": "RatedPackage",
          "pipeline_name": "Lyftrondata_RatedPackage",
          "trigger_fields": "BillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "ShipmentRateDetails",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "ShipmentRateDetails",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "ShipmentRateDetails",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "ShipmentRateDetails",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "ShipmentRateDetails",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "ShipmentRateDetails",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "ShipmentRateDetails",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "ShipmentRateDetails",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "ShipmentRateDetails",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "ShipmentRateDetails",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "ShipmentRateDetails",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "ShipmentRateDetails",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "totalBillingWeightUnits",
          "delta_fields": "totalBillingWeightUnits",
          "source_table": "ShipmentRateDetails",
          "target_table": "ShipmentRateDetails",
          "pipeline_name": "Lyftrondata_ShipmentRateDetails",
          "trigger_fields": "totalBillingWeightUnits",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "dropofftype",
              "table": "rate",
              "value": "REGULAR_PICKUP",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "servicetype",
              "table": "rate",
              "value": "FEDEX_GROUND",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagingtype",
              "table": "rate",
              "value": "YOUR_PACKAGING",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperstate",
              "table": "rate",
              "value": "SC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shipperpostalcode",
              "table": "rate",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "shippercountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientstate",
              "table": "rate",
              "value": "NC",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientpostalcode",
              "table": "rate",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "recipientcountrycode",
              "table": "rate",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "paymenttype",
              "table": "rate",
              "value": "SENDER",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightvalue",
              "table": "rate",
              "value": "1",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "weightunit",
              "table": "rate",
              "value": "LB",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "physicalpackaging",
              "table": "rate",
              "value": "BOX",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "packagecount",
              "table": "rate",
              "value": "1",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "ServiceType",
          "delta_fields": "ServiceType",
          "source_table": "rate",
          "target_table": "rate",
          "pipeline_name": "Lyftrondata_rate",
          "trigger_fields": "ServiceType",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "NormalHours",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayofWeek",
          "delta_fields": "DayofWeek",
          "source_table": "NormalHours",
          "target_table": "NormalHours",
          "pipeline_name": "Lyftrondata_NormalHours",
          "trigger_fields": "DayofWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "CarrierDetails",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "CarrierDetails",
          "target_table": "CarrierDetails",
          "pipeline_name": "Lyftrondata_CarrierDetails",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "HoursForEffectiveDate",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DayOfWeek",
          "delta_fields": "DayOfWeek",
          "source_table": "HoursForEffectiveDate",
          "target_table": "HoursForEffectiveDate",
          "pipeline_name": "Lyftrondata_HoursForEffectiveDate",
          "trigger_fields": "DayOfWeek",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationCapabilities",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CarrierCode",
          "delta_fields": "CarrierCode",
          "source_table": "LocationCapabilities",
          "target_table": "LocationCapabilities",
          "pipeline_name": "Lyftrondata_LocationCapabilities",
          "trigger_fields": "CarrierCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            },
            {
              "group": "2",
              "param": "packageIdentifier",
              "table": "track",
              "value": "",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DuplicateWaybill",
          "delta_fields": "DuplicateWaybill",
          "source_table": "track",
          "target_table": "track",
          "pipeline_name": "Lyftrondata_track",
          "trigger_fields": "DuplicateWaybill",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDescriptions",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "LocationId",
          "delta_fields": "LocationId",
          "source_table": "LocationDescriptions",
          "target_table": "LocationDescriptions",
          "pipeline_name": "Lyftrondata_LocationDescriptions",
          "trigger_fields": "LocationId",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "postalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "postalcode",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "postalcode",
          "target_table": "postalcode",
          "pipeline_name": "Lyftrondata_postalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "validatepostalcode",
              "value": "29631",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "validatepostalcode",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "CountryCode",
          "delta_fields": "CountryCode",
          "source_table": "validatepostalcode",
          "target_table": "validatepostalcode",
          "pipeline_name": "Lyftrondata_validatepostalcode",
          "trigger_fields": "CountryCode",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "originpostalcode",
              "table": "Deliverytime",
              "value": "M5V 3A4",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "origincountrycode",
              "table": "Deliverytime",
              "value": "CA",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "destinationpostalcode",
              "table": "Deliverytime",
              "value": "27577",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "destinationcountrycode",
              "table": "Deliverytime",
              "value": "US",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "Service",
          "delta_fields": "Service",
          "source_table": "Deliverytime",
          "target_table": "Deliverytime",
          "pipeline_name": "Lyftrondata_Deliverytime",
          "trigger_fields": "Service",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "searchlocation",
              "value": "29631",
              "status": ""
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "searchlocation",
              "value": "US",
              "status": ""
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "TotalResultsAvailable",
          "delta_fields": "TotalResultsAvailable",
          "source_table": "searchlocation",
          "target_table": "searchlocation",
          "pipeline_name": "Lyftrondata_searchlocation",
          "trigger_fields": "TotalResultsAvailable",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [
            {
              "group": "1",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "1",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "postalcode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            },
            {
              "group": "2",
              "param": "countrycode",
              "table": "LocationDetails",
              "value": "",
              "status": "completed"
            }
          ],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "DistanceValue",
          "delta_fields": "DistanceValue",
          "source_table": "LocationDetails",
          "target_table": "LocationDetails",
          "pipeline_name": "Lyftrondata_LocationDetails",
          "trigger_fields": "DistanceValue",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.tables",
          "target_table": "sys.tables",
          "pipeline_name": "Lyftrondata_sys.tables",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "logs",
          "delta_fields": "logs",
          "source_table": "sys.log",
          "target_table": "sys.log",
          "pipeline_name": "Lyftrondata_sys.log",
          "trigger_fields": "logs",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.constraints",
          "target_table": "sys.constraints",
          "pipeline_name": "Lyftrondata_sys.constraints",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "method",
          "delta_fields": "method",
          "source_table": "sys.methods",
          "target_table": "sys.methods",
          "pipeline_name": "Lyftrondata_sys.methods",
          "trigger_fields": "method",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "tablename",
          "delta_fields": "tablename",
          "source_table": "sys.delta",
          "target_table": "sys.delta",
          "pipeline_name": "Lyftrondata_sys.delta",
          "trigger_fields": "tablename",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "total time spent",
          "delta_fields": "total time spent",
          "source_table": "sys.usage ",
          "target_table": "sys.usage ",
          "pipeline_name": "Lyftrondata_sys.usage ",
          "trigger_fields": "total time spent",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "version",
          "delta_fields": "version",
          "source_table": "sys.version ",
          "target_table": "sys.version ",
          "pipeline_name": "Lyftrondata_sys.version ",
          "trigger_fields": "version",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "licenseKey",
          "delta_fields": "licenseKey",
          "source_table": "sys.license ",
          "target_table": "sys.license ",
          "pipeline_name": "Lyftrondata_sys.license ",
          "trigger_fields": "licenseKey",
          "target_table_action": "truncate"
        },
        {
          "ID": 1,
          "check": false,
          "deltas": [
            "postalcode",
            "countrycode"
          ],
          "params": [],
          "load_action": "type2",
          "load_status": "Load",
          "natural_key": "target",
          "delta_fields": "target",
          "source_table": "sys.connectionstring ",
          "target_table": "sys.connectionstring ",
          "pipeline_name": "Lyftrondata_sys.connectionstring ",
          "trigger_fields": "target",
          "target_table_action": "truncate"
        }
      ],
      "sourceId": 9,
      "targetId": 17
    }
  ]