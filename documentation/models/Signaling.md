# Signaling

Feature containing basic signaling properties.

**Properties**

| Name     | Type    | Required | Description                                                                                                                                                                                                                                                                                           |
| :------- | :------ | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| signal   | Signal  | ❌       | - `no_signal`: No signal is active. Write “no_signal” to stop active signal.<br/>- `on_off`: Toggles between max brightness and Off in fixed color.<br/>- `on_off_color`: Toggles between off and max brightness with color provided.<br/>- `alternating`: Alternates between 2 provided colors.<br/> |
| duration | number  | ❌       | Duration has a max of 65534000 ms and a stepsize of 1 second.<br/>Values inbetween steps will be rounded.<br/>Duration is ignored for `no_signal`.<br/>                                                                                                                                               |
| color    | Color[] | ❌       | List of colors to apply to the signal (not supported by all signals)                                                                                                                                                                                                                                  |

# Signal

- `no_signal`: No signal is active. Write “no_signal” to stop active signal.<br/>- `on_off`: Toggles between max brightness and Off in fixed color.<br/>- `on_off_color`: Toggles between off and max brightness with color provided.<br/>- `alternating`: Alternates between 2 provided colors.<br/>

**Properties**

| Name         | Type   | Required | Description    |
| :----------- | :----- | :------- | :------------- |
| no_signal    | string | ✅       | "no_signal"    |
| on_off       | string | ✅       | "on_off"       |
| on_off_color | string | ✅       | "on_off_color" |
| alternating  | string | ✅       | "alternating"  |
