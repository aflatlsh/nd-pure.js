# simple-jgbp
간단한 정규분포

## Get Started
```js
const N = require(PATH)
```

## Docs
### constructor(m, v)
```js
let X = new N(m, v);
```
`m` = expectation (μ)
`v` = variance (σ² > 0)

### properties
```js
X.expect // expectation (μ)
X.median // median
X.mode // mode
// In fact the expectation equals the median and the mode

X.variance // variance (σ²)
X.std // standard deviation (σ)

```
