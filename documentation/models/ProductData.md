# ProductData

**Properties**

| Name                 | Type             | Required | Description                                                          |
| :------------------- | :--------------- | :------- | :------------------------------------------------------------------- |
| modelId              | string           | ❌       | Unique identification of device model                                |
| manufacturerName     | string           | ❌       | Name of device manufacturer                                          |
| productName          | string           | ❌       | Name of the product                                                  |
| productArchetype     | ProductArchetype | ❌       | The default archetype given by manufacturer. Can be changed by user. |
| certified            | boolean          | ❌       | This device is Hue certified                                         |
| softwareVersion      | string           | ❌       | Software version of the product                                      |
| hardwarePlatformType | string           | ❌       | Hardware type; identified by Manufacturer code and ImageType         |