### **Transform Methods**

#### ucword(str)
Capitalize the first letter of the first word.

**Returns**: <code>string</code> - Returns the modified string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to capitalize. |

#### ucwords(str)
Capitalizes the first letter of every word.

**Returns**: <code>string</code> - Returns the capitalized string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to capitalize. |

#### lcword(str)
Make the first letter of the first word lowercase.

**Returns**: <code>string</code> - Returns the modified string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to modify. |

#### lcwords(str)
Make the first letters of each word lowercase.

**Returns**: <code>string</code> - Returns the modified string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to modify. |

#### wordwrap(str)
Wraps a string to a given number of characters.

**Returns**: <code>string</code> - Returns the wrapped string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to wrap. |

#### reverse(str)
Reverses a string.

**Returns**: <code>string</code> - Returns the reversed string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to reverse. |

#### ltrim(str)
Trim all whitespace from the beginning of a string.

**Returns**: <code>string</code> - Returns the string without whitespace at the beginning.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to remove whitespace from. |

#### rtrim(str)
Trim all whitespace from the end of a string.

**Returns**: <code>string</code> - Returns the string without whitespace at the end.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to remove whitespace from. |

#### money(amount, locale)
Formats a string into a representation of a type of currency.

Currently only US/GB is supported is supported but more will be added with later
updates.

**Returns**: <code>string</code> - Returns the amount in a string representing that locale's currency.  
**Version**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| amount | <code>string</code> \| <code>number</code> |  | The string or number that represents the money amount. |
| locale | <code>string</code> | <code>&quot;&#x27;US&#x27;&quot;</code> | The locale to use to format the currency. |

#### pad(str, sub, amount, side)
Pads a string with a substring on one or both sides.

**Returns**: <code>string</code> - Returns the padded string.  
**Version**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  | The string to pad. |
| sub | <code>string</code> |  | The substring to pad the string with. |
| amount | <code>number</code> | <code>1</code> | The amount of times to pad the string with the substring. |
| side | <code>string</code> | <code>&quot;&#x27;right&#x27;&quot;</code> | The side of the string to pad. The available options are left, right, or both.                                 If both is selected then the string will be padded evenly on both sides with the right                                being favored if the amount is not even. |

#### nl2br(str)
Replaces line endings in a string with `<br />` tags.

**Returns**: <code>string</code> - Returns the formatted string.  
**Version**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  | The string to format. |