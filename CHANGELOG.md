# Change Log

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