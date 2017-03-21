import { WebGLRenderTarget } from './WebGLRenderTarget';

/**
 * @author Matt DesLauriers / @mattdesl
 */

 function WebGLMultisampleRenderTarget ( width, height, options ) {
    WebGLRenderTarget.call( this, width, height, options );

    this.samples = 4;
};

WebGLMultisampleRenderTarget.prototype = Object.create( WebGLRenderTarget.prototype );
WebGLMultisampleRenderTarget.prototype.constructor = WebGLMultisampleRenderTarget;

WebGLMultisampleRenderTarget.copy = function ( source ) {

    WebGLRenderTarget.prototype.copy.call( this, source );
    this.samples = source.samples;
    return this;

};

export {WebGLMultisampleRenderTarget};