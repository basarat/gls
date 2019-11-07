# Changelog 

# 3.0.1
* Wraping container children in a `span` breaks in uncontrollable ways. So reverted that. Added explicit `Content` prop `wrapInSpan` and guidance.

## 3.0.0
* *Breaking*: Containers now wrap their children in a `span` ensuring a single flex child.
