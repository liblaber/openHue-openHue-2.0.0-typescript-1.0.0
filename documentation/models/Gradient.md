# Gradient

Basic feature containing gradient properties.

**Properties**

| Name   | Type                  | Required | Description                                                                                                                         |
| :----- | :-------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| points | Color[]               | ❌       | Collection of gradients points. For control of the gradient points through a PUT a minimum of 2 points need to be provided.         |
| mode   | SupportedGradientMode | ❌       | Mode in which the points are currently being deployed. If not provided during PUT/POST it will be defaulted to interpolated_palette |
