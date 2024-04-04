use wasm_bindgen::prelude::*;

// import Javascript's alert method to Rust
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

// export Rust function fib to be used in JS/TS, the same function signature will be used in JS/TS
#[wasm_bindgen]
pub fn fib(n: i32) -> i32 {
    if n <= 0 {
          return 0;
    } else if n== 1{
          return 1;
} else {
    return fib (n-1)  + fib(n-2);
 }
}