import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js";
const {useRef} = __commonjs_module0;
;
export default function useUpdatedRef(value) {
  var valueRef = useRef(value);
  valueRef.current = value;
  return valueRef;
}
