import React from 'react'




export const findTestbyAtrribute = (wrapper, attr) => {
     wrapper = wrapper.find(`[data-test='${attr}']`);
    return wrapper;
}