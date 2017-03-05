/**
 * Converts a size from bytes to human readable size
 * kB,MB,GB,TB,PB,EB,ZB,YB
 *
 * @export
 * @param {any} a
 * @param {any} b
 * @param {any} c
 * @param {any} d
 * @param {any} e
 * @returns {string}
 */
export function fileSizeSI(a,b,c,d,e){
 return (b=Math,c=b.log,d=1e3,e=c(a)/c(d)|0,a/b.pow(d,e)).toFixed(2)
 +' '+(e?'kMGTPEZY'[--e]+'B':'Bytes')
}
