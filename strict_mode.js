function useStrictMode() {
    'use strict';
    console.info(this); // In strict mode, this will be undefined
}

useStrictMode();