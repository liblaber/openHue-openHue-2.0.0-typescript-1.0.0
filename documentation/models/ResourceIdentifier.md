# ResourceIdentifier

**Properties**

| Name  | Type   | Required | Description                              |
| :---- | :----- | :------- | :--------------------------------------- |
| rid   | string | ❌       | The unique id of the referenced resource |
| rtype | Rtype  | ❌       | The type of the referenced resource      |

# Rtype

The type of the referenced resource

**Properties**

| Name                        | Type   | Required | Description                   |
| :-------------------------- | :----- | :------- | :---------------------------- |
| device                      | string | ✅       | "device"                      |
| bridge_home                 | string | ✅       | "bridge_home"                 |
| room                        | string | ✅       | "room"                        |
| zone                        | string | ✅       | "zone"                        |
| light                       | string | ✅       | "light"                       |
| button                      | string | ✅       | "button"                      |
| relative_rotary             | string | ✅       | "relative_rotary"             |
| temperature                 | string | ✅       | "temperature"                 |
| light_level                 | string | ✅       | "light_level"                 |
| motion                      | string | ✅       | "motion"                      |
| camera_motion               | string | ✅       | "camera_motion"               |
| entertainment               | string | ✅       | "entertainment"               |
| contact                     | string | ✅       | "contact"                     |
| tamper                      | string | ✅       | "tamper"                      |
| grouped_light               | string | ✅       | "grouped_light"               |
| device_power                | string | ✅       | "device_power"                |
| zigbee_bridge_connectivity  | string | ✅       | "zigbee_bridge_connectivity"  |
| zigbee_connectivity         | string | ✅       | "zigbee_connectivity"         |
| zgp_connectivity            | string | ✅       | "zgp_connectivity"            |
| bridge                      | string | ✅       | "bridge"                      |
| zigbee_device_discovery     | string | ✅       | "zigbee_device_discovery"     |
| homekit                     | string | ✅       | "homekit"                     |
| matter                      | string | ✅       | "matter"                      |
| matter_fabric               | string | ✅       | "matter_fabric"               |
| scene                       | string | ✅       | "scene"                       |
| entertainment_configuration | string | ✅       | "entertainment_configuration" |
| public_image                | string | ✅       | "public_image"                |
| auth_v1                     | string | ✅       | "auth_v1"                     |
| behavior_script             | string | ✅       | "behavior_script"             |
| behavior_instance           | string | ✅       | "behavior_instance"           |
| geofence                    | string | ✅       | "geofence"                    |
| geofence_client             | string | ✅       | "geofence_client"             |
| geolocation                 | string | ✅       | "geolocation"                 |
| smart_scene                 | string | ✅       | "smart_scene"                 |