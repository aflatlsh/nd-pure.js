function erf(x) {
    // constants
    const a1 =  0.254829592,
        a2 = -0.284496736, 
        a3 =  1.421413741,
        a4 = -1.453152027,
        a5 =  1.061405429;
    
    const p  =  0.3275911;

    // Save the sign of x
    let sign = 1;
    if (x < 0) {
        sign = -1;
    }
    x = Math.abs(x);

    // A&S formula 7.1.26
    let t = 1.0/(1.0 + p*x);
    let y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);

    return sign*y;
}

class N {

    #m;
    #s;

    get median () {
        return this.#m;
    }

    get mode () {
        return this.#m;
    }

    skewness = 0;
    kurtosis = 0;

    get entropy () {
        return Math.log(this.#s*Math.sqrt(2*Math.PI*Math.E));
    }
    
    constructor (m, v) {
        this.expect = m;
        
        this.variance = v;
        this.std = Math.sqrt(v);
        
        this.#m = m;
        this.#s = this.stddev-0;
    }

    pdf (x) {
        return Math.exp(-((x-this.#m)**2)/(2*this.#s**2))/(this.#s*Math.sqrt(2*Math.PI));
    }

    cdf (x) {
        return 0.5*(1+erf((x-this.#m)/(this.#s*Math.SQRT2)));
    }

    mgf (t) {
        return Math.exp(this.#m*t + 0.5*(this.#s**2)*(t**2));
    }
}

module.exports = N;
