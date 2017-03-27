# Change Log

## 1.4.0
**New feature:**
- Transfer attribute `hdir` for connection to point upwards or downwrads.

## 1.3.0
**New feature:**
- Transfer attributes `onover`, `onhover`, `onout`, `ondown` and `onup`
  from connection tag to generated hotspot.

## 1.2.2
**Fixes:**
- Fixed issue when arrows won't show up if events *onloadcomplete* or
  *onviewchanged* overwritten.

## 1.2.1
**Fixes:**
- Fixed issue when arrows won't show up if included outside the scene
  in multiple scenes xml file.

## 1.2.0
**New features:**
- Attribute *dropshadow* renamed to *shadow*.

## 1.1.0
**New features:**
- Implemented *dropshadow* boolean attribute to make shadow optional.
- Shadow shape *visible* attribute is now copied from its pointer shape
  if you make your arrow invisible its shadow also becomes invisible.

**Fixes:**
- Start shapes updates only after *onloadcomplete* event.
- No hand cursor on shadow shape.