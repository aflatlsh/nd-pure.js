# simple-jgbp
Simple Normal Distribution for JS

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
// In fact the expectation always equals the median and the mode

X.variance // variance (σ²)
X.std // standard deviation (σ)

X.skewness // skewness = 0
X.kurtosis // kurtosis = 0

X.entropy // entropy (lnσ√{2πe})
```

### probability density function (pdf)
```js
X.pdf(x)
```

### cumulative distribution function (cdf)
```js
X.cdf(x)
```

### moment generating function (mgf)
```js
X.mgf(t)
```


