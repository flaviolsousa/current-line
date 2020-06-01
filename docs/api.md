## Modules

<dl>
<dt><a href="#module_traceLine">traceLine</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#StackItem">StackItem</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="module_traceLine"></a>

## traceLine
**Example**  
```js
const traceLine = require('trace-line')
```

* [traceLine](#module_traceLine)
    * [TraceLine](#exp_module_traceLine--TraceLine) ⏏
        * [.get([level])](#module_traceLine--TraceLine+get) ⇒ [<code>StackItem</code>](#StackItem)
        * [.all()](#module_traceLine--TraceLine+all) ⇒ [<code>Array.&lt;StackItem&gt;</code>](#StackItem)

<a name="exp_module_traceLine--TraceLine"></a>

### TraceLine ⏏
**Kind**: Exported class  
<a name="module_traceLine--TraceLine+get"></a>

#### traceLine.get([level]) ⇒ [<code>StackItem</code>](#StackItem)
Returns a single item

**Kind**: instance method of [<code>TraceLine</code>](#exp_module_traceLine--TraceLine)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [level] | <code>number</code> | <code>0</code> | Useful to return levels up on the stack. If not informed, the first (0, zero index) element of the stack will be returned |

<a name="module_traceLine--TraceLine+all"></a>

#### traceLine.all() ⇒ [<code>Array.&lt;StackItem&gt;</code>](#StackItem)
Returns all stack

**Kind**: instance method of [<code>TraceLine</code>](#exp_module_traceLine--TraceLine)  
<a name="StackItem"></a>

## StackItem : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | Name of function on stack |
| line | <code>number</code> | Line number on stack |
| file | <code>string</code> | /PathOfFile/Source/NameOfFilename.js |
| filename | <code>string</code> | NameOfFile |

